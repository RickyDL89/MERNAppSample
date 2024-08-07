/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CartItemUpdateManyWithoutCartsInput } from "./CartItemUpdateManyWithoutCartsInput";
import {
  ValidateNested,
  IsOptional,
  IsNumber,
  Min,
  Max,
} from "class-validator";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class CartUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CartItemUpdateManyWithoutCartsInput,
  })
  @ValidateNested()
  @Type(() => CartItemUpdateManyWithoutCartsInput)
  @IsOptional()
  @Field(() => CartItemUpdateManyWithoutCartsInput, {
    nullable: true,
  })
  cartItems?: CartItemUpdateManyWithoutCartsInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  totalPrice?: number | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;
}

export { CartUpdateInput as CartUpdateInput };
