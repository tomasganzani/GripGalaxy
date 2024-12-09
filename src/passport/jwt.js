import passport from "passport";
import { ExtractJwt, Strategy as JwtStrategy } from "passport-jwt";
import { userService } from "../services/user.services.js";
import "dotenv/config";

const verifyToken = async (jwt_payload, done) => {
    try {
        const user = await userService.getById(jwt_payload.id);
        if (!user) return done(null, false, { messages: "Usuario inexistente" });
        return done(null, jwt_payload);
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return done(null, false, { messages: "Token expirado" });
        }
        return done(error);
    }
};
const cookieExtractor = (req) => {
    return req.cookies ? req.cookies.token : null;
};

const strategyCookiesConfig = {
    jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
    secretOrKey: process.env.SECRET_KEY,
};

passport.use('jwtCookies', new JwtStrategy(strategyCookiesConfig, verifyToken));

passport.serializeUser((user, done) => {
    try {
        done(null, user._id);
    } catch (error) {
        done(error);
    }
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await userService.getById(id);
        return done(null, user);
    } catch (error) {
        done(error);
    }
});
