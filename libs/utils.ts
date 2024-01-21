import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const valueFormatter = (number: number) => `$ ${new Intl.NumberFormat("mx", { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(number)}`