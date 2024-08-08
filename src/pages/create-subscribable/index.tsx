import "./App.css";
import Search from "./Search";
import Table from "./Table";
import Form from "./Form";
import { useDataFetcher } from "../../hooks/useDataFetcher";

export default () => {
  const { data, handleSearch, handleDelete, refetch } =
    useDataFetcher("subscribable");
  // const [searchId, setSearchId] = useState("");

  return (
    <div>
      <h2>Criar subscribable</h2>
      <div className="App">
        <Search onSearch={handleSearch} />
        <Table data={data} onDelete={handleDelete} />
        <Form refetch={refetch} />
      </div>
    </div>
  );
};
