import * as z from 'zod';

export const LoginSchema = z.object({
  email: z.string()
  .email({
    message: "Correo invalido"
  }),
  password: z.string()
  .min(1, {
    message: "Ingresa la contraseña"
  })
});

export const ResetPasswordSchema = z.object({
  email: z.string()
    .email({
      message: "Correo invalido"
    })
})

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "La contraseña debe contener al menos 6 caracteres"
  })
})

export const RegisterSchema = z.object({
  name: z.string({
    required_error: "Este campo es requerido"
  })
  .min(3, {
    message: "Ingresa un nombre valido"
  }),
  email: z.string({
    required_error: "Este campo es requerido"
  })
  .email({
    message: "Correo invalido"
  }),
  password: z.string()
  .min(6, {
    message: "La contraseña debe contener al menos 6 caracteres"
  })
})

export const AddProductSchema = z.object({
  name: z.string().min(1,{
    message: "Este campo es requerido"
  }),
  price: z.string(),
  sizeId: z.string(),
  categoryId: z.string(),
  description: z.string(),
  images: z.any()
})