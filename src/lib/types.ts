export interface Ingredient {
  id: string;
  name: string;
  unit: 'g' | 'ml' | 'pieces' | 'tbsp' | 'tsp';
  category: 'dairy' | 'meat' | 'vegetables' | 'fruits' | 'grains' | 'spices' | 'other';
}

export interface RecipeIngredient {
  ingredientId: string;
  amount: number;
}

export interface Recipe {
  id: string;
  name: string;
  description: string;
  instructions: string;
  cookingTime: number;
  servings: number;
  ingredients: RecipeIngredient[];
  image: string;
  difficulty: 'easy' | 'medium' | 'hard';
}