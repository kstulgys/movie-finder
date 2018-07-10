import React from "react";
import styled from "styled-components";
import Wow from "./Wow";

const HeaderStyle = styled.header`
  display: flex;
  height: 80px;
  justify-content: center;
  flex-direction: column;
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
    <Wow>
      <H1>Re-Movies</H1>
    </Wow>
  </HeaderStyle>
);

export default Header;
