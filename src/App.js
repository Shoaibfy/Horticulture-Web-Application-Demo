
import './App.css';
import ProductName from './Components/ProductName/productName';
import TabHeaders from './Components/TabHeaders/TabHeaders';



function App() {
  return (
    <div className="App">

      <ProductName productName="HORTICULTURE" />
      <TabHeaders title='DASHBOARD' />
      
    </div>
  );
}

export default App;
