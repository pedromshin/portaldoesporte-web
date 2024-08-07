import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { endpoint } from "../../utils/endpoint";

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
  background-color: #28a745;
  color: white;
  border: none;
  cursor: pointer;
`;

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${endpoint}/auth/login`, {
        username,
        password,
      });
      console.log(response.data);
      alert("Login successful!");
      // Here you would typically store the token and redirect the user
    } catch (error: any) {
      console.error("Login error:", error.response.data);
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Login</h2>
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
      <Button type="submit">Login</Button>
    </Form>
  );
}

export default Login;
