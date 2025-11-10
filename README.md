# Cápsula Educativa: Continuidad y Límites

Esta es una cápsula educativa web interactiva sobre el Estándar 6: Continuidad y límites, diseñada para docentes de educación superior. Incluye video-quiz, evaluaciones y un mensaje de finalización.

## Características

- **Sin necesidad de compilación:** Este proyecto está construido con React y JavaScript puro (convertido desde TypeScript). Se ejecuta directamente en el navegador gracias a los `import maps` y CDNs, sin necesidad de un paso de `build` (como Vite o Webpack).
- **Interactivo:** Incluye videos con preguntas, evaluaciones formativas y una evaluación final.
- **Persistente:** Guarda el progreso del usuario en el `localStorage` del navegador.
- **Responsivo:** Diseñado para funcionar en diferentes tamaños de pantalla.

## Cómo Ejecutar Localmente

Como el proyecto ahora usa JavaScript estándar, ejecutarlo localmente es muy sencillo. Sin embargo, debido al uso de módulos de ES6 (`import`/`export`), no puedes simplemente abrir el archivo `index.html` desde tu explorador de archivos. Necesitas un servidor local.

Una forma fácil es usar la extensión **Live Server** en Visual Studio Code, aunque cualquier servidor web simple funcionará.

1.  Abre la carpeta del proyecto en Visual Studio Code.
2.  Si la tienes, haz clic derecho en el archivo `index.html` y selecciona "Open with Live Server".
3.  ¡Eso es todo! Se abrirá una nueva pestaña en tu navegador con la aplicación funcionando.

## Cómo Desplegar en GitHub Pages

Puedes publicar esta cápsula educativa de forma gratuita y sencilla utilizando GitHub Pages.

1.  **Crea un Repositorio en GitHub:** Si aún no lo has hecho, crea un nuevo repositorio en tu cuenta de GitHub.

2.  **Sube los Archivos del Proyecto:** Sube todos los archivos de este proyecto a tu nuevo repositorio. Asegúrate de que todos los archivos `.js` (previamente `.tsx`) estén incluidos.

3.  **Habilita GitHub Pages:**
    *   En tu repositorio de GitHub, ve a la pestaña **"Settings"** (Configuración).
    *   En el menú de la izquierda, selecciona **"Pages"**.
    *   En la sección "Build and deployment", bajo "Source", selecciona **"Deploy from a branch"**.
    *   En la sección "Branch", asegúrate de que tu rama principal (normalmente `main` o `master`) esté seleccionada.
    *   Deja la carpeta como **`/root`**.
    *   Haz clic en **"Save"**.

4.  **Espera la Publicación:** GitHub tardará uno o dos minutos en construir y desplegar tu sitio. Una vez que esté listo, verás una notificación verde en la parte superior de la sección de Pages con la URL de tu sitio publicado (algo como `https://TUNOMBREDEUSUARIO.github.io/TUNOMBREDEREPOSITORIO/`).

¡Listo! Tu cápsula educativa ahora está en línea y accesible para todos.