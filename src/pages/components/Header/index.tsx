import { Link } from "react-router-dom";

export default () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Feed</Link>
        </li>
        <li>
          <Link to="/following">Acompanhando</Link>
        </li>
        <li>
          <Link to="/create-modality">Criar modalidade</Link>
        </li>
        <li>
          <Link to="/privacy-policy">Política de privacidade</Link>
        </li>
      </ul>
    </nav>
  );
};
