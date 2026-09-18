
export const lineas = [
  {
    id: 'aguantadora',
    name: 'Aguantadora',
    tagline: 'Pasado y presente unidos por una misma pasión',
    description:
      'Yerba Mate Aguantadora es nuestra línea insignia, elaborada con palo desde 1930. Libre de gluten y sin T.A.C.C.',
    badges: ['Libre de gluten', 'Sin T.A.C.C.'],
    fotosPendientes: false,
    headLink: 'https://www.montecarlo.com.ar/web/yerba-mate/',
    social: {
      facebook: 'https://www.facebook.com/Aguantadora/',
      instagram: 'https://www.instagram.com/aguantadora/',
    },
    variantes: [
      {
        name: 'Tradicional',
        blurb: 'Bajo contenido de polvo: la yerba de siempre, la que tomaron los fundadores.',
        image: '/assets/aguantadora-tradicional.jpg',
      },
      {
        name: 'Suave',
        blurb: 'Ideal para quienes buscan un sabor más delicado.',
        image: '/assets/aguantadora-suave.jpg',
      },
      {
        name: 'Selección Especial',
        blurb: 'Estacionamiento natural prolongado, para un sabor más redondo.',
        image: '/assets/aguantadora-especial.jpg',
      },
      {
        name: 'Despalada',
        blurb: '90% a 95% de hoja: sabor más intenso y duradero.',
        image: '/assets/aguantadora-despalada.jpg',
      },
      {
        name: 'Mate Frío',
        blurb: 'Pensada especialmente para prepararse bien fría, en tereré.',
        image: '/assets/aguantadora-mate-frio.jpg',
      },
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
      'Yerba Mate Sinceridad está pensada para quienes gustan de un mate muy equilibrado. Elaborada con palo, libre de gluten y sin T.A.C.C.',
    badges: ['Libre de gluten', 'Sin T.A.C.C.'],
    fotosPendientes: true,
    headLink: 'https://www.montecarlo.com.ar/web/yerba-mate/',
    social: {
      facebook: 'https://www.facebook.com/YerbaMateSinceridad/',
      instagram: 'https://www.instagram.com/sinceridadyerbamate/',
    },
    variantes: [
      {
        name: 'Tradicional',
        blurb: 'Un mate muy equilibrado, para el día a día.',
        image: '/assets/sinceridad-tradicional.jpg',
      },
      {
        name: 'Hierbas',
        blurb: 'Mezcla de menta, poleo, peperina y manzanilla.',
        image: '/assets/sinceridad-hierbas.jpg',
      },
      {
        name: 'Limón',
        blurb: 'Con un toque cítrico de limón.',
        image: '/assets/sinceridad-limon.jpg',
      },
      {
        name: 'Naranja',
        blurb: 'Con un toque cítrico de naranja.',
        image: '/assets/sinceridad-naranja.jpg',
      },
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
      'Yerba Mate Pampa es un producto Premium, cultivado y elaborado respetando los ritmos naturales de crecimiento.',
    badges: ['Premium', 'Línea orgánica'],
    fotosPendientes: false,
    headLink: 'https://www.montecarlo.com.ar/web/yerba-mate/',
    social: {
      facebook: 'https://www.facebook.com/pampayerbamate/',
      instagram: 'https://www.instagram.com/pampayerbamate/',
    },
    variantes: [
      {
        name: 'Tradicional BCP',
        blurb: 'Bajo contenido de polvo, elaboración tradicional.',
        image: '/assets/pampa-bcp.webp',
      },
      {
        name: 'Orgánica Clásica',
        blurb: 'Blend orgánico de sabor clásico.',
        image: '/assets/pampa-organica.webp',
      },
      {
        name: 'Orgánica Intensa',
        blurb: 'Blend orgánico de sabor más intenso.',
        image: '/assets/pampa-intensa.webp',
      },
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
      'Nuestra fécula de mandioca, también conocida como tapioca, es un almidón extraído de la raíz de mandioca. De gelatinización rápida, no modifica el sabor ni el aroma de los alimentos.',
    badges: ['Libre de gluten'],
    fotosPendientes: false,
    headLink: 'https://www.montecarlo.com.ar/web/fecula-de-mandioca/',
    variantes: [
      {
        name: 'Fécula de Mandioca',
        blurb: 'Ideal como aglutinante en panificados, postres, dulces y aderezos.',
        image: '/assets/fecula-mandioca.jpg',
      },
    ],
    presentaciones: [
      { producto: 'Fécula de Mandioca', presentacion: '1x25kg', peso: '25 kg' },
      { producto: 'Fécula de Mandioca', presentacion: '10x1kg', peso: '1 kg c/u' },
    ],
  },
  {
    id: 'te-mate-cocido',
    name: 'Té y Mate Cocido en Saquitos',
    tagline: 'Práctico, en saquitos, para cualquier momento del día',
    description:
      'Desde Misiones, la Tierra del Oro Verde, pensamos estas infusiones en saquitos para acompañar tus jornadas donde no tengas mate y bombilla a mano: en la oficina, la facultad o de viaje.',
    badges: [],
    fotosPendientes: true,
    variantes: [
      {
        name: 'Té Monte Carlo',
        blurb: 'Desde Misiones, la Tierra del Oro Verde, una Yerba Mate única para acompañar tus jornadas.',
        image: '/assets/te-monte-carlo.jpg',
        tienda: 'https://www.tienda.montecarlo.com.ar/te-mate-cocido_qO30130452XtOcxSM',
      },
      {
        name: 'Mate Cocido Aguantadora',
        blurb: 'Desde Misiones, la Tierra del Oro Verde, una Yerba Mate única para acompañar tus jornadas.',
        image: '/assets/mate-cocido-aguantadora.jpg',
        tienda: 'https://tienda.montecarlo.com.ar/categoria-producto/mate-cocido/',
      },
      {
        name: 'Mate Cocido Pampa',
        blurb: 'Desde Misiones, la Tierra del Oro Verde, una Yerba Mate única para acompañar tus jornadas.',
        image: '/assets/mate-cocido-pampa.jpg',
        tienda: 'https://tienda.montecarlo.com.ar/categoria-producto/mate-cocido/',
      },
    ],
    presentaciones: [],
    headLink: 'https://www.montecarlo.com.ar/web/teymatecocido/',
  },
]
