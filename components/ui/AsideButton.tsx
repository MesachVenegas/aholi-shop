import React from "react";

interface AsideButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

export default function AsideButton({ children, ...props}: AsideButtonProps) {
  return (
    <button className="flex max-w-[170px] justify-center items-center p-1 border border-rose-100 rounded-lg text-sm" {...props}>
      { children }
    </button>
  )
}
