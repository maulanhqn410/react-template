import React from 'react';
import {
  Column,
  AutoSizer,
  CellMeasurerCache,
} from 'react-virtualized';
import { size } from 'lodash';
import PropTypes from 'prop-types';
import {
  TextCenter,
  StyledTable,
} from './style';

const cache = new CellMeasurerCache({
  fixedWidth: true,
  minHeight: 70,
});

const MyTable = ({
  data,
  columns,
}) => (
  <AutoSizer disableHeight>
    {({ width }) => (
      <StyledTable
        width={width}
        autoHeight
        height={data.length > 0 ? 70 * data.length : 100}
        headerHeight={40}
        rowCount={size(data)}
        rowGetter={({ index }) => data[index]}
        rowHeight={cache.rowHeight}
        rowClassName={({ index }) => (index % 2 === 0 ? 'even' : 'odd')}
        noRowsRenderer={() => (
          <TextCenter>No data to display</TextCenter>
        )}
      >
        {columns.map((content) => (
          <Column
            key={content.label}
            label={content.label}
            dataKey={content.dataKey}
            width={content.width}
            cellRenderer={content.cellRenderer}
            disableSort={content.disableSort}
          />
        ))}
      </StyledTable>
    )}
  </AutoSizer>
);

MyTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MyTable;
