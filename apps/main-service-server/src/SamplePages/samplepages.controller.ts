import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { SamplePagesService } from "./samplepages.service";
import { UpdatePageInput } from "../samplePages/UpdatePageInput";
import { PageOutput } from "../samplePages/PageOutput";

@swagger.ApiTags("samplePages")
@common.Controller("samplePages")
export class SamplePagesController {
  constructor(protected readonly service: SamplePagesService) {}

  @common.Post("/sample-pages")
  @swagger.ApiOkResponse({
    type: PageOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateSamplePage(
    @common.Body()
    body: UpdatePageInput
  ): Promise<PageOutput> {
        return this.service.CreateSamplePage(body);
      }

  @common.Delete("/sample-pages/:id")
  @swagger.ApiOkResponse({
    type: PageOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async DeletePage(
    @common.Body()
    body: UpdatePageInput
  ): Promise<PageOutput> {
        return this.service.DeletePage(body);
      }

  @common.Get("/sample-pages")
  @swagger.ApiOkResponse({
    type: PageOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetAllPages(
    @common.Body()
    body: UpdatePageInput
  ): Promise<PageOutput[]> {
        return this.service.GetAllPages(body);
      }

  @common.Get("/sample-pages/:id")
  @swagger.ApiOkResponse({
    type: PageOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetPageById(
    @common.Body()
    body: UpdatePageInput
  ): Promise<PageOutput> {
        return this.service.GetPageById(body);
      }

  @common.Patch("/sample-pages/:id")
  @swagger.ApiOkResponse({
    type: PageOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdatePage(
    @common.Body()
    body: UpdatePageInput
  ): Promise<PageOutput> {
        return this.service.UpdatePage(body);
      }
}
