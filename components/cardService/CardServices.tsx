import Image from "next/image"
import { Title4 } from "../ui"

export const CardServices = ({ title, content, source} : { title: string, content: string , source: string}) => {
  return (
    <div
      className="flex flex-col justify-center items-center w-96 p-4 gap-4 overflow-hidden rounded-figure-reverse border border-rose-700 cursor-pointer shadow-2xl hover:translate-y-[-5px] transition-all ease-linear bg-card-img"
    >
      <div className="relative w-72 h-52 p-4">
        <Image
          src={source}
          fill={true}
          alt={`${title}_icon`}
          style={{ objectFit: 'contain'}}
        />
      </div>
      <Title4 color="text-white" >{title}</Title4>
      <p className="text-white p-4">
        {content}
      </p>
    </div>
  )
}
