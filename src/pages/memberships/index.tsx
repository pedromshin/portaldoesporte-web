import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { routes } from "..";

export default () => {
  const navigate = useNavigate();
  const auth = useAuth();

  console.log(auth);

  return (
    <h2>
      Associações
      <button onClick={() => navigate(routes.pageLogin)}>fazer login</button>
    </h2>
  );
};
