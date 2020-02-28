import React, { useContext } from "react";
import { Container, Button, H1 } from '../../components/index';
import { HomeContext, HomeController } from "./Controller";
import { CreateHomeRequest } from '@/data/payload/api/HomeApiRequest';
import List from './components/List';

export interface HistoryParam {
  name: string;
}

const FormComponent = () => {
  const controller = useContext(HomeContext)
  return (
    <div>
      <List data={controller.data} />
    <Button color={'red'} onClick={() => controller._onPost(new CreateHomeRequest('Test', 'Anak', 'Rak 1', 10000, 1000))}>Post</Button>
  </div>
  )
};

const ChildComponent = () => {
  const controller = useContext(HomeContext);
  return (
    <table>
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
    </table>
  );
};

const HomeApp = () => {
  return (
    <HomeController>
      <Container>
        <H1>Refactory Library</H1>
        <ChildComponent />
        <FormComponent />
      </Container>
    </HomeController>
  );
};

export default HomeApp;
