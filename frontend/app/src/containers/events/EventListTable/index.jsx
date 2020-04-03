/* --- Global --- */
import {Table} from '@horizin/molecules';
import {shortenAddress, shortenHash} from '@src/utilities';
/* --- Local --- */
// transaction_hash: "0xeff09f8e6ef9fc6ab1020e7499ec6b282a30a7616e3fedcc8b070018e83f5c10"
// event_topic_hash: "0xce0457fe73731f824cc272376169235128c118b49d344817417c6d108d155e82"
// contract_address: "0x00
/* --- Component --- */
const TransactionTable = ({data}) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Core',
        columns: [
          {
            Header: 'Tx Hash',
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
          {
            Header: 'EventABI',
            accessor: d => JSON.stringify(d.event_abi),
          },
          {
            Header: 'JSON Event',
            accessor: d => JSON.stringify(d.json_event),
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
