import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import history from "../../../../utils/BrowserHistory";

//import Actions
import * as HomesActions from "./actions";

// import Selectors
import * as HomesSelector from "./selectors";

// Clean Architecture
import { container } from "tsyringe";
import   { HomePresenter }   from "../../presenters/HomePresenter";
import { Home } from '../../../../domain/entities/Home';

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

  async function  onTest() {
    const presenter = await container.resolve(HomePresenter)
    presenter
      .loadData({})
      .then((res: Home) => {
        console.log('RESPONSE ACTION ==>', res);
      })
      .catch((err) => {
        console.log('RESPONSE ERRORR ==>', err);
      })
  }
  // Actions
  const dispatch = useDispatch();
  const onUserList = () => dispatch(HomesActions.fetchUserData());

  // Selectors
  const userList = useSelector(HomesSelector.getListUser())

  //Effect
  useEffect(() => {
    onTest()
  }, []);

  function test(i: string) {
    return history.push(i);
  }

  console.log('USER', userList)

  return (
    <Wrapper>
      <Navigation>
        <NavText onClick={() => test("/")}> * Homes </NavText>
        <NavText onClick={() => test("/profile")}> * Profile </NavText>
        <NavText onClick={() => test("/contacts")}> * Contacts </NavText>
      </Navigation>
      <Title>This is home</Title>
      <Page>
        <ul>
          {userList.map((_user: { title: string }, index: number) => (
            <li key={index}>{_user.title}</li>
          ))}
        </ul>
      </Page>
    </Wrapper>
  );
};

export default Homes;
