import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';

import { Country } from "../data/interfaces/Country";
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
  ];

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

export async function shareFile(uri: string) {
  await shareAsync(uri);
}

export async function generatePDFByCountriesData(countries: Country[]) {
  const html = generateHTMLByCountriesData(countries);
  const file = await printToFileAsync({
    html,
    base64: false,
  });

  return file;
}

export function generateHTMLByCountriesData(countries: Country[]) {
  const { headerTitles, tableRows } = formatCountriesToTableData(countries);

  const html = `
    <html>
      <head>
        <style>
          table {
            font-family: arial, sans-serif;
            border-collapse: collapse;
            width: 100%;
          }

          td, th {
            border: 1px solid #000;
            padding: 8px;
            text-align: center;
          }

          th {
            background-color: #868788;
            color: #FFF;
          }

          .first-td-row {
            background-color: #FFF;
            color: #000;
          }

          .table-row {
            background-color: #393939;
            color: #fff;
          }

        </style>
      </head>
      <body>
        <h1> Result Data </h1>
        <div>
          <table>
            <tr>
              <th></th>
              ${headerTitles.map(title => `<th>${title}</th>`)}
            </tr>
            ${tableRows.map(row => {
              const title = Object.keys(row)[0];

              return `
                <tr>
                  <td class="first-td-row">${title}</td>
                  ${row[title].map(value => `
                    <td class="table-row">${value}</td>
                  `)}
                </tr>
              `
            })}
          </table>
        </div>
      </body>
    </html>
  `;

  return html;
}