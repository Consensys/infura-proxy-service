/**
 * @function EventTokenTransfer
 * @param {*} props
 */
const EventTokenTransfer = ({data, ...props}) => {
  return (
    <Atom.Flex column>
      <Atom.Span>
        <strong>To:</strong> {data.to}
      </Atom.Span>
      <Atom.Span>
        <strong>From:</strong> {data.from}
      </Atom.Span>
      <Atom.Span>
        <strong>value:</strong> {data.value._hex}
      </Atom.Span>
    </Atom.Flex>
  );
};
export default EventTokenTransfer;
