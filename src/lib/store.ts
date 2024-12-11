import { create } from 'zustand';
import { ingredients as initialIngredients, recipes as initialRecipes } from './data';
import type { Ingredient, Recipe } from './types';

interface StoreState {
  ingredients: Ingredient[];
  recipes: Recipe[];
  addIngredient: (ingredient: Omit<Ingredient, 'id'>) => void;
  addRecipe: (recipe: Omit<Recipe, 'id'>) => void;
  updateIngredient: (id: string, ingredient: Partial<Ingredient>) => void;
  updateRecipe: (id: string, recipe: Partial<Recipe>) => void;
  deleteIngredient: (id: string) => void;
  deleteRecipe: (id: string) => void;
}

export const useStore = create<StoreState>((set) => ({
  ingredients: initialIngredients,
  recipes: initialRecipes,
  addIngredient: (ingredient) =>
    set((state) => ({
      ingredients: [
        ...state.ingredients,
        { ...ingredient, id: Math.random().toString(36).slice(2) },
      ],
    })),
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [
        ...state.recipes,
        { ...recipe, id: Math.random().toString(36).slice(2) },
      ],
    })),
  updateIngredient: (id, ingredient) =>
    set((state) => ({
      ingredients: state.ingredients.map((i) =>
        i.id === id ? { ...i, ...ingredient } : i
      ),
    })),
  updateRecipe: (id, recipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === id ? { ...r, ...recipe } : r
      ),
    })),
  deleteIngredient: (id) =>
    set((state) => ({
      ingredients: state.ingredients.filter((i) => i.id !== id),
    })),
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
    })),
}));