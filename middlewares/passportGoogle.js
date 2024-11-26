import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../models/User.js";
import bcryptjs from "bcryptjs";

export default passport.use(
    new GoogleStrategy(
        {
            clientID : process.env.GOOGLE_CLIENT_ID,
            clientSecret : process.env.GOOGLE_CLIENT_SECRET,
            callbackUrl  : process.env.GOOGLE_URI_BACK
         },
         async (accesToken, refreshToken, profile, done) => {
            console.log(profile);

            try {
                
                let user = await User.findOne({ email: profile.emails[0].value })
                if (!user) {

                    const hashedPassword = bcryptjs.hashSync(
                        profile.id,
                        10
                    );                    
                    user = new User({
                        firstName: profile.name.givenName,
                        lastName: profile.name.familyName,
                        email: profile.emails[0].value,
                        password: hashedPassword,
                        photoUrl: profile.photos[0].value,
                        country: null,
                        online: false,
                    })
                    await user.save()
                }
                return done(null, user)

            } catch (error) {
                return done(error, null)
            }
       
         }
    )
)