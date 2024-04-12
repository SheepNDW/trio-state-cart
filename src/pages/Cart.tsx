import CartTable from '~/features/cart/CartTable';
import Heading from '~/ui/Heading';

function Cart() {
  return (
    <div className="p-4">
      <Heading>購物車</Heading>
      <CartTable />
    </div>
  );
}

export default Cart;
