import { CartItemListRelationFilter } from "../cartItem/CartItemListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CartWhereInput = {
  cartItems?: CartItemListRelationFilter;
  id?: StringFilter;
  totalPrice?: FloatNullableFilter;
  user?: UserWhereUniqueInput;
};
