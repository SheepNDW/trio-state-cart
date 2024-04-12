import { useQuery } from '@tanstack/react-query';
import { MealsListResponse } from '~/types';

export function useMeals() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['meals'],
    queryFn: fetchMeals,
  });

  return {
    meals: data?.products ?? [],
    isLoading,
    error,
  };
}

async function fetchMeals() {
  const res = await fetch(
    'https://vue3-course-api.hexschool.io/api/casper-hexschool/products/all'
  );
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data as MealsListResponse;
}
