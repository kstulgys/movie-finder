import React from "react";
import ReactDOM from "react-dom";
import styled, { ThemeProvider, injectGlobal } from "styled-components";
import App from "./components/App";

injectGlobal`
  @font-face {
    font-family: "Montserrat";
    src: url('https://fonts.googleapis.com/css?family=Montserrat:400,700');
  }
  * {
    margin: 0;
	  padding: 0;
	  border: 0;
	  font-size: 100%;
    font-family: "Montserrat", sans-serif;
  }
  html {
    font-size: 16px;

    @media (max-width: 900px) {
      font-size: 14px;
    }
    @media (max-width: 600px) {
      font-size: 12px;
    }

  }
`;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
