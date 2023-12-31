import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faBoxOpen, faEnvelope, faHome, faImages, faLayerGroup, faShop, faTags, faUserTie } from "@fortawesome/free-solid-svg-icons";

export const menuLinks = [
  { name: 'Inicio', url: '/', icon: faHome },
  { name: 'Galeria', url: '/gallery', icon: faImages },
  { name: 'Tienda', url: '/shop', icon: faShop },
  { name: 'Contacto', url: '/contact', icon: faEnvelope },
  { name: 'Admin', url: '/admin', icon: faUserTie },
]

export const socialLinks = [
  { name: 'Instragram', url: 'https://www.instagram.com/aholi73/', icon: faInstagram },
  { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61554429999153&sk=about', icon: faFacebook },
  { name: 'Whatsapp', url: 'https://api.whatsapp.com/send?phone=523321860284', icon: faWhatsapp },
]

export const adminMenu = [
  { name: 'Inicio', url: '/admin' , icon: faLayerGroup },
  { name: 'Productos', url: '/admin/products' , icon: faBoxOpen },
  { name: 'Etiquetas', url: '/admin/tags' , icon: faTags },
  { name: 'Galeria', url: '/admin/gallery' , icon: faImages },
]


export const galleryImages = [
  {
    src: '/images/bautizo.jpeg',
    width: 400,
    height: 250,
    alt: 'Bautizo',
  },
  {
    src: '/images/cumpleanos.jpeg',
    width: 400,
    height: 300,
    alt: 'Cumpleaños decoración',
  },
  {
    src: '/images/decoracion_4.jpeg',
    width: 300,
    height: 150,
    alt: 'Bautizo',
  },
  {
    src: '/images/decoration_1.jpg',
    width: 300,
    height: 200,
    alt: 'Bautizo',
  },
  {
    src: '/images/decoration_2.jpeg',
    width: 350,
    height: 400,
    alt: 'Bautizo',
  },
  {
    src: '/images/decorations_blue.jpeg',
    width: 400,
    height: 200,
    alt: 'Bautizo',
  },
  {
    src: '/images/decorations_white.jpeg',
    width: 400,
    height: 200,
    alt: 'Bautizo',
  },
  {
    src: '/images/decorations_rose.jpeg',
    width: 300,
    height: 200,
    alt: 'Bautizo',
  },
  {
    src: '/images/decorations_san_valentin.jpeg',
    width: 400,
    height: 300,
    alt: 'Bautizo',
  },
  {
    src: '/images/graduacion.jpeg',
    width: 500,
    height: 300,
    alt: 'Bautizo',
  },
  {
    src: '/images/primera_comunion.jpeg',
    width: 200,
    height: 200,
    alt: 'Bautizo',
  },
  {
    src: '/images/recuerdo_1.jpeg',
    width: 200,
    height: 200,
    alt: 'Bautizo',
  },
  {
    src: '/images/xv_anos.jpeg',
    width: 300,
    height: 200,
    alt: 'Bautizo',
  },
  {
    src: '/images/sirenita.jpeg',
    width: 200,
    height: 200,
    alt: 'Bautizo',
  },
]


export const categories = [
  { name: 'Dia de las Madres', icon: ''},
  { name: 'General', icon: ''},
  { name: 'San Valentin', icon: ''},
  { name: 'Boda', icon: ''},
  { name: 'Aniversario Luctuoso', icon: ''},
  { name: 'Baby Shower', icon: ''},
  { name: 'Cumpleaños', icon: ''},
  { name: 'Graduaciones', icon: ''},
  { name: 'Jubilación', icon: ''},
]

export const products = [
  {
    title: 'Nombre del producto',
    images: [
      { src: '/images/decoration_1.jpg', description: 'descripcion_del_producto' },
      { src: '/images/decoration_2.jpeg', description: 'descripcion_del_producto' },
    ],
    hight: '8',
    width: '5',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nul',
    price: 15,
    tags: ['XV Años', "Hexagonal"]
  },
  {
    title: 'Nombre del producto',
    images: [
      { src: '/images/decoration_1.jpg', description: 'descripcion_del_producto' },
      { src: '/images/decoration_2.jpeg', description: 'descripcion_del_producto' },
    ],
    hight: '8',
    width: '5',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nul',
    price: 15,
    tags: ['XV Años', "Hexagonal"]
  },
  {
    title: 'Nombre del producto',
    images: [
      { src: '/images/decoration_1.jpg', description: 'descripcion_del_producto' },
      { src: '/images/decoration_2.jpeg', description: 'descripcion_del_producto' },
    ],
    hight: '8',
    width: '5',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nul',
    price: 9,
    tags: ['XV Años', "Hexagonal"]
  },
  {
    title: 'Nombre del producto',
    images: [
      { src: '/images/decoration_1.jpg', description: 'descripcion_del_producto' },
      { src: '/images/decoration_2.jpeg', description: 'descripcion_del_producto' },
    ],
    hight: '8',
    width: '5',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nul',
    price: 8,
    tags: ['XV Años', "Hexagonal"]
  },
  {
    title: 'Nombre del producto',
    images: [
      { src: '/images/decoration_1.jpg', description: 'descripcion_del_producto' },
      { src: '/images/decoration_2.jpeg', description: 'descripcion_del_producto' },
    ],
    hight: '8',
    width: '5',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nul',
    price: 15,
    tags: ['XV Años', "Hexagonal"]
  },
  {
    title: 'Nombre del producto',
    images: [
      { src: '/images/decoration_1.jpg', description: 'descripcion_del_producto' },
      { src: '/images/decoration_2.jpeg', description: 'descripcion_del_producto' },
    ],
    hight: '8',
    width: '5',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nul',
    price: 15,
    tags: ['XV Años', "Hexagonal"]
  },
]