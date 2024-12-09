
import MongoStore from 'connect-mongo';
import "dotenv/config";

export const mongoStoreConfig = {
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_KEY,
        ttl: 60,
    }),
    secret: process.env.SECRET_KEY,
    cookie: { maxAge: 100000 },
    saveUninitialized: true,
    resave: false,
};
