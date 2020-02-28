import ApiService from "@/app/infrastructures/services/ApiServices";
import { Endpoint } from "@/app/infrastructures/misc/EndPoint";
import { Book } from "@/domain/entities/Home";
import { HomeMapper } from "@/data/persistences/mappers/HomeMapper";
import { HomeRepositoryInterface } from "@/data/persistences/contracts/HomeRepositoryInterface";
import {
  CreateHomeRequest,
  UpdateHomeRequest
} from "@/data/payload/api/HomeApiRequest";
import { CreateHomeRequestInterface, UpdateHomeRequestInterface } from '@/data/payload/contracts/HomeContract';

export class HomeApiRepository implements HomeRepositoryInterface {
  private service: ApiService;
  private mapper: HomeMapper;
  private endpoint: Endpoint;

  constructor(service: ApiService, mapper: HomeMapper, endpoint: Endpoint) {
    this.service = service;
    this.mapper = mapper;
    this.endpoint = endpoint;
  }

  public async loadData(params: Object): Promise<Book[]> {
    const resp = await this.service.invoke(
      "get",
      this.endpoint.bookUrl(),
      params
    );
    return this.mapper.convertFromApi(resp);
  }

  public async postData(payload: CreateHomeRequestInterface): Promise<any> {
    const resp = await this.service.invoke(
      "post",
      this.endpoint.bookUrl(),
      undefined,
      payload as CreateHomeRequest
    );
    return this.mapper.convertBaseResponseFromApi(resp);
  }

  public async updateData(
    payload: UpdateHomeRequestInterface,
    id: number
  ): Promise<any> {
    const resp = await this.service.invoke(
      "patch",
      `${this.endpoint.bookUrl()}/${id}`,
      undefined,
      payload as UpdateHomeRequest
    );
    return this.mapper.convertBaseResponseFromApi(resp);
  }

  public async deleteData(id:number): Promise<any> {
    const resp = await this.service.invoke(
      "delete",
      `${this.endpoint.bookUrl()}/${id}`,
      undefined
    );
    return this.mapper.convertBaseResponseFromApi(resp)
  }
}
