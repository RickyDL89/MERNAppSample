import { User } from "../user/User";

export type Role = {
  createdAt: Date;
  id: string;
  roleName: string | null;
  updatedAt: Date;
  users?: Array<User>;
};
