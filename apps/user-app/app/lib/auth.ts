import prisma from "@repo/db";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";

//interfaces 
type Credentials = {
  id: string;
  email: string;
  password: string;
  number: number;
  name?: string;
}

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "text", placeholder: "example@gmail.com" },
        password: { label: "Password", type: "password" },
        number: { label: "Number", type: "number" }
      },

      async authorize(credentials: any) {
        console.log(credentials);
        //to check the if the user exists in the database
        const user = await prisma.user.findFirst({
          where: {
            email: credentials.email,
            password: credentials.password,
          }
        })

        if (user) {
          return {
            id: user.id,
            email: user.email,
            number: user.number,
            name: user.name
          }
        } else {
          console.log("inside else");

          try {
            const newUser = await prisma.user.create({
              data: {
                email: credentials.email,
                password: credentials.password,
                number: credentials.number
              }
            })
            return {
              id: newUser.id,
              email: newUser.email,
              name: newUser.name,
              number: newUser.number
            }
          } catch (error) {
            console.log("error: ", error);

            return null;//to make the possibility of not sending anything in authorize go away by sending null
          }
        }

      }
    })
  ],

  secret: process.env.JWT_SECRET || "jwtsecret",
  callbacks: {
    async session({ token, session }: { token: JWT, session: any }) {
      session.user.id = token.sub;;
      return session;
    }
  }
}




