import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { VideoManagementService } from "./videomanagement.service";
import { UpdateVideoInput } from "../videoManagement/UpdateVideoInput";
import { VideoOutput } from "../videoManagement/VideoOutput";

@swagger.ApiTags("videoManagements")
@common.Controller("videoManagements")
export class VideoManagementController {
  constructor(protected readonly service: VideoManagementService) {}

  @common.Post("/videos")
  @swagger.ApiOkResponse({
    type: VideoOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateVideo(
    @common.Body()
    body: UpdateVideoInput
  ): Promise<VideoOutput> {
        return this.service.CreateVideo(body);
      }

  @common.Delete("/videos/:id")
  @swagger.ApiOkResponse({
    type: VideoOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async DeleteVideo(
    @common.Body()
    body: UpdateVideoInput
  ): Promise<VideoOutput> {
        return this.service.DeleteVideo(body);
      }

  @common.Get("/videos")
  @swagger.ApiOkResponse({
    type: VideoOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetAllVideos(
    @common.Body()
    body: UpdateVideoInput
  ): Promise<VideoOutput[]> {
        return this.service.GetAllVideos(body);
      }

  @common.Get("/videos/:id")
  @swagger.ApiOkResponse({
    type: VideoOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetVideoById(
    @common.Body()
    body: UpdateVideoInput
  ): Promise<VideoOutput> {
        return this.service.GetVideoById(body);
      }

  @common.Patch("/videos/:id")
  @swagger.ApiOkResponse({
    type: VideoOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateVideo(
    @common.Body()
    body: UpdateVideoInput
  ): Promise<VideoOutput> {
        return this.service.UpdateVideo(body);
      }
}
