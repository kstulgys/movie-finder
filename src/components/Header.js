import React from "react";
import styled from "styled-components";

const HeaderStyle = styled.header`
  display: flex;
  height: 80px;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #a9adac;
`;
// header {
// display: flex;
// height: 80px;
// justify - content: center;
// align - items: center;
// border - bottom: 1px solid #a9adac;
// }

const H1 = styled.h1`
  font-size: 2rem;
  color: #e27a3f;
`;

// header h1 {
// font - size: 2rem;
// color: #e27a3f;
// }

const Header = () => (
  <HeaderStyle>
    <H1>Sweet Pumpkins</H1>
  </HeaderStyle>
);

export default Header;
