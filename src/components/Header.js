import React from "react";
import styled from "styled-components";
import Wow from "./Wow";

const HeaderStyle = styled.header`
  display: flex;
  // height: 70px;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  @media screen and (max-width: 600px) {
    margin-top: 1rem;
    margin-bottom: -3rem;
  }
`;

const H1 = styled.h1`
  font-size: 2.5rem;
  color: white;
`;

const Header = () => (
  <HeaderStyle>
    <H1 className="wow fadeInDown" data-wow-duration="2s">
      Re-Movies
    </H1>
  </HeaderStyle>
);

export default Header;
