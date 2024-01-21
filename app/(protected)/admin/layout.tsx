import SideBar from '@/components/admin/sidebar/SideBar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Panel de Administración',
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='flex flex-col md:flex-row'>
      <SideBar />
      <div className='flex flex-col w-full min-h-screen p-4'>
        {children}
      </div>
    </main>
  )
}
