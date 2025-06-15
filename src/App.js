import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import './App.css';
import { Footer } from './components/Footer/Footer';
import { Navbar } from './components/Navbar/Navbar';
import CollegeInfoNepal from './pages/hompage/Homepage';
import { University } from './pages/University/University';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route
            path='/'
            element={<CollegeInfoNepal />}
          />

          <Route
            path='/University'
            element={<University />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
