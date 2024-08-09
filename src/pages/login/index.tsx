import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { routes } from "..";
import { useAuth } from "../../hooks/useAuth";
import { access_token } from "../../providers/AuthProvider";

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
  margin-bottom: 20px;
`;

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (access_token) {
      navigate(routes.pageMemberships);
    }
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(username, password);
      navigate(routes.pageMemberships);
    } catch (error: any) {
      console.error("Login error:", error.response?.data || error.message);
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
      <Button type="button" onClick={() => navigate(routes.pageRegister)}>
        Registrar-se
      </Button>
    </Form>
  );
}

export default Login;
