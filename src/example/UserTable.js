import React from 'react';
import {
  CellMeasurer,
  CellMeasurerCache,
} from 'react-virtualized';
import MyTable from '../components/shared/Table';

const cache = new CellMeasurerCache({
  fixedWidth: true,
  minHeight: 70,
});

function UserTable() {
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
  const data = [
    {
      id: '1',
      firstName: 'Koo',
      lastName: 'Test',
      email: 'kootest@mailiantor.com',
    },
    {
      id: '2',
      firstName: 'Koo 1',
      lastName: 'Test 1',
      email: 'kootest1@mailiantor.com',
    },
    {
      id: '3',
      firstName: 'Koo 2',
      lastName: 'Test 2',
      email: 'kootest2@mailiantor.com',
    },
  ];

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

  return (
    <MyTable
      data={data}
      columns={columns}
    />
  );
}

export default UserTable;
