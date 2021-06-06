# map-markers_React



Mapa de google maps con diseño responsive.
Buscador con sugerencias.
Se van creando marcadores conforme se van seleccionando lugares.

///////////////

 Como instalar y ejecutar:
 
1. Descarga y descomprime el proyecto.
2. 2.Ejecute cmd y situaté dentro del directorio.
3. Una vez dentro de map-markers_React-main, escribe npm install para instalar todas las dependencias/ node-modules.
4. Una vez termine el proceso, solo falta escribir npm start.
5. Esto ejecutará el navegador y abrira el proyecto en localhost:3000.

//////////////////////

Explicación de la solución implementada:

El proyecto contiene una apiKey de googleMaps para el funcionamiento de los servicios de google, esta incluida en src/keyGoogleMaps.js
Incluye un test para comprobar que funciona correctamente.
Si deja de funcionar, cambiar la apiKey por una vuestra.
--
Al seleccionar un lugar en el mapa, se envía una peticióin a google con el lugar.
Mediante un servicio que ofrecen de geocoding devuelve las coordenadas.
Estas se guardan en un array de objetos en redux y a su ves se van visualizando en el mapa.
Cada marcador tiene un callback asociado al hacer click para poder añadir acciones en el fúturo.
--
El servicio de google devuelve más datos como las fotos asociadas a ese lugar y otros detalles.
LA aplicación podría escalar a funcionalidades como guardar lugares favoritos con sus fotos para consultar después de manera rápida,
compartir restaurantes favoritos o descubrir lugares misteriosos junto con otros usuarios. 


<div classname="center">
<img src="https://i.ibb.co/rw3tXXW/pruebafront.jpg" >
</div>
