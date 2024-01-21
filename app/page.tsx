'use client'

import Link from 'next/link';
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAt,
  faChevronRight,
  faClock,
  faLink,
  faMapLocation,
  faPaperPlane,
  faPhone
} from '@fortawesome/free-solid-svg-icons';

import { socialLinks } from '@/libs/constants'
import { CardServices } from '@/components/CardServices'
import { ButtonLink, CursiveTitle, Title2, Title3, Title5 } from '@/components/ui'

export default function Home() {

  return (
    <>
      <header className='flex justify-center items-end w-full h-[90vh] bg-header-img'>
        <figure className='flex flex-col justify-center items-center gap-4'>
          <div className='relative w-60 h-72'>
            <Image
              src='/assets/logo_aholi.png'
              fill={true}
              alt='Aholi'
              className='drop-shadow-2xl'
              sizes='(max-width: 240px)'
              style={{ objectFit: 'cover'}}
            />
          </div>
          <figcaption className='flex flex-col justify-center items-center gap-6 mb-[10vh]'>
            <CursiveTitle size='text-5xl md:text-7xl' >Aholi Decoraciones</CursiveTitle>
            <Title3>Cultiva Momentos Especiales con AHOLI</Title3>
            <ButtonLink href='/shop'>
              Ver Catalogo
            </ButtonLink>
          </figcaption>
        </figure>
      </header>

      <main className='flex flex-col gap-6 justify-center p-6 mt-6 m-auto max-w-7xl '>
        <section className='flex flex-col justify-center items-center gap-6 w-full'>
          <Title2 color='text-rose-700'>Proyectos</Title2>
          <hr className='w-full text-rose-100'/>
          <div className='grid grid-cols-1 md:grid-cols-2 h-full gap-4 w-full'>
            <figure className='w-full max-w-2xl h-48 md:h-[500px] rounded-figure overflow-hidden relative'>
              <Image
                src='/images/decorations_blue.jpeg'
                fill={true}
                alt='Aholi Decoraciones'
                sizes='(max-width: 440px)'
                style={{ objectFit: 'cover'}}
              />
            </figure>
            <div className='flex flex-col gap-4 justify-center items-center'>
              <figure className='w-full md:max-w-md h-60 rounded-figure overflow-hidden relative'>
                <Image
                  src='/images/decorations_white.jpeg'
                  fill={true}
                  alt='Aholi Decoraciones'
                  sizes='(max-width: 440px)'
                  style={{ objectFit: 'cover'}}
                />
              </figure>
              <figure className='w-full md:max-w-md h-60 rounded-figure overflow-hidden relative'>
                <Image
                  src='/images/decorations_rose.jpeg'
                  fill={true}
                  alt='Aholi Decoraciones'
                  sizes='(max-width: 440px)'
                  style={{ objectFit: 'cover'}}
                />
              </figure>
            </div>
          </div>
          <Link href='/gallery' className='flex group gap-2 items-center text-2xl mt-16 border w-48 transition-all ease-in-out duration-300 rounded-lg py-2 px-3 border-rose-700 text-rose-700'>
            Ver Galeria
            <FontAwesomeIcon icon={faChevronRight} className='w-4 h-4  group-hover:ml-4'/>
          </Link>
        </section>

        <section className='flex flex-col justify-center items-center gap-8 mt-36'>
          <Title2 color='text-rose-700'>Sobre Nosotros</Title2>
          <hr className='w-full text-rose-100'/>
          <p className='max-w-3xl w-full m-auto'>
            En <strong>AHOLI</strong>, es mucho más que una tienda en línea de decoraciones y recuerdos; es un destino donde cada cliente puede descubrir la magia para cada evento especial. Nos especializamos en ofrecer una amplia gama de productos personalizados de acuerdo a cada evento, seleccionados y diseñados para realizar y eternizar los momentos más significativos de tu vida.
          </p>
          <div className='flex flex-col justify-center items-center gap-8'>
            <Title3>Servicios</Title3>
            <div className='flex flex-wrap justify-around gap-6'>
              <CardServices
                title='personalización'
                source='/assets/noun-handmade.svg'
                content='No solo vendemos plantas, creamos piezas de arte vivas. Nuestras macetas son diseñadas y elaboradas a mano en diferentes tamaños y modelos para adaptarse a tu estilo y necesidades.'
              />
              <CardServices
                title='entrega a domicilio'
                source='/assets/noun-package.svg'
                content='Facilitamos la adquisición de tus macetas AHOLI. Ofrecemos entregas a domicilio para que recibas la frescura y la belleza directamente en tu puerta. También puedes recoger en puntos específicos, garantizando flexibilidad y conveniencia.'
              />
              <CardServices
                title='asesoria'
                source='/assets/noun-help.svg'
                content='¿No estás seguro de qué planta es la adecuada para ti? Nuestro equipo de expertos está aquí para asesorarte en la elección de la combinación perfecta de suculentas y macetas, asegurando que cada compra sea una decisión informada y feliz.'
              />
            </div>
          </div>
        </section>

        <section className='flex flex-col justify-center items-center gap-8 mt-36'>
          <Title2 color='text-rose-700'>Contacto</Title2>
          <hr className='w-full text-rose-100'/>
          <div className='flex flex-col-reverse md:flex-row w-full justify-between p-4'>
            <ul className='flex flex-col gap-4 p-4'>
              <li className='flex flex-col gap-2'>
                <Title5>
                  <FontAwesomeIcon icon={faMapLocation} className='w-5 h-5' />
                  Ubicación
                </Title5>
                <p>Queretaro,México</p>
              </li>
              <li className='flex flex-col gap-2'>
                <Title5>
                  <FontAwesomeIcon icon={faClock} className='w-5 h-5' />
                  Horarios
                </Title5>
                <p>9:00 AM a 6:00 PM</p>
              </li>
              <li className='flex flex-col gap-2'>
                <Title5>
                  <FontAwesomeIcon icon={faPhone} className='w-5 h-5' />
                  Teléfonos
                </Title5>
                <div>
                  <p>562 490 7801 o 332 186 0284</p>
                </div>
              </li>
              <li className='flex flex-col gap-2'>
                <Title5>
                  <FontAwesomeIcon icon={faAt} className='w-5 h-5' />
                  Correo Electrónico
                </Title5>
                <p>ventas@aholi.shop</p>
              </li>
              <li className='flex flex-col gap-2'>
                <Title5>
                  <FontAwesomeIcon icon={faLink} className='w-5 h-5' />
                  Redes Sociales
                </Title5>
                <ul className='flex flex-r gap-6'>
                  {
                    socialLinks.map( ({ name, url, icon }) => (
                      <li key={name}>
                        <Link href={url} className='text-rose-700 hover:text-rose-100'>
                          <FontAwesomeIcon icon={icon} className='w-8 h-8'/>
                        </Link>
                      </li>
                    ))
                  }
                </ul>
              </li>
              <li className='mt-6'>
                <ButtonLink href='/contact'>
                  Contacto
                  <FontAwesomeIcon icon={faPaperPlane} className='w-4 h-4'/>
                </ButtonLink>
              </li>
            </ul>
            <figure className='block w-full max-w-4xl h-[300px] md:h-[500px] relative border border-rose-100 rounded-figure overflow-hidden'>
              <Image
                src='/images/decorations_san_valentin.jpeg'
                fill={true} alt='aholi_asset'
                style={{ objectFit: 'cover'}}
                sizes='(max-width: 440px)'
              />
            </figure>
          </div>
        </section>
      </main>
    </>
  )
}
