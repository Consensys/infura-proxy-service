/* --- Global --- */
import {TableAdvanced} from '@horizin/molecules';
import {shortenAddress, shortenHash} from '@src/utilities';
/* --- Local --- */
import {EventTokenTransfer, EpochToRelativeDate} from '@components';

/* --- Component --- */
const TransactionTable = ({data, sx}) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Core',
        columns: [
          {
            Header: 'Event',
            accessor: d => (
              <Atom.Span>
                <EventTokenTransfer data={JSON.parse(d.json_event)} />
              </Atom.Span>
            ),
          },
          {
            Header: 'Transaction Hash',
            accessor: d => shortenHash(d.transaction_hash, 10),
          },
          {
            Header: 'Event Topic Hash',
            accessor: d => shortenHash(d.event_topic_hash, 10),
          },
          {
            Header: 'Contract Address',
            accessor: d => shortenAddress(d.contract_address, 10),
          },
        ],
      },
      {
        Header: 'Exta',
        columns: [
          // {
          //   Header: 'JSON Event',
          //   accessor: d => JSON.stringify(d.json_event),
          // },
          {
            Header: 'Created',
            // accessor: 'createdAt',
            accessor: d => <EpochToRelativeDate epoch={d.createdAt} />,
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
