import { faFacebook, faTiktok, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHome, faImages, faShop } from "@fortawesome/free-solid-svg-icons";

export const menuLinks = [
  { name: 'Inicio', url: '/', icon: faHome },
  { name: 'Galeria', url: '/gallery', icon: faImages },
  { name: 'Tienda', url: '/shop', icon: faShop },
  { name: 'Contacto', url: '/contact', icon: faEnvelope },
]

export const socialLinks = [
  { name: 'Whatsapp', url: '#', icon: faWhatsapp },
  { name: 'Tiktok', url: '#', icon: faTiktok },
  { name: 'Facebook', url: '#', icon: faFacebook },
]