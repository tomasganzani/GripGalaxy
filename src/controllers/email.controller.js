import { emailService } from "../services/email.service.js";
export const sendEmail = async (req, res) => {
    try {
        const gmailConfiguration = {
            from: "8EYqS@example.com",
            to: "tomasg1223@outlook.com",
            subject: "Bienvenido!",
            html: "<h1>Bienvenido a GripGalaxy</h1>",
            attachments: [
                {
                    path: process.cwd() + "/src/controllers/texto.txt",
                    filename: "texto.txt"
                }
            ]
        };
        const response = await emailService.sendMail(gmailConfiguration);
        res.json(response);
    } catch (error) {
        console.log(error);
    }
}