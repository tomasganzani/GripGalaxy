import { createTransport } from "nodemailer";

import "dotenv/config";

export const emailService = createTransport({
    service: "gmail",
    secure: true,
    port: process.env.PORT,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.NODEMAIL_CLAVE
    }
})