
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}
export function Input(props: Props) {
  return (
    <input
      className="bg-rose-700/50 px-3 py-1 rounded-lg text-white w-full max-w-sm"
      {...props}
    />
  )
}
