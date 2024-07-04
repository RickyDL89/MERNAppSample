import { CartItem } from "../cartItem/CartItem";
import { User } from "../user/User";

export type Cart = {
  cartItems?: Array<CartItem>;
  createdAt: Date;
  id: string;
  totalPrice: number | null;
  updatedAt: Date;
  user?: User | null;
};
