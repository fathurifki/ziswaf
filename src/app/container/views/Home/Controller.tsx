import React, { useEffect, useState } from "react";
import { container } from "tsyringe";
import { Home } from '@/domain/entities/Home';
import { HomePresenter } from './Presenter';

interface IinitialState {
  data: Home[];
  loading: Boolean;
}

const initialState = {
  data: [],
  loading: false
};

export const HomeContext = React.createContext<IinitialState>(
  initialState
);

export const {
  Provider: HomeProvider,
  Consumer: HomeConsumer
} = HomeContext;

export const HomeController = ({ children }) => {
  const [data, setData] = useState<Array<Home>>([]);
  const [loading, setLoading] = useState<Boolean>(false);
  const homePresenter: HomePresenter = container.resolve(HomePresenter);

  useEffect(() => {
    onGetData();
  }, []);

  const onGetData = async () => {
    setLoading(true);
    const homeData = await homePresenter.loadData(new Map<string, string>());
    setData(homeData);
    setLoading(false);
  };



  return <HomeProvider value={{ data, loading }}>{children}</HomeProvider>;
};