import { Injectable } from "@nestjs/common";
import { CreateVideoInput } from "../videoManagement/CreateVideoInput";
import { VideoOutput } from "../videoManagement/VideoOutput";
import { UpdateVideoInput } from "../videoManagement/UpdateVideoInput";

@Injectable()
export class VideoManagementService {
  constructor() {}
  async CreateVideo(args: CreateVideoInput): Promise<VideoOutput> {
    throw new Error("Not implemented");
  }
  async DeleteVideo(args: string): Promise<VideoOutput> {
    throw new Error("Not implemented");
  }
  async GetAllVideos(args: string): Promise<VideoOutput[]> {
    throw new Error("Not implemented");
  }
  async GetVideoById(args: string): Promise<VideoOutput> {
    throw new Error("Not implemented");
  }
  async UpdateVideo(args: UpdateVideoInput): Promise<VideoOutput> {
    throw new Error("Not implemented");
  }
}
