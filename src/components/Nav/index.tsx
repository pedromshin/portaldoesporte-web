import { Link } from "react-router-dom";
import styled from "styled-components";

import {
  IconComponents,
  IconHome,
  IconMap,
  IconSubtask,
} from "@tabler/icons-react";
import { routes } from "@src/pages";

const Container = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  background: white;
`;

const List = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  justify-content: space-around;
`;

const Item = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid gray;
  padding: 12px 0;
`;

export default () => {
  return (
    <Container>
      <List>
        <Item>
          <Link to={routes.pageFeed}>
            <IconHome size={24} />
          </Link>
        </Item>
        <Item>
          <Link to={routes.pageClubs}>
            <IconSubtask size={24} />
          </Link>
        </Item>
        <Item>
          <Link to={routes.pageMap}>
            <IconMap size={24} />
          </Link>
        </Item>
        <Item>
          <Link to={routes.pageMemberships}>
            <IconComponents size={24} />
          </Link>
        </Item>
      </List>
    </Container>
  );
};
