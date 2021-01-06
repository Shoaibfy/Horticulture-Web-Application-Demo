
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import TabHeaders from './Components/TabHeaders/TabHeaders';
import plants from './Components/HomePage/plants';






function App() {
  return (
    <Router>
    <div className='App' >
      <div className='nav-bar'>
      
           <Link to='/' >Plants</Link>
           <Link to='/form' >Horticulture </Link>
            
      </div>

      
      
      <Switch>
        <Route  exact path='/' component={plants} />
        <Route   path='/form' component={TabHeaders} />
        
     
      </Switch>
     
       
    </div>
  </Router>
  );
}

export default App;
