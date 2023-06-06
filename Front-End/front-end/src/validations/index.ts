import {
  loginSchema,
  registerUserSchema,
  ILoginData,
  IRegisterUserData,
  IUpdateData,
} from "./userValidator";

import {
  RegisterContactData,
  IRegisterContactData,
  IUpdateContactData,
} from "./ContactValidator";

export { loginSchema, registerUserSchema, RegisterContactData };
export type {
  ILoginData,
  IRegisterUserData,
  IUpdateData,
  IRegisterContactData,
  IUpdateContactData,
};
