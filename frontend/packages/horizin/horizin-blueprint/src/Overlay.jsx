import React, {useState} from 'react';
import {Button, Overlay as OverlayBlueprint} from '@blueprintjs/core';

export const Overlay = ({children, ...props}) => {
  const [isOpen, setIsOpen] = useState();
  const toggleOverlay = () => setIsOpen(!isOpen);

  return (
    <>
      <Button text="Show overlay" onClick={toggleOverlay} />
      <OverlayBlueprint
        isOpen={isOpen}
        onClose={toggleOverlay}
        className={'content-boi'}>
        {children && children[1] ? children[1] : null}
      </OverlayBlueprint>
    </>
  );
};
