import Image from 'next/image';

import CartWrapper from "./shop-cart-wrapper";
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

export default function CartShop() {
  const products = useAppSelector( state => state.myCart)

  return (
    <CartWrapper counter={products.length} >
      {
        products.map( (product, index) => (
          <div key={index} className='flex w-full h-[120px] gap-4 p-2 rounded-md  shadow-lg'>
            <div className='w-[120px] h-full relative'>
              <Image
                src={product?.images || '/products/default_img.png'}
                fill={true}
                alt='product_preview'
                className='object-contain'
              />
            </div>

            <div className='flex flex-col gap-2 min-w-[200px]'>
              <div className='flex flex-col'>
                <h3>{product?.name}</h3>
                <small>{`${product?.size.width} x ${product?.size.height} cms`}</small>
                <small>{`${product?.size.type}`}</small>
              </div>

              <div className='flex gap-1 mt-2'>
                <button type='button' className='grid place-content-center w-5 h-5 bg-rose-100 text-white font-bold rounded-sm'>
                  -
                </button>
                <input
                  type='text'
                  title='total products'
                  value={0}
                  className='h-5 w-8 text-center m-0 bg-rose-100/10 rounded-sm'
                />
                <button type='button' className='grid place-content-center w-5 h-5 bg-rose-100 text-white font-bold rounded-sm'>
                  +
                </button>
              </div>

            </div>
            <div className='grid place-content-center w-10 rounded-md border text-red-500 border-red-500 hover:border-transparent hover:bg-red-500 hover:text-white cursor-pointer transition-all'>
              <FontAwesomeIcon icon={faTrashCan} className='w-6 h-6' />
            </div>
          </div>
        ))
      }
    </CartWrapper>
  )
}

