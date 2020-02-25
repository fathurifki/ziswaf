import { DependencyContainer } from "tsyringe";
import ApiService from "../services/ApiServices";

import { HomeMapper } from '../../../data/persistences/mappers/HomeMapper'
import { HomeApiRepository } from '../../repositories/api/HomeApiRepository'

export class RepositoryModule {
    public static init(container: DependencyContainer) {
         container.register<HomeApiRepository>(HomeApiRepository, {
           useFactory: d => {
             return new HomeApiRepository(
               d.resolve(ApiService),
               d.resolve(HomeMapper)
             );
           }
         });
    }
}