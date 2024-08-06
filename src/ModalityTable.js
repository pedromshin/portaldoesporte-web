import React from "react";
import styled from "styled-components";

const Table = styled.table`
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
  background-color: #ff4c4c;
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

function ModalityTable({ data, onDelete }) {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>Name</Th>
          <Th>Athletes</Th>
          <Th>Actions</Th>
        </Tr>
      </Thead>
      <tbody>
        {data.map((modality) => (
          <Tr key={modality._id}>
            <Td>{modality._id}</Td>
            <Td>{modality.name}</Td>
            <Td>{modality.athletes?.join(", ")}</Td>
            <Td>
              <Button onClick={() => onDelete(modality._id)}>Delete</Button>
            </Td>
          </Tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ModalityTable;
