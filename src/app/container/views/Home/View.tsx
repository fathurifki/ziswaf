import React, { useEffect, useContext } from "react";
import { Wrapper, Page, Title } from "./styled";

import { HomeController, HomeContext } from "./Controller";

export interface HistoryParam {
  name: string;
}

const ChildComponent = () => {
  const controller = useContext(HomeContext);
  return (
    <div>
      {!controller.loading
        ? JSON.stringify(controller, null, 2)
        : "Loadingg................."}
    </div>
  );
};

const Home = () => {
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

export default Home;
