import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { iChildren } from "./types";
import { IRegisterContactData } from "../validations";

interface iContactContextProps {
  createContact(dataForm: IRegisterContactData): Promise<void>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

interface iContactInfo {
  id: string;
  fullName: string;
  email: string;
  foneNumber: string;
  user: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

export const ContactContext = createContext({} as iContactContextProps);

export const ContactProvider = ({ children }: iChildren) => {
  const [loading, setLoading] = useState(false);

  const token: string | null = localStorage.getItem("MyContacts:token");

  const createContact = async (dataForm: IRegisterContactData) => {
    try {
      await api.post<iContactInfo>("contact", dataForm, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Contato criado com sucesso!");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <ContactContext.Provider value={{ createContact, loading, setLoading }}>
      {children}
    </ContactContext.Provider>
  );
};
