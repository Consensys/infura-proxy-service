/**
 * @component Template
 * @param {*} props
 * @description
 */

/* --- Global --- */

/* --- Local --- */

/* --- Screen : Component --- */
const Screen = props => {
  return (
    <Atom.Box>
      <Showcase />
      <Main />
    </Atom.Box>
  );
};

/* --- Showcase : Component --- */
const Showcase = props => {
  return <Atom.Flex sx={styleShowcase}></Atom.Flex>;
};

const styleShowcase = {};

/* --- Main : Component --- */
const Main = props => {
  return <Atom.Flex sx={styleMain}></Atom.Flex>;
};

const styleMain = {};

export default Screen;
