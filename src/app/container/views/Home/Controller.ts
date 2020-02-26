import { Dispatch, createContext } from "react";
import { GetHomeDataAction } from './reducer'
// Clean Architecture
import { container } from "tsyringe";
import { HomePresenter } from "./Presenter";
import { isContext } from 'vm';

interface IContextProps {
  state: any
  dispatch: Dispatch<GetHomeDataAction>
}
const Context = createContext({} as IContextProps);
export const _fetchData = async() => {
  const presenter = container.resolve(HomePresenter);
  var results: any = await presenter.loadData(new Map<string, string>());
  ({ type: "SET_HOME", payload: results });
}
export default Context;
