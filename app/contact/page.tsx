import { CursiveTitle, Input, Title3 } from "@/components/ui";
import { Label } from "@/components/ui/Label";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="flex flex-col justify-center items-center gap-24 p-6 w-full h-full bg-contact-img ">
      <div className="flex flex-col justify-center items-center gap-12 bg-slate-100/60 backdrop-blur-lg p-8 rounded-lg mt-24 mb-24">
        <CursiveTitle size="text-6xl">Mandanos un mensaje</CursiveTitle>
        <Title3>Detalles y Recuerdos para toda ocasion.</Title3>
        <div className="flex gap-12">
          <div className="flex flex-col justify-center items-center ">
            <Image
              src='/assets/logo_aholi.png'
              width={500}
              height={600}
              alt="gracias"
            />
          </div>
          <form className="flex flex-col gap-2 justify-center items-center w-full rounded-lg">
            <div className="w-full">
              <Label >
                Nombre
                <Input type="text" autoFocus required/>
              </Label>
            </div>
            <div className="w-full">
              <Label >
                Correo Electrónico
                <Input type="email" required/>
              </Label>
            </div>
            <div className="w-full">
              <Label >
                Teléfono de contacto
                <Input type="email" required/>
              </Label>
            </div>
            <div className="w-full">
              <Label htmlFor="message" >
                Mensaje
                <textarea
                  className="w-full p-2 rounded-lg max-w-sm text-white bg-rose-700/50"
                  title="message"
                  name="message"
                  id="message"
                  rows={5}
                />
              </Label>
            </div>
            <button className="flex gap-3 items-center justify-center w-full max-w-sm font-bold text-white py-2 px-6 text-lg rounded-lg bg-rose-700">
              Enviar
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
            <button className="italic underline font-bold text-sm">
              Limpiar formulario
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}
