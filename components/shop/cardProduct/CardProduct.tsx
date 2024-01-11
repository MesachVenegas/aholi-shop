import { Title5 } from '@/components/ui'
import { valueFormatter } from '@/libs/utils'
import { ProductResponse } from '@/models/product'
import Image from 'next/image'

export default function CardProduct({
  prod
} : {
  prod: ProductResponse
}) {

  return (
    <figure className="flex flex-col p-2 w-96 h-[500px] border border-rose-700 rounded-lg cursor-pointer">
      <div className="w-full h-[300px] relative">
        <Image
          src={`${prod.images[0]?.url ? prod.images[0].url : '/products/default_img.png'}`}
          fill={true}
          alt='alt'
        />
      </div>
      <figcaption className="flex flex-col gap-2">
        <div>
          <Title5>{prod.name}</Title5>
          <small>{prod.size.height} x {prod.size.width} cms</small>
        </div>
        <p>{prod.description}</p>
        <span className="flex w-full justify-end text-2xl p-2">
          {valueFormatter(prod.price)} mxn
        </span>
        <div className="flex w-full gap-2">
          <span className="border border-rose-100 text-rose-700 cursor-pointer px-2 rounded-lg">
            { prod.category.name }
          </span>
        </div>
        <button className="bg-rose-700/80 hover:bg-rose-700 p-2 rounded-md text-white w-full">
          Comprar
        </button>
      </figcaption>
    </figure>
  )
}
