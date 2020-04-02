/* --- Global --- */
import {Table} from '@horizin/molecules';
import {shortenHash} from '@src/utilities';
/* --- Local --- */

/* --- Component --- */
const TransactionTable = ({data}) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Core',
        columns: [
          {
            Header: 'Block Number',
            accessor: 'blockNumber',
          },
          {
            Header: 'Confirmations',
            accessor: 'confirmations',
          },
          {
            Header: 'Hash',
            // accessor: 'hash',
            accessor: d => shortenHash(d.hash, 10),
          },
          {
            Header: 'Block Hash',
            // accessor: 'blockHash',
            accessor: d => shortenHash(d.blockHash, 10),
          },
        ],
      },
      {
        Header: 'Accounts',
        columns: [
          {
            Header: 'To',
            accessor: d => shortenHash(d.to, 10),
          },
          {
            Header: 'From',
            accessor: d => shortenHash(d.from, 10),
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
