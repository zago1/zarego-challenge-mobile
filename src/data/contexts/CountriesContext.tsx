import React, { createContext, useCallback, useEffect, useMemo, useState } from "react";

import useAPI from '../hooks/useAPI';
import { Country } from "../interfaces/Country";

interface CountryContextProps {
  countries: Country[];
  selectedCountries: Country[];
  totalPages: number;
  loading: boolean;
  error: boolean;
  selectCountry(id: number): void
  loadMore(): void
  loadCountries(): void
}

const PAGE_SIZE = 20;

export const CountriesContext = createContext({} as CountryContextProps);

export function CountryProvider({ children }: { children: React.ReactNode }) {
  const [countries, setCountries] = useState<Country[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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
      if (loading) { return; }
      setError(false);
      setLoading(true);
      const { data, ok } = await httpGet(`/?page=${page}&pageSize=${PAGE_SIZE}`);

      if (!ok) { 
        setError(true);
        setLoading(false);
        return;
      }

      if (totalPages === 0) {
        setTotalPages(Math.ceil(data.metadata.total_registers / PAGE_SIZE));
      }

      setCountries(currentCountries => [...currentCountries, ...data.data]);
    } catch (err) {
      console.log('[err]', err);
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [httpGet, totalPages, loading]); 

  const loadMore = useCallback(async function() {
    const nextPage = currentPage + 1;
    if (nextPage > totalPages) { return; }

    await loadCountries(nextPage);
    setCurrentPage(nextPage);
  }, [currentPage, loadCountries, totalPages])

  const selectedCountries = useMemo(() => {
    return countries.filter((country) => country.selected)
  }, [countries]);

  useEffect(() => {
    loadCountries();
  }, []);

  return (
    <CountriesContext.Provider
      value={{
        countries,
        selectedCountries,
        totalPages,
        loading,
        error,
        selectCountry,
        loadMore,
        loadCountries
      }}
    >
      {children}
    </CountriesContext.Provider>
  )
}