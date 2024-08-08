import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default () => {
  const auth = useAuth();

  return <header></header>;
};
