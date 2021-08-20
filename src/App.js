import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body';
import Navigator from './components/Navigator'



function App() {
  return (
    <div className="App">
      <Header/>
      <Body />
      <Footer />
      <Navigator />
    </div>
  );
}

export default App;
