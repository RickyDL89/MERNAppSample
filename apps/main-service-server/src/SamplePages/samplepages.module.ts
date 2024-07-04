import { Module } from "@nestjs/common";
import { SamplePagesService } from "./samplepages.service";
import { SamplePagesController } from "./samplepages.controller";
import { SamplePagesResolver } from "./samplepages.resolver";

@Module({
  controllers: [SamplePagesController],
  providers: [SamplePagesService, SamplePagesResolver],
  exports: [SamplePagesService],
})
export class SamplePagesModule {}
