import type { MealInfo } from '~/types';
import Button from '~/ui/Button';

function MealItem({ meal }: { meal: MealInfo }) {
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
          <Button>加入購物車</Button>
        </div>
      </div>
    </div>
  );
}

export default MealItem;
