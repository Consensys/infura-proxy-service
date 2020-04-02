const FetchingData = ({labelFetch, labelInit, isInit, sx}) => {
  return (
    <Atom.Box sx={sx}>
      {!isInit ? (
        <Atom.Box>
          <Atom.Span sx={{fontSize: [2, 2, 3]}}>{labelInit}</Atom.Span>
        </Atom.Box>
      ) : (
        <Atom.Box>
          <Atom.Heading sx={{fontSize: [2, 2, 3]}}>{labelFetch}</Atom.Heading>
        </Atom.Box>
      )}
    </Atom.Box>
  );
};

FetchingData.defaultProps = {
  labelInit: 'Start Search',
  labelFetch: 'Fetching',
};

export default FetchingData;
