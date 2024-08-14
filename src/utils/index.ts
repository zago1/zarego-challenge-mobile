import { Country } from "../data/interfaces/Country";
import { TableData } from "../data/interfaces/TableData";
import { TableRow } from "../data/interfaces/TableRow";

const PERFORMANCE = 'Performance';
const AUTOCRATIC = 'Autocratic';
const DECISIVE = 'Decisive';
const DIPLOMATIC = 'Diplomatic';
const FACE_SAVER = 'Face Saver';

export function formatCountriesToTableData(countries: Country[]) {
  const headerTitles: string[] = [];
  const tableRows: TableRow[] = [
    {[`${PERFORMANCE}`]: []},
    {[`${AUTOCRATIC}`]: []},
    {[`${DECISIVE}`]: []},
    {[`${DIPLOMATIC}`]: []},
    {[`${FACE_SAVER}`]: []},
  ]
  ;

  for (const country of countries) {
    headerTitles.push(country.country_name);
    tableRows[0][PERFORMANCE].push(`${country.performance_oriented}`);
    tableRows[1][AUTOCRATIC].push(`${country.autocratic}`);
    tableRows[2][DECISIVE].push(`${country.decisive}`);
    tableRows[3][DIPLOMATIC].push(`${country.diplomatic}`);
    tableRows[4][FACE_SAVER].push(`${country.face_saver}`);
  }

  


  return { headerTitles, tableRows };
}