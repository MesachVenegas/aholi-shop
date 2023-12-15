import { faFacebook, faTiktok, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHome, faImages, faShop } from "@fortawesome/free-solid-svg-icons";

export const menuLinks = [
  { name: 'Inicio', url: '/', icon: faHome },
  { name: 'Galeria', url: '/gallery', icon: faImages },
  { name: 'Tienda', url: '/shop', icon: faShop },
  { name: 'Contacto', url: '/contact', icon: faEnvelope },
]

export const socialLinks = [
  { name: 'Whatsapp', url: '#', icon: faWhatsapp, color: 'text-emerald-400', hover: 'text-emerald-300' },
  { name: 'Tiktok', url: '#', icon: faTiktok, color: 'text-slate-800', hover: 'text-slate-700' },
  { name: 'Facebook', url: '#', icon: faFacebook, color: 'text-blue-500', hover: 'text-blue-400' },
]