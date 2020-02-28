import { Book } from '@/domain/entities/Home';
import { CreateHomeRequestInterface, UpdateHomeRequestInterface } from '@/data/payload/contracts/HomeContract';

export interface HomeRepositoryInterface {
  loadData(params: Map<string, string>): Promise<Book[]>;
  postData(payload: CreateHomeRequestInterface ): Promise<Book[]>;
  updateData(payload: UpdateHomeRequestInterface, params: number): Promise<Book[]>;
  deleteData(params: number): Promise<Book[]>;
}
