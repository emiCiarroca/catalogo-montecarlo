# Montecarlos — Catálogo de Productos

**Sitio web institucional de la Cooperativa Agrícola Mixta de Montecarlo Limitada**, con el
catálogo completo de sus líneas de yerba mate y fécula de mandioca.

Documento de presentación técnica y funcional del proyecto.

---

## 1. Resumen ejecutivo

Este proyecto es un sitio web de una sola página (*one-page*) desarrollado para presentar a
la cooperativa y su catálogo completo de productos ante clientes, distribuidores y
visitantes.

El objetivo es dar a la cooperativa una presencia digital propia, coherente con su historia
de casi un siglo de asociativismo, que permita:

- Contar la historia real de la cooperativa, fundada en 1930 en Montecarlo, Misiones.
- Exhibir las cuatro líneas de productos (Aguantadora, Sinceridad, Pampa y Fécula de
  Mandioca) con el detalle completo de cada presentación y formato disponible.
- Recibir consultas y pedidos a través de un formulario de contacto.
- Proyectar una imagen profesional y cuidada, sin depender de redes sociales de terceros.

El sitio está terminado, es funcional y puede visualizarse localmente siguiendo los pasos
de la sección 5. No requiere pagos de licencias ni servicios externos para funcionar.

---

## 2. Características principales

| Sección | Contenido |
|---|---|
| **Encabezado** | Marca de la cooperativa y menú de navegación fijo, que resalta la sección que se está viendo. |
| **Portada (Hero)** | Título de presentación, resumen institucional y cifras destacadas (socios, líneas de productos, año de fundación). |
| **Historia** | Línea de tiempo con los hitos reales de la cooperativa: el inicio del cultivo de yerba en 1926, la fundación en 1930 con 72 socios, y su desarrollo hasta hoy. |
| **Productos** | Las 4 líneas del catálogo (Aguantadora, Sinceridad, Pampa y Fécula de Mandioca), cada una con un carrusel de imágenes navegable y una tabla completa con **todas** las presentaciones y formatos disponibles. |
| **Contacto** | Dirección, correo, teléfono, redes sociales y formulario de contacto. |
| **Pie de página** | Navegación, datos institucionales y créditos. |

**Aspectos técnicos destacados:**

- Diseño 100% adaptable a celulares, tablets y computadoras.
- Animaciones suaves y sobrias al navegar y al interactuar con botones y carruseles.
- Pensado para personas con distintas capacidades (navegación por teclado, texto legible, se respetan las preferencias de accesibilidad del sistema operativo).
- Sin dependencias de pago ni servicios externos: se puede alojar en cualquier hosting estándar.

---

## 3. Stack tecnológico

| Tecnología | Uso |
|---|---|
| [React](https://react.dev/) | Librería para construir la interfaz por componentes. |
| [Vite](https://vitejs.dev/) | Herramienta de desarrollo y empaquetado del sitio. |
| JavaScript (ES6+) | Lenguaje de programación del proyecto. |
| CSS3 | Estilos, animaciones y diseño adaptable, sin librerías externas de diseño. |

No se utilizan bases de datos ni servidores propios: es un sitio estático, liviano y de
carga rápida, ideal para este tipo de presentación institucional.

---

## 4. Estructura del proyecto

```
montecarlos-yerbas/
├── index.html                 → Punto de entrada del sitio
├── package.json                → Dependencias y comandos del proyecto
├── src/
│   ├── App.jsx                 → Ensambla todas las secciones del sitio
│   ├── index.css                → Paleta de colores, tipografía y estilos generales
│   ├── components/
│   │   ├── Header.jsx           → Encabezado y menú de navegación
│   │   ├── Hero.jsx             → Portada principal
│   │   ├── Historia.jsx         → Sección de historia institucional
│   │   ├── Productos.jsx        → Catálogo de las 4 líneas de productos
│   │   ├── Carousel.jsx         → Carrusel de imágenes reutilizable
│   │   ├── ProductImage.jsx     → Muestra la foto de cada producto (o un aviso si falta)
│   │   ├── Contacto.jsx         → Formulario y datos de contacto
│   │   ├── Footer.jsx           → Pie de página institucional
│   │   └── Reveal.jsx           → Efecto de aparición suave al scrollear
│   └── data/
│       └── products.js          → Textos, presentaciones y fotos de cada línea (editable)
├── public/
│   └── assets/
│       └── README.md            → Nombres exactos de archivo que deben tener las fotos
└── README.md                    → Este documento
```

---

## 5. Cómo ejecutar el proyecto

Se necesita tener instalado [Node.js](https://nodejs.org/) (versión 18 o superior).

**Paso 1 — Instalar las dependencias** (solo la primera vez):

```bash
npm install
```

**Paso 2 — Iniciar el sitio en modo de vista previa:**

```bash
npm run dev
```

La terminal va a mostrar una dirección (por ejemplo `http://localhost:5173`). Abrila en
el navegador para ver el sitio funcionando.

**Paso 3 — Generar la versión final para publicar en un hosting:**

```bash
npm run build
```


---

## 6. Créditos

Sitio desarrollado para la Cooperativa Agrícola Mixta de Montecarlo Limitada.
