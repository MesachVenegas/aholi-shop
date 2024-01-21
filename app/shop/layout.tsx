import AsideBar from "@/app/shop/_components/AsideBar";

export default function layout({ children }: { children: React.ReactNode}) {

  return (
    <main className="flex flex-col lg:flex-row gap-2">
      <AsideBar />
      <section className="w-full">
        { children }
      </section>
    </main>
  )
}
