export interface MealsListResponse {
  success: boolean;
  products?: MealInfo[];
  message?: string;
}
// export type MealsListResponse =
//   | {
//       success: true;
//       products: MealInfo[];
//     }
//   | {
//       success: false;
//       message: string;
//     };

export interface MealInfo {
  category: string;
  content: string;
  description: string;
  id: string;
  imageUrl: string;
  is_enabled: number;
  num?: number;
  origin_price: number;
  price: number;
  title: string;
  unit: string;
  imagesUrl?: string[];
  year?: string;
}

export interface CartItem {
  id: string;
  imageUrl: string;
  title: string;
  price: number;
  quantity: number;
}
