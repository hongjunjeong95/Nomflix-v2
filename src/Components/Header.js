import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.div`
  background-color: rgba(20, 20, 20, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 50px;
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 80px;
  border-bottom: 3px solid
    ${(props) => (props.current ? "#3498db" : "transparent")};
  transition: 0.5s border-bottom ease-in-out;
`;

const SLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item current={pathname === "/"}>
        <SLink to="/">Movies</SLink>
      </Item>
      <Item current={pathname === "/tv"}>
        <SLink to="/tv">TV</SLink>
      </Item>
      <Item current={pathname === "/search"}>
        <SLink to="/search">Search</SLink>
      </Item>
    </List>
  </Header>
));
