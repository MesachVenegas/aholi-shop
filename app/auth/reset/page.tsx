import { Metadata } from "next"
import ResetForm from "@/components/auth/reset-form"

export const metadata: Metadata = {
  title: 'Restablecer contraseña',
  description: 'Aholi Decoraciones para toda ocasion, recuerdos para todo tipo de eventos, XV años, Bodas, etc',
  keywords: ['arreglos', 'decoracion', 'centros de mesa', 'xv años', 'decoraciones', 'bodas', 'graduaciones'],
}
function ResetPasswordPage() {
  return (
    <div className="flex justify-center min-h-[80vh] items-center p-10">
      <ResetForm />
    </div>
  )
}

export default ResetPasswordPage