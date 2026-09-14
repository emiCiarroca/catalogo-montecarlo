// Catálogo real de la Cooperativa Agrícola Mixta de Montecarlo Limitada.
// Las imágenes son links genéricos a /public/assets — reemplazar esos
// archivos por las fotos reales manteniendo el mismo nombre de archivo
// (ver src/components/Productos.jsx y public/assets/README.md).

export const lineas = [
  {
    id: 'aguantadora',
    name: 'Aguantadora',
    tagline: 'Pasado y presente unidos por una misma pasión',
    description:
      'Yerba Mate Aguantadora es nuestra línea insignia, elaborada con palo desde 1930. Está disponible en distintas variedades para adaptarse a todos los gustos: Tradicional (con bajo contenido de polvo), Suave (ideal para quienes buscan un sabor más delicado), Especial de Selección (con estacionamiento natural prolongado) y Despalada (90% a 95% de hoja, para un sabor más intenso y duradero).',
    badges: ['Libre de gluten', 'Sin T.A.C.C.'],
    fotosPendientes: false,
    images: [
      { src: '/assets/aguantadora-tradicional.jpg', caption: 'Tradicional' },
      { src: '/assets/aguantadora-suave.jpg', caption: 'Suave' },
      { src: '/assets/aguantadora-especial.jpg', caption: 'Selección Especial' },
      { src: '/assets/aguantadora-despalada.jpg', caption: 'Despalada' },
    ],
    presentaciones: [
      { producto: 'Aguantadora Tradicional', presentacion: '14x1/4', peso: '250 g' },
      { producto: 'Aguantadora Tradicional', presentacion: '10x1/2', peso: '500 g' },
      { producto: 'Aguantadora Tradicional', presentacion: '6x1', peso: '1 kg' },
      { producto: 'Aguantadora Tradicional', presentacion: '6x2', peso: '2 kg' },
      { producto: 'Aguantadora Tradicional', presentacion: '1x10kg', peso: '10 kg' },
      { producto: 'Aguantadora Suave', presentacion: '10x1/2', peso: '500 g' },
      { producto: 'Aguantadora Suave', presentacion: '6x1', peso: '1 kg' },
      { producto: 'Aguantadora Especial (Selección Especial)', presentacion: '10x1/2', peso: '500 g' },
      { producto: 'Aguantadora Mate Frío', presentacion: '10x1/2', peso: '500 g' },
      { producto: 'Aguantadora sin palo (Despalada)', presentacion: '10x1/2', peso: '500 g' },
    ],
  },
  {
    id: 'sinceridad',
    name: 'Sinceridad',
    tagline: 'Una yerba mate suave y equilibrada',
    description:
      'Yerba Mate Sinceridad está pensada para quienes gustan de un mate muy equilibrado. Además de su versión tradicional, cuenta con variedades saborizadas: Hierbas (mezcla de menta, poleo, peperina y manzanilla), Limón y Naranja, todas elaboradas con palo, libres de gluten y sin T.A.C.C.',
    badges: ['Libre de gluten', 'Sin T.A.C.C.'],
    fotosPendientes: true,
    images: [
      { src: '/assets/sinceridad-tradicional.jpg', caption: 'Tradicional' },
      { src: '/assets/sinceridad-hierbas.jpg', caption: 'Hierbas' },
      { src: '/assets/sinceridad-limon-naranja.jpg', caption: 'Limón y Naranja' },
    ],
    presentaciones: [
      { producto: 'Sinceridad', presentacion: '14x1/4', peso: '250 g' },
      { producto: 'Sinceridad', presentacion: '10x1/2', peso: '500 g' },
      { producto: 'Sinceridad', presentacion: '6x1', peso: '1 kg' },
      { producto: 'Sinceridad', presentacion: '6x2', peso: '2 kg' },
      { producto: 'Sinceridad', presentacion: '1x10kg', peso: '10 kg' },
      { producto: 'Sinceridad Hierbas', presentacion: '10x1/2', peso: '500 g' },
      { producto: 'Sinceridad Limón', presentacion: '10x1/2', peso: '500 g' },
      { producto: 'Sinceridad Naranja', presentacion: '10x1/2', peso: '500 g' },
    ],
  },
  {
    id: 'pampa',
    name: 'Pampa',
    tagline: 'Producto Premium, orgánico y tradicional',
    description:
      'Yerba Mate Pampa es un producto Premium, cultivado y elaborado respetando los ritmos naturales de crecimiento. Está disponible en su versión Tradicional BCP (bajo contenido de polvo) y en dos blends orgánicos: Clásica e Intensa.',
    badges: ['Premium', 'Línea orgánica'],
    fotosPendientes: true,
    images: [
      { src: '/assets/pampa-tradicional.jpg', caption: 'Tradicional BCP' },
      { src: '/assets/pampa-organica-clasica.jpg', caption: 'Orgánica Clásica' },
      { src: '/assets/pampa-organica-intensa.jpg', caption: 'Orgánica Intensa' },
    ],
    presentaciones: [
      { producto: 'Pampa Tradicional BCP', presentacion: '10x1/2', peso: '500 g' },
      { producto: 'Pampa Orgánica Blend Clásica', presentacion: '10x1/2', peso: '500 g' },
      { producto: 'Pampa Orgánica Blend Intensa', presentacion: '10x1/2', peso: '500 g' },
    ],
  },
  {
    id: 'fecula-mandioca',
    name: 'Fécula de Mandioca',
    tagline: 'Almidón natural para cocina libre de gluten',
    description:
      'Nuestra fécula de mandioca, también conocida como tapioca, es un almidón extraído de la raíz de mandioca. De gelatinización rápida, no modifica el sabor ni el aroma de los alimentos, por lo que se utiliza como aglutinante en la elaboración de panificados, postres, dulces y aderezos, además de ser un ingrediente clave en la cocina libre de gluten.',
    badges: ['Libre de gluten'],
    fotosPendientes: false,
    images: [{ src: '/assets/fecula-mandioca.jpg', caption: 'Fécula de Mandioca' }],
    presentaciones: [
      { producto: 'Fécula de Mandioca', presentacion: '1x25kg', peso: '25 kg' },
      { producto: 'Fécula de Mandioca', presentacion: '10x1kg', peso: '1 kg c/u' },
    ],
  },
]
