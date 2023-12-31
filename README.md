# **💪 HW2 | Web Server - Integration**


<div align="center">

## **💻 RICK AND MORTY APP 💻**

</div>

## **📝 INTRODUCCIÓN**

Hasta este momento hemos construido una Single Page Aplication por el lado del Front-End. Ahora llego la hora de construir un servidor que nos permita realizar acciones y comunicar información a nuestra App.

En esta homework vamos a estructurar nuestro proyecto por el lado del Back-End, crear nuestro primer servidor y conectar Front-End con este.

<br />

---

## **📋 INSTRUCCIONES**

### **👩‍💻 EJERCICIO 1 | Estructuración**

Dirígete al directorio en el que tienes tu proyecto **`Rick & Morty`** y ábrelo en tu VSC.

1. En la raíz de tu proyecto crea una carpeta llamada **`Client`**. Todo el contenido trabajado durante el Módulo 2 guárdalo dentro de esta carpeta.

2. Crea una segunda carpeta al mismo nivel **`Server`**. Dentro de esta crea una carpeta con el nombre **src** y otra con el nombre **test**.

3. Dentro de la carpeta **src** crea lo siguiente:

   -  Un archivo llamado **`index.js`**.
   -  Una carpeta llamada **`controllers`**.
   -  Una carpeta llamada **`routes`**.
   -  Una carpeta llamada **`utils`**.

4. Copia el archivo [**data.js**](./data.js) que se encuentra en esta carpeta y pégalo dentro de tu pryecto en la carpeta **utils**.

</br >

---

### **👩‍💻 EJERCICIO 2 | Configuración**

En la carpeta raíz de tu Back-End tendrás que ejecutar el comando:

```bash
    npm init
```

De esta manera crearás un archivo **`package.json`**. En este solo deberás instalar la librería **nodemon** de la siguiente manera:

```bash
    npm install nodemon
```

Una vez hecho esto, dentro del objeto **scripts** tienes que dejar el script **`start`** de la siguiente manera:

```json
    "start": "nodemon ./src/index.js"
```

<br />

---

### **👩‍💻 EJERCICIO 3 | Servidor**

Dírigete al archivo llamado **`index.js`** que creaste en el ejercicio 1. Dentro de este deberás:

1. Importar **http** desde el módulo **`http`**.

2. A partir de **http** crea y levanta un servidor en el puerto **3001**.

3. Copia y pega la siguiente línea dentro del callback de tu servidor

   ```js
   res.setHeader('Access-Control-Allow-Origin', '*');
   ```

4. Crea un condicional que verfique si la **url** incluye el string "**`/rickandmorty/character`**". En el caso de que si lo haga deberás obtener el **id** del personaje que te llega por la **url**. Luego de obtener el **id**, búscalo dentro del archivo **`data.js`** (deberás importar el archivo). Ten en cuenta que el **id** de la url es un string, y los **id** de los personajes son números.

> [**NOTA**]: la url te llegará con la siguiente estructura. Ejemplo: **`/rickandmorty/character/:id`**. Piensa en una lógica que te permita obtener el **id** del final.

5. Envía como respuesta un JSON que contenga al personaje.

<br />

---

### **👩‍💻 EJERCICIO 4 | Front & Back**

1. Abre tu proyecto en la carpeta **`Client`** y dirígete al archivo **`App.js`** en el que realizarás un pequeño cambio.

2. Busca tu función **`onSearch`**. Deberás reemplazar la url a la que se le está haciendo la petición:

   -  **URL anitgua**: "**https://rickandmortyapi.com/api/character/${id}**".
   -  **URL por la que debes reemplazar**: "**http://localhost:3001/rickandmorty/character/${id}**".

3. Ahora dirígete a tu componente **`Detail`** . Aquí tienes un **`useEffect`** que también está haciendo una petición a la API, por lo que debemos hacer el mismo cambio que antes:

   -  **URL anitgua**: "**https://rickandmortyapi.com/api/character/${id}**".
   -  **URL por la que debes reemplazar**: "**http://localhost:3001/rickandmorty/character/${id}**".

> **[NOTA]:** recuerda agregar el **id** como parámetro al final.

<br />

---

### **👀 ¡COMPROBEMOS NUESTRO TRABAJO!**

Ahora comprobaremos que todo funciona correctamente. Para esto:

1. Abre dos terminales. En una deberás levantar tu proyecto del lado Front-End, y en la otra levantar tu proyecto en el lado Back-End.

2. Una vez que todo esté arriba, intenta utilizar tu aplicación. Trae personajes e ingresa a sus detalles para chequear que no haya ningún error.

> [**NOTA**]: solo podrás buscar a los personajes con id **1**, **2**, **3**, **4** y **5**, ya que estos son los que tienes guardados en tu archivo **`data.js`**.

</br >

<img src="./img/example.gif" alt="" />

npm install axios
npm i express

VARIABLES DE ENTORNO:
para usar .env
   - crear el archivo .env
      PASSWORD='password'
   - instalar dotenv: npm i dotenv
   - en el archivo donde se va a usar:
      Ej en users.js:
      require("dotenv").config();
      const { PASSWORD } = process.env;
      module.exports = [{ email: "ejemplo@gmail.com", password: PASSWORD }];

      TESTING
      Instala las siguientes dependencias en el package.json de tu servidor:

jest
supertest

npm install --save-dev jest supertest (para que se instale como dependencia)
si quiero desinstalar: npm uninstall jest supertest
Además, dentro del package.json deberás agregar el siguiente script:

   "test": "jest --detectOpenHandles --coverage"




PARA AUTENTIFICACION: JWT BCRYPT PASSPORT JS AUTH0


Para este error:
warning: in the working copy of 'Server/package-lock.json', LF will be replaced by CRLF the next time Git touches it
ejecuto:
   git config --global core.autocrlf false

    it("Si no encuentra un personaje para borrar, debe devolver todos los personajes", async () => {


SEQUALIZE

Lo primero que deberás hacer es instalar las siguientes dependencias en tu package.json:
npm i sequelize pg dotenv

CREATE DATABASE rickandmorty;
Puedes verificar que se haya creado correctamente con el comando: \l \c  rickandmorty
 \dt
 select * from "Favorites";
 \d "Favorites"
 (id, name, origin, status, image, species, gender)
 '579','Snake with Legs','Snake Planet','Alive','https://rickandmortyapi.com/api/character/avatar/579.jpeg','Animal','Male'

insert into "Users" (id,email, password) Values (1,'ejemplo@gmail.com', '1Password');

Dirígete a la raíz de tu proyecto Back-End. Allí deberás crea un archivo llamado .env. 

DB_USER=postgres
DB_PASSWORD= ---> // ¡Aquí va tu contraseña!
DB_HOST=localhost



para el deploy:
En el front modificar: app.js
// axios.defaults.baseURL = "http://localhost:3001/";
axios.defaults.baseURL = 'https://rickmorty-backend-k4l1-dev.fl0.io/';
En el back modificar 
+ .env
+ DB_connection:
   comentar para el deploy:
    dialectOptions: {
      ssl: {
        require: true, //habilitar certificado de seguridad
        rejectUnauthorized: false, //para evitar errores de certificado
      },
    },
