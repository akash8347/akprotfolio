import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
  ],
   callbacks:{
    async signIn({profile}){
      if (user.email !== "akashgohil.av@gmail.com") {
        // Reject the login attempt
        return Promise.reject("Only users with email 'ak@gmail.com' are allowed to log in.");
    }

      if(profile.email!="akashgohil.av@gmail.com".trim()){
        return false
      }
      return Promise.resolve(true)
    }
  },
  
  debug: false
}

export default (req, res) => NextAuth(req, res, options)
