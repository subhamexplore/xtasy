// import logo from './logo.svg';
import './App.css';
import HomeTop from './components/HomeTop';
import Footer from './components/Footer';
import Timeline from './components/Timeline';

function App() {
  return (
    <>
    {/* // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a */}
          {/* className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */}
    <HomeTop/>
    <Timeline/>
    <Footer/>
    </>
  );
}

export default App;
