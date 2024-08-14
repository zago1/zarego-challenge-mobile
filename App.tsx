import Router from './src/Router';
import { CountryProvider } from './src/data/contexts/CountriesContext'

export default function App() {
  return (
    <CountryProvider>
      <Router />
    </CountryProvider>
  );
}
