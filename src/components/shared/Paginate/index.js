import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import {
  MdNavigateBefore,
  MdNavigateNext,
} from 'react-icons/md';
import PaginateContainer from './style';

function MyPaginate({
  pageCount,
  onPageChange,
  currentPage,
}) {
  return (
    <PaginateContainer>
      <ReactPaginate
        previousLabel={(
          <MdNavigateBefore
            size="25"
          />
        )}
        nextLabel={(
          <MdNavigateNext
            size="25"
          />
        )}
        breakLabel="..."
        pageCount={pageCount}
        marginPagesDisplayed={1}
        pageRangeDisplayed={5}
        onPageChange={onPageChange}
        containerClassName="react-pagination"
        activeClassName="active"
        forcePage={currentPage}
      />
    </PaginateContainer>
  );
}

MyPaginate.propTypes = {
  pageCount: PropTypes.number,
  currentPage: PropTypes.number,
  onPageChange: PropTypes.func.isRequired,
};

MyPaginate.defaultProps = {
  pageCount: 1,
  currentPage: 0,
};

export default MyPaginate;
