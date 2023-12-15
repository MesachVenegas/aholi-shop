import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHome, faImages, faShop } from "@fortawesome/free-solid-svg-icons";

export const menuLinks = [
  { name: 'Inicio', url: '/', icon: faHome },
  { name: 'Galeria', url: '/gallery', icon: faImages },
  { name: 'Tienda', url: '/shop', icon: faShop },
  { name: 'Contacto', url: '/contact', icon: faEnvelope },
]

export const socialLinks = [
  { name: 'Instragram', url: 'https://www.instagram.com/aholi73/', icon: faInstagram },
  { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61554429999153&sk=about', icon: faFacebook },
  { name: 'Whatsapp', url: 'https://api.whatsapp.com/send?phone=523321860284', icon: faWhatsapp },
]