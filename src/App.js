import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import './App.css';
import { Footer } from './components/Footer/Footer';
import { Navbar } from './components/Navbar/Navbar';
import University from './pages/CommonPage/Commpnpage';
import CollegeInfoNepal from './pages/hompage/Homepage';
import UNIDetailed from './pages/UniDetailedPage/UniDetailedPage';
// import { University } from './pages/University/University';

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
          *{' '}
          <Route
            path='/University'
            element={<University />}
          />
          <Route
            path='/UniversityDetailed'
            element={<UNIDetailed />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
