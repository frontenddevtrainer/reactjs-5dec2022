import logo from './logo.svg';
import './App.css';

import Header from "./components/header/header"
import Counter from './components/counter/counter';
import { useState } from 'react';
import CounterWithClass from './components/counterWithClass/counter';
import LoginForm from './components/loginform/loginform';

import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Checkoutpage, Homepage, Notfoundpage, Offerspage, Productspage } from "./pages"

function App() {

  const [ showCounter, setShowCounter ] = useState(false);

  const message = "Hello World!!! from message variable."
  const isAdmin = false;
  const applicationName = "Edureka Shop";

  return (
    <div className="App">
      <BrowserRouter>
        <Header isAdmin={isAdmin} applicationName={applicationName}></Header>
          <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/products' element={<Productspage/>}/>
            <Route path='/offers' element={<Offerspage/>}/>
            <Route path='/checkout' element={<Checkoutpage/>}/>
            <Route path='*' element={<Notfoundpage/>}/>
          </Routes>
      </BrowserRouter>
      
      
      
      
      
      
      
      {/* { showCounter && <Counter/>} */}
      {/* <button onClick={()=>{ setShowCounter(!showCounter) }}>Toggle Counter</button> */}
      {/* Demo code for class based component */}
      {/* <CounterWithClass applicationName={applicationName} /> */}
      {/* <LoginForm/> */}
    </div>
  );
}

export default App;
