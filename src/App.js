import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookingPage from './pages/BookingPage'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
