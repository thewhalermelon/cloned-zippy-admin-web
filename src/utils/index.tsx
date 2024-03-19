import { NavigateFunction } from 'react-router-dom';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

import { IMemberShipTableData } from '../types';

export const handleNavigate = (navigate: NavigateFunction, path: string | undefined) => {
  navigate(path || '/');
};

export const getFirstPathURL = (path: string) => {
  return `/${path.split('/')[1]}`;
};

export const exportToExcel = (tableData: IMemberShipTableData[], fileName = 'table-data') => {
  const ws = XLSX.utils.json_to_sheet(tableData);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

  // ANCHOR - Buffer
  const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });

  // ANCHOR - Create a Blob
  const blob = new Blob([wbout], { type: 'application/octet-stream' });

  // ANCHOR - Save the file
  saveAs(blob, `${fileName}.xlsx`);
};
