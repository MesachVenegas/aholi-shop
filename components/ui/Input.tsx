
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}
export function Input(props: Props) {
  return (
    <input
      className=""
      {...props}
    />
  )
}
