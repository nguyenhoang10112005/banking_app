"use server";

import { SignUpParams } from "@/types";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";
import { ID } from "node-appwrite";
import { parseStringify } from "../utils";

export const signIn = async () => {
    try {
        
    } catch (error) {
        console.log(error)
    }
}

export const signUp = async ( userData : SignUpParams) => {
    const {email, password} = userData
    const name = `${userData.firstName} ${userData.lastName}`
    try {
        const { account } = await createAdminClient();

    const newUserAccount = await account.create(ID.unique(), email, password, name);
    const session = await account.createEmailPasswordSession(email, password);

    cookies().set("appwrite-session", session.secret, {
        path: "/",
        httpOnly: true,
        sameSite: "strict",
        secure: true,
    });

    return parseStringify(newUserAccount)
    } catch (error) {
        console.log(error)
    }
}

export async function getLoggedInUser(  ) {
    try {
      const { account } = await createSessionClient();
      return await account.get()
    } catch (error) {
      return null;
    }
  }
  