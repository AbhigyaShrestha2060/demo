import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import AllRoutes from './routes/AllRoutes';
// import { University } from './pages/University/University';

function App() {
  return (
    <>
      <ThemeProvider>
        <AllRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;
