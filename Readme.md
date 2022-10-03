## Objetivos del Proyecto

- Utilizando Node.js, Express y Sequelize desarrollar los endpoints para una API de un e-commerce.
## Comenzando

1. Instalar mysql y crear base de datos llamada `mi_ecommerce_4`.
2. Clonar el repositorio de GitHub.
3. Instalar las dependencias con `npm install`.
4. Crear un archivo .env dentro de la carpeta Mi-ecommerce para la conexión a la base de datos con la siguiente forma:

```
   DB_PASS= contraseña de usuario de mysql
   DB_USER= usuario de mysql
   DB_NAME= mi_ecommerce_4
   SECRETORPRIVATEKEY= clave secreta para la generación de JWT(a su elección)
   PORT= puerto en el que se va a escuchar
``` 

5. Correr el servidor con `npm start`.
6. Descomentar la línea 57 en el archivo server.js  `{ force: true }` en la primera ejecución del servidor para que cree las tablas y relaciones de la base de datos, luego volver a comentarla para que no se borren los datos cada vez que se ejecute/levante el servidor.

7. Realizar la carga de datos de prueba:
La carga de datos se puede realizar mediante una petición post a la ruta http://localhost:3000/api/v1/cargar, con el body vacío. 
Sino a través del swagger, corriendo la primera ruta documentada. Para ello debe ingresar a la ruta http://localhost:3000/api-docs/ por el navegador.
