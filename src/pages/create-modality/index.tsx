import "./App.css";
import Table from "./Table";
import Form from "./Form";
import Search from "./Search";
import { useDataFetcher } from "../../hooks/useDataFetcher";

export default () => {
  const { data, handleSearch, handleDelete, refetch } =
    useDataFetcher("modality");

  // const [searchId, setSearchId] = useState("");

  return (
    <div>
      <h2>Criar modalidade</h2>
      <div className="App">
        <Search onSearch={handleSearch} />
        <Table data={data} onDelete={handleDelete} />
        <Form refetch={refetch} />
      </div>
    </div>
  );
};
