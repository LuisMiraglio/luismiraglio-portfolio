# PortfolioDev — Luis Miraglio

<!-- Imagen de portada del portfolio -->
<p align="center">
  <img src="public/images/home.PNG" alt="Portfolio Luis Miraglio" width="600">
</p>

Sitio web personal y portfolio profesional de Luis Miraglio, Técnico Superior en Redes Informáticas y Desarrollador Full Stack. Presenta proyectos, certificaciones, servicios y experiencia en automatización, redes y desarrollo de software.

## Características principales

- **Landing page moderna** con animaciones AOS y partículas en el hero.
- **Secciones**: Sobre mí, Proyectos, Servicios, Curriculum, Certificados, Habilidades, Contacto.
- **Grid de proyectos** con tarjetas clickeables y modales accesibles.
- **Chatbot asistente** integrado en el hero para navegación rápida.
- **Menú responsive** con hamburguesa para dispositivos móviles.
- **Formulario de contacto** con feedback visual (demo).
- **Certificados y CV** descargables y visualizables online.
- **Habilidades técnicas** mostradas con íconos SVG.
- **Animaciones y efectos visuales** con AOS y Particles.js.

## Tecnologías utilizadas

- **Frontend**: HTML5, CSS3, SCSS, JavaScript
- **Animaciones**: [AOS](https://michalsnik.github.io/aos/), [Particles.js](https://vincentgarreau.com/particles.js/)
- **Íconos**: FontAwesome, SVG personalizados
- **Backend (proyectos)**: Python, Django, C#, SQL, Tkinter, Selenium, PyInstaller
- **DevOps y herramientas**: Git, GitHub, VS Code, Linux

## Estructura de carpetas
```
PortfolioDev/
├── public/                 # Sitio listo para publicar (assets estáticos)
│   ├── index.html
│   ├── assets/
│   ├── images/
│   ├── docs/
│   ├── cv/
│   ├── styles/
│   └── scripts/
├── src/                    # Código fuente editable
│   ├── pages/              # Páginas con includes
│   ├── components/         # Secciones HTML reutilizables
│   ├── layouts/            # Layout base
│   ├── data/               # JSON de proyectos/certificados
│   ├── styles/             # CSS base + secciones
│   └── scripts/            # JS modular
├── tools/                  # Scripts de build
└── README.md               # Este archivo de documentación
```

## Cómo trabajar el HTML organizado

1. Editá los bloques en `src/components/`.
2. Editá el layout en `src/layouts/base.html`.
3. Ejecutá el build para regenerar `public/index.html`:

```bash
node tools/build.js
```


## Licencia

© 2025 Luis Miraglio. Todos los derechos reservados.

## Contacto

- **Email**: soporteluisdev@gmail.com
- **LinkedIn**: [linkedin.com/in/luismiraglio](https://linkedin.com/in/luismiraglio)
- **GitHub**: [github.com/luismiraglio](https://github.com/luismiraglio)
