import logo from './logo.svg';
import './App.css';

import Header from "./components/header/header"
import Counter from './components/counter/counter';
import { useState } from 'react';
import CounterWithClass from './components/counterWithClass/counter';
import LoginForm from './components/loginform/loginform';

import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Checkoutpage, Homepage, Notfoundpage, Offerspage, Productspage, PostDetailpage } from "./pages"
import Userpage from './pages/user';
import { UserProvider } from './context/user';
import { ThemeProvider } from './context/theme';

function App() {

  const [showCounter, setShowCounter] = useState(false);

  const message = "Hello World!!! from message variable."
  const isAdmin = false;
  const applicationName = "Edureka Shop";

  return (
    <div className="App">
      <ThemeProvider>
        <UserProvider>
          <BrowserRouter>
            <Header isAdmin={isAdmin} applicationName={applicationName}></Header>
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/products' element={<Productspage />} />
              <Route path='/offers' element={<Offerspage />} />
              <Route path='/checkout' element={<Checkoutpage />} />
              <Route path='/posts/:postid/:userid' element={<PostDetailpage />}>
                <Route path='comments' element={<Checkoutpage />}></Route>
                <Route path='offers' element={<Offerspage />}></Route>
              </Route>
              <Route path='/user' element={<Userpage />} />
              <Route path='*' element={<Notfoundpage />} />
            </Routes>
          </BrowserRouter>
        </UserProvider>
      </ThemeProvider>







      {/* { showCounter && <Counter/>} */}
      {/* <button onClick={()=>{ setShowCounter(!showCounter) }}>Toggle Counter</button> */}
      {/* Demo code for class based component */}
      {/* <CounterWithClass applicationName={applicationName} /> */}
      {/* <LoginForm/> */}
    </div>
  );
}

export default App;
