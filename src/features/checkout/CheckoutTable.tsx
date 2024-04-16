import { useSelector } from 'react-redux';
// import { useCart } from '~/context/useCart';
import { getTotalPrice } from '~/features/cart/cartSlice';
import CheckoutRow from '~/features/checkout/CheckoutRow';
import type { RootState } from '~/redux-store';

function CheckoutTable() {
  // const { cartItems, totalPrice } = useCart();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const totalPrice = useSelector(getTotalPrice);

  return (
    <table className="w-full border-collapse text-left">
      <thead>
        <tr>
          <th className="border p-2">商品名稱</th>
          <th className="border p-2">單價</th>
          <th className="border p-2">數量</th>
          <th className="border p-2">小計</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map(item => (
          <CheckoutRow key={item.id} item={item} />
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td className="border p-2" colSpan={3}>
            總計
          </td>
          <td className="border p-2">{totalPrice}元</td>
        </tr>
      </tfoot>
    </table>
  );
}

export default CheckoutTable;
