import React, { createContext, useCallback, useEffect, useMemo, useState } from "react";

import useAPI from '../hooks/useAPI';
import { Country } from "../interfaces/Country";

interface CountryContextProps {
  countries: Country[];
  selectedCountries: Country[];
  totalPages: number;
  selectCountry(id: number): void
  loadMore(page: number, pageSize: number): void
}

const PAGE_SIZE = 20;

export const CountriesContext = createContext({} as CountryContextProps);

export function CountryProvider({ children }: { children: React.ReactNode }) {
  const [countries, setCountries] = useState<Country[]>([]);
  const [totalRegisters, setTotalRegisters] = useState(0);

  const { httpGet } = useAPI();

  function selectCountry(id: number) {
    const idx = countries.findIndex(c => c.id === id);
    if (idx < 0) { return };

    const newContries = countries;
    newContries[idx].selected = !newContries[idx].selected;

    setCountries([...newContries]);
  }

  const loadCountries = useCallback(async function(page: number = 1) {
    try {
      const data = await httpGet('/');
      setCountries(data.data);
      setTotalRegisters(data.metadata.total_registers);
    } catch (err) {
      console.log('[err]', err);
    }
  }, [httpGet]); 

  const selectedCountries = useMemo(() => {
    return countries.filter((country) => country.selected)
  }, [countries]);

  const totalPages = useMemo(() => {
    return Math.ceil(totalRegisters / PAGE_SIZE);
  }, [totalRegisters]);

  useEffect(() => {
    loadCountries();
  }, [loadCountries]);

  return (
    <CountriesContext.Provider
      value={{
        countries,
        selectedCountries,
        totalPages,
        selectCountry,
        loadMore: loadCountries,
      }}
    >
      {children}
    </CountriesContext.Provider>
  )
}