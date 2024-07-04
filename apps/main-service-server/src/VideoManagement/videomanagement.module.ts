import { Module } from "@nestjs/common";
import { VideoManagementService } from "./videomanagement.service";
import { VideoManagementController } from "./videomanagement.controller";
import { VideoManagementResolver } from "./videomanagement.resolver";

@Module({
  controllers: [VideoManagementController],
  providers: [VideoManagementService, VideoManagementResolver],
  exports: [VideoManagementService],
})
export class VideoManagementModule {}
