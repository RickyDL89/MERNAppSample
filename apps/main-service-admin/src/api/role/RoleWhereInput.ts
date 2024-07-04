import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type RoleWhereInput = {
  id?: StringFilter;
  roleName?: StringNullableFilter;
  users?: UserListRelationFilter;
};
