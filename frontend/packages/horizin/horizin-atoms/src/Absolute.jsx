import React from 'react'
import Box from './Box'

export const Absolute = React.forwardRef((props, ref) => (
  <Box
    ref={ref}
    {...props}
    __effectKey="common"
    __variantsKey="effects.common" 
    __css={{
      position: 'absolute',
    }}
  />
))
