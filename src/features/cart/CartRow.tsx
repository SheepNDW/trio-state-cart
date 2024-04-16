// import { useCart } from '~/context/useCart';
import { useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '~/features/cart/cartSlice';
import type { AppDispatch } from '~/redux-store';
import type { CartItem } from '~/types';
import Button from '~/ui/Button';
import Table from '~/ui/Table';

function CartRow({ cartItem }: { cartItem: CartItem }) {
  const { id, title, price, quantity, imageUrl } = cartItem;
  // const { removeItem, updateQuantity } = useCart();
  const dispatch = useDispatch<AppDispatch>();

  function increaseQuantity() {
    const updatedItem = { ...cartItem, quantity: quantity + 1 };
    dispatch(updateQuantity(updatedItem));
  }

  function decreaseQuantity() {
    if (quantity === 1) {
      dispatch(removeItem(id));
    } else {
      const updatedItem = { ...cartItem, quantity: quantity - 1 };
      dispatch(updateQuantity(updatedItem));
    }
  }

  return (
    <Table.Row>
      <div>
        <img className="object-cover" src={imageUrl} alt={title} />
      </div>
      <div>{title}</div>
      <div className="flex items-center">
        <Button
          size="small"
          color="secondary"
          className="h-6 w-6"
          onClick={decreaseQuantity}
        >
          -
        </Button>
        <span className="mx-2">{quantity}</span>
        <Button
          size="small"
          color="secondary"
          className="h-6 w-6"
          onClick={increaseQuantity}
        >
          +
        </Button>
      </div>
      <div>{price * quantity}元</div>
      <Button
        size="small"
        color="secondary"
        onClick={() => dispatch(removeItem(id))}
      >
        移除
      </Button>
    </Table.Row>
  );
}

export default CartRow;
