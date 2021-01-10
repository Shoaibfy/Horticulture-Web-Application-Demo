
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import TabHeaders from './Components/TabHeaders/TabHeaders';
import plants from './Components/HomePage/plants';
import ExampleTable from './Components/table/exmpleTable';
import FormikValidation from './Components/FormikValidation/formik';

import Responsive from './Components/MultipleCarosel/MultipleCarosel';
import LoginPage from './Components/HomePage/LoginPage/LoginPage';



function App() {
  return (
    <Router>
    <div className='App' >
      <div className='nav-bar'>
      
           <Link to='/plant' >Plants</Link>
           <Link to='/horticulture' >Horticulture </Link>
           <Link to='/plant' >Plants</Link>
           <Link to='/formik' >Formik </Link>
           <Link to='/prodtable' >Product-Table</Link>
           <Link to='/categories' >Responsive</Link>
           <Link to='/login' >LoginPage</Link>
            
      </div>


      
      
      <Switch>
        <Route  exact path='/plant' component={plants} />
        {/* <Route   path='/horticulture' component={TabHeaders} /> */}
        <Route   path='/prodtable' component={ExampleTable} />
        <Route   path='/formik' component={FormikValidation} />
        <Route   path='/categories' component={Responsive} />
        <Route   path='/login' component={LoginPage} />
        

        
        
      
      </Switch>
     
       
    </div>
  </Router>
  );
}

export default App;
