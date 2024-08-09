import { useAuth } from "../../hooks/useAuth";
import { useDataFetcher } from "../../hooks/useDataFetcher";
import Table from "./Table";

export default () => {
  const { auth } = useAuth();

  const { data } = useDataFetcher(
    `subscribable/${auth?.decodedToken?.sub}/clubs`,
    null,
    [auth]
  );

  return (
    <h2>
      Clubes
      <Table data={data} />
    </h2>
  );
};
