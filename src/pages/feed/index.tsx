import { useAuth } from "../../hooks/useAuth";
import { useDataFetcher } from "../../hooks/useDataFetcher";

export default () => {
  const { auth } = useAuth();

  const { data } = useDataFetcher(`user/${auth?.decodedToken?.sub}`, null, [
    auth,
  ]);

  return <h2>Associações</h2>;
};
