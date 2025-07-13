# Portfolio de Luis Miraglio - Desarrollador Full Stack

![Logo](https://img.shields.io/badge/Portfolio-Luis%20Miraglio-blue)
![Status](https://img.shields.io/badge/Status-Online-success)
![Deployment](https://img.shields.io/badge/Deployment-GitHub%20Pages-blue)

## 📋 Descripción

Portfolio profesional creado para mostrar mi trabajo como Desarrollador Full Stack y Especialista en Automatización de Redes FTTH. El sitio presenta mis proyectos, experiencia, certificaciones y habilidades técnicas en un diseño moderno y responsivo.

Sitio web desplegado: [luismiraglio.github.io/luismiraglio-portfolio](https://luismiraglio.github.io/luismiraglio-portfolio)

## ✨ Características Visuales

### Diseño y Estética

- **Diseño moderno**: Interfaz contemporánea con efectos de transición y animaciones suaves
- **Paleta de colores**: Combinación profesional de azules y verdes que reflejan tecnología
- **Tipografía**: Familia Poppins para una lectura clara y profesional
- **Responsivo**: Adaptación completa a dispositivos móviles, tablets y desktops
- **Animaciones**: Animaciones en scroll (AOS) para una experiencia interactiva
- **Partículas**: Fondo de partículas animadas en la sección Hero para un aspecto tecnológico
- **Tarjetas con efecto hover**: Interactividad visual al pasar el cursor
- **Degradados**: Uso de gradientes para botones y elementos destacados
- **Iconografía**: Integración completa con Font Awesome para iconos coherentes

### Elementos de Diseño Destacados

- Tarjeta con código simulado en la sección Hero
- Fondo de partículas interactivas 
- Indicador de scroll animado
- Tarjetas de proyectos con overlays de marca
- Etiquetas de habilidades con animación al hover
- Tarjetas de contacto con colores distintivos por plataforma
- Iframe para previsualización del CV

## 🛠 Características Funcionales

### Navegación y Estructura

- **Menú de navegación fijo**: Acceso constante a todas las secciones
- **Menú hamburguesa**: Navegación adaptada para dispositivos móviles
- **Scroll suave**: Navegación fluida entre secciones
- **Enlaces activos**: Indicador visual de la sección actual
- **Estructura organizada**: Disposición lógica de la información

### Secciones Principales

1. **Hero**: Presentación con animaciones y llamadas a la acción
2. **Sobre Mí**: Tarjetas con información profesional
3. **Proyectos**: Showcase de trabajos con enlaces a repositorios
4. **Servicios**: Oferta de servicios profesionales
5. **Curriculum**: Vista previa del CV con opción de descarga en PDF
6. **Certificados**: Listado de certificaciones con enlaces de verificación
7. **Habilidades**: Categorización de competencias técnicas
8. **Contacto**: Información de contacto con enlaces directos

### Funcionalidades Destacadas

- **Animaciones al scroll**: Elementos que aparecen animados al desplazarse
- **Efectos hover**: Interactividad visual en tarjetas y botones
- **Descarga de CV**: Opción para descargar curriculum en formato PDF
- **Enlaces externos**: Conexión con GitHub, LinkedIn y certificaciones
- **Previsualización embebida**: Iframe del CV en formato web
- **Menú adaptativo**: Funcionamiento específico para dispositivos móviles
- **Partículas interactivas**: Fondo dinámico que reacciona al movimiento

## 📁 Estructura del Proyecto

```
PortfolioDev/
├── index.html              # Archivo principal del sitio
├── css/                    # Estilos CSS
│   └── style.css           # Archivo principal de estilos
├── js/                     # Scripts JavaScript
│   └── script.js           # Funcionalidades interactivas del sitio
├── images/                 # Carpeta para imágenes (actualmente vacía)
├── cv/                     # Sección CV
│   └── index.html          # Página del CV en formato HTML
├── docs/                   # Documentos descargables
│   └── Luis-Miraglio-CV.pdf # CV en formato PDF
└── README.md               # Este archivo de documentación
```

## 🔧 Tecnologías Utilizadas

- **HTML5**: Estructura semántica del sitio
- **CSS3**: Estilos avanzados con variables CSS y flexbox/grid
- **JavaScript**: Interactividad y funcionalidades dinámicas
- **AOS (Animate On Scroll)**: Biblioteca para animaciones al desplazamiento
- **Particles.js**: Fondo interactivo de partículas
- **Font Awesome**: Iconografía profesional
- **Google Fonts (Poppins)**: Tipografía moderna y legible

## 🚀 Despliegue

El sitio está desplegado en GitHub Pages, lo que permite una visualización online constante y fácil actualización mediante commits al repositorio.

## ⚙️ Configuración y Uso Local

1. Clona este repositorio:
   ```
   git clone https://github.com/LuisMiraglio/luismiraglio-portfolio.git
   ```

2. Abre el archivo `index.html` en tu navegador para ver el sitio localmente

3. Para realizar cambios, edita los archivos HTML, CSS o JS según sea necesario

4. Para subir cambios al sitio publicado:
   ```
   git add .
   git commit -m "Descripción de los cambios"
   git push origin main
   ```

## 📝 Sugerencias de Mejora

### Mejoras Visuales

1. **Imágenes de Proyectos**: Añadir imágenes reales para cada proyecto en la carpeta `images/`
   - Actualmente se está usando `onerror` para manejar imágenes faltantes
   - Se recomienda usar capturas de pantalla reales de los proyectos

2. **Dark Mode**: Implementar un selector de tema claro/oscuro
   - Crear variables CSS alternativas para el tema oscuro
   - Añadir un toggle en la navegación
   - Guardar preferencia en localStorage

3. **Preloaders y Esqueletos**: Añadir estados de carga para mejorar UX
   - Implementar esqueletos de carga para secciones pesadas
   - Añadir un preloader general para el sitio

4. **Micro-interacciones**: Añadir pequeñas animaciones en elementos interactivos
   - Efectos en botones al hacer clic
   - Animaciones en tarjetas al interactuar

5. **Galería de Imágenes**: Para mostrar más capturas de los proyectos
   - Implementar un lightbox para visualizar imágenes grandes
   - Crear carruseles para múltiples imágenes por proyecto

### Mejoras Funcionales

1. **Formulario de Contacto Funcional**: Implementar un formulario real
   - Usar Formspree, Netlify Forms o EmailJS (compatibles con GitHub Pages)
   - Añadir validación de campos y mensajes de error/éxito

2. **Blog o Sección de Artículos**: Expandir el contenido profesional
   - Crear una sección de blog simple con artículos técnicos
   - Usar Markdown para facilitar la escritura de contenido

3. **Filtrado de Proyectos**: Permitir filtrar por tecnología o tipo
   - Añadir categorías a los proyectos
   - Implementar botones de filtrado con JavaScript

4. **Testimonios**: Sección para comentarios de clientes/colaboradores
   - Diseñar tarjetas de testimonios con foto y valoración
   - Implementar un carrusel para mostrarlos

5. **Localización/Idiomas**: Soporte para múltiples idiomas
   - Crear archivos JSON con traducciones
   - Implementar selector de idioma con JavaScript

### Optimizaciones Técnicas

1. **Optimización de Imágenes**:
   - Comprimir y optimizar todas las imágenes
   - Usar formatos modernos como WebP con fallbacks
   - Implementar carga lazy para mejorar rendimiento

2. **Módulos JavaScript**: Reorganizar código en módulos más mantenibles
   - Separar funcionalidades en archivos distintos
   - Usar importación de módulos ES6

3. **Integración de Build Tools**:
   - Configurar Webpack o Parcel para optimizar assets
   - Minificar CSS y JavaScript para producción

4. **PWA (Progressive Web App)**: Convertir el sitio en PWA
   - Añadir manifest.json
   - Implementar Service Worker para funcionamiento offline
   - Configurar iconos para instalación en dispositivos

5. **SEO y Accesibilidad**:
   - Mejorar metaetiquetas y descripciones
   - Asegurar contraste adecuado para textos
   - Verificar navegación por teclado y lectores de pantalla

### Consideraciones para GitHub Pages

GitHub Pages tiene algunas limitaciones a considerar:
- No soporta procesamiento backend (PHP, Node.js, etc.)
- Para formularios, deberás usar servicios de terceros
- El límite de tamaño del repositorio es de 1GB
- El límite de ancho de banda es de 100GB/mes

Para el formulario de contacto, servicios como Formspree o EmailJS son buenas alternativas que funcionan con GitHub Pages sin necesidad de backend.

## 📜 Licencia

© 2025 Luis Miraglio. Todos los derechos reservados.

## 📞 Contacto

- **Email**: soporteluisdev@gmail.com
- **LinkedIn**: [linkedin.com/in/luismiraglio](https://linkedin.com/in/luismiraglio)
- **GitHub**: [github.com/luismiraglio](https://github.com/luismiraglio)
