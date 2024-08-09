import { useDataFetcher } from "../../hooks/useDataFetcher";
import Table from "./Table";

export default () => {
  const { data, handleSearch, handleDelete, refetch } =
    useDataFetcher("subscribable");

  return (
    <h2>
      Clubes
      <Table data={data} />
    </h2>
  );
};
