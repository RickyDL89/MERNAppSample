import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type VideoWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
  url?: StringNullableFilter;
};
