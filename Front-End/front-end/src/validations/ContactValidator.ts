import { DeepPartial } from "react-hook-form";
import { z } from "zod";

export const RegisterContactData = z.object({
  fullName: z
    .string()
    .nonempty("Nome completo é obrigatório")
    .max(150, "Seu nome completo não pode passar de 150 caracteres"),
  email: z
    .string()
    .nonempty("Email é obrigatório")
    .email("Deve ser um email valido"),
  foneNumber: z
    .string()
    .min(9, "Seu número de telefone deve ter no mínimo 9 números")
    .max(11, "Seu número de telefone deve ter no máximo 11 números")
    .regex(/^[0-9]+$/),
});

export type IRegisterContactData = z.infer<typeof RegisterContactData>;

export type IUpdateContactData = DeepPartial<IRegisterContactData>;
