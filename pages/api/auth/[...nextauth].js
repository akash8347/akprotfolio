import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'


const allowedEmails = ["akashgohil.av@gmail.com","aakash.gohil@njgroup.in","subhamjha23@gmail.com"];
const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
  ],
   callbacks:{
    async signIn({profile}){
      
      if (!allowedEmails.includes(profile.email)) {
        // Reject the login attempt
        return false
    }

      // if(profile.email!="akashgohil.av@gmail.com".trim()){
      //   return false
      // }
      return true
    }
  },
  
  debug: false
}

export default (req, res) => NextAuth(req, res, options)
