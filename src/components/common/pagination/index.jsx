import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

/* Pagination Component 
-------------------------------------------------*/
class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pager: {},
    };
  }

  componentWillMount() {
    // set page if items array isn't empty
    if (this.props.total) {
      this.setPage(this.props.currentPage);
    }
  }

  setPage(page) {
    var total = this.props.total;
    var currentPage = page ? page : this.props.currentPage;
    var pager = this.state.pager;
    var perPage = this.props.perPage;
    if (page < 1 || page > pager.totalPages) {
      return;
    }

    // get new pager object for specified page
    pager = this.getPager(total, currentPage, perPage);
    // get new page of items from items array
    // update state
    this.setState({ pager: pager });
    this.props.onClick(page);
  }

  getPager(totalItems, currentPage, perPage) {
    // default page size is 10
    let pageSize = 10;

    // calculate total pages
    var totalPages = Math.ceil(totalItems / perPage);
    currentPage = currentPage > totalPages ? 1 : currentPage;
    var startPage, endPage;
    if (totalPages <= 10) {
      // less than 10 total pages so show all
      startPage = 1;
      endPage = totalPages;
    } else {
      // more than 10 total pages so calculate start and end pages
      if (currentPage <= 6) {
        startPage = 1;
        endPage = pageSize;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }

    // calculate start and end item indexes
    var startIndex = (currentPage - 1) * pageSize;
    var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
    // create an array of pages to ng-repeat in the pager control
    var pages = [...Array(endPage + 1 - startPage).keys()].map(
      (i) => startPage + i
    );
    // return object with all pager properties required by the view
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages,
    };
  }

  render() {
    var pager = this.state.pager;
    if (!pager.pages || pager.pages.length <= 1) {
      // don't display pager if there is only 1 page
      return null;
    }
    return (
      <ul className="pagination">
        <li
          className={
            pager.currentPage === 1
              ? "disabled prev page-numbers"
              : "prev page-numbers"
          }
        >
          <Link
            onClick={() => {
              this.setPage(pager.currentPage - 1);
            }}
            to={`?page=${pager.currentPage - 1}`}
          >
            &laquo;
          </Link>
        </li>
        {pager.pages.map((page, index) => (
          <li
            key={index}
            className={
              pager.currentPage === page
                ? "current page-numbers"
                : "page-numbers"
            }
          >
            <Link
              onClick={() => {
                this.setPage(page);
              }}
              to={`?page=${page}`}
            >
              {page}
            </Link>
          </li>
        ))}
        <li
          className={
            pager.currentPage === pager.totalPages
              ? "disabled next page-numbers"
              : "next page-numbers"
          }
        >
          <Link
            onClick={() => {
              this.setPage(pager.currentPage + 1);
            }}
            to={`?page=${pager.currentPage + 1}`}
          >
            &raquo;
          </Link>
        </li>
      </ul>
    );
  }
}
Pagination.propTypes = {
  // items: PropTypes.array.isRequired,
  pageSize: PropTypes.number,
};
export default Pagination;
