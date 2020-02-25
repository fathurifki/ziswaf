import { injectable } from 'tsyringe';
import { HomeApiRepository } from '../../repositories/api/HomeApiRepository';
import { Home } from '../../../domain/entities/Home';

@injectable()
export class HomePresenter {
  private repository: HomeApiRepository

  constructor(repository: HomeApiRepository) {
      this.repository = repository
  }

  public loadData(params:Object): Promise<Home> {
      return this.repository.loadData(params)
  }
}