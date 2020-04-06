/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { useTable } from "react-table";

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
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  });

  if (hideMainHeaders) headerGroups.shift();

  // Render the UI for your table
  return (
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
        {rows.map((row, i) => {
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
  );
}

export const Table = ({ columns, data, ...props }) => {
  return !data ? null : <TableBase columns={columns} data={data} {...props} />;
};

const Header = props => <Box as="th" {...props} />;
const Row = props => <Box as="tr" {...props} />;
const Cell = props => <Box as="td" {...props} />;

export default Table;
