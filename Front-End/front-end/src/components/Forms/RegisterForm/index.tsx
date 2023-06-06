import { useForm, SubmitHandler } from "react-hook-form";
import { registerUserSchema } from "../../../validations";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { IRegisterUserData } from "../../../validations";
import { InputForm } from "../InputForm";
import { StyledForm } from "../../../styles/forms";
import { ButtonPrimaryLarge } from "../../../styles/buttons";
import { StyledDiv, StyledP } from "./style";
import { zodResolver } from "@hookform/resolvers/zod";

export function RegisterForm() {
  const { createUser, loading } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterUserData>({
    resolver: zodResolver(registerUserSchema),
  });

  const submit: SubmitHandler<IRegisterUserData> = async (data) => {
    createUser(data);
  };

  if (loading) {
    return null;
  }

  return (
    <StyledForm onSubmit={handleSubmit(submit)} noValidate>
      <StyledDiv>
        <h2 className="subTitle">Cadastro</h2>
      </StyledDiv>
      <InputForm
        label="Nome Completo:"
        type="text"
        placeholder="Digite seu nome Completo"
        register={register("fullName")}
      />
      {errors.fullName?.message && (
        <StyledP className="subText">{errors.fullName.message}</StyledP>
      )}
      <InputForm
        label="E-mail:"
        type="email"
        placeholder="Digite seu e-mail"
        register={register("email")}
      />
      {errors.email?.message && (
        <StyledP className="subText" aria-label="error">
          {errors.email.message}
        </StyledP>
      )}
      <InputForm
        label="Telefone:"
        type="text"
        placeholder="Digite seu telefone"
        register={register("foneNumber")}
      />
      {errors.foneNumber?.message && (
        <StyledP className="subText" aria-label="error">
          {errors.foneNumber.message}
        </StyledP>
      )}
      <InputForm
        label="Senha:"
        type="password"
        placeholder="Crie sua senha"
        register={register("password")}
      />
      {errors.password?.message && (
        <StyledP className="subText" aria-label="error">
          {errors.password.message}
        </StyledP>
      )}
      <ButtonPrimaryLarge type="submit">Cadastrar</ButtonPrimaryLarge>
    </StyledForm>
  );
}
