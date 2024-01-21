import { Metadata } from "next";

import { CursiveTitle } from "@/components/ui/CursiveTitle";
import GalleryViewer from "@/components/Gallery/GalleryViewer";

export const metadata: Metadata = {
  title: 'Aholi | Gallery',
  description: 'Galeria de proyectos realizados por aholi, donde se muestran la variedad de decoraciones, realizadas para diferente eventos',
  keywords: ['arreglos', 'decoracion', 'centros de mesa', 'xv años', 'decoraciones', 'bodas', 'graduaciones', 'gallery', 'events', 'flowers'],
}
export default function GalleryPage() {
  return (
    <main className="flex flex-col justify-center items-center gap-8 p-6">
      <div className="flex flex-col justify-center items-center w-full">
        <CursiveTitle size="text-6xl z-40" >Galeria de Proyectos</CursiveTitle>
        <hr className="w-full max-w-3xl text-rose-700"/>
      </div>
      <div className="w-full h-full p-4">
        <GalleryViewer />
      </div>
    </main>
  )
}
