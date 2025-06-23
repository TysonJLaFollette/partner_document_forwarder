import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import type { SessionStrategy } from "next-auth";

export const authOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    debug: true,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Call your custom login API here
        const res = await fetch("http://localhost:5087/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: credentials?.username,
            password: credentials?.password,
          }),
        });

        const user = await res.json();

        if (res.ok && user) {
          return {
            id: user.id,
            name: user.name,
            email: user.email,
        }; // Must return an object or null
        }

        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt" as SessionStrategy, // or 'database' if you store sessions in DB
  },
  pages: {
    signIn: "/login", // Optional: your custom login page
  },
  callbacks: {
  async jwt({ token, user }) {
    if (user) {
      token.id = user.id;
      token.email = user.email;
      token.name = user.name;
    }
    return token;
  },
  async session({ session, token }) {
    if (token) {
      session.user = {
        id: token.id,
        email: token.email,
        name: token.name,
      };
    }
    return session;
  },
},
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
