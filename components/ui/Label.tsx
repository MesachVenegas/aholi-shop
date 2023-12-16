import { recursive } from "./fonts"

interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {}
export const Label = ({ children, ...props}: Props) => {
  return (
    <label
      className={`${recursive.className} flex w-full gap-3 justify-between items-center text-slate-800 font-semibold p-2`}
      {...props}
    >
      { children }
    </label>
  )
}
