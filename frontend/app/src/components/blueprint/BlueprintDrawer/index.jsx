/* --- Global --- */
import {useState} from 'react';
import {Drawer} from '@blueprintjs/core';
import {Component} from '@horizin/ui-compose';
import PerfectScrollbar from 'react-perfect-scrollbar';
/* --- Local --- */

/* --- BlueprintDrawer :  Blueprint : Component --- */
const BlueprintDrawer = ({children, icon, title, size, ...props}) => {
  const [isOpen, setOpenStatus] = useState(false);
  const toggleDrawer = () => setOpenStatus(!isOpen);

  return (
    <>
      <Atom.Box>
        <Atom.Span onClick={toggleDrawer}>
          {children[0] ? Component(children[0]) : null}
        </Atom.Span>
      </Atom.Box>
      <Drawer
        title={title || null}
        icon={icon || null}
        isOpen={isOpen}
        onClose={toggleDrawer}
        size={size || 400}
        position={{right: 0}}>
        <PerfectScrollbar>
          <Atom.Box sx={{p: 3}}>{children[1]}</Atom.Box>
        </PerfectScrollbar>
      </Drawer>
    </>
  );
};

export default BlueprintDrawer;
