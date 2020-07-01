## React properties visualization
### Integrantes
1. Lizeth Daniela Castellanos Alfonso - ldcastellanosa@unal.edu.co
2. Camilo Alejandro Sanchez Cruz - caasanchezcr@unal.edu.co

### Descripción
Este proyecto consiste en un visualizador gráfico de jerarquía y propiedades de componentes de ReactJS. Consiste en dos partes: Backend (desarrollado en Express) y Frontend (desarrollado en ReactJS). La generación del gráfico se logra por medio del procesamiento del código de los archivos de entrada por medio de la herramienta ANTLR (v4) y de interacciones entre el backend y el frontend.

El proyecto usa una gramática propia dirigida completamente a componentes de react en formato hook, cuyas propiedades están tipeadas por la librería PropTypes. La razón de la creación de una gramática propia es debido a la falta de una gramática estable de JSX en los repositorios oficiales de antlr4. Debido a esto, los archivos aceptados están restringidos a la sintaxis y semántica aceptada por la gramática.

La gramática utilizada se encuentra en la ruta `backend/gramatica/React.g4`.

### Como usar

Para poder ejecutar el proyecto se deben tener instaladas las siguientes tecnologías:

* Node
* NPM

Luego se debe ejecutar el siguiente comando en las carpetas `frontend` y `backend`

`npm install`

Luego se debe ejecutar el servidor backend, para esto se debe ejecutar el siguiente comando en la carpeta `backend` 

`nodemon server.js`

Luego se debe ejecutar el cliente reactJS, para esto se debe ejecutar en otra consola el siguiente comando en la carpeta `frontend`

`npm start`

Luego, en la url http://localhost:3000/ debe encontrarse la interfaz visual ya funcionando y a la espera de ser ingresados los archivos.

Para que sean procesados los archivos debe hacerse click en el botón "Choose files", seleccionar los archivos que contienen los componentes de React y hacer click en "Upload". Es importante anotar que debe existir un único componente por archivo.