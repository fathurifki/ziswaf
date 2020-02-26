import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

// Styled
import { Wrapper, Page, Title } from './styled';

//import Actions
import * as HomeActions from "./actions";

// import Selectors
import * as HomeSelector from "./selectors";

export interface HistoryParam {
  name: string;
}

const Home = () => {
  // Actions
  const dispatch = useDispatch();
  const onHomeData = () => dispatch(HomeActions.getHomesData());
  const onLoad = () => {
    
  };

  const onBlur = () => {
    
  };

  // Selectors
  const homeList = useSelector(HomeSelector.getHomeList())

  //Effect
  useEffect(() => {
    onLoad();
    onHomeData()
  }, []);

  return (
    <Wrapper>
      <Title>This is home</Title>
      <Page>
        <ul>
          {
            homeList.length>0&&homeList.map(function(item, i) {
            return (<li key={i}>{item.name}</li>)
            })
          }
        </ul>
      </Page>
    </Wrapper>
  );
};

export default Home;
