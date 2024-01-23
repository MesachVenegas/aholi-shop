'use client'

import { redirect } from "next/navigation";

interface RoleGateProps {
  children: React.ReactNode;
  allowedRole: 'user' | 'admin';
  role: string;
}

const RoleGate = ({ children, allowedRole, role }: RoleGateProps) => {

  if(role !== allowedRole){
    redirect('/error')
  }

  return(
    <>
      {children}
    </>
  )

}

export default RoleGate