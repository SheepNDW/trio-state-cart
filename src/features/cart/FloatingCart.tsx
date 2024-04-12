import { Link } from 'react-router-dom';
import CartIcon from '~/assets/bag.png';
import { cartItems } from '~/fakeData';

function FloatingCart() {
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="fixed bottom-12 right-12">
      <Link className="relative block h-10 w-10" to="/cart">
        <img src={CartIcon} alt="購物車" />
        {itemCount > 0 && (
          <span className="absolute right-0 top-0 inline-flex -translate-y-1/2 translate-x-1/2 transform items-center justify-center rounded-full bg-red-600 px-2 py-1 text-xs font-bold leading-none text-white">
            {itemCount}
          </span>
        )}
      </Link>
    </div>
  );
}

export default FloatingCart;
