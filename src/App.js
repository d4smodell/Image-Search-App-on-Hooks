import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { About } from "./pages/About";
import { SearchState } from "./components/context/searchState";
import { Home } from "./pages/Home";

function App() {
  return (
    <SearchState>
      <BrowserRouter>
        <Navbar />
        <div className="container mt-4">
          <Switch>
            <Route path="/about" render={() => <About />} />
            <Route path="/" render={() => <Home />} />
          </Switch>
        </div>
      </BrowserRouter>
    </SearchState>
  );
}

export default App;
