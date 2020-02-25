import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import history from "../../../../utils/BrowserHistory";
import { fetchUserData } from "../../../redux/actions";
import { getListUser } from "../../../redux/selectors";

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

const Home = () => {
    const user = useSelector(getListUser());
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserData());
    }, [dispatch]);

    function test(i: string) {
        return history.push(i);
    }

    // console.log('USER',user)

    return (
        <Wrapper>
            <Navigation>
                <NavText onClick={() => test("/")}> * Home </NavText>
                <NavText onClick={() => test("/profile")}> * Profile </NavText>
                <NavText onClick={() => test("/contacts")}> * Contacts </NavText>
            </Navigation>
            <Title>This is home</Title>
            <Page>
                <ul>
                    {user.map((_user: { title: string }, index: number) => (
                        <li key={index}>{_user.title}</li>
                    ))}
                </ul>
            </Page>
        </Wrapper>
    );
};

export default Home;
