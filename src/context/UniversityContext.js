// context/UniversityContext.js
import { createContext, useContext, useEffect, useState } from 'react';
import { fetchUniversities } from '../services/universityService';

const UniversityContext = createContext();

export const UniversityProvider = ({ children }) => {
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedUniversities, setSelectedUniversities] = useState([]);
  const [foreignAffiliated, setForeignAffiliated] = useState({
    yes: false,
    no: false,
  });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const loadUniversities = async () => {
      setLoading(true);
      const data = await fetchUniversities();
      setUniversities(data);
      setLoading(false);
    };
    loadUniversities();
  }, []);

  const clearFilters = () => {
    setSelectedUniversities([]);
    setForeignAffiliated({ yes: false, no: false });
    setSearchTerm('');
  };

  return (
    <UniversityContext.Provider
      value={{
        universities,
        loading,
        selectedUniversities,
        setSelectedUniversities,
        foreignAffiliated,
        setForeignAffiliated,
        searchTerm,
        setSearchTerm,
        clearFilters,
      }}>
      {children}
    </UniversityContext.Provider>
  );
};

export const useUniversity = () => useContext(UniversityContext);
