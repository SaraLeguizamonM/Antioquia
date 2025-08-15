
export interface FoodItem {
  name: string;
  description: string;
  image: string;
  aiHint: string;
  recipe: string;
}

export interface Myth {
  title: string;
  summary: string;
  content: string;
  image: string;
  aiHint: string;
}

export interface Story {
  title: string;
  author: string;
  story: string;
  image: string;
  aiHint: string;
}

export const culinaryItems: FoodItem[] = [
  {
    name: 'Bandeja Paisa',
    description: 'El plato más representativo, una generosa combinación de frijoles, arroz, carne molida, chicharrón, huevo frito, plátano, arepa y aguacate.',
    image: 'https://cdn.colombia.com/gastronomia/2011/08/02/bandeja-paisa-1616.gif',
    aiHint: 'bandeja paisa',
    recipe: `Ingredientes: Frijoles cargamanto, carne molida, chicharrones, arroz, huevos, plátanos maduros, arepas, aguacate, aceite, sal.\n\nPreparación: Cocina los frijoles hasta que estén blandos. Fríe los chicharrones, los plátanos y los huevos. Cocina el arroz y la carne molida. Sirve todo en un plato grande con una arepa y aguacate fresco.`
  },
  {
    name: 'Sancocho Antioqueño',
    description: 'Una sopa robusta hecha con carnes, papa, yuca, plátano y mazorca. Se sirve con arroz y aguacate.',
    image: 'https://cdn.colombia.com/gastronomia/2011/07/28/sancocho-de-cola-1650.gif',
    aiHint: 'sancocho antioqueno',
    recipe: `Ingredientes: Costilla de res, pollo, carne de cerdo, papas, yucas, plátanos verdes, mazorcas, cilantro, cebolla, ajo.\n\nPreparación: Cocina las carnes en agua con sal, cebolla y ajo. Agrega los vegetales y cocina hasta que todo esté tierno. Sirve caliente con cilantro picado, arroz y aguacate.`
  },
  {
    name: 'Arepa Antioqueña',
    description: 'La compañera de cada comida. Delgada, de maíz blanco, se disfruta con mantequilla, sal o como base para otros manjares.',
    image: 'https://cdn0.recetasgratis.net/es/posts/1/8/4/arepa_paisa_75481_orig.jpg',
    aiHint: 'arepa antioquena',
    recipe: `Ingredientes: Harina de maíz precocida blanca, agua tibia, sal.\n\nPreparación: Mezcla la harina de maíz con agua tibia y sal hasta obtener una masa suave. Forma bolas y aplástalas hasta que estén delgadas. Ásalas en una plancha o sartén caliente por ambos lados hasta que estén doradas.`
  },
  {
    name: 'Mazamorra',
    description: 'Un postre tradicional de maíz pelado, cocido lentamente en leche. Se sirve frío y se endulza con panela o bocadillo.',
    image: 'https://cdn.colombia.com/gastronomia/2012/08/28/mazamorra-paisa-1615.gif',
    aiHint: 'mazamorra colombiana',
    recipe: `Ingredientes: Maíz peto (maíz blanco trillado), leche, panela en polvo o bocadillo de guayaba.\n\nPreparación: Remoja el maíz desde la noche anterior. Cocínalo en agua hasta que esté muy blando. Agrégale leche y deja que hierva a fuego bajo. Sírvela fría y endúlzala al gusto con panela en polvo o trocitos de bocadillo.`
  },
];

export const mythsAndLegends: Myth[] = [
  {
    title: 'La Madremonte',
    summary: 'Protectora de los bosques, castiga a quienes dañan la naturaleza.',
    content: 'Es la protectora de los bosques y las selvas. Se aparece como una mujer corpulenta, vestida de hojas y musgo, para castigar a los leñadores y cazadores que dañan la naturaleza. Sus gritos retumban en las montañas y desatan tormentas.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfdYf4C6n-qlwY7Fttf82B90cSx2F69I5hYQ&s',
    aiHint: 'forest spirit woman'
  },
  {
    title: 'El Sombrerón',
    summary: 'Un ser enigmático que persigue a las mujeres hermosas con su canto.',
    content: 'Un personaje enigmático que persigue a las mujeres hermosas y de cabello largo. Se dice que las enamora con su guitarra y su canto, pero su amor es una maldición que las enferma de tristeza. Viste de negro y lleva un gran sombrero que oculta su rostro.',
    image: 'https://i.scdn.co/image/ab6765630000ba8a5aef5415853f31f302f35602',
    aiHint: 'man black hat'
  },
  {
    title: 'La Llorona',
    summary: 'El lamento de una mujer que busca a sus hijos en los ríos por las noches.',
    content: 'El lamento de una mujer que ahogó a sus hijos y ahora los busca por las noches en ríos y quebradas. Su llanto es un presagio de muerte y desgracia. Se dice que quien la escucha está condenado a una tragedia.',
    image: 'https://img.chilango.com/2017/10/leyenda-de-la-llorona.jpg',
    aiHint: 'weeping woman ghost'
  },
  {
    title: 'El Mohán',
    summary: 'Ser monstruoso que habita en los ríos y protege a los peces.',
    content: 'Un ser de apariencia monstruosa, cubierto de musgo y con garras largas, que habita en los ríos. Es el protector de los peces y las aguas. Se roba a las lavandereras jóvenes y hermosas, llevándolas a su cueva bajo el agua.',
    image: 'https://losmitosyleyendas.com/wp-content/uploads/2024/02/image-2.jpg',
    aiHint: 'river monster mythology'
  },
];

export const initialUserStories: Story[] = [
  {
    title: 'El Tesoro del Arriero',
    author: 'Anónimo',
    story: 'Cuentan que un viejo arriero, en su camino por las montañas de Antioquia, encontró un tesoro escondido por los españoles. No era de oro ni de plata, sino de semillas de un café que florecía hasta en la roca más pelada. Con ese café levantó a su familia y a su pueblo entero, demostrando que la verdadera riqueza de Antioquia está en su tierra y en el trabajo de su gente.',
    image: '',
    aiHint: '',
  },
  {
    title: 'La Promesa del Silletero',
    author: 'Carmen L.',
    story: 'Mi abuelo fue silletero toda su vida. Cada año, en la Feria de las Flores, le prometía a mi abuela que le haría la silleta más hermosa de todas. Un año, después de que ella partiera, él cumplió su promesa. Su silleta no ganó ningún premio, pero para nosotros, fue la más grande de todas, cargada de amor y recuerdos.',
    image: '',
    aiHint: '',
  },
  {
    title: 'El Eco de la Montaña',
    author: 'Javier R.',
    story: 'De niño, mi papá me llevaba a las fincas cafeteras y me enseñó a escuchar el eco de las montañas. Decía que si prestabas atención, podías oír las historias de los que vinieron antes. Hoy, cuando tomo una taza de café, cierro los ojos y todavía puedo escuchar ese eco, lleno de la pujanza y la historia de nuestro pueblo.',
    image: '',
    aiHint: '',
  },
];
