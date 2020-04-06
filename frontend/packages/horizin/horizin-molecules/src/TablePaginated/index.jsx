/** @jsx jsx */
import { jsx } from "theme-ui";
import { useTable, usePagination } from "react-table";

import { Box } from "@horizin/atoms";

export function TableBase({
  columns,
  data,
  sxHeader,
  sxRow,
  sxCell,
  hideMainHeaders
}) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,

    // rows,
    // Paginaion
    page, // Instead of 'rows' the 'page' variable is used
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize }
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 5, pageIndex: 0 }
    },
    usePagination
  );

  React.useEffect(() => {
    if (hideMainHeaders) headerGroups.shift();
    // setPageSize(5);
  }, []);
  // Render the UI for your table
  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <Header {...column.getHeaderProps()} sx={sxHeader}>
                  {column.render("Header")}
                </Header>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <Row {...row.getRowProps()} sx={sxRow}>
                {row.cells.map(cell => {
                  return (
                    <Cell {...cell.getCellProps()} sx={sxCell}>
                      {cell.render("Cell")}
                    </Cell>
                  );
                })}
              </Row>
            );
          })}
        </tbody>
      </table>
      {/* 
          Pagination can be built however you'd like. 
          This is just a very basic UI implementation:
        */}
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>{" "}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>{" "}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span>
          | Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: "100px" }}
          />
        </span>{" "}
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[2, 10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export const TablePaginated = ({ columns, data, ...props }) => {
  return !data ? null : <TableBase columns={columns} data={data} {...props} />;
};

const Header = props => <Box as="th" {...props} />;
const Row = props => <Box as="tr" {...props} />;
const Cell = props => <Box as="td" {...props} />;

export default TablePaginated;
