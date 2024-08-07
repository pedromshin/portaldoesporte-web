import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { endpoint } from "../../utils/endpoint";
import { routes } from "..";
import { useNavigate } from "react-router-dom";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 5px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  margin-bottom: 20px;
`;

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${endpoint}/auth/register`, {
        username,
        password,
      });
      const { token } = response.data;
      localStorage.setItem("authToken", token);
    } catch (error: any) {
      console.error("Registration error:", error.response.data);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <Input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button type="submit">Register</Button>
      <Button type="button" onClick={() => navigate(routes.pageLogin)}>
        Fazer login
      </Button>
    </Form>
  );
}

export default Register;
