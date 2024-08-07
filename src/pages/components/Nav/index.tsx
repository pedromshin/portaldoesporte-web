import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const List = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
`;

const Item = styled.div``;

export default () => {
  return (
    <Container>
      <List>
        <Item>
          <Link to="/">Feed</Link>
        </Item>
        <Item>
          <Link to="/following">Acompanhando</Link>
        </Item>
        <Item>
          <Link to="/create-modality">Criar modalidade</Link>
        </Item>
        <Item>
          <Link to="/privacy-policy">Política de privacidade</Link>
        </Item>
      </List>
    </Container>
  );
};
