import { cedarville } from "./fonts"

export const CursiveTitle = ({ children, size } : {children : string, size: string}) => {
  return (
    <h1 className={`${cedarville.className} font-bold ${size} text-slate-800`} >
      { children }
    </h1>
  )
}
