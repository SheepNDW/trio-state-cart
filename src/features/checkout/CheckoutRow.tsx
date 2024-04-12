import { CartItem } from '~/types';

function CheckoutRow({ item }: { item: CartItem }) {
  const itemsSubtotal = item.price * item.quantity;

  return (
    <tr>
      <td className="border p-2">{item.title}</td>
      <td className="border p-2">{item.price}元</td>
      <td className="border p-2">{item.quantity}</td>
      <td className="border p-2">{itemsSubtotal}元</td>
    </tr>
  );
}

export default CheckoutRow;
