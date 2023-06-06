import { LoginForm } from "../../components/Forms/LoginForm";
import { RegisterForm } from "../../components/Forms/RegisterForm";
import { StyledMain } from "./style";

export const LoginRegister = () => {
  return (
    <>
      <StyledMain>
        <div>
          <LoginForm />
          <RegisterForm />
        </div>
      </StyledMain>
    </>
  );
};
