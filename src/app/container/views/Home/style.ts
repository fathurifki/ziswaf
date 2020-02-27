import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const Page = styled.div`
  display: flex;
`;

export const CustomTable = styled.table`
  &&& {
    table,
    th,
    td {
      border: 1px solid black;
    }
    th,
    td,
    tr {
      padding: 5px;
    }
    th {
      text-align: left;
    }
    table {
      width: 100%;
    }
  }
`;