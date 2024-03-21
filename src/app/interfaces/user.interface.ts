export interface IUserRegister {
    email: string;
    password: string;
}

export interface IUser extends Omit<IUserRegister, "password"> {
  firstName: string;
  lastName: string;
  token: string;
}
