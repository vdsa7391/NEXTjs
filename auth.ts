  import NextAuth from "next-auth"

import GitHubProvider from 'next-auth/providers/github';
 
export const { handlers, auth, signIn, signOut } = NextAuth({
 
  providers: [
    GitHubProvider({
      clientId: process.env.AUTH_GIT_ID as string,
      clientSecret: process.env.AUTH_GIT_SECRET as string,
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : `${baseUrl}/`; // Redirect to a specified page after login
    },
    
  },
});

 




