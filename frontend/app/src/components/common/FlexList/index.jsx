/* --- Global --- */
import {Component} from '@horizin/ui-compose';

/* --- Component --- */
const FlexList = ({list, component, sx, ...props}) => {
  console.log(list, 'listlist');
  return (
    <Atom.Flex sx={sx} {...props}>
      {list && list.map(collectible => Component(component, {...collectible}))}
    </Atom.Flex>
  );
};

export default FlexList;
