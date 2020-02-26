import ApiService from "../../framework/services/ApiServices";
import { Endpoints } from "../../framework/misc/EndPoints";

import { Home } from "../../../domain/entities/Home";
import { HomeMapper } from "../../../data/persistences/mappers/HomeMapper";
import { HomeRepositoryInterface } from "../../../data/persistences/contracts/HomeContract";

export class HomeApiRepository implements HomeRepositoryInterface {
  private service: ApiService;
  private mapper: HomeMapper;

  constructor(service: ApiService, mapper: HomeMapper) {
    this.service = service;
    this.mapper = mapper;
  }
  
  public async loadData(params: Object): Promise<Home> {
    const Resp = await this.service.invoke("get", Endpoints.Route.HOME, params);
    return this.mapper.convertFromApi(Resp);
  }
}
