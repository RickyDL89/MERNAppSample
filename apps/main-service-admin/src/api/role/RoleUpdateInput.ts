import { UserUpdateManyWithoutRolesInput } from "./UserUpdateManyWithoutRolesInput";

export type RoleUpdateInput = {
  roleName?: string | null;
  users?: UserUpdateManyWithoutRolesInput;
};
