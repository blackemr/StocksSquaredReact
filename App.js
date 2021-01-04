import './App.css';
import Homepage from './Homepage';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import AboutUs from './AboutUs';
import Pricing from './Pricing';
import Colleges from './Colleges';
import FeatureRequest from './FeatureRequest';

function App() {
  return (
    <Router>
      <Route exact path='/about-us' component={AboutUs}/>
      <Route exact path='/' component={Homepage}/>
      <Route exact path='/pricing' component={Pricing}/>
      <Route exact path='/colleges' component={Colleges}/>
      <Route exact path='/feature-request' component={FeatureRequest}/>
    </Router>
  );
}

export default App;
