bookurself_V2
BookUrSelf es un espacio literario que no solo satisface lo que otras aplicaciones ya hacen: contrastar tus lecturas con las de los demás, intermediar ventas de libros a través de anuncios, y ofrecer contenido literario. Sino que, además, te permitirá explorar el presente de la literatura como una actividad de internet.
Podrás ver, de manera organizada, la data recogida a lo largo de la web: rankings de los mejores valorados histórica, mensual o semanalmente; los más vendidos en fechas determinadas; libros con más entradas en buscadores; autores o títulos trending del momento, y mucho más.

Proyecto de Autenticación, Navegación y Funcionalidades Interactivas
Este proyecto es una aplicación móvil construida con Ionic Framework y Angular, que permite a los usuarios iniciar sesión, acceder a rutas protegidas, gestionar su perfil, y disfrutar de una experiencia personalizada basada en sus intereses literarios. La aplicación utiliza SQLite para almacenar datos localmente, mientras que AuthGuard protege las rutas que requieren autenticación. Además, se conecta a una API de terceros para alimentar buscadores literarios y almacenar las preferencias del usuario (lecturas, planes y contenido).

La aplicación también integra funcionalidades avanzadas como geolocalización y cámara, mejorando la interacción del usuario con el entorno literario.

Características principales
Autenticación de usuario: Inicio de sesión mediante correo electrónico y contraseña.
Protección de rutas: Rutas como home, tabs, perfil, y map están protegidas con AuthGuard, verificando la autenticación del usuario.
Almacenamiento local: Uso de SQLite para datos críticos, como preferencias literarias y credenciales.
Navegación optimizada: Flujo sencillo entre páginas como home, perfil, login, registro, y más.
Buscador inteligente: La integración con una API externa permite realizar búsquedas literarias dinámicas y recibir contenido actualizado como libros trending, autores destacados, y más.
Geolocalización: Uso del módulo de geolocalización para interactuar con ubicaciones en mapas, como librerías y eventos literarios cercanos.
Cámara: Funcionalidad de captura de imágenes para complementar el perfil de usuario o reseñas literarias.
Interactividad avanzada: Elementos clicables en la aplicación redirigen a URLs relevantes para los usuarios.
Íconos personalizados: Implementación de íconos únicos para mejorar la experiencia visual del usuario.
Tecnologías usadas
Ionic Framework: Para el desarrollo de la interfaz móvil.
Angular: Framework principal para la lógica y el manejo de rutas.
SQLite: Para el almacenamiento de datos local en el dispositivo.
AuthGuard: Para proteger rutas que requieren autenticación.
Capacitor Plugins: Para integrar funcionalidades como geolocalización y cámara.
Rutas protegidas
Las siguientes rutas requieren autenticación:

/home
/tabs
/perfil
/map
Pruebas unitarias y e2e
Se han implementado pruebas unitarias y de extremo a extremo (e2e) para garantizar la estabilidad de la aplicación:

Pruebas unitarias: Utilizando Jasmine y Karma para verificar la lógica de las páginas.
Pruebas e2e: Con Cypress, simulando interacciones reales del usuario.
Páginas cubiertas:
/login
/authguards
/home
/map
/perfil
Cambios recientes
API de buscadores: Ahora la app utiliza una API para alimentar el contenido del buscador literario.
Geolocalización: Se incorporó geolocalización para mostrar ubicaciones relevantes como librerías en el mapa.
Cámara: La funcionalidad de cámara fue añadida, permitiendo a los usuarios tomar y almacenar imágenes.
Íconos personalizados: La interfaz se actualizó con íconos únicos y acordes al diseño general.
Optimización general: Mejoras en la navegación y en la experiencia del usuario.


