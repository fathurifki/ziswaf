import { injectable } from 'tsyringe';
import { Home } from '../../../../domain/entities/Home';
import { HomeRepositoryInterface } from '../../../../data/persistences/contracts/HomeRepositoryInterface';

@injectable()
export class HomePresenter {
  private repository: HomeRepositoryInterface

  constructor(repository: HomeRepositoryInterface) {
      this.repository = repository
  }

  public loadData(params: Map<string, string>): Promise<Array<Home>> {
      return this.repository.loadData(params)
  }
}