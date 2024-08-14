import { StatusBar } from 'react-native';
import Router from './src/Router';
import { CountryProvider } from './src/data/contexts/CountriesContext'

export default function App() {
  return (
    <CountryProvider>
      <StatusBar backgroundColor="#000" />
      <Router />
    </CountryProvider>
  );
}
