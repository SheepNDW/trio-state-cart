import { useState } from 'react';
import CartRow from '~/features/cart/CartRow';
import Button from '~/ui/Button';
import Table from '~/ui/Table';

import { cartItems as initialCartItems } from '~/fakeData';

function CartDetail() {
  const [cartItems] = useState(initialCartItems);

  // 計算總價
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Table columns="1fr 1fr 1fr 1fr 1fr">
      <Table.Header>
        <div></div>
        <div>品項</div>
        <div>數量</div>
        <div>價錢</div>
        <div>操作</div>
      </Table.Header>

      <Table.Body
        data={cartItems}
        tips="購物車是空的喔！快去選購吧！"
        render={cartItem => <CartRow key={cartItem.id} cartItem={cartItem} />}
      />

      <Table.Footer>
        {cartItems.length > 0 ? (
          <div className="flex items-center gap-2">
            <div className="font-bold">總計: {totalPrice}元</div>
            <Button to="/checkout">前往結帳</Button>
          </div>
        ) : (
          <Button to="/mealslist">前去選購</Button>
        )}
      </Table.Footer>
    </Table>
  );
}

export default CartDetail;
