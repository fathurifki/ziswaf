import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import history from "../../../../utils/BrowserHistory";

//import Actions
import * as HomeActions from "./actions";

// import Selectors
import * as HomeSelector from "./selectors";

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
const Navigation = styled.div`
  display: flex;
  flex-direction: row;
`;
const NavText = styled.nav`
  font-size: 1.5em;
  margin-right: 3px;
  color: black;
`;
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Page = styled.div`
  display: flex;
`;

export interface HistoryParam {
  name: string;
}

const Homes = () => {
  // Actions
  const dispatch = useDispatch();
  const onHomeData = () => dispatch(HomeActions.getHomesData());

  // Selectors
  const homeList = useSelector(HomeSelector.getHomeList())

  //Effect
  useEffect(() => {
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

export default Homes;
