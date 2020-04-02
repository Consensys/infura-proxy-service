/* --- Component --- */
const CardStatistic = ({sx, ...props}) => {
  return (
    <Atom.Box sx={{...sx.outer, p: 3}}>
      <Atom.Flex
        alignCenter
        between
        sx={{...sx.inner, ...styleDefault}}
        {...props}>
        <Atom.Flex center column sx={{p: 3}}>
          {props.icon}
        </Atom.Flex>
        <Atom.Box>
          <Atom.Heading as="h5" sx={{fontSize: [2, 2, 3]}}>
            {props.title}
          </Atom.Heading>
          <Atom.Heading as="h6" sx={{fontSize: 1}}>
            {props.subtitle}
          </Atom.Heading>
        </Atom.Box>
      </Atom.Flex>
    </Atom.Box>
  );
};

const styleDefault = {
  borderRadius: 7,
  p: [2],
  width: '100%',
};

export default CardStatistic;
