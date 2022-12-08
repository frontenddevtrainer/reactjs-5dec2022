import './App.css';
import Header from "./components/header/header"
import { Provider as ReduxProvider } from "react-redux"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Checkoutpage, Homepage, Notfoundpage, Offerspage, Productspage, PostDetailpage } from "./pages"
import Userpage from './pages/user';
import { UserProvider } from './context/user';
import { ThemeProvider } from './context/theme';
import { LocalizationProvider } from './context/localization';
import Store from "./store/store"
import { ApolloProvider } from '@apollo/client';
import { client } from "./graphql/client"

function App() {

  const isAdmin = false;
  const applicationName = "Edureka Shop";

  return (
    <div className="App">
      <ApolloProvider client={client}>
        <ReduxProvider store={Store}>
          <LocalizationProvider>
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
          </LocalizationProvider>
        </ReduxProvider>
      </ApolloProvider>

      {/* { showCounter && <Counter/>} */}
      {/* <button onClick={()=>{ setShowCounter(!showCounter) }}>Toggle Counter</button> */}
      {/* Demo code for class based component */}
      {/* <CounterWithClass applicationName={applicationName} /> */}
      {/* <LoginForm/> */}
    </div>
  );
}

export default App;
