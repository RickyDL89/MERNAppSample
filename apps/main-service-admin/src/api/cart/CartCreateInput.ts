import { CartItemCreateNestedManyWithoutCartsInput } from "./CartItemCreateNestedManyWithoutCartsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CartCreateInput = {
  cartItems?: CartItemCreateNestedManyWithoutCartsInput;
  totalPrice?: number | null;
  user?: UserWhereUniqueInput | null;
};
