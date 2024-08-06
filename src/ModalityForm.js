import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  max-width: 500px;
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

  &:hover {
    background-color: #45a049;
  }
`;

function ModalityForm({ onFormSubmit }) {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [athletes, setAthletes] = useState("");

  const endpoint =
    process.env.REACT_APP_ENV_VAR === "production"
      ? process.env.REACT_APP_ENDPOINT_PRODUCTION
      : process.env.REACT_APP_ENV_VAR === "preview"
      ? process.env.REACT_APP_ENDPOINT_STAGING
      : process.env.REACT_APP_ENDPOINT_LOCAL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = id ? `${endpoint}/modality/${id}` : `${endpoint}/modality`;
    const method = id ? "PATCH" : "POST";
    const body = {
      name,
      athletes: athletes.split(",").map((item) => item.trim()),
    };

    try {
      await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      onFormSubmit();
      setId("");
      setName("");
      setAthletes("");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>ID (for update only):</Label>
        <Input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label>Name:</Label>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label>athletes (comma separated):</Label>
        <Input
          type="text"
          value={athletes}
          onChange={(e) => setAthletes(e.target.value)}
          required
        />
      </FormGroup>
      <Button type="submit">{id ? "Update" : "Create"}</Button>
    </Form>
  );
}

export default ModalityForm;
