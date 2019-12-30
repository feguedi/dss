# Backend
En esta parte del proyecto se resuelven las peticiones que se harán a la base de datos.

## Instalación
Este proyecto corre con __[Node.js](https://nodejs.org)__, por lo tanto es necesario tenerlo instalado en nuestor servidor. Se sugiere que esta parte del proyecto se ejecute con la herramienta __[yarn](https://yarnpkg.com)__.

Para instalar todas las dependencias ejecutamos el siguiente comando:

`$ yarn install`

Para correr el servidor tenemos varias opciones, pero solo usaremos la opción de desarrollador:

`$ yarn run nodemon`

## API
Este servicio web solo responde a dos solicitudes HTTP.

## Diesel
### Solicitud
__GET__
> `/diesel`

### Respuesta
Arreglo de objetos con los valores de la base de datos. Ejemplo:
```javascript
[
    {
        ID: 1,
        FECHA: "2018-02-21",
        PRECIO: 19.8
    },
    // {...}
]
```
