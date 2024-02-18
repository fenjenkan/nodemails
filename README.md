1. debe tener instalado node js 18+
2. clonar el repositorio o descargar el archivo zip
3. utilizar la consola de tu sistema operativo o del editor de codigo, pocisionarse en el proyecto ./CORREOS y ejecutar el comando npm run install
4. ejecutar el proyecto con npm run dev
5. abrir programa postman o cualquier programa para probar APIs
6. con el metodo POST y este url http://localhost:3000/send-mail se debe enviar el siguente JSON  en el cuerpo de la peticion 
{
    "to": ["fenjenkan@gmail.com","serranotellezalejandra3@gmail.com"],
    "subject": "Asunto del correo",
    "body": "Cuerpo del correo"
    
}
7. Content-Type application/JSON
8. leer los comentarios del cosigo para entender el funcionamiento 
9. gracias 