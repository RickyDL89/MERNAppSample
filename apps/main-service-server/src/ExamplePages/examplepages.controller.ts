import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ExamplePagesService } from "./examplepages.service";

@swagger.ApiTags("examplePages")
@common.Controller("examplePages")
export class ExamplePagesController {
  constructor(protected readonly service: ExamplePagesService) {}
}
