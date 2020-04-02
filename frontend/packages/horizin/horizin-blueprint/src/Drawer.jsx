/* --- Global --- */
import React, {useState} from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {Drawer as DrawerBlueprint, Position} from '@blueprintjs/core';
import {Span, Box} from '@horizin/atoms';
import {Component} from '@horizin/ui-compose';
/* --- Local --- */

/* --- Drawer :  Blueprint : Component --- */
export const Drawer = ({children, icon, title, size, ...props}) => {
  const [isOpen, setOpenStatus] = useState(false);
  const toggleDrawer = () => setOpenStatus(!isOpen);

  return (
    <>
      <Box>
        <Span onClick={toggleDrawer}>
          {children[0] ? Component(children[0]) : null}
        </Span>
      </Box>
      <DrawerBlueprint
        title={title || null}
        icon={icon || null}
        isOpen={isOpen}
        onClose={toggleDrawer}
        size={size || 400}
        position={Position.RIGHT}>
        <Box>
          <Box sx={{height: '100vh'}}>
            <PerfectScrollbar>
              <Box sx={{p: 3}}>{children[1]}</Box>
            </PerfectScrollbar>
          </Box>
        </Box>
      </DrawerBlueprint>
    </>
  );
};

export default Drawer;
