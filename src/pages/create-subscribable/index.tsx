import { useState, useEffect } from "react";
import "./App.css";
import { endpoint } from "../../utils/endpoint";
import Search from "./Search";
import Table from "./Table";
import Form from "./Form";

export default () => {
  const [data, setData] = useState<any[]>([]);
  // const [searchId, setSearchId] = useState("");

  const fetchData = async (id = "") => {
    const url = id
      ? `${endpoint}/subscribable/${id}`
      : `${endpoint}/subscribable`;

    try {
      const response = await fetch(url, {
        method: "GET",
      });
      const result = await response.json();
      setData(Array.isArray(result) ? result : [result]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = (id: any) => {
    // setSearchId(id);
    fetchData(id);
  };

  const handleDelete = async (id: any) => {
    const url = `${endpoint}/subscribable/${id}`;
    try {
      await fetch(url, {
        method: "DELETE",
      });
      fetchData();
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
