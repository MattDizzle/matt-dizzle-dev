import React, { useState } from 'react'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body';
import Navigator from './components/Navigator'
import LoadingScreen from './LoadingScreen/LoadingScreen'

function App() {
  const [loading, setLoading] = useState(true);
  const toggleLoading = () => setLoading(false)

  const timer = setTimeout(toggleLoading, 3000);
  if (loading === true) {
    setTimeout(toggleLoading, 3000);
  }

  if (loading === false) {
    clearTimeout(timer);
  }

  return (
    <>
        {loading === false ? (
           <div className="App">
           <Header/>
           <Body />
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
