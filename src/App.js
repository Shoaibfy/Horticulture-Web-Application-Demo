
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import TabHeaders from './Components/TabHeaders/TabHeaders';
import plants from './Components/HomePage/plants';
import ExampleTable from './Components/table/exmpleTable';
import FormikValidation from './Components/FormikValidation/formik';

import Responsive from './Components/MultipleCarosel/MultipleCarosel';
import LoginPage from './Components/HomePage/LoginPage/LoginPage';
import ForgotPassword from './Components/forgotPassword/forgotPassword';
import CarouselImage from './Components/crousels/crousels';



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
           <Link to='/imagecarosel' >ImageCarosel</Link>
           <Link to='/' >LoginPage</Link>
           <Link to='/forgotpassword' >ForgotPage</Link>
            
      </div>


      
      
      <Switch>
        <Route   path='/' component={LoginPage} />
        <Route   path='/plant' component={plants} />
        <Route   path='/horticulture' component={TabHeaders} />
        <Route   path='/prodtable' component={ExampleTable} />
        <Route   path='/formik' component={FormikValidation} />
        <Route   path='/categories' component={Responsive} />
     
        <Route   path='/forgotpassword' component={ForgotPassword} />
        <Route   path='/imagecarosel' component={CarouselImage} />

        
        
        

        
        
      
      </Switch>
     
       
    </div>
  </Router>
  );
}

export default App;
