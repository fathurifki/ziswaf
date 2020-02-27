import { DependencyContainer } from "tsyringe";
import { HomePresenter } from '@/app/container/views/Home/Presenter';
import { HomeApiRepository } from '@/app/repositories/api/HomeApiRepository';

export class PresenterModule {
  public static init(container: DependencyContainer) {
    container.register<HomePresenter>(HomePresenter, {
      useFactory: d => {
        return new HomePresenter(d.resolve(HomeApiRepository));
      }
    });
  }
}
