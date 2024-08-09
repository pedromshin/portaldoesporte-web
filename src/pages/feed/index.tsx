import { useAuth } from "../../hooks/useAuth";
import { useDataFetcher } from "../../hooks/useDataFetcher";
import Table from "./Table";

export default () => {
  const { auth } = useAuth();

  const { data } = useDataFetcher(
    `post/${auth?.decodedToken?.sub}/feed`,
    null,
    [auth]
  );

  return (
    <>
      <h2>Associações</h2> <Table data={data} />
    </>
  );
};
