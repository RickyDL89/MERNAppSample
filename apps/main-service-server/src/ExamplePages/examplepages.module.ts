import { Module } from "@nestjs/common";
import { ExamplePagesService } from "./examplepages.service";
import { ExamplePagesController } from "./examplepages.controller";
import { ExamplePagesResolver } from "./examplepages.resolver";

@Module({
  controllers: [ExamplePagesController],
  providers: [ExamplePagesService, ExamplePagesResolver],
  exports: [ExamplePagesService],
})
export class ExamplePagesModule {}
