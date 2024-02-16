// passport.js
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});

// Facebook Strategy
passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:3000/auth/facebook/callback",
}, async (accessToken, refreshToken, profile, done) => {
    // Check if the user already exists in your database
    const existingUser = await User.findOne({ facebookId: profile.id });

    if (existingUser) {
        return done(null, existingUser);
    }

    // If not, create a new user
    const newUser = new User({
        username: profile.displayName,
        facebookId: profile.id,
        roles: ['user'], // Adjust roles as needed
    });

    await newUser.save();

    done(null, newUser);
}));

// Google Strategy
passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback",
}, async (accessToken, refreshToken, profile, done) => {
    // Check if the user already exists in your database
    const existingUser = await User.findOne({ googleId: profile.id });

    if (existingUser) {
        return done(null, existingUser);
    }

    // If not, create a new user
    const newUser = new User({
        username: profile.displayName,
        googleId: profile.id,
        roles: ['user'], // Adjust roles as needed
    });

    await newUser.save();

    done(null, newUser);
}));

module.exports = passport;
