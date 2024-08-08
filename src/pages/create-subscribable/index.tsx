import { useState, useEffect } from "react";
import "./App.css";
import { endpoint } from "../../utils/endpoint";
import Search from "./Search";
import Table from "./Table";
import Form from "./Form";
import { useDataFetcher } from "../../hooks/useDataFetcher";

export default () => {
  const { data, handleSearch, handleDelete, fetchData } =
    useDataFetcher("subscribable");
  // const [searchId, setSearchId] = useState("");

  return (
    <div>
      <h2>Criar modalidade</h2>
      <div className="App">
        <Search onSearch={handleSearch} />
        <Table data={data} onDelete={handleDelete} />
        <Form onFormSubmit={fetchData} />
      </div>
    </div>
  );
};
