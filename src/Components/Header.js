import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.div``;

const SLink = styled(Link)``;

const List = styled.ul``;
const Item = styled.li``;

export default () => (
  <Header>
    <List>
      <Item>
        <SLink to="/">Home</SLink>
      </Item>
      <Item>
        <SLink to="/tv">TV</SLink>
      </Item>
      <Item>
        <SLink to="/search">Search</SLink>
      </Item>
    </List>
  </Header>
);
