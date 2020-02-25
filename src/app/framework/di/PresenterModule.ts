import { DependencyContainer } from "tsyringe";
import { HomeApiRepository } from '../../repositories/api/HomeApiRepository';
import { HomePresenter } from "../../container/presenters/HomePresenter";

export class PresenterModule {
    public static init(container: DependencyContainer) {
          container.register<HomePresenter>(HomePresenter, {
            useFactory: d => {
              return new HomePresenter(d.resolve(HomeApiRepository));
            }
          });
    }
}