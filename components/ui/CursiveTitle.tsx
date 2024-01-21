import { cedarville } from "@/styles/fonts";

export const CursiveTitle = ({ children, size, color } : {children : string, size: string, color?: string}) => {
  return (
    <h1 className={`${cedarville.className} font-bold ${size} ${color? color: 'text-slate-800'}`}>
      { children }
    </h1>
  )
}
