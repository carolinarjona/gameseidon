# Gameseidon
Gameseidon es un proyecto creado con **Node**, **JavaScript**, **HTML** y **CSS** por [Carolina Arjona Soler](https://github.com/carolinarjona) para las clases de Node de [Codehouse Academy](https://codehouse.academy/).
![alt text](https://i.postimg.cc/DZzzHg4g/logogameseidon.png "Logo Gameseidon")
### **El proyecto**:
Para realizar el proyecto hemos utilizado las siguientes dependencias:
- express-generator
- nodemon
- sequelize
- mysql2
- dotenv
### **Paso a paso**:
1. Creamos la configuración de la base de datos (`Gameseidon`) y su sincronización en la carpeta **config/** y creamos las variables de entorno en **.env** (además de cargarlas en *app.js*).
2. Creamos los modelos (tablas) necesarios para nuestro proyecto en **models/**. En este caso, hemos creado el modelo `Videogame.js`.
3. Creamos el repositorio `videogameRepository.js` que harán las consultas a la base de datos en **repositories/**. (Además, hemos creado alguna consulta que usaremos en el futuro, cuando mejoremos el proyecto, como *update*).
4. Creamos el servicio `videogamesServices.js` en **services/** para hacer de puente entre el repositorio y las rutas. Establecemos la lógica de negocio y las validaciones (¡que haremos también pronto!).
5. Por último, ultimamos `videogames.js` en **routes/** para crear las diferentes rutas necesarias para nuestro proyecto.
6. Hacemos las pruebas pertinentes en Postman para comprobar que todo funcione ¡y a por el HTML, CSS y JavaScript!
7. A partir de ahora, trabajaremos en la carpeta **public/**.
    - Iniciamos mejorando el HTML y el CSS del proyecto anterior.
    - Creamos una *class* de JavaScript para pasar algunas funciones estáticas que mejorarán nuestro código.
    - Creamos dos tipos de archivos JavaScript, el que será importado como *type="module"* y el propio *type=text/javascript* para una función concreta (tras experimentar algunos errores).
    - En `scripts.js` y `scripts2.js` creamos distintas funciones para que se vayan agregando los videojuegos, se puedan eliminar de la lista y sea más agradable la experiencia de usuario (damos cuenta de algunos errores, limpiamos los campos después de agregar un videojuego, etc.).
### **Siguientes pasos**:
- Realizar validaciones en el back con la librería Joi y que se alineen con las del front.
- Poner en práctica el uso de Json Web Token.
- Realizar trabajos en el *middleware* para controlar mejor los errores o realizar errores personalizados.
- ¡Refactorizar!

