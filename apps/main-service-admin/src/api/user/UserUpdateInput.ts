import { CartUpdateManyWithoutUsersInput } from "./CartUpdateManyWithoutUsersInput";
import { PageUpdateManyWithoutUsersInput } from "./PageUpdateManyWithoutUsersInput";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  carts?: CartUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  pages?: PageUpdateManyWithoutUsersInput;
  password?: string;
  role?: RoleWhereUniqueInput | null;
  roles?: InputJsonValue;
  username?: string;
};
