# bookurself_V2

BookUrSelf es un espacio literario que no solo podrá satisfacer lo que otras aplicaciones ya hacen: contrastar tus lecturas con las de los demás, intermediar ventas de libros a través ads, ofrecer contenido literario. Sino que, además, te permitirá ver el presente de la literatura como actividad de internet.
Podrás ver, de manera organizada, la data recogida a lo largo de la web. Ranking de los mejores valorados de forma histórica, o mensual, o semanal. Más vendidos en fechas determinadas; libros con más entradas en buscadores; autores o títulos trending del momento, y más.


# Proyecto de Autenticación y Navegación en Ionic

Este es un proyecto de una aplicación móvil construida con **Ionic Framework** y **Angular**, que permite a los usuarios iniciar sesión, acceder a rutas protegidas y gestionar su perfil dentro de la app. Utiliza **SQLite** para almacenar datos localmente y **AuthGuard** para proteger rutas que requieren autenticación.

## Características

- **Autenticación de usuario**: Los usuarios pueden iniciar sesión utilizando un correo electrónico y una contraseña.
- **Protección de rutas**: Las rutas como `home`, `tabs`, `perfil`, y `map` están protegidas mediante un **AuthGuard** que verifica si el usuario está autenticado.
- **Almacenamiento local**: Los datos del usuario (como el correo electrónico) se almacenan en el **LocalStorage** para mantener la sesión activa.
- **Navegación**: La aplicación utiliza la navegación basada en rutas, permitiendo un flujo sencillo entre páginas como `home`, `perfil`, `login`, `registro`, y más.

## Tecnologías usadas

- **Ionic Framework**: Para el desarrollo de la interfaz móvil.
- **Angular**: Como framework principal para la lógica y el manejo de rutas.
- **SQLite**: Para el almacenamiento de datos local en el dispositivo.
- **AuthGuard**: Para proteger rutas que requieren que el usuario esté autenticado.



## Rutas protegidas

Las siguientes rutas requieren que el usuario esté autenticado:

- `/home`
- `/tabs`
- `/perfil`
- `/map`

## Pruebas unitarias y e2e
Se han implememtado además, para distintas páginas del proyecto, pruebas unitarias a través de Jasmine y Karma, y pruebas e2e a través de Cypress.
- `/login`
- `/authguards`
- `/home`




