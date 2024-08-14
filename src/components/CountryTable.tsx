import React from 'react';
import { StyleSheet, Text, ViewStyle } from 'react-native';
import { DataTable } from 'react-native-paper';
import { TableRow } from '../data/interfaces/TableRow';

type Props = {
  tableHeaders: string[];
  tableRows: TableRow[];
  style?: ViewStyle;
}

const CountryTable = ({ tableRows, tableHeaders, style }: Props) => {
  return (
      <DataTable style={[styles.container, style]}>
        <DataTable.Header style={[styles.tableHeader, styles.tableItem]}>
          <DataTable.Title style={styles.tableHeaderTitle}> </DataTable.Title>
          { tableHeaders.map((title, idx) => (
            <DataTable.Title key={`${title}-${idx}`} style={styles.tableHeaderTitle}>
              <Text style={styles.text}>{title}</Text>
            </DataTable.Title>
          )) }
        </DataTable.Header>
        {
          tableRows.map((row, idx) => {
            const title = Object.keys(row)[0];
            return (
              <DataTable.Row key={`${title}-${idx}`} style={styles.tableItem}>
                <DataTable.Cell style={[styles.tableHeaderTitle, styles.rowTitle]}>
                  <Text style={styles.rowTitleText}>{`${title}`}</Text>
                </DataTable.Cell>
                {
                  row[`${title}`].map((r, idx) => (
                    <DataTable.Cell key={`${r}-${idx}`} style={[styles.tableHeaderTitle, styles.tableRow]}>
                      <Text style={styles.text}>{`${r}`}</Text>
                    </DataTable.Cell>
                  ))
                }
              </DataTable.Row>
            )
        })
        }
      </DataTable>
  )
}

const styles = StyleSheet.create({ 
  container: { 
    width: 'auto',
    borderWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
  }, 
  tableItem: {
    borderTopWidth: 0,
    borderBottomWidth: 0, 
    paddingHorizontal: 0
  },
  tableHeader: { 
    backgroundColor: '#868788',
  },
  tableHeaderTitle: {
    width: 90,
    borderWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tableRow: {
    backgroundColor: '#393939'
  },
  rowTitle: {
    backgroundColor: '#fff'
  },
  rowTitleText: {
    color: '#0E0E0E',
    fontSize: 13
  },
  text: {
    color: '#fff',
    fontSize: 14,
  },
});

export { CountryTable };