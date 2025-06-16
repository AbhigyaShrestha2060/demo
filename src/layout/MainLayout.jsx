import { useContext } from 'react';
import { Footer } from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import { ThemeContext } from '../context/ThemeContext';

const MainLayout = ({ children }) => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
