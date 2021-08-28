import React, { useState } from 'react'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home';
import Navigator from './components/Navigator'
import LoadingScreen from './LoadingScreen/LoadingScreen'
import { Switch, Route } from "react-router-dom";
import Code from './components/Code'
import Graphics from './components/Graphics'
import Film from './components/Film'
import Contact from './components/Contact'
import ScrollToTop from './helpers/ScrollToTop'
import girl from './images/girl.png'

function App() {
  const [loading, setLoading] = useState(true);
  const toggleLoading = () => setLoading(false)

  const timer = setTimeout(toggleLoading, 1500);
  if (loading) {
    setTimeout(toggleLoading, 1500);
  }

  if (!loading) {
    clearTimeout(timer);
  }

  return (
    <>
      {loading === false ? (
        <div className="App">
          <div className='landing'>
            <Header />
            <div className='landing-h1-box'>
              <h1 className='landing-h1' id='matt'>MATT</h1>
              <h1 className='landing-h1' id='dizzle'>DIZZLE</h1>
              <h1 className='landing-h1' id='dev'>DEV</h1>
            </div>
            <img src={girl} alt='some-girl' id='girl' />
          </div>

          <main>
            <ScrollToTop />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/code" component={Code} />
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
