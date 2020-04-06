/* --- Global --- */
import {TableAdvanced} from '@horizin/molecules';
import {shortenAddress, shortenHash} from '@src/utilities';
/* --- Local --- */

/* --- Component --- */
const TransactionTable = ({data, sx}) => {
  const columns = React.useMemo(
    () => [
      {
        Header: () => (
          <Atom.Heading sx={{fontSize: [3, 3, 4], textAlign: 'center', my: 3}}>
            Contracts
          </Atom.Heading>
        ),
        id: 'core',
        columns: [
          {
            Header: 'Name',
            accessor: 'name',
          },
          {
            Header: 'Address',
            accessor: 'address',
            // accessor: d => shortenHash(d.address, 10),
          },
          {
            Header: 'Event Topics',
            accessor: d => (
              <Atom.Flex column>
                {d.event_topics.map(topic => (
                  <Atom.Span>{shortenHash(topic, 10)}</Atom.Span>
                ))}
              </Atom.Flex>
            ),
          },
        ],
      },
    ],
    [],
  );

  return (
    <>
      <TableAdvanced
        columns={columns}
        data={data}
        sx={{
          border: '1px solid',
          borderColor: 'gray',
          width: '100%',
          ...sx,
        }}
        sxHeader={{
          borderBottom: '2px solid ',
          borderBottomColor: 'gray',
          color: 'charcoal',
          py: 3,
        }}
        sxCell={{
          borderRight: '1px solid',
          borderRightColor: 'gray',
          p: 3,
        }}
        sxRow={{
          borderBottom: '1px solid ',
          borderBottomColor: 'gray',
          '&:hover': {
            bg: 'smoke',
          },
        }}
        sxPagination={{
          mt: 3,
        }}
      />
    </>
  );
};
export default TransactionTable;
