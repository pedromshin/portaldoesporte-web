import styled from "styled-components";

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

export default function Table({ data, onDelete }: any) {
  return (
    <TableComponent>
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>Name</Th>
          <Th>Athletes</Th>
          <Th>Actions</Th>
        </Tr>
      </Thead>
      <tbody>
        {data.map((item: any) => (
          <Tr key={item._id}>
            <Td>{item._id}</Td>
            <Td>{item.name}</Td>
            <Td>{item.athletes?.join(", ")}</Td>
            <Td>
              <Button onClick={() => onDelete(item._id)}>Delete</Button>
            </Td>
          </Tr>
        ))}
      </tbody>
    </TableComponent>
  );
}
