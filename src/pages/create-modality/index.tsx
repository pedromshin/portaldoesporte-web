import React, { useState, useEffect } from "react";
import "./App.css";
import ModalityTable from "./Table";
import ModalityForm from "./Form";
import ModalitySearch from "./Search";
import { endpoint } from "../../utils/endpoint";
import { useDataFetcher } from "../../hooks/useDataFetcher";

export default () => {
  const { data, handleSearch, handleDelete, fetchData } =
    useDataFetcher("modality");

  // const [searchId, setSearchId] = useState("");

  return (
    <div>
      <h2>Criar modalidade</h2>
      <div className="App">
        <ModalitySearch onSearch={handleSearch} />
        <ModalityTable data={data} onDelete={handleDelete} />
        <ModalityForm onFormSubmit={fetchData} />
      </div>
    </div>
  );
};
