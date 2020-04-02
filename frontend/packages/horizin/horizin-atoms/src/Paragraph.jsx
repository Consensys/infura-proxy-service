import React from 'react';
import Box from './Box';

export const Paragraph = React.forwardRef((props, ref) => (
  <Box
    as="p"
    variant="paragraph"
    ref={ref}
    __effectKey="text"
    __themeKey="text"
    __variantsKey="effects.text"
    __css={{
      display: 'block',
      mb: 10,
    }}
    {...props}
  />
));
