
interface ItemTableProps {
  productId: string;
  name?: string;
  qty?: number;
  price?: string;
}

const ItemTable = ({ productId, name, qty, price }: ItemTableProps) => {

  return (
    <tr className="bg-gray-50">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {name}
      </th>
      <td className="px-6 py-4">{qty}</td>
      <td className="px-6 py-4 bg-gray-50">₹{price}</td>
    </tr>
  );
};

export default ItemTable;
