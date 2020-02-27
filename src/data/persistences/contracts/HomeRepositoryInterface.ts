import { Home } from '@/domain/entities/Home';

export interface HomeRepositoryInterface {
  loadData(params: Map<string, string>): Promise<Home[]>;
}
