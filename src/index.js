import React from "react";
import ReactDOM from "react-dom";
import styled, { ThemeProvider, injectGlobal } from "styled-components";
import App from "./components/App";

injectGlobal`
  @font-face {
    font-family: "Montserrat";
    src: url('https://fonts.googleapis.com/css?family=Montserrat:400,700');
  }

  html {
    font-size: 16px;
    box-sizing: border-box;
   overflow-x: hidden;


    @media (max-width: 900px) {
      font-size: 14px;
    }
    @media (max-width: 600px) {
      font-size: 12px;
    }
  }
      *, *:before, *:after {
        box-sizing: inherit;
      }

      body {
        font-family: sans-serif;
        margin: 0;
        background: linear-gradient(89deg, #FF5EDF 0%, #04C8DE 100%);
      }
      img {
  max-width:100%;
}
`;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
