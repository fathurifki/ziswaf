import ApiService from "../../framework/services/ApiServices";
import { Endpoint } from "../../framework/misc/EndPoint";

import { Home } from "../../../domain/entities/Home";
import { HomeMapper } from "../../../data/persistences/mappers/HomeMapper";
import { HomeRepositoryInterface } from "../../../data/persistences/contracts/HomeRepositoryInterface";

export class HomeApiRepository implements HomeRepositoryInterface {
  private service: ApiService;
  private mapper: HomeMapper;
  private endpoint: Endpoint;

  constructor(service: ApiService, mapper: HomeMapper, endpoint: Endpoint) {
    this.service = service;
    this.mapper = mapper;
    this.endpoint = endpoint;
  }
  
  public async loadData(params: Object): Promise<Home> {
    const resp = await this.service.invoke("get", this.endpoint.homeUrl(), params);
    return this.mapper.convertFromApi(resp);
  }
}
