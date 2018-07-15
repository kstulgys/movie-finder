import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Main from "./main/Main";
import Movie from "./movie/Movie";
import NotFound from "./NotFound";
import Particles from "react-particles-js";

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

export default () => {
  // console.log("API key:", process.env.REACT_APP_TMDB_API_KEY);
  return (
    <BrowserRouter>
      <div>
        <Particles
          style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}
          params={particlesOptions}
        />
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/movies/:movieId" component={Movie} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
