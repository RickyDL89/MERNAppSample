import * as graphql from "@nestjs/graphql";
import { CartItemInput } from "../cartManagement/CartItemInput";
import { CartItemOutput } from "../cartManagement/CartItemOutput";
import { CartInput } from "../cartManagement/CartInput";
import { CartOutput } from "../cartManagement/CartOutput";
import { CartManagementService } from "./cartmanagement.service";

export class CartManagementResolver {
  constructor(protected readonly service: CartManagementService) {}

  @graphql.Mutation(() => CartItemOutput)
  async AddItemToCart(
    @graphql.Args()
    args: CartItemInput
  ): Promise<CartItemOutput> {
    return this.service.AddItemToCart(args);
  }

  @graphql.Mutation(() => CartOutput)
  async CheckoutCart(
    @graphql.Args()
    args: CartInput
  ): Promise<CartOutput> {
    return this.service.CheckoutCart(args);
  }

  @graphql.Mutation(() => CartItemOutput)
  async ReleaseReservedItems(
    @graphql.Args()
    args: string
  ): Promise<CartItemOutput> {
    return this.service.ReleaseReservedItems(args);
  }

  @graphql.Mutation(() => CartItemOutput)
  async RemoveItemFromCart(
    @graphql.Args()
    args: string
  ): Promise<CartItemOutput> {
    return this.service.RemoveItemFromCart(args);
  }
}
