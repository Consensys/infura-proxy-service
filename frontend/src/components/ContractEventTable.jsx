import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import Snackbar from "./Snackbar";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function SimpleTable({ data = [] }) {
  const classes = useStyles();

  React.useMemo(() => {
    console.log(data, "isOpen");
  }, [data]);

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Contract</TableCell>
              <TableCell align="left">Transaction Hash</TableCell>
              <TableCell align="left">Event Topic Hash</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.name}>
                <TableCell align="left">{row.event_abi.name}</TableCell>
                <TableCell align="left">{row.contract_address}</TableCell>
                <TableCell align="left">{row.transaction_hash}</TableCell>
                <TableCell align="left">{row.event_topic_hash}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Snackbar isOpen={data} />
    </>
  );
}

const useConvertValuesToDisplay = (values) => {
  const [list, setList] = React.useState([]);

  React.useEffect(() => {
    const l = Object.keys(values).map((k) => {
      if (typeof values[k] === "string") {
        return values[k];
      }
    });
    setList(l);

    console.log(l);
  }, [values]);

  return list;
};
