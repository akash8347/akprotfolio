import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      profile(profile) {
        // Check if the email matches
        if (profile.email === "akashgohil.av@gmail.com") {
          // If it matches, return the profile
          return {
            id: profile.id,
            name: profile.name,
            email: profile.email,
            image: profile.image,
          };
        } else {
          // If it doesn't match, return null
          return null;
        }
      }
    }),
    
  ],
  callbacks:{
    async signIn(profile){
      if(profile.email!="akashgohil.av@gmail.com"){
        return false
      }
      return true
    }
  },
  
  debug: false
}

export default (req, res) => NextAuth(req, res, options)
