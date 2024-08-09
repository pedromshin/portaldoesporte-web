import { useAuth } from "../../hooks/useAuth";
import { useDataFetcher } from "../../hooks/useDataFetcher";

export default () => {
  const { auth } = useAuth();

  const { data } = useDataFetcher(
    `post/${auth?.decodedToken?.sub}/feed`,
    null,
    [auth]
  );

  return <h2>Associações</h2>;
};
