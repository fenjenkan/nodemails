const { success, notFound, toMany } = require('../response.js');
const nodemailer = require('nodemailer');
const path = require('path');
require("dotenv").config();


const sendMail = async (req, res) => {
    try {
        const { to, subject, body, attachment } = req.body;
        //elegir la cantidad de correos ha enviar en el arreglo
        if (to.length > 0 && to.length >= 4) {
            return toMany(res)
        } else {
            // create reusable transporter object using the default SMTP transport
            const transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                    user: process.env.USER,
                    pass: process.env.PASSWORD
                }
            });

            // Configurar el mensaje de correo electrónico
            const mailOptions = {
                from: {
                    name: 'Felipe Arevalo',
                    address: process.env.USER
                },
                to: to,
                subject: subject,
                text: body || '', // Si no hay cuerpo, enviar un correo vacío
                attachments: [
                    {
                        filename: 'test',
                        path: path.join(__dirname, '../docs/cvEsp.docx'), // se agrega el documento directamente, se puede cambiar la ruta con el documento que se desee (ejemplo): una vez cargado el documento desde una interfaz front end como uploder o alguna similar se puede extraer la ruta y pasarsea a la funsion desde la ruta en este caso la prueba es unicamente backend

                    }
                ]
            };

            try {
                // Enviar el correo electrónico
                const info = await transporter.sendMail(mailOptions);
                // Envía una respuesta de éxito
                return success(res, { message: '¡El correo electrónico ha sido enviado correctamente!' });
            } catch (error) {
                console.log(error);
            }
        }



    } catch (error) {
        // Si ocurre un error, manejarlo y devolver una respuesta de error
        console.error(error);
        return notFound(res, null, 'Ha ocurrido un error al enviar el correo electrónico.');
    }
};

module.exports = {
    sendMail
};