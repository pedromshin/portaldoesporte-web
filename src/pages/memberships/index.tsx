import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { routes } from "..";

export default () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate(routes.pageLogin);
  };

  return (
    <h2>
      Associações
      <button onClick={() => navigate(routes.pageLogin)}>fazer login</button>
      <button onClick={handleLogout}>Logout</button>
    </h2>
  );
};
