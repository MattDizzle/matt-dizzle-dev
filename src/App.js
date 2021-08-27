import React, { useState } from 'react'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home';
import Menu from './components/Menu';
import Navigator from './components/Navigator'
import LoadingScreen from './LoadingScreen/LoadingScreen'
import { Switch, Route } from "react-router-dom";
import Code from './components/Code'
import Graphics from './components/Graphics'
import Film from './components/Film'
import Contact from './components/Contact'

function App() {
  const [loading, setLoading] = useState(true);
  const toggleLoading = () => setLoading(false)

  const timer = setTimeout(toggleLoading, 3000);
  if (loading) {
    setTimeout(toggleLoading, 3000);
  }

  if (!loading) {
    clearTimeout(timer);
  }

  return (
    <>
      {loading === false ? (
        <div className="App">
          <Header />
          <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/code" component={Code} />
            <Route exact path="/menu" component={Menu} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/film" component={Film} />
            <Route exact path="/graphics" component={Graphics} />
          </Switch>
          </main>
          <Footer />
          <Navigator />
        </div>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}

export default App;
