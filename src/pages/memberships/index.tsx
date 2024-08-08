import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { routes } from "..";
import { useDataFetcher } from "../../hooks/useDataFetcher";
import Table from "./Table";

export default () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const { data, handleSearch, handleDelete, refetch } =
    useDataFetcher("subscribable");

  const handleLogout = () => {
    auth.logout();
    navigate(routes.pageLogin);
  };

  return (
    <h2>
      Associações
      <button onClick={() => navigate(routes.pageLogin)}>fazer login</button>
      <button onClick={handleLogout}>Logout</button>
      <Table data={data} />
    </h2>
  );
};
