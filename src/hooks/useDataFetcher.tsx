import { useState, useEffect } from "react";
import { endpoint } from "../utils/endpoint";

export const useDataFetcher = (
  path: string,
  defaultParams: null | { [key: string]: any } = {},
  deps: readonly unknown[] = []
) => {
  const [data, setData] = useState<any[]>([]);

  const route = `${endpoint}/${path}`;

  const fetchData = async (params: { [key: string]: any } = {}) => {
    const url = new URL(route);
    Object.entries({ ...defaultParams, ...params }).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });

    try {
      const response = await fetch(url.toString(), {
        method: "GET",
      });
      const result = await response.json();
      setData(Array.isArray(result) ? result : [result]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = (params: { [key: string]: any }) => {
    fetchData(params);
  };

  const handleDelete = async (id: any) => {
    const url = `${route}/${id}`;
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
  }, [...deps]);

  return { data, handleSearch, handleDelete, refetch: fetchData };
};
