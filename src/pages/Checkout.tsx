import { useNavigate } from 'react-router-dom';
import { useCart } from '~/context/useCart';
import CheckoutTable from '~/features/checkout/CheckoutTable';
import Button from '~/ui/Button';
import Heading from '~/ui/Heading';

function Checkout() {
  const { clearCart } = useCart();
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <Heading>購物明細</Heading>
      <div className="overflow-x-auto">
        <CheckoutTable />
      </div>
      <div className="mt-4 flex justify-end">
        <Button
          onClick={() => {
            clearCart();
            navigate('/mealslist');
          }}
        >
          確認結帳
        </Button>
      </div>
    </div>
  );
}

export default Checkout;
