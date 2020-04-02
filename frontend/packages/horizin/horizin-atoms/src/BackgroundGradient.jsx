import React from 'react';
import Box from './Box';

export const BackgroundGradient = React.forwardRef(
  ({children, ...props}, ref) => (
    <Box
      ref={ref}
      __effectKey="common"
      __variantsKey="effects.common"
      __css={{
        variant: 'layout.fill',
        overflow: 'hidden',
        position: 'absolute',
        opacity: props.opacity,
      }}
      direction={0}
      {...props}
    />
  ),
);
