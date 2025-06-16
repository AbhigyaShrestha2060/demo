import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { UniversityProvider } from '../context/UniversityContext';
import MainLayout from '../layout/MainLayout';
import University from '../pages/CommonPage/Commonpage';
import CollegeInfoNepal from '../pages/hompage/Homepage';
import UNIDetailed from '../pages/UniDetailedPage/UniDetailedPage';

// import { University } from './pages/University/University';

function AllRoutes() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route
            path='/'
            element={
              <MainLayout>
                <CollegeInfoNepal />
              </MainLayout>
            }
          />
          *{' '}
          <Route
            path='/University'
            element={
              <MainLayout>
                <UniversityProvider>
                  <University />
                </UniversityProvider>
              </MainLayout>
            }
          />
          <Route
            path='/UniversityDetailed'
            element={
              <MainLayout>
                <UNIDetailed />
              </MainLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AllRoutes;
