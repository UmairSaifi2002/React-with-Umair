import NextAuth from 'next-auth'
// import AppleProvider from 'next-auth/providers/apple'
// import FacebookProvider from 'next-auth/providers/facebook'
// import GoogleProvider from 'next-auth/providers/google'
// import EmailProvider from 'next-auth/providers/email'
import GitHubProvider from 'next-auth/providers/github'
import mongoose from 'mongoose'
import User from '@/models/User'
import payments from '@/models/Payments'

export const authoptions = NextAuth({
  providers: [
    // OAuth authentication providers...
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    // AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: process.env.APPLE_SECRET
    // }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_ID,
    //   clientSecret: process.env.FACEBOOK_SECRET
    // }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET
    // }),
    // // Passwordless / email sign in
    // EmailProvider({
    //   server: process.env.MAIL_SERVER,
    //   from: 'NextAuth.js <no-reply@example.com>'
    // }),
  ],
  callbacks: {
      async signIn({ user, account, profile, email, credentials }) {
        if(account.provider === 'github'){
          // return true
          const client = mongoose.connect()
          const userExists = User.findOne({ email: email })
          if (!userExists) {
            const newUser = await User.create({
              name: profile.name,
              email: email,
              image: profile.image,
              accountId: account.providerAccountId
            })
            await payments.create({ userId: newUser._id, amount: 0 })
          }
        }                                 
        return true                                  
      },
      // async redirect({ url, baseUrl }) {
      //   return baseUrl
      // },
      // async session({ session, user, token }) {
      //   const dbUser = await User.findOne({ email: session.user.email })
      //   console.log(dbUser)        
      //   session.user.name = dbUser.name
      //   return session
      // },
      // async jwt({ token, user, account, profile, isNewUser }) {
      //   return token
      // }
    },
})

export { authoptions as GET, authoptions as POST }
