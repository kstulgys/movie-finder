import React from "react";
import styled from "styled-components";

// import "./SearchButton.css"

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

// .search - button {
// display: flex;
// justify - content: center;
// }

const StyledButton = styled.button`
  padding: 10px 21px;
  background: #0040ff;
  color: white;
  font-size: 1.25rem;
  cursor: pointer;
  transition: color 0.2s ease-out;
  outline: 0;
  border: 0;
  flex: 1
  :hover {
    color: white;
    font-weight: 600;
  }
`;

// .search - button button {
// padding: 10px 21px;
// background: #e27a3f;
// color: rgba(255, 255, 255, 0.75);
// font - size: 1rem;
// cursor: pointer;
// transition: color 0.2s ease- out;
// outline: 0;
// border: 0;
// }

// .search - button button: hover {
//   color: white;
// }

const Button = ({ onClick, children }) => (
  <Container>
    <StyledButton onClick={onClick}>{children}</StyledButton>
  </Container>
);

export default Button;
