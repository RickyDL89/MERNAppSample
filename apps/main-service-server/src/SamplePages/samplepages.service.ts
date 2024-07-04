import { Injectable } from "@nestjs/common";
import { CreatePageInput } from "../samplePages/CreatePageInput";
import { PageOutput } from "../samplePages/PageOutput";
import { UpdatePageInput } from "../samplePages/UpdatePageInput";

@Injectable()
export class SamplePagesService {
  constructor() {}
  async CreateSamplePage(args: CreatePageInput): Promise<PageOutput> {
    throw new Error("Not implemented");
  }
  async DeletePage(args: string): Promise<PageOutput> {
    throw new Error("Not implemented");
  }
  async GetAllPages(args: string): Promise<PageOutput[]> {
    throw new Error("Not implemented");
  }
  async GetPageById(args: string): Promise<PageOutput> {
    throw new Error("Not implemented");
  }
  async UpdatePage(args: UpdatePageInput): Promise<PageOutput> {
    throw new Error("Not implemented");
  }
}
