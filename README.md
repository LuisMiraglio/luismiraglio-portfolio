# Luis Miraglio Portfolio

Portfolio personal de Luis Miraglio construido con Astro. El sitio presenta el perfil profesional, experiencia, stack técnico, certificaciones, CV y canales de contacto.

## Stack

- Astro 5
- CSS global propio
- Content Collections de Astro para certificaciones
- Sitemap con `@astrojs/sitemap`

## Estructura principal

```text
/
├── public/
│   ├── certs/              # PDFs de certificaciones
│   ├── cv/                 # CV en PDF
│   ├── images/social/      # Imagen Open Graph
│   └── scripts/            # JavaScript del lado cliente
├── src/
│   ├── components/         # Componentes Astro reutilizables
│   ├── content/certs/      # Certificaciones en Markdown
│   ├── layouts/            # Layout base con SEO
│   ├── pages/              # Páginas del sitio
│   └── styles/             # Estilos globales
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Comandos

Todos los comandos se ejecutan desde la raíz del repositorio:

| Comando | Acción |
| :-- | :-- |
| `npm install` | Instala las dependencias del proyecto |
| `npm run dev` | Inicia el servidor local de desarrollo |
| `npm run build` | Genera la versión de producción en `dist/` |
| `npm run preview` | Previsualiza el build de producción |
| `npm run astro -- --help` | Muestra ayuda de la CLI de Astro |

## Contenido editable

Las certificaciones se administran como archivos Markdown en `src/content/certs/`. Cada archivo incluye metadatos como título, institución, fecha, categoría, URL de credencial y si debe mostrarse como destacada.

## SEO y assets públicos

El layout base define metadatos SEO, Open Graph, Twitter Cards, canonical URL y JSON-LD de tipo `Person`. Los assets públicos se sirven desde `public/` y se referencian con rutas absolutas.
