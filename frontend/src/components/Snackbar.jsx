import React from "react";

import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

/* --- Snackbar --- */
const SnackbarAlert = ({ isOpen }) => {
  const [open, handleClick] = React.useState(undefined);

  const handleClose = (event) => {
    console.log(event);
    handleClick(false);
  };

  React.useEffect(() => {
    handleClick(isOpen);
  }, [isOpen]);

  return (
    <>
      <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
    </>
  );
};
export default SnackbarAlert;
