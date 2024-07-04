import { Injectable } from "@nestjs/common";
import { CartItemInput } from "../cartManagement/CartItemInput";
import { CartItemOutput } from "../cartManagement/CartItemOutput";
import { CartInput } from "../cartManagement/CartInput";
import { CartOutput } from "../cartManagement/CartOutput";

@Injectable()
export class CartManagementService {
  constructor() {}
  async AddItemToCart(args: CartItemInput): Promise<CartItemOutput> {
    throw new Error("Not implemented");
  }
  async CheckoutCart(args: CartInput): Promise<CartOutput> {
    throw new Error("Not implemented");
  }
  async ReleaseReservedItems(args: string): Promise<CartItemOutput> {
    throw new Error("Not implemented");
  }
  async RemoveItemFromCart(args: string): Promise<CartItemOutput> {
    throw new Error("Not implemented");
  }
}
