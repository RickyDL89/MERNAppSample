import { User } from "../user/User";

export type Page = {
  content: string | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
