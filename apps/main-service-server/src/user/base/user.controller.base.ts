/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { UserService } from "../user.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { UserCreateInput } from "./UserCreateInput";
import { User } from "./User";
import { UserFindManyArgs } from "./UserFindManyArgs";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";
import { UserUpdateInput } from "./UserUpdateInput";
import { CartFindManyArgs } from "../../cart/base/CartFindManyArgs";
import { Cart } from "../../cart/base/Cart";
import { CartWhereUniqueInput } from "../../cart/base/CartWhereUniqueInput";
import { PageFindManyArgs } from "../../page/base/PageFindManyArgs";
import { Page } from "../../page/base/Page";
import { PageWhereUniqueInput } from "../../page/base/PageWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class UserControllerBase {
  constructor(
    protected readonly service: UserService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: User })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createUser(@common.Body() data: UserCreateInput): Promise<User> {
    return await this.service.createUser({
      data: {
        ...data,

        role: data.role
          ? {
              connect: data.role,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,

        role: {
          select: {
            id: true,
          },
        },

        roles: true,
        updatedAt: true,
        username: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [User] })
  @ApiNestedQuery(UserFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async users(@common.Req() request: Request): Promise<User[]> {
    const args = plainToClass(UserFindManyArgs, request.query);
    return this.service.users({
      ...args,
      select: {
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,

        role: {
          select: {
            id: true,
          },
        },

        roles: true,
        updatedAt: true,
        username: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async user(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    const result = await this.service.user({
      where: params,
      select: {
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,

        role: {
          select: {
            id: true,
          },
        },

        roles: true,
        updatedAt: true,
        username: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateUser(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() data: UserUpdateInput
  ): Promise<User | null> {
    try {
      return await this.service.updateUser({
        where: params,
        data: {
          ...data,

          role: data.role
            ? {
                connect: data.role,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          email: true,
          firstName: true,
          id: true,
          lastName: true,

          role: {
            select: {
              id: true,
            },
          },

          roles: true,
          updatedAt: true,
          username: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteUser(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    try {
      return await this.service.deleteUser({
        where: params,
        select: {
          createdAt: true,
          email: true,
          firstName: true,
          id: true,
          lastName: true,

          role: {
            select: {
              id: true,
            },
          },

          roles: true,
          updatedAt: true,
          username: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/carts")
  @ApiNestedQuery(CartFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Cart",
    action: "read",
    possession: "any",
  })
  async findCarts(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Cart[]> {
    const query = plainToClass(CartFindManyArgs, request.query);
    const results = await this.service.findCarts(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        totalPrice: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/carts")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectCarts(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: CartWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      carts: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/carts")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateCarts(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: CartWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      carts: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/carts")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectCarts(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: CartWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      carts: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/pages")
  @ApiNestedQuery(PageFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Page",
    action: "read",
    possession: "any",
  })
  async findPages(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Page[]> {
    const query = plainToClass(PageFindManyArgs, request.query);
    const results = await this.service.findPages(params.id, {
      ...query,
      select: {
        content: true,
        createdAt: true,
        id: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/pages")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectPages(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: PageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      pages: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/pages")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updatePages(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: PageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      pages: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/pages")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectPages(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: PageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      pages: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }
}
