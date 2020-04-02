/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link as ReachLink } from "@reach/router";

export const Link = ({ sx, ...props }) => {
  return (
    <ReachLink
      sx={{
        m: 0,
        ...sx
      }}
      {...props}
    />
  );
};
