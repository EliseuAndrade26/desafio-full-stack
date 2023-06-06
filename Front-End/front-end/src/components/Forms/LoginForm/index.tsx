import { SubmitHandler, useForm } from "react-hook-form";
import { loginSchema } from "../../../validations";
import { InputForm } from "../InputForm";
import { StyledForm } from "../../../styles/forms";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { ILoginData } from "../../../validations";
import { ButtonPrimaryLarge } from "../../../styles/buttons";
import { StyledDiv, StyledP } from "../RegisterForm/style";
import { zodResolver } from "@hookform/resolvers/zod";

export function LoginForm() {
  const { loginUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginData>({
    resolver: zodResolver(loginSchema),
  });

  const submit: SubmitHandler<ILoginData> = async (data) => {
    await loginUser(data);
  };
  return (
    <StyledForm onSubmit={handleSubmit(submit)} noValidate>
      <StyledDiv>
        <h2 className="subTitle">Login</h2>
      </StyledDiv>

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
        label="Senha:"
        type="password"
        placeholder="Digite sua senha"
        register={register("password")}
      />
      {errors.password?.message && (
        <StyledP className="subText" aria-label="error">
          {errors.password.message}
        </StyledP>
      )}
      <ButtonPrimaryLarge type="submit">Entrar</ButtonPrimaryLarge>
    </StyledForm>
  );
}
