import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

import { auth } from '@/auth';
import { getUserByEmail } from '@/data/user';
import SideBar from '@/app/(protected)/_components/SideBar';

export const metadata: Metadata = {
  title: 'Panel de Administración',
}

export default async function ProtectedAdminLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  const user = await getUserByEmail(session?.user.email as string);

  if(user?.role === 'user'){
    redirect('/error')
  }
  return (
    <main className='flex flex-col md:flex-row'>
      <SideBar />
      <div className='flex flex-col w-full min-h-screen p-4'>
        {children}
      </div>
    </main>
  )
}
