Mi App de Películas en Next.js
Esta aplicación fue desarrollada utilizando Next.js (v13.3.0) y es muy similar a su contraparte en React Native y Expo. Permite a los usuarios explorar películas populares y recién estrenadas, obtener detalles de las películas y experimentar funciones adicionales como ajustar el tamaño del texto, cambiar entre modo claro/oscuro y leer en voz alta el texto en pantalla.

Requisitos
Node.js v18.15
npm
Dependencias
next (v13.3.0)
tailwindcss (v3.3.1)
typescript (v5.0.4)
dotenv (v16.0.3)
react-infinite-scroll-component (v6.1.0)
Instalación
Clone este repositorio en su máquina local.

Ejecute npm install para instalar las dependencias necesarias.

Cree un archivo .env en la carpeta raíz del proyecto y agregue la siguiente línea:
API_TOKEN=c2d1eba2da68e492d514141b781c25cf

Ejecute npm run dev para iniciar la aplicación.

Estructura del proyecto
La aplicación cuenta con un Layout que envuelve la aplicación y una Navbar que se renderiza en todas las páginas. Dentro de la aplicación, se encuentran dos componentes: PremieredMovies y PopularMovies.

PremieredMovies
Este componente toma datos desde la API en las páginas a través de props y renderiza las películas recién estrenadas.

PopularMovies
Este componente utiliza una función asincrónica con fetch para realizar la hidratación del componente según sea necesario, asegurándose de que no se repita ningún ID ya renderizado. Renderiza las películas populares utilizando la información obtenida a través de una petición a la API.

Al hacer clic en alguno de los elementos de estas páginas, se pasa a la siguiente página que es un componente que hace la llamada a la API según el params enviado por props. Esto le da acceso al número de ID de la película seleccionada y, a su vez, realiza un fetch a la API para pasar la información a sus subcomponentes BannerDetails, MovieInfo y CastDetails a través de los props.

Punto de entrada
El punto de entrada principal de la aplicación es app/page.tsx.