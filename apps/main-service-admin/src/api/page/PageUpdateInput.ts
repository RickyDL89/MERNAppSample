import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PageUpdateInput = {
  content?: string | null;
  user?: UserWhereUniqueInput | null;
};
