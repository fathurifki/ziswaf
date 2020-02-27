import { DependencyContainer } from "tsyringe";

import { Endpoint } from "../misc/EndPoint";
import { HomeMapper } from "@/data/persistences/mappers/HomeMapper";
import ApiService from "../services/ApiServices";
import { HomeApiRepository } from "@/app/repositories/api/HomeApiRepository";

export class RepositoryModule {
  public static init(container: DependencyContainer) {
    container.register<HomeApiRepository>(HomeApiRepository, {
      useFactory: d => {
        return new HomeApiRepository(
          d.resolve(ApiService),
          d.resolve(HomeMapper),
          d.resolve(Endpoint)
        );
      }
    });
  }
}
