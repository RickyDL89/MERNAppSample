/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CartItem } from "./CartItem";
import { CartItemCountArgs } from "./CartItemCountArgs";
import { CartItemFindManyArgs } from "./CartItemFindManyArgs";
import { CartItemFindUniqueArgs } from "./CartItemFindUniqueArgs";
import { CreateCartItemArgs } from "./CreateCartItemArgs";
import { UpdateCartItemArgs } from "./UpdateCartItemArgs";
import { DeleteCartItemArgs } from "./DeleteCartItemArgs";
import { Cart } from "../../cart/base/Cart";
import { Product } from "../../product/base/Product";
import { CartItemService } from "../cartItem.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CartItem)
export class CartItemResolverBase {
  constructor(
    protected readonly service: CartItemService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "CartItem",
    action: "read",
    possession: "any",
  })
  async _cartItemsMeta(
    @graphql.Args() args: CartItemCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [CartItem])
  @nestAccessControl.UseRoles({
    resource: "CartItem",
    action: "read",
    possession: "any",
  })
  async cartItems(
    @graphql.Args() args: CartItemFindManyArgs
  ): Promise<CartItem[]> {
    return this.service.cartItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => CartItem, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "CartItem",
    action: "read",
    possession: "own",
  })
  async cartItem(
    @graphql.Args() args: CartItemFindUniqueArgs
  ): Promise<CartItem | null> {
    const result = await this.service.cartItem(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => CartItem)
  @nestAccessControl.UseRoles({
    resource: "CartItem",
    action: "create",
    possession: "any",
  })
  async createCartItem(
    @graphql.Args() args: CreateCartItemArgs
  ): Promise<CartItem> {
    return await this.service.createCartItem({
      ...args,
      data: {
        ...args.data,

        cart: args.data.cart
          ? {
              connect: args.data.cart,
            }
          : undefined,

        product: args.data.product
          ? {
              connect: args.data.product,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => CartItem)
  @nestAccessControl.UseRoles({
    resource: "CartItem",
    action: "update",
    possession: "any",
  })
  async updateCartItem(
    @graphql.Args() args: UpdateCartItemArgs
  ): Promise<CartItem | null> {
    try {
      return await this.service.updateCartItem({
        ...args,
        data: {
          ...args.data,

          cart: args.data.cart
            ? {
                connect: args.data.cart,
              }
            : undefined,

          product: args.data.product
            ? {
                connect: args.data.product,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => CartItem)
  @nestAccessControl.UseRoles({
    resource: "CartItem",
    action: "delete",
    possession: "any",
  })
  async deleteCartItem(
    @graphql.Args() args: DeleteCartItemArgs
  ): Promise<CartItem | null> {
    try {
      return await this.service.deleteCartItem(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Cart, {
    nullable: true,
    name: "cart",
  })
  @nestAccessControl.UseRoles({
    resource: "Cart",
    action: "read",
    possession: "any",
  })
  async getCart(@graphql.Parent() parent: CartItem): Promise<Cart | null> {
    const result = await this.service.getCart(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Product, {
    nullable: true,
    name: "product",
  })
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "read",
    possession: "any",
  })
  async getProduct(
    @graphql.Parent() parent: CartItem
  ): Promise<Product | null> {
    const result = await this.service.getProduct(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
