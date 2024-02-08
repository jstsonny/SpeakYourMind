import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter"; // Corrected import path
import prisma from "../../../prisma/client"; // Adjust this import based on your file structure
import { NextAuthOptions } from "next-auth"; // Correct type import for NextAuth options

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "", // Fallback to empty string to avoid type error
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "", // Same as above
    }),
  ],
};

export default NextAuth(authOptions);