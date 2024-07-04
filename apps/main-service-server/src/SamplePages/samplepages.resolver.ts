import * as graphql from "@nestjs/graphql";
import { CreatePageInput } from "../samplePages/CreatePageInput";
import { PageOutput } from "../samplePages/PageOutput";
import { UpdatePageInput } from "../samplePages/UpdatePageInput";
import { SamplePagesService } from "./samplepages.service";

export class SamplePagesResolver {
  constructor(protected readonly service: SamplePagesService) {}

  @graphql.Mutation(() => PageOutput)
  async CreateSamplePage(
    @graphql.Args()
    args: CreatePageInput
  ): Promise<PageOutput> {
    return this.service.CreateSamplePage(args);
  }

  @graphql.Mutation(() => PageOutput)
  async DeletePage(
    @graphql.Args()
    args: string
  ): Promise<PageOutput> {
    return this.service.DeletePage(args);
  }

  @graphql.Query(() => [PageOutput])
  async GetAllPages(
    @graphql.Args()
    args: string
  ): Promise<PageOutput[]> {
    return this.service.GetAllPages(args);
  }

  @graphql.Query(() => PageOutput)
  async GetPageById(
    @graphql.Args()
    args: string
  ): Promise<PageOutput> {
    return this.service.GetPageById(args);
  }

  @graphql.Mutation(() => PageOutput)
  async UpdatePage(
    @graphql.Args()
    args: UpdatePageInput
  ): Promise<PageOutput> {
    return this.service.UpdatePage(args);
  }
}
