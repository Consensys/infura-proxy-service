const styleContainer = {
  bg: 'white',
  borderRadius: 4,
  boxShadow: 0,
  cursor: 'pointer',
  p: 1,
  transition: 'all 0.05s',
  width: [26],
  '&:hover': {
    boxShadow: 1,
    transform: 'scale(1.035)',
  },
};
const styleIcon = {
  // boxShadow: 1,
};

export default {
  styleContainer,
  styleIcon,
};
