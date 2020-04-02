/* --- Component --- */
const CardStatistic = ({sx, ...props}) => {
  return (
    <Atom.Box sx={{...sx.outer, p: 3}}>
      <Atom.Flex
        alignCenter
        between
        sx={{...sx.inner, ...styleDefault}}
        {...props}>
        <Atom.Box>
          <Atom.Heading as="h5" sx={{fontSize: [3, 3, 5, 6]}}>
            {props.title}
          </Atom.Heading>
          <Atom.Heading as="h6" sx={{fontSize: 1}}>
            {props.subtitle}
          </Atom.Heading>
        </Atom.Box>
        <Atom.Flex center column>
          <Atom.Image src={props.image} sx={{maxWidth: 56}} />
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Box>
  );
};

const styleDefault = {
  borderRadius: 7,
  p: [2, 2, 4],
  width: '100%',
};

export default CardStatistic;
