import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
//import Section from './Components/Sections/FunctionalComp'

function App() {
  return (
    <div className="App">
      <Main />
      <h2>Welcome to React World</h2>
      <Header />
      <Main />
      <Footer />
      <Section />
    </div>
  );
}

export default App;
