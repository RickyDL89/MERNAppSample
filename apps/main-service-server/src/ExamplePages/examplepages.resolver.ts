import * as graphql from "@nestjs/graphql";
import { ExamplePagesService } from "./examplepages.service";

export class ExamplePagesResolver {
  constructor(protected readonly service: ExamplePagesService) {}
}
