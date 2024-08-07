import React, { useState, useEffect } from 'react';
import './App.css';
import ModalityTable from '../create-modality/ModalityTable';
import ModalityForm from '../create-modality/ModalityForm';
import ModalitySearch from '../create-modality/ModalitySearch';

export default () => {
  const [data, setData] = useState<any[]>([]);
  // const [searchId, setSearchId] = useState("");

  const endpoint =
    process.env.REACT_APP_ENV_VAR === 'production'
      ? process.env.REACT_APP_ENDPOINT_PRODUCTION
      : process.env.REACT_APP_ENV_VAR === 'preview'
      ? process.env.REACT_APP_ENDPOINT_STAGING
      : process.env.REACT_APP_ENDPOINT_LOCAL;

  const fetchData = async (id = '') => {
    const url = id ? `${endpoint}/modality/${id}` : `${endpoint}/modality`;

    try {
      const response = await fetch(url, {
        method: 'GET',
      });
      const result = await response.json();
      setData(Array.isArray(result) ? result : [result]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearch = (id: any) => {
    // setSearchId(id);
    fetchData(id);
  };

  const handleDelete = async (id: any) => {
    const url = `${endpoint}/modality/${id}`;
    try {
      await fetch(url, {
        method: 'DELETE',
      });
      fetchData();
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
