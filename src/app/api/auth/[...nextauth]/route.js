import NextAuth from "next-auth"

export const authOption = {
    // Configure one or more authentication providers
    providers: [
      providers({
        clientId: process.env.GOOGLE_CLIENT_ID ,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
      
    ],
    pages:{
      signIn: "/signin",
      signOut: "/signout"
    }
  }

const handler = NextAuth(authOption);

export { handler as GET, handler as POST };

//tenho que conectar isso no google auth 