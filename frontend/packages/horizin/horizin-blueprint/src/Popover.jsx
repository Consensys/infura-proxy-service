import React from 'react';
import {
  Popover as PopoverBlueprint,
  PopoverInteractionKind,
  Position,
} from '@blueprintjs/core';

export const Popover = ({children, ...props}) => {
  return (
    <PopoverBlueprint
      interactionKind={PopoverInteractionKind.CLICK}
      popoverClassName="bp3-popover-content-sizing"
      position={Position.BOTTOM}>
      {children[0]}
      <div>{children[1]}</div>
    </PopoverBlueprint>
  );
};
