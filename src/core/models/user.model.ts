export class User {
  id: number = 0;
  email?: string;
  userName?: string;
  fullName?: string;
}

export enum UserType {
  Admin,
  User,
}
