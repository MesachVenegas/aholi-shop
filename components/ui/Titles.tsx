import { recursive } from './fonts'

export function Title2({ children, color } : { children: string, color?: string} ) {
  return (
    <h2 className={`${recursive.className} text-2xl md:text-4xl uppercase tracking-widest font-semibold ${color ? color : 'text-slate-800'}`}>
      {children}
    </h2>
  )
}

export function Title3({ children, color } : { children: string, color?: string} ) {
  return (
    <h3 className={`${recursive.className} text-lg md:text-2xl uppercase tracking-widest font-semibold ${color ? color : 'text-slate-800'}`}>
      {children}
    </h3>
  )
}

export function Title4({ children, color } : { children: string, color?: string} ) {
  return (
    <h3 className={`${recursive.className} text-md md:text-lg uppercase tracking-widest font-semibold ${color ? color : 'text-slate-800'}`}>
      {children}
    </h3>
  )
}

export function Title5({ children, color } : { children: string, color?: string} ) {
  return (
    <h3 className={`${recursive.className} text-sm md:text-base uppercase tracking-widest font-semibold ${color ? color : 'text-slate-800'}`}>
      {children}
    </h3>
  )
}

