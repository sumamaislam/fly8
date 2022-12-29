import axios from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
// {"web":{"client_id":"690907715341-q1kh7ejudg8l38bhv1gdvhbtfsmtc570.apps.googleusercontent.com","project_id":"myproject-343507","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_secret":"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","redirect_uris":["http://localhost:30/api/auth/callback/google"],"javascript_origins":["http://localhost:30"]}}

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    // GoogleProvider({
    //     clientId: process.env.GOOGLE_CLIENT_ID,
    //     clientSecret: process.env.GOOGLE_CLIENT_SECRET
    //   }),
    // GithubProvider({
    //     clientId: process.env.GITHUB_ID,
    //     clientSecret: process.env.GITHUB_SECRET,
    //   }),
    CredentialsProvider({
      name: "credentials",
      async authorize(credentials) {
        try {
          const user = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}user/login`, credentials).then((response) => {
            // let authHeader = response.headers["authorization"];
            // let token = response.data.token["authorization"];
            let token = response.data.token;
            console.log("Hammad100",response)
            // let token = authHeader.substring(7, authHeader.length);
            console.log("hello10000ok",response.status)
            let data = { user: response.data.user, token };
            return data;
          });

          if (user) {
            return user;
          } else {
            return null;
          }
        } catch (e) {
          throw new Error("There was an error on user authentication");
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    jwt: true,
  },
  secret: process.env.JWT_SECRET,
  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user);
      console.log("Tokens", token);
      return token;
    },
    session: async ({ session, token }) => {
      session.user = token.user;
      return session;
    },
  },

  // ...add more providers here
});
