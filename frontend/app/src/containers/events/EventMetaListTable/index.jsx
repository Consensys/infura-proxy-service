/* --- Global --- */
import {TableAdvanced} from '@horizin/molecules';
import {shortenHash} from '@src/utilities';
/* --- Local --- */

/* --- Component --- */
const TransactionTable = ({data, sx}) => {
  const columns = React.useMemo(
    () => [
      {
        Header: () => (
          <Atom.Heading sx={{fontSize: [3, 3, 4], textAlign: 'center', my: 3}}>
            Contract Events
          </Atom.Heading>
        ),
        id: 'core',
        columns: [
          {
            Header: 'Event Topic Hash',
            accessor: d => shortenHash(d.event_topic_hash, 10),
          },
          {
            Header: 'Event Name',
            accessor: 'event_name',
          },
          {
            Header: 'Event Bare Name',
            accessor: 'event_bare_name',
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
