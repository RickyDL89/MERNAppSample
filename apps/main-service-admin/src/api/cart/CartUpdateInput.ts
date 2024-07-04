import { CartItemUpdateManyWithoutCartsInput } from "./CartItemUpdateManyWithoutCartsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CartUpdateInput = {
  cartItems?: CartItemUpdateManyWithoutCartsInput;
  totalPrice?: number | null;
  user?: UserWhereUniqueInput | null;
};
