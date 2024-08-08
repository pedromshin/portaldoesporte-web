import React from "react";
import styled from "styled-components";
import { useApiRequest } from "../../hooks/useApiRequest";
import { useAuth } from "../../hooks/useAuth";

const TableComponent = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 18px;
  text-align: left;
`;

const Thead = styled.thead`
  background-color: #f2f2f2;
`;

const Th = styled.th`
  padding: 12px;
  border: 1px solid #ddd;
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const Td = styled.td`
  padding: 12px;
  border: 1px solid #ddd;
`;

const Button = styled.button`
  background-color: blue;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff1c1c;
  }
`;

export default function Table({ data }: any) {
  const { auth, verifyAuth } = useAuth();
  const { patch } = useApiRequest();

  const onSubscribe = (subscribableId: string) => {
    verifyAuth(() =>
      patch(`user/${auth.decodedToken.sub}/subscribe/${subscribableId}`)
    );
  };

  return (
    <TableComponent>
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>Name</Th>
          <Th>Entity</Th>
          <Th>Actions</Th>
        </Tr>
      </Thead>
      <tbody>
        {data.map((item: any) => (
          <Tr key={item._id}>
            <Td>{item._id}</Td>
            <Td>{item.name}</Td>
            <Td>{item.entity}</Td>
            <Td>
              <Button onClick={() => onSubscribe(item?._id)}>Acompanhar</Button>
            </Td>
          </Tr>
        ))}
      </tbody>
    </TableComponent>
  );
}
