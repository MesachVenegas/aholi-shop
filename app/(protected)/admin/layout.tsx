import type { Metadata } from 'next';

import { auth } from '@/auth';
import { getUserByEmail } from '@/data/user';
import SideBar from '@/app/(protected)/_components/SideBar';
import RoleGate from '@/components/auth/role-gate';
import { Role } from '@prisma/client';

export const metadata: Metadata = {
  title: 'Panel de Administración',
}

export default async function ProtectedAdminLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  const user = await getUserByEmail(session?.user.email as string);


  return (
    <>
    <RoleGate allowedRole='admin' role={user?.role as Role} >
      <main className='flex flex-col lg:flex-row'>
        <SideBar />
        <div className='flex flex-col w-full min-h-[75vh] overflow-auto py-10 sm:px-2 xl:p-10'>
          {children}
        </div>
      </main>
    </RoleGate>
    </>
  )
}
