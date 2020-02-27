import { Book } from '@/domain/entities/Home';
import { CreateHomeRequest, UpdateHomeRequest } from '@/data/payload/api/HomeRequest';

export interface HomeRepositoryInterface {
  loadData(params: Map<string, string>): Promise<Book[]>;
  postData(payload: CreateHomeRequest): Promise<Book[]>;
  updateData(payload: UpdateHomeRequest, params: number): Promise<Book[]>;
  deleteData(params: number): Promise<Book[]>;
}
