import { SortOrder } from "../../util/SortOrder";

export type CartItemOrderByInput = {
  cartId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  productId?: SortOrder;
  quantity?: SortOrder;
  reservedAt?: SortOrder;
  updatedAt?: SortOrder;
};
