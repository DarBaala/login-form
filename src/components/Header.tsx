import React from "react";
import styled from "styled-components";

import { Container } from "./Container";

const HeaderEl = styled.h1`
  font-weight: 700;
  font-size: 64px;
  color: #000000;
  padding: 40px 0 250px;
  margin: 0;
  text-align: center;
`;

const Header = () => {
  return (
    <Container>
      <HeaderEl>ONLY.</HeaderEl>
    </Container>
  );
};

export default Header;
