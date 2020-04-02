const MenuItemTab = props => {
  return (
    <Atom.Flex aligCenter between p4 sx={props.sx}>
      <Atom.Box>
        <Molecule.Link to={props.to}>
          <Atom.Flex column>
            <Atom.Heading xl m0>
              {props.label}
            </Atom.Heading>
          </Atom.Flex>
        </Molecule.Link>
        <Atom.Paragraph sm>{props.subtitle}</Atom.Paragraph>
        <Atom.Span tag sm sx={{mt: 2}}>
          Create {props.label}
        </Atom.Span>
      </Atom.Box>
      <Atom.Image src={props.image} sx={{mb: 2, width: 62}} />
    </Atom.Flex>
  );
};

export default MenuItemTab;
