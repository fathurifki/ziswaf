import React, { useContext } from "react";
import { Wrapper, Page, Title } from "./style";

import { HomeController, HomeContext } from "./Controller";
export interface HistoryParam {
  name: string;
}

const ChildComponent = () => {
  const controller = useContext(HomeContext);
  return (
    <div>
      {!controller.loading
        ? controller.data.map((item, index) => {
          return (
            <h1 key={index}>{item.name}</h1>
          )
        })
        : "Loadingg................."}
    </div>
  );
};

const HomeApp = () => {
  return (
    <HomeController>
      <Wrapper>
        <Title>This is home</Title>
        <Page>
          <ChildComponent />
        </Page>
      </Wrapper>
    </HomeController>
  );
};

export default HomeApp;
