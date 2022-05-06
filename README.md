# MELI Challenge - Alejandro Polania G.
React 17.0.1
Express 1.27.0
Node 14.19.1
NPM 8.8.0

## Plan de Desarrollo
Luego de determinar las necesidades de la solución, se estableció un plan a alto nivel para estimar la complejidad y duración.

### Front
La primera tarea consistio en crear y configurar la estructura de los proyectos necesaria, junto con el stack de dependencias seleccionado. 
  * Proyecto react usando el starter create-react-app(react-scripts)
  * Configuracion JEST
  * Configuracion SASS
  * Instalacion de grid system (solamente) con Bootstrap 5.1

Luego se diseño la estructura y jerarquia de estilos  usando SCSS y la metodologia BEM (Block-Element-Modifier) para facilitar la organización en los archivos de estilos. asi mismo se establecio los layouts basicos a usarse.

Una vez diseñada la parte de layouts principales y estructura, se inicio con la maquetacion de los componentes react usando una aproximación basada en atomic design, la idea es descomponer los elementos en unos mas pequeños para facilitar la reutilizacion y escalabilidad en el ensamblaje de nuevas pantallas. Se ensamblo el header y la lista. posteriormente se maquetó la pantalla de detalle. 

 Luego se procede con la creacion de capa de servicio para consulta de API desde React. se usa Axios como libreria de apoyo para gestionar asincronia. Se implementa la logica de las vista ya ensambladas y se define el ruteo y navegacion de los diferentes componentes. Se implementan hooks y estado para manejar la data entrante del API y rellenar los componentes con la data pertinente. Se piensa en usar ContextAPI para manejar el estado global pero por la complejidad relativamente baja de los componentes se opta por usar callbacks sencillos para sincronizar la actualizacion de la busqeuda con la lista y los breadcrumbs. 

El manejo del query param en la lista supuso un poco de problema debido a que el router no detecta cuando el query despues de la URL cambia. esto tiene un efecto no deseado al intentar refrescar la url con una busqueda ya realizada. se penso en usar url params pero por tiempo se opto por una solucion temporal.  
 
 ### BACK
 
 Terminados los diseños se continuo con el API mock el cual esta incluido en el mismo proyecto. se consultaron los endpoints de MELI indicados y se extrajo la data de los APIs como se especificó en el diseño de los endpoints. se usó express para este proposito.
 


### Aspectos a Mejorar

por temas de tiempo algunos aspectos quedaron como puntos a mejorar, Se pueden  hacer refactors para mejorar codigo duplicado usando algunos hooks en los componentes, ademas de mejorar la segregacion entre presentacion y capa de servicio. asi mismo quedaron algunos temas a mejorar en la parte de estilos y maquetado poniendo mas atencion a la parte responsive para mejorar la experiencia en móvil asi como organizar mejor la jerarquia de estilos para maximizar la reutilización (usando recursos como mixins entre otros). Asi mismo una cobertura de pruebas por componente hubiera sido ideal con mas tiempo disponible. 
