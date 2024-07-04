import { CartItem } from "../cartItem/CartItem";

export type Product = {
  cartItems?: Array<CartItem>;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  price: number | null;
  quantity: number | null;
  updatedAt: Date;
};
