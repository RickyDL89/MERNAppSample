import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PageCreateInput = {
  content?: string | null;
  user?: UserWhereUniqueInput | null;
};
