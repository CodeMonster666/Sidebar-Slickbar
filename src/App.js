import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import Sidebar from "./Sidebar";
import Home from "./Pages/Home";
import Team from "./Pages/Team";
import Calender from "./Pages/Calender";
import Documents from "./Pages/Documents";
import Projects from "./Pages/Projects";

const Pages = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: calc(2rem + 2vw);
    background: linear-gradient(to right, #803bec 30%, #1b1b1b 100%);
    background-clip: text;
    color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-colour: transparent;
  }
`;

function App() {
  return (
    <>
      <Sidebar />
      <Pages>
        <Router>
          <Switch>
            <Route path="/" component={Home} />

            <Route path="/team" component={Team} />

            <Route path="/calender">
              <Calender />
            </Route>

            <Route path="/documents">
              <Documents />
            </Route>

            <Route path="/Projects">
              <Projects />
            </Route>
          </Switch>
        </Router>
      </Pages>
    </>
  );
}

export default App;
