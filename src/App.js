import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Products from './pages/Products';
import NewProduct from './pages/NewProduct';

function App() {
  const [data,setData]=useState([])
  return (
    <div className="App">
      <NewProduct setData={setData}/>
      <Products data={data}/>
    </div>
  );
}

export default App;
