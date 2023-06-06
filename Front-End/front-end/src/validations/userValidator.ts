import { DeepPartial } from "react-hook-form";
import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .nonempty("Email é obrigatório")
    .email("Deve ser um email valido"),
  password: z
    .string()
    .nonempty("Senha é obrigatória")
    .min(6, "Deve ter ao menos 6 caracteres")
    .regex(/[0-9]/, "Deve conter ao menos 1 número")
    .regex(/\W|_/, "Deve conter ao menos 1 caractere especial"),
});

export const registerUserSchema = loginSchema.extend({
  fullName: z
    .string()
    .nonempty("Nome completo é obrigatório")
    .max(150, "Seu nome completo não pode passar de 150 caracteres"),
  foneNumber: z
    .string()
    .min(9, "Seu número de telefone deve ter no mínimo 9 números")
    .max(11, "Seu número de telefone deve ter no máximo 11 números")
    .regex(/^[0-9]+$/),
});

export type ILoginData = z.infer<typeof loginSchema>;

export type IRegisterUserData = z.infer<typeof registerUserSchema>;

export type IUpdateData = DeepPartial<IRegisterUserData>;
