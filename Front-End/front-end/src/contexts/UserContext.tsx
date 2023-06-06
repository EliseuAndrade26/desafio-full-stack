import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { iChildren } from "./types";
import { IRegisterUserData, ILoginData } from "../validations";

interface iUserContextProps {
  createUser(dataForm: IRegisterUserData): Promise<void>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loginUser(dataForm: ILoginData): Promise<void>;
  user: iUserInfo;
}

interface iUserInfo {
  id: string;
  fullName: string;
  email: string;
  foneNumber: string;
  contacts: [];
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

interface iLoginUserResponse {
  token: string;
}

export const UserContext = createContext({} as iUserContextProps);

export const UserProvider = ({ children }: iChildren) => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [verify, setVerify] = useState(false);
  const [user, setUser] = useState({} as iUserInfo);

  useEffect(() => {
    const token = localStorage.getItem("MyContacts:token");
    const verifyToken = async () => {
      const userResponse = await api.get("users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (userResponse.data) {
        setVerify(true);
      }
      console.log(userResponse.data);
    };

    verifyToken();

    if (verify === true) {
      navigate("/");
    }

    api.defaults.headers.common.authorization = `Bearer ${token}`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createUser = async (dataForm: IRegisterUserData) => {
    try {
      const createResponse = await api.post<iUserInfo>("users", dataForm);
      const loginResponse = await api.post<iLoginUserResponse>("login", {
        email: dataForm.email,
        password: dataForm.password,
      });
      setUser(createResponse.data);
      toast.success("Usuário criado com sucesso!");
      localStorage.setItem("MyContacts:token", loginResponse.data.token);
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  async function loginUser(dataForm: ILoginData) {
    try {
      const loginResponse = await api.post<iLoginUserResponse>(
        "login",
        dataForm
      );
      const userResponse = await api.get("users", {
        headers: {
          Authorization: `Bearer ${loginResponse.data.token}`,
        },
      });
      setUser(userResponse.data);
      toast.success("Usuário logado com sucesso!");
      localStorage.setItem("MyContacts:token", loginResponse.data.token);
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  }

  return (
    <UserContext.Provider
      value={{ createUser, loginUser, loading, setLoading, user }}
    >
      {children}
    </UserContext.Provider>
  );
};
