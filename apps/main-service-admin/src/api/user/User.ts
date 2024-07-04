import { Cart } from "../cart/Cart";
import { Page } from "../page/Page";
import { Role } from "../role/Role";
import { JsonValue } from "type-fest";

export type User = {
  carts?: Array<Cart>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  pages?: Array<Page>;
  role?: Role | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
