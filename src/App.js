import './App.css';
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Header from './components/Header'

function App() {
  return (
    <>
    <div className="App">
     <h1>Homepage</h1>
    </div>

      <Navbar />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
