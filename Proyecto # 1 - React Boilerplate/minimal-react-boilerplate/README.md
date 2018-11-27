# minimal-react-boilerplate
Boilerplate para proyecto 1 de cc3034

Que es un boilerplate?

un framework HTML que permite construir aplicaciones y sitios Web responsive. En otras palabras, es un paquete de desarrollo que entrega al usuario varias soluciones que solo hace falta activar / desactivar para iniciar el proyecto Web.

## boilerplate vs create-react-app

create-react-app es una herramienta con la cual se crea la estructura de una aplicacion web de forma rapida e increiblemente rapida, s una herramienta de aprendizaje fantástica si empiezas desde cero porque toda la magia está oculta para tu vista, solo te concentras en Reaccionar y dejas que la aplicación-crear-reaccionar se haga cargo de los detalles.

Pero realmente es la mejor manera de aprender?
El problema es que muchas veces, no sabemos que es lo que esta pasando detras de esta magia, y cuando necesitamos tener este conocimiento se vuelve tedioso y doloroso.
por eso es buena idea empezar desde 0 con un boilerplate sencillo que uno configura segun las necesidades.

## Para este proyecto se decide desarrollar un boilerplate sencillo con las tecnologias, React, Webpack4, babel7, Express Web Server

-Babel
  Babel te permite escribir código con JavaScript, que aún no se admite en la mayoría de los navegadores. talvez has escuchado sobre 
  JavaScript ES6 (ES2015) y más allá. Con Babel, el código se volverá a compilar en JavaScript de vainilla para que todos los    
  navegadores, puedan interpretarlo sin tener implementadas todas las funciones de JavaScript ES6.
 
-Webpack
  Webpack nos permite modular nuestro código fácilmente y agruparlo en un solo archivo Javascript. Es compatible con numerosos
  complementos, y es probable que exista un complemento para casi cualquier tarea de compilación que se pueda imaginar.
  
 -Babel Loader
  Antes de poder ejecutar Webpack, necesitamos configurarlo para manejar el código ES6 y JSX

## Como utilizar este boilerplate
1. Descargar del repositorio
2. Instalar desde la consola dentro de la carpeta del boilerplate con el siguiente comando:
   ## npm install
   de aqui ya puedes utilizar este boilerplate para crear aplicaciones sencillas, para editarlo es necesario
   que empieces editando el index.js, agregues algunas clases de css para embellecer la aplicacion y dividir la estructura en lo que te    convenga.
3. Despues de la instalacion para correr el ejemplo use el comando:
   ## npm start 

## Estructura del folder
dist
  index.html
node_modules
src
  index.js
package.json
webpack.config.js

La estructura siempre puede variar dependiendo de las necesidades o gusto del programador, en lo personal me gusta mantener separadas los componentes de diseño a los de logica, por lo cual una estructura mas formal seria:
src
  components
    main (El componente que es responsable de la conmutación de la vista en función de la ruta.)
      main.jsx
      another.component
        component.jsx
          _component.scss
          _components.scss (Aquí se hace referencia a todos los .scss parciales definidos en diferentes componentes)
        views
          home.jsx (o puede ser un directorio de una vista)
            another.view
              another.view.jsx
              _another.view.scss
                _views.scss (all the .scss partials defined in different views are referenced here)
   index.scss (refers _components.scss, _views.scss and any other .scss partials)
   index.jsx (the entry point where the app renders the main component and which eventually renders the views
       based on selected route)
