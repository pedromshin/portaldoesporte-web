import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-right: 10px;

  &:hover {
    background-color: #45a049;
  }

  &:last-child {
    background-color: #2196f3;
    &:hover {
      background-color: #1e88e5;
    }
  }
`;

function ModalitySearch({ onSearch }: any) {
  const [id, setId] = useState('');

  const handleSearch = (e: any) => {
    e.preventDefault();
    onSearch(id);
  };

  return (
    <Form onSubmit={handleSearch}>
      <FormGroup>
        <Label>Search by ID:</Label>
        <Input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      </FormGroup>
      <Button type="submit">Search</Button>
      <Button type="button" onClick={() => onSearch('')}>
        Fetch All
      </Button>
    </Form>
  );
}

export default ModalitySearch;
