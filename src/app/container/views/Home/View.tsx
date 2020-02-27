import React, { useContext } from "react";
import { Wrapper, Page, Title, CustomTable } from "./style";

import { HomeController, HomeContext } from "./Controller";
import { CreateHomeRequest } from '@/data/payload/api/HomeRequest';
import { Button } from '@/app/container/components/button/button'

export interface HistoryParam {
  name: string;
}

const FormComponent = () => {
  const controller = useContext(HomeContext)
  return (
    <React.Fragment>
      <Button color={'red'} onClick={() => controller._onPost(new CreateHomeRequest('Test', 'Anak', 'Rak 1', 10000, 1000))}>Post</Button>
    </React.Fragment>
  )
};

const ChildComponent = () => {
  const controller = useContext(HomeContext);
  return (
    <CustomTable>
      <thead>
        <tr>
          <th>No</th>
          <th>Book Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {!controller.loading && controller.data.map((item, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.bookName}</td>
              <td>{item.category}</td>
              <td>Rp.{item.price}</td>
              <td>{item.count}</td>
              <td>
                <button onClick={() => controller._onDelete(item.idBook)}>Delete</button>
                <button onClick={() => controller._onUpdate(new CreateHomeRequest('Siksa Edit', 'Azab', 'Rak 1', 2000, 1000), item.idBook)}>Edit</button>

              </td>
            </tr>
          )
        })}
      </tbody>
    </CustomTable>
  );
};

const HomeApp = () => {
  return (
    <HomeController>
      <Wrapper>
        <Title>Refactory Library</Title>
        <Page>
          <ChildComponent />
        </Page>
        <FormComponent />
      </Wrapper>
    </HomeController>
  );
};

export default HomeApp;
