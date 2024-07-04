import { CartWhereUniqueInput } from "../cart/CartWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type CartItemCreateInput = {
  cart?: CartWhereUniqueInput | null;
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
  reservedAt?: Date | null;
};
