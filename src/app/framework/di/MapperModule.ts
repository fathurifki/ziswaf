import { DependencyContainer } from "tsyringe";
import { HomeMapper } from '@/data/persistences/mappers/HomeMapper';

export class MapperModule {
  public static init(container: DependencyContainer) {
    container.register<HomeMapper>(HomeMapper, {
      useClass: HomeMapper
    });
  }
}
