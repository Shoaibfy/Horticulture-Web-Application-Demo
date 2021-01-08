
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import TabHeaders from './Components/TabHeaders/TabHeaders';
import plants from './Components/HomePage/plants';
import ExampleTable from './Components/table/exmpleTable';
import FormikValidation from './Components/FormikValidation/formik';



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
           <Link to='/horticulture' >Horticulture </Link>
           <Link to='/plant' >Plants</Link>
           <Link to='/horticulture' >Horticulture </Link>
           <Link to='/plant' >Plants</Link>
           <Link to='/horticulture' >Horticulture </Link>
           <Link to='/plant' >Plants</Link>
           <Link to='/horticulture' >Horticulture </Link>
           <Link to='/plant' >Plants</Link>
           <Link to='/horticulture' >Horticulture </Link>
            
      </div>
      <div className='nav-bar'>
      
      <Link to='/' >Plants</Link>
      <Link to='/horticulture' >Horticulture </Link>
      <Link to='/' >Plants</Link>
      <Link to='/horticulture' >Horticulture </Link>
      <Link to='/' >Plants</Link>
      <Link to='/horticulture' >Horticulture </Link>
      <Link to='/' >Plants</Link>
      <Link to='/horticulture' >Horticulture </Link>
      <Link to='/' >Plants</Link>
      <Link to='/horticulture' >Horticulture </Link>
      <Link to='/' >Plants</Link>
      <Link to='/horticulture' >Horticulture </Link>
      <Link to='/' >Plants</Link>
      <Link to='/horticulture' >Horticulture </Link>
       
 </div>

      
      
      <Switch>
        <Route  exact path='/' component={plants} />
        <Route   path='/horticulture' component={TabHeaders} />
        <Route   path='/prodtable' component={ExampleTable} />
        <Route   path='/formik' component={FormikValidation} />
        
      
      </Switch>
     
       
    </div>
  </Router>
  );
}

export default App;
