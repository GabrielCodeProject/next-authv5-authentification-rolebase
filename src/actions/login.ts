"use server";

import * as z from "zod";
import { LoginSchema } from "../../schemas";
import { signIn } from "../../auth";
import { AuthError } from "next-auth";
import prisma from "@/lib/prisma";

export const login = async (data: z.infer<typeof LoginSchema>) => {
  console.log("login action data receive before parse:", data);

  const validatedData = LoginSchema.parse(data);
  console.log("validated data: ", validatedData);
  debugger;
  if (!validatedData) {
    return { error: "Invalid input data" };
  }
  const { email, password } = validatedData;

  const userExists = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });

  if (!userExists || !userExists.password || !userExists.email) {
    return { error: "User not found" };
  }

  console.log("user fetch from prisma data: ", userExists);
  try {
    await signIn("credentials", {
      email: userExists.email,
      password,
      redirectTo: "/",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin": {
          return { error: "Invalid credentials" };
        }
        default: {
          return { error: "Please confirm your email" };
        }
      }
    }
    throw error;
  }
  return { success: "User logged in successfully" };
};
