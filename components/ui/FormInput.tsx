interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}
export default function FormInput(props : Props) {
  return (
    <input
      className="bg-slate-200 w-full max-w-sm p-2 rounded-lg border border-transparent focus:outline-none focus:border-rose-700"
      {...props}
    />
  )
}
