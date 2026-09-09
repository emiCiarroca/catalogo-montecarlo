# Montecarlos — catálogo de yerbas

Sitio one-page para la cooperativa yerbatera Montecarlos, hecho con Vite + React (JS).

## Cómo correrlo

```bash
npm install
npm run dev
```

## Estructura

```
src/
  components/
    Header.jsx      → navbar sticky, resalta la sección activa
    Hero.jsx         → banner principal con título e intro
    Historia.jsx     → línea de tiempo de la cooperativa
    Productos.jsx    → las 5 yerbas, cada una con su carrusel
    Carousel.jsx      → carrusel genérico (swipe, teclado, dots)
    ProductArt.jsx    → ilustraciones SVG de cada yerba (reemplazables por fotos)
    Contacto.jsx      → datos institucionales + formulario
    Footer.jsx        → footer institucional
  data/
    products.js       → info de las 5 yerbas (editá acá nombres, textos, etc.)
  index.css           → todo el sistema de diseño (colores, tipografía, animaciones)
```