import { IUser } from "./user.interface";

export enum EnumLocalStorage {
  ACCESS_TOKEN = "accessToken",
  REFRESH_TOKEN = "refreshToken",
}

export interface ITokens {
  accessToken: string;
  refreshToken: string;
}

export interface IAuthResponse extends ITokens {
  user: IUser;
}

export interface IRegister extends Omit<IUser, "_id"> {
  password: string;
  confirmPassword: string;
}

export interface ILogin extends Pick<IUser, "name"> {
  password: string;
}
