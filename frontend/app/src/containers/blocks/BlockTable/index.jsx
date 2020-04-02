/* --- Global --- */
import {Table} from '@horizin/molecules';
import {shortenAddress, shortenHash} from '@src/utilities';
/* --- Local --- */

/* --- Component --- */
const TransactionTable = ({data}) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Core',
        columns: [
          {
            Header: 'Hash',
            accessor: d => shortenHash(d.hash, 10),
          },
          {
            Header: 'Parent Hash',
            accessor: d => shortenHash(d.parentHash, 10),
          },
        ],
      },
      {
        Header: 'Exta',
        columns: [
          {
            Header: 'Miner',
            accessor: d => shortenAddress(d.miner, 10),
          },
          {
            Header: 'Difficulty',
            accessor: 'difficulty',
          },
          {
            Header: 'Timestamp',
            accessor: 'timestamp',
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
