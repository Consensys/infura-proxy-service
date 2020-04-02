/* --- Global --- */
import {useState} from 'react';
import {Popover, PopoverInteractionKind, Position} from '@blueprintjs/core';

/* --- Local --- */

/* --- Component --- */
const CreateTeamPopover = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);
  const manageState = event => {
    console.log(event);
    setIsOpen(event);
  };

  return (
    <Atom.Flex alignCenter sx={props.sx}>
      <Popover
        isOpen={isOpen}
        // onClosed={toggleOpen}
        canEscapeKeyClose={true}
        onInteraction={manageState}
        interactionKind={PopoverInteractionKind.CLICK}
        popoverClassName="bp3-popover-content-sizing"
        position={Position.BOTTOM_LEFT}>
        <Atom.Box>
          <Atom.Span tag sm pointer onClick={toggleOpen}>
            +
          </Atom.Span>
        </Atom.Box>

        <Atom.Flex
          sx={{
            flexWrap: 'wrap',
            minWidth: 300,
          }}>
          <MenuItem
            label="Create Proposal"
            image="https://image.flaticon.com/icons/svg/1673/1673620.svg"
            to="/proposal/create"
            toggle={toggleOpen}
            sx={{
              borderColor: 'gray',
              borderBottomWidth: 2,
              borderRightWidth: 2,
              borderStyle: 'solid',
              p: [3],
              py: [4],
              width: ['100%', '100%', '50%'],
            }}
          />
          <MenuItem
            label="Create Bounty"
            image="https://image.flaticon.com/icons/svg/1673/1673636.svg"
            to="/bounty/create"
            sx={{
              borderColor: 'gray',
              borderBottomWidth: 2,
              borderStyle: 'solid',
              p: [3],
              py: [4],
              width: ['100%', '100%', '50%'],
            }}
          />
          <MenuItem
            label="Create Team"
            image="https://image.flaticon.com/icons/svg/1673/1673590.svg"
            to="/team/create"
            sx={{
              borderColor: 'gray',
              borderRightWidth: 2,
              borderStyle: 'solid',
              p: [3],
              py: [4],
              width: ['100%', '100%', '50%'],
            }}
          />
          <MenuItem
            label="Create Guild"
            image="https://image.flaticon.com/icons/svg/1673/1673614.svg"
            to="/guild/create"
            sx={{
              borderColor: 'gray',
              borderStyle: 'solid',
              p: [3],
              py: [4],
              width: ['100%', '100%', '50%'],
            }}
          />
        </Atom.Flex>
      </Popover>
    </Atom.Flex>
  );
};

const MenuItem = props => {
  return (
    <Atom.Flex center column p4 sx={props.sx} onClick={props.toggle}>
      <Molecule.Link to={props.to}>
        <Atom.Flex center column>
          <Atom.Image src={props.image} sx={{mb: 2, width: 45}} />
          <Atom.Span>{props.label}</Atom.Span>
        </Atom.Flex>
      </Molecule.Link>
    </Atom.Flex>
  );
};

export default CreateTeamPopover;
