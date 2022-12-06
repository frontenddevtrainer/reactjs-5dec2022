import logo from './logo.svg';
import './App.css';

import Header from "./components/header/header"
import Counter from './components/counter/counter';
import { useState } from 'react';
import CounterWithClass from './components/counterWithClass/counter';
import LoginForm from './components/loginform/loginform';

function App() {

  const [ showCounter, setShowCounter ] = useState(false);

  const message = "Hello World!!! from message variable."
  const isAdmin = false;
  const applicationName = "Edureka Shop";

  return (
    <div className="App">
      <Header isAdmin={isAdmin} applicationName={applicationName}></Header>
      { showCounter && <Counter/>}
      <button onClick={()=>{ setShowCounter(!showCounter) }}>Toggle Counter</button>
      {/* Demo code for class based component */}
      {/* <CounterWithClass applicationName={applicationName} /> */}
      <LoginForm/>
    </div>
  );
}

export default App;
