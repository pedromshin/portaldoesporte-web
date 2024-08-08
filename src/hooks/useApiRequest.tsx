import { useState } from "react";
import { endpoint } from "../utils/endpoint";

interface RequestOptions {
  method: "GET" | "POST" | "PATCH" | "DELETE";
  body?: any;
}

export const useApiRequest = () => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const makeRequest = async (
    path: string,
    options: RequestOptions,
    params: { [key: string]: any } = {}
  ) => {
    setLoading(true);
    setError(null);

    const route = `${endpoint}/${path}`;

    try {
      const url = new URL(route);
      Object.entries(params).forEach(([key, value]) => {
        url.searchParams.set(key, value.toString());
      });

      const response = await fetch(url.toString(), {
        method: options.method,
        headers: {
          "Content-Type": "application/json",
        },
        body: options.body ? JSON.stringify(options.body) : undefined,
      });

      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const get = (path: string, params?: { [key: string]: any }) =>
    makeRequest(path, { method: "GET" }, params);

  const post = (path: string, body?: any) =>
    makeRequest(path, { method: "POST", body });

  const patch = (path: string, body?: any) =>
    makeRequest(path, { method: "PATCH", body });

  const del = (path: string, params?: { [key: string]: any }) =>
    makeRequest(path, { method: "DELETE" }, params);

  return { data, error, loading, get, post, patch, del };
};
