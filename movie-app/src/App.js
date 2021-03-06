import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Container from '@material-ui/core/Container';

//Components
import Header from "./components/Header"
import MainNav from "./components/MainNav"

//Pages
import Trending from "./pages/Trending"
import Movies from "./pages/Movies"
import Series from "./pages/Series"
import Search from "./pages/Search"

//CSS Styles
import './scss/App.scss';
import "./scss/Header.scss"


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Switch>
            <Route path="/" component={Trending} exact />
            <Route path="/movies" component={Movies} />
            <Route path="/Series" component={Series} />
            <Route path="/Search" component={Search} />
          </Switch>
        </Container>
      </div>
      <MainNav />
    </BrowserRouter>
  )
}

export default App;
