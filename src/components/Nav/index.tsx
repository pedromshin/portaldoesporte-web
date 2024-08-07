import {
  Link,
  useLocation,
  useParams,
  useResolvedPath,
} from "react-router-dom";
import styled from "styled-components";

import {
  IconComponents,
  IconHome,
  IconMap,
  IconSubtask,
} from "@tabler/icons-react";
import { routes } from "../../../src/pages";

const Container = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  background: white;

  // @media (min-width: 1024px) {
  //   display: none;
  // }
`;

const List = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  justify-content: space-around;
`;

const Item = styled.div<{ selected: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ selected }) => (selected ? "red" : "grey")};
  padding: 12px 0;
`;

export default () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <Container>
      <List>
        <Item selected={pathname === routes.pageFeed}>
          <Link to={routes.pageFeed}>
            <IconHome size={24} />
          </Link>
        </Item>
        <Item selected={pathname === routes.pageClubs}>
          <Link to={routes.pageClubs}>
            <IconSubtask size={24} />
          </Link>
        </Item>
        <Item selected={pathname === routes.pageMap}>
          <Link to={routes.pageMap}>
            <IconMap size={24} />
          </Link>
        </Item>
        <Item selected={pathname === routes.pageMemberships}>
          <Link to={routes.pageMemberships}>
            <IconComponents size={24} />
          </Link>
        </Item>
      </List>
    </Container>
  );
};
