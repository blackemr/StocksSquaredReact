import React from 'react';
import './App.css';
import About from './About';
import Colleges from './Colleges';
import FeatureRequest from './FeatureRequest';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about-us" component={About}/>
          <Route path="/colleges" component={Colleges}/>
          <Route path="/feature-request" component={FeatureRequest}/>
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>home</h1>
  </div>
);

export default App;
