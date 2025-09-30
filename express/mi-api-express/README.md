# Mi API Express

Este proyecto es una API simple construida con Express en JavaScript. A continuación se detallan las instrucciones para instalar y ejecutar la API.

## Estructura del Proyecto

```
mi-api-express
├── src
│   ├── app.js
│   ├── controllers
│   │   └── index.js
│   ├── routes
│   │   └── index.js
│   └── types
│       └── index.js
├── package.json
└── README.md
```

## Paso a Paso para Crear la API

1. **Crear el directorio del proyecto**: Crea un nuevo directorio llamado `mi-api-express`.

2. **Inicializar el proyecto**: Navega al directorio y ejecuta `npm init -y` para crear un archivo `package.json` básico.

3. **Instalar dependencias**: Ejecuta `npm install express` para instalar Express.

4. **Crear la estructura de carpetas**: Crea las carpetas `src`, `controllers`, `routes` y `types` dentro de `src`.

5. **Crear el archivo `app.js`**: En `src/app.js`, configura la aplicación Express, incluyendo middleware y rutas.

6. **Crear el controlador**: En `src/controllers/index.js`, define la clase `IndexController` y su método `getIndex`.

7. **Configurar las rutas**: En `src/routes/index.js`, define la función `setRoutes` que utiliza el `IndexController`.

8. **Actualizar `package.json`**: Agrega scripts para iniciar la aplicación, como `"start": "node src/app.js"`.

9. **Crear el archivo `README.md`**: Documenta cómo usar la API, incluyendo ejemplos de solicitudes.

10. **Probar la API**: Ejecuta `npm start` y prueba la API usando herramientas como Postman o curl.

## Ejemplo de Uso

Una vez que la API esté en funcionamiento, puedes hacer una solicitud GET a la ruta raíz (`/`) para obtener una respuesta de prueba.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar este proyecto, siéntete libre de hacer un fork y enviar un pull request.