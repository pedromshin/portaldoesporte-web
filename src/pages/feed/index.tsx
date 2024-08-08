import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useDataFetcher } from "../../hooks/useDataFetcher";
import Table from "./Table";
import { useEffect } from "react";

export default () => {
  const { auth } = useAuth();

  const { data } = useDataFetcher(`user/${auth?.decodedToken?.sub}`, null, [
    auth,
  ]);

  return (
    <h2>
      Associações
      <Table data={data} />
    </h2>
  );
};
