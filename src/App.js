import React, { useState, useEffect } from 'react'
import './App.css';
import './helpers/animations.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home';
import Navigator from './components/Navigator'
import LoadingScreen from './LoadingScreen/LoadingScreen'
import { Switch, Route, Link } from "react-router-dom";
import Code from './components/Code'
import Graphics from './components/Graphics'
import Film from './components/Film'
import Contact from './components/Contact'
import ScrollToTop from './helpers/ScrollToTop'
import ScrollButton from './components/ScrollButton'

function App() {
  const [loading, setLoading] = useState(true);
  const toggleLoading = () => setLoading(false)

   useEffect(() => {
    const timer = setTimeout(toggleLoading, 3000);
    if (!loading) {
      clearTimeout(timer);
    }
}, [loading]);
  return (
    <>
      {loading === false ? (
        <div className="App">
          <Header />
          <div className='landing'>
            <div className='landing-h1-box'>
              <h1 className='landing-h1' id='matt'>MATT</h1>
              <h1 className='landing-h1' id='dizzle'>DIZZLE</h1>
              <h1 className='landing-h1' id='dev'>DEV</h1>
            </div>
            <Link id='hire-me-btn' to='./contact'> Hire Me </Link>
          </div>

          <main className='animate__animated animate__fadeInUp'>
            <ScrollToTop />
            <ScrollButton class='main-scroll animate__animated animate__fadeInDown' />
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
