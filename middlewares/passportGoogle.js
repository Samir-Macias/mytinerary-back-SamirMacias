import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth";
import User from "../models/User.js";
import { urlencoded } from "express";

export default passport.use(
    new GoogleStrategy(
        {
            clientID : process.env.GOOGLE_CLIENT_ID,
            clientSecret : process.env.GOOGLE_CLIENT_SECRET,
            callbackUrl  : process.env.GOOGLE_URI_BACK
         },
         async (accesToken,refreshToken,profile,done) => {
            let user = await User.findOne({email: profile.emails[0].value})

            if(user){
                user = new User({
                    name : profile.name,
                    email : profile.email[0].value
                })
                await user.save()
            }
         }
    )
)