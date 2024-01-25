'use client'

import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faTruckFast } from '@fortawesome/free-solid-svg-icons';

import { valueFormatter } from '@/libs/utils';
import { ProductProps } from '@/types/product';
import { Title5 } from '@/components/ui/Titles';
import { useAppDispatch } from '@/hooks/useRedux';
import { addProductToCart } from '@/redux-store/features/cart/cartSlice';
import Link from 'next/link';

export default function CardProduct({ prod } : { prod: ProductProps }) {
  const dispatch = useAppDispatch()

  return (
    <figure className="flex flex-col p-2 w-full sm:max-w-[500px] md:max-w-[350px] lg:h-[500px] border border-rose-700 rounded-lg cursor-pointer">
      <div className="w-full h-[300px] relative">
        <Image
          src={`${prod?.images ? prod.images : "/products/default_img.png"}`}
          fill={true}
          className='object-contain'
          alt='alt'
        />
      </div>
      <figcaption className="flex flex-col gap-2">
        <div>
          <Title5>{prod?.name}</Title5>
          <small>{prod?.size.height} x {prod?.size.width} cms</small>
        </div>
        <p>{prod?.description}</p>
        <span className="flex w-full justify-end text-2xl p-2">
          {valueFormatter(prod?.price as number)} mxn
        </span>
        <div className="flex w-full gap-2">
          <span className="border border-rose-100 text-rose-700 cursor-pointer px-2 rounded-lg">
            { prod?.category.name }
          </span>
        </div>
        <div className='flex flex-col md:flex-row gap-2 mt-5'>
          <Link
            href='/checkout'
            type='button'
            className="flex justify-center items-center bg-rose-700/80 hover:bg-rose-700 p-2 rounded-md text-white text-sm w-full md:max-w-[200px] gap-2"
          >
            <FontAwesomeIcon icon={faTruckFast} className='w-5 h-5' />
            Comprar
          </Link>
          <button
            type='button'
            className="flex justify-center items-center bg-rose-700/80 hover:bg-rose-700 p-2 rounded-md text-white text-sm w-full md:max-w-[200px] gap-2"
            onClick={ () => dispatch(addProductToCart(prod))}
          >
            <FontAwesomeIcon icon={faCartPlus} className='w-5 h-5'/>
            Agregar al carrito
          </button>
        </div>
      </figcaption>
    </figure>
  )
}
