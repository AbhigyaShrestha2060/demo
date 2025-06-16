// hooks/useUniversityFilters.js
import { useMemo } from 'react';

export const useUniversityFilters = ({
  universities,
  searchTerm,
  selectedUniversities,
  foreignAffiliated,
}) => {
  const filteredUniversities = useMemo(() => {
    return universities.filter((uni) => {
      const matchesSearch =
        uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        uni.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        uni.type.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesSelected =
        selectedUniversities.length === 0 ||
        selectedUniversities.includes(uni.name);

      // You can add logic for foreignAffiliated here if needed

      return matchesSearch && matchesSelected;
    });
  }, [universities, searchTerm, selectedUniversities, foreignAffiliated]);

  return filteredUniversities;
};
