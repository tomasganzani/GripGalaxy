// Server
import express from 'express';
import morgan from 'morgan';
import handlebars from 'express-handlebars';
import path from 'path';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import "./passport/jwt.js";

// Importaciones
import router from './routes/routes.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { initMongoDB } from './db/db.connection.js';
import { mongoStoreConfig } from './middlewares/mongoStore.js';

const app = express();

app.use(session(mongoStoreConfig));

app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(express.static(path.join(process.cwd(), 'public')));

app.engine("handlebars", handlebars.engine());
app.set("views", path.join(process.cwd(), "src", "views"));
app.set("view engine", "handlebars");

app.use(router)
app.use(errorHandler);

initMongoDB()
    .then(() => console.log("coenctado a mongodb"))
    .catch((error) => console.log(error));

app.listen(8080, () => {
    console.log(`Server running on port 8080`);
});
