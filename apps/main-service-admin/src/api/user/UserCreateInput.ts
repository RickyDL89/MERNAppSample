import { CartCreateNestedManyWithoutUsersInput } from "./CartCreateNestedManyWithoutUsersInput";
import { PageCreateNestedManyWithoutUsersInput } from "./PageCreateNestedManyWithoutUsersInput";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  carts?: CartCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  pages?: PageCreateNestedManyWithoutUsersInput;
  password: string;
  role?: RoleWhereUniqueInput | null;
  roles: InputJsonValue;
  username: string;
};
