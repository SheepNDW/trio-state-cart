import FloatingCart from '~/features/cart/FloatingCart';
import MealItem from '~/features/meals/MealItem';
import { useMeals } from '~/features/meals/useMeals';
import Heading from '~/ui/Heading';
import Spinner from '~/ui/Spinner';

function MealsList() {
  const { meals, isLoading, error } = useMeals();

  if (isLoading) return <Spinner />;
  if (error) return <div>發生錯誤：{error.message}</div>;

  return (
    <div className="p-4">
      <Heading>餐點列表</Heading>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {meals.map(meal => (
          <MealItem key={meal.id} meal={meal} />
        ))}
      </div>

      <FloatingCart />
    </div>
  );
}

export default MealsList;
