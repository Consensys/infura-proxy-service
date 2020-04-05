/* --- Global --- */
import {Table} from '@horizin/molecules';
import {shortenAddress, shortenHash} from '@src/utilities';
/* --- Local --- */

/* --- Component --- */
const TransactionTable = ({data}) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Event Meta',
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
      <Table columns={columns} data={data} />
    </>
  );
};
export default TransactionTable;
