import React from 'react';
import {
  AutoSizer,
  List,
  CellMeasurerCache,
  CellMeasurer,
} from 'react-virtualized';
import PropTypes from 'prop-types';

const cache = new CellMeasurerCache({
  fixedWidth: true,
  defaultHeight: 100,
});

function Mylist({
  data,
}) {
  function renderRow({
    index, style, parent, key,
  }) {
    return (
      <CellMeasurer
        key={key}
        cache={cache}
        parent={parent}
        columnIndex={0}
        rowIndex={index}
      >
        <div style={style}>
          <div>{data[index].firstName}</div>
          <div>{data[index].lastName}</div>
        </div>
      </CellMeasurer>
    );
  }
  return (
    <AutoSizer>
      {({ width }) => (
        <List
          width={width}
          height={200}
          deferredMeasurementCache={cache}
          rowHeight={cache.rowHeight}
          rowRenderer={renderRow}
          rowCount={data.length}
          overscanRowCount={3}
        />
      )}
    </AutoSizer>
  );
}

Mylist.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Mylist.defaultProps = {
};

export default Mylist;
