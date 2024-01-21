
export interface UserProps {
  id: string;
  image?: string;
  name: string;
  email: string;
  password: string;
  validate: boolean;
}

export type UserProfileProps = {
  id: string;
  name: string;
  email: string
  emailVerified: Date
  image: string;
  password: string;
  role: string
  created_at: Date
  updated_at: Date
}

export type RegisterFormProps = {
  name: string;
  email: string;
  password: string;
}

export type LoginFormProps = {
  email: string;
  password: string;
}