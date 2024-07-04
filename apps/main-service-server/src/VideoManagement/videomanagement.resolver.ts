import * as graphql from "@nestjs/graphql";
import { CreateVideoInput } from "../videoManagement/CreateVideoInput";
import { VideoOutput } from "../videoManagement/VideoOutput";
import { UpdateVideoInput } from "../videoManagement/UpdateVideoInput";
import { VideoManagementService } from "./videomanagement.service";

export class VideoManagementResolver {
  constructor(protected readonly service: VideoManagementService) {}

  @graphql.Mutation(() => VideoOutput)
  async CreateVideo(
    @graphql.Args()
    args: CreateVideoInput
  ): Promise<VideoOutput> {
    return this.service.CreateVideo(args);
  }

  @graphql.Mutation(() => VideoOutput)
  async DeleteVideo(
    @graphql.Args()
    args: string
  ): Promise<VideoOutput> {
    return this.service.DeleteVideo(args);
  }

  @graphql.Query(() => [VideoOutput])
  async GetAllVideos(
    @graphql.Args()
    args: string
  ): Promise<VideoOutput[]> {
    return this.service.GetAllVideos(args);
  }

  @graphql.Query(() => VideoOutput)
  async GetVideoById(
    @graphql.Args()
    args: string
  ): Promise<VideoOutput> {
    return this.service.GetVideoById(args);
  }

  @graphql.Mutation(() => VideoOutput)
  async UpdateVideo(
    @graphql.Args()
    args: UpdateVideoInput
  ): Promise<VideoOutput> {
    return this.service.UpdateVideo(args);
  }
}
