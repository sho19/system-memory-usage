import "./App.css";
import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Ram from "./components/ram.component";
import Cpu from "./components/cpu.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <div className="App">
      <header className="App-header"><Header/>
          <Switch>
              <Route exact path={'/'} component={Ram}/>
              <Route exact path={'/cpu'} component={Cpu}/>
          </Switch>
      </header>
    </div>
  );
}

export default App;
