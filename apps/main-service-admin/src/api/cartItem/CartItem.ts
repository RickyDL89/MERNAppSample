import { Cart } from "../cart/Cart";
import { Product } from "../product/Product";

export type CartItem = {
  cart?: Cart | null;
  createdAt: Date;
  id: string;
  product?: Product | null;
  quantity: number | null;
  reservedAt: Date | null;
  updatedAt: Date;
};
