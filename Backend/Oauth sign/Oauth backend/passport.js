const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID =
  "662572257876-e70ou1969un358eu35fj30ssdgnl1pr9.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

GITHUB_CLIENT_ID = "58e1a17bb51df3e82e0e";
GITHUB_CLIENT_SECRET = "34ac30aa94ea0d847a1a7c1756adeb9b196b99cf";

FACEBOOK_APP_ID = "229629873146780";
FACEBOOK_APP_SECRET = "c791f20756c23796f9a0aeb2541d4f13";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
