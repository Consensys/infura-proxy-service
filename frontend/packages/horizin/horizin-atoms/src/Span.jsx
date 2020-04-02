import React from "react";
import Box from "./Box";

export const Span = React.forwardRef((props, ref) => (
  <Box
    as="span"
    ref={ref}
    variant="text"
    {...props}
    __themeKey="text"
    __effectKey="text"
    __variantsKey="effects.text"
    __css={
      {
        // display: "inline-block"
      }
    }
  />
));
