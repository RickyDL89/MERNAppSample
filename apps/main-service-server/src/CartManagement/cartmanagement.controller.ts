import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { CartManagementService } from "./cartmanagement.service";
import { CartItemOutput } from "../cartManagement/CartItemOutput";
import { CartOutput } from "../cartManagement/CartOutput";

@swagger.ApiTags("cartManagements")
@common.Controller("cartManagements")
export class CartManagementController {
  constructor(protected readonly service: CartManagementService) {}

  @common.Post("/cart/add-item")
  @swagger.ApiOkResponse({
    type: CartItemOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AddItemToCart(
    @common.Body()
    body: string
  ): Promise<CartItemOutput> {
        return this.service.AddItemToCart(body);
      }

  @common.Post("/cart/checkout")
  @swagger.ApiOkResponse({
    type: CartOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CheckoutCart(
    @common.Body()
    body: string
  ): Promise<CartOutput> {
        return this.service.CheckoutCart(body);
      }

  @common.Post("/cart/release-items")
  @swagger.ApiOkResponse({
    type: CartItemOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ReleaseReservedItems(
    @common.Body()
    body: string
  ): Promise<CartItemOutput> {
        return this.service.ReleaseReservedItems(body);
      }

  @common.Delete("/cart/remove-item/:id")
  @swagger.ApiOkResponse({
    type: CartItemOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async RemoveItemFromCart(
    @common.Body()
    body: string
  ): Promise<CartItemOutput> {
        return this.service.RemoveItemFromCart(body);
      }
}
