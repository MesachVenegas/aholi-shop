'use client'

import { Suspense, useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { BeatLoader } from "react-spinners";

import CardWrapper from "@/components/auth/card-wrapper";
import { verifyEmail } from "@/actions/verification";
import FormError from '@/components/form-error';
import FormSuccess from "../form-success";


const VerificationForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const [isPending, setIsPending] = useState<boolean>(true);
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const handleSubmit = useCallback( () => {
    if(success || error) return;

    if(!token){
      setError("Token perdido")
      return;
    }

    verifyEmail(token)
      .then( res => {
        console.log(res);
        setSuccess(res.success);
        setIsPending(false);
      }). catch( (error) => {
        setIsPending(false);
        setError(error.message)
      })
  },[token, success, error])

  useEffect(() => {
    if(!success){
      handleSubmit()
    }
  },[handleSubmit, success])

  return (
    <div className="flex justify-center items-center w-full p-16">
      <CardWrapper
        headerLabel="Confirmando correo"
        backButtonLabel="Iniciar session"
        backButtonHref="/auth/login"
      >
          <div className="flex items-center justify-center w-full">
            <BeatLoader loading={isPending} />
            <FormSuccess message={success} />
            {
              !success && (
                <FormError message={error} />
              )
            }
          </div>
      </CardWrapper>
    </div>
  )
}

export default VerificationForm