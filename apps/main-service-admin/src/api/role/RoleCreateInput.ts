import { UserCreateNestedManyWithoutRolesInput } from "./UserCreateNestedManyWithoutRolesInput";

export type RoleCreateInput = {
  roleName?: string | null;
  users?: UserCreateNestedManyWithoutRolesInput;
};
