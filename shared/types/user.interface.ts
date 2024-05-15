export interface IUser {
  _id: string;
  name: string;
  surname: string;
  phone: string;
  role: "admin" | "user";
}
