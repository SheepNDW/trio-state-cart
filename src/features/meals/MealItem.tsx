// import { useDispatch } from 'react-redux';
// import { useCart } from '~/context/useCart';
// import { addItem } from '~/features/cart/cartSlice';
import { useCartStore } from '~/store/useCartStore';
// import type { AppDispatch } from '~/redux-store';
import type { MealInfo } from '~/types';
import Button from '~/ui/Button';

function MealItem({ meal }: { meal: MealInfo }) {
  // const { addItem } = useCart();
  // const dispatch = useDispatch<AppDispatch>();
  const addItem = useCartStore(state => state.addItem);

  function handleAddToCart() {
    const item = {
      id: meal.id,
      title: meal.title,
      imageUrl: meal.imageUrl,
      price: meal.price,
      quantity: 1,
    };

    // dispatch(addItem(item));
    addItem(item);
  }

  return (
    <div className="overflow-hidden rounded-lg border shadow-lg">
      <img
        src={meal.imageUrl}
        alt={meal.title}
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold">{meal.title}</h3>
        <p className="text-base text-gray-700">{meal.description}</p>
        <div className="mt-2">
          <span className="text-gray-600 line-through">
            原價 {meal.origin_price}元
          </span>
          <span className="ml-2 font-bold text-red-500">
            特價 {meal.price}元
          </span>
        </div>
        <div className="mt-2">
          <Button onClick={handleAddToCart}>加入購物車</Button>
        </div>
      </div>
    </div>
  );
}

export default MealItem;
