import React, { useState } from 'react';
import {
  CellMeasurer,
  CellMeasurerCache,
} from 'react-virtualized';
import MyTable from '../components/shared/Table';

const limit = 5;

const cache = new CellMeasurerCache({
  fixedWidth: true,
  minHeight: 70,
});

export function setMockUsers() {
  const res = [];
  for (let i = 0; i < 1000; i++) {
    res.push({
      id: `KO${i + 1}`,
      firstName: `Koo ${i + 1}`,
      lastName: 'Test',
      email: `kootest${i + 1}@mailiantor.com`,
    });
  }
  return res;
}

function UserTable() {
  const [currentPage, setCurrentPage] = useState(1);

  function renderData(data) {
    return (
      <div>
        {data}
      </div>
    );
  }
  function renderId({
    dataKey,
    parent,
    rowIndex,
    rowData,
  }) {
    return (
      <CellMeasurer
        cache={cache}
        columnIndex={0}
        key={dataKey}
        parent={parent}
        rowIndex={rowIndex}
      >
        <a href="https://google.com" target="_blank" rel="noreferrer">
          {rowData.id}
        </a>
      </CellMeasurer>
    );
  }
  const data = setMockUsers();
  const columns = [
    {
      label: 'Id',
      dataKey: 'Id',
      width: 90,
      cellRenderer: renderId,
    },
    {
      disableSort: true,
      label: 'First Name',
      dataKey: 'firstName',
      width: 150,
      flexGrow: 1,
      cellRenderer: ({ rowData: { firstName } }) => renderData(firstName),
    },
    {
      disableSort: true,
      label: 'Last Name',
      dataKey: 'lastName',
      width: 150,
      flexGrow: 1,
      cellRenderer: ({ rowData: { lastName } }) => renderData(lastName),
    },
    {
      disableSort: true,
      label: 'Email',
      dataKey: 'email',
      width: 200,
      flexGrow: 1,
      cellRenderer: ({ rowData: { email } }) => renderData(email),
    },
  ];

  function onPageChange({ selected }) {
    setCurrentPage(selected + 1);
    // To be update to call API
  }
  const lasData = currentPage * limit;
  const rowRender = data.slice(lasData - 5, lasData);
  return (
    <MyTable
      data={rowRender}
      totalPage={Math.ceil(data.length / limit)}
      columns={columns}
      onPageChange={onPageChange}
    />
  );
}

export default UserTable;
