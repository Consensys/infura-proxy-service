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

export default MenuItem;
