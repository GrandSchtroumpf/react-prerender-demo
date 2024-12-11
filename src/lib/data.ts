import { Ingredient, Recipe } from './types';

export const ingredients: Ingredient[] = [
  { id: '1', name: 'Milk', unit: 'ml', category: 'dairy' },
  { id: '2', name: 'Eggs', unit: 'pieces', category: 'dairy' },
  { id: '3', name: 'Chicken Breast', unit: 'g', category: 'meat' },
  { id: '4', name: 'Spinach', unit: 'g', category: 'vegetables' },
  { id: '5', name: 'Tomatoes', unit: 'g', category: 'vegetables' },
  { id: '6', name: 'Rice', unit: 'g', category: 'grains' },
  { id: '7', name: 'Olive Oil', unit: 'tbsp', category: 'other' },
  { id: '8', name: 'Salt', unit: 'tsp', category: 'spices' },
  { id: '9', name: 'Black Pepper', unit: 'tsp', category: 'spices' },
  { id: '10', name: 'Garlic', unit: 'pieces', category: 'vegetables' },
  { id: '11', name: 'Onion', unit: 'pieces', category: 'vegetables' },
  { id: '12', name: 'Butter', unit: 'g', category: 'dairy' },
  { id: '13', name: 'Flour', unit: 'g', category: 'grains' },
  { id: '14', name: 'Sugar', unit: 'g', category: 'other' },
  { id: '15', name: 'Lemon', unit: 'pieces', category: 'fruits' },
  { id: '16', name: 'Parsley', unit: 'g', category: 'vegetables' },
  { id: '17', name: 'Basil', unit: 'g', category: 'vegetables' },
  { id: '18', name: 'Heavy Cream', unit: 'ml', category: 'dairy' },
  { id: '19', name: 'Paprika', unit: 'tsp', category: 'spices' },
  { id: '20', name: 'Cinnamon', unit: 'tsp', category: 'spices' },
];
export const recipes: Recipe[] = [
  {
    id: '1',
    name: 'Classic Chicken Rice',
    description: 'A comforting dish of tender chicken and fluffy rice',
    instructions:
      '1. Season chicken with salt and pepper\n2. Cook rice in a pot\n3. Pan-fry chicken until golden\n4. Serve chicken over rice',
    cookingTime: 30,
    servings: 4,
    ingredients: [
      { ingredientId: '3', amount: 500 },
      { ingredientId: '6', amount: 400 },
      { ingredientId: '7', amount: 2 },
      { ingredientId: '8', amount: 1 },
      { ingredientId: '9', amount: 1 },
    ],
    image:
      'https://images.unsplash.com/photo-1665400808116-f0e6339b7e9a?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    difficulty: 'easy',
  },
  {
    id: '2',
    name: 'Creamy Tomato Pasta',
    description: 'Rich and creamy pasta in a homemade tomato sauce',
    instructions:
      '1. Cook pasta al dente\n2. Sauté garlic and onions\n3. Add tomatoes and cream\n4. Toss with pasta',
    cookingTime: 25,
    servings: 4,
    ingredients: [
      { ingredientId: '5', amount: 400 },
      { ingredientId: '10', amount: 3 },
      { ingredientId: '11', amount: 1 },
      { ingredientId: '18', amount: 200 },
    ],
    image: 'https://images.unsplash.com/photo-1598866594230-a7c12756260f',
    difficulty: 'medium',
  },
  {
    id: '3',
    name: 'Spinach and Feta Quiche',
    description: 'A delicious savory tart with fresh spinach and feta cheese',
    instructions:
      '1. Prepare pie crust\n2. Sauté spinach\n3. Mix eggs and cream\n4. Bake until golden',
    cookingTime: 45,
    servings: 6,
    ingredients: [
      { ingredientId: '2', amount: 4 },
      { ingredientId: '4', amount: 300 },
      { ingredientId: '18', amount: 200 },
      { ingredientId: '13', amount: 200 },
    ],
    image:
      'https://images.unsplash.com/photo-1565181782289-457ee028de39?q=80&w=2373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    difficulty: 'medium',
  },
  {
    id: '4',
    name: 'Lemon Herb Chicken',
    description: 'Bright and flavorful chicken with fresh herbs',
    instructions:
      '1. Marinate chicken\n2. Prepare herb mixture\n3. Roast in oven\n4. Rest before serving',
    cookingTime: 40,
    servings: 4,
    ingredients: [
      { ingredientId: '3', amount: 600 },
      { ingredientId: '15', amount: 2 },
      { ingredientId: '16', amount: 30 },
      { ingredientId: '17', amount: 20 },
    ],
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d',
    difficulty: 'easy',
  },
  {
    id: '5',
    name: 'Cinnamon Apple Cake',
    description: 'A warm and cozy dessert perfect for any season',
    instructions:
      '1. Prepare apple mixture\n2. Make cake batter\n3. Layer and bake\n4. Cool before serving',
    cookingTime: 60,
    servings: 8,
    ingredients: [
      { ingredientId: '13', amount: 300 },
      { ingredientId: '14', amount: 200 },
      { ingredientId: '20', amount: 2 },
      { ingredientId: '12', amount: 150 },
    ],
    image:
      'https://plus.unsplash.com/premium_photo-1666353535270-71a38d00cd93?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    difficulty: 'medium',
  },
  {
    id: '6',
    name: 'Garlic Butter Shrimp',
    description: 'Succulent shrimp in a rich garlic butter sauce',
    instructions:
      '1. Clean shrimp\n2. Prepare garlic butter\n3. Cook shrimp\n4. Garnish and serve',
    cookingTime: 20,
    servings: 4,
    ingredients: [
      { ingredientId: '10', amount: 6 },
      { ingredientId: '12', amount: 100 },
      { ingredientId: '16', amount: 20 },
      { ingredientId: '15', amount: 1 },
    ],
    image: 'https://images.unsplash.com/photo-1625943553852-781c6dd46faa',
    difficulty: 'easy',
  },
  {
    id: '7',
    name: 'Spicy Vegetable Curry',
    description: 'A warming curry packed with vegetables and aromatic spices',
    instructions:
      '1. Prepare vegetables\n2. Make curry base\n3. Simmer until tender\n4. Serve with rice',
    cookingTime: 35,
    servings: 6,
    ingredients: [
      { ingredientId: '4', amount: 200 },
      { ingredientId: '5', amount: 300 },
      { ingredientId: '11', amount: 2 },
      { ingredientId: '19', amount: 2 },
    ],
    image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd',
    difficulty: 'medium',
  },
  {
    id: '8',
    name: 'Classic French Toast',
    description: 'Golden-brown French toast with maple syrup and fresh berries',
    instructions:
      '1. Prepare egg mixture\n2. Soak bread\n3. Cook until golden\n4. Add toppings',
    cookingTime: 20,
    servings: 4,
    ingredients: [
      { ingredientId: '1', amount: 200 },
      { ingredientId: '2', amount: 3 },
      { ingredientId: '14', amount: 30 },
      { ingredientId: '20', amount: 1 },
    ],
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929',
    difficulty: 'easy',
  },
  {
    id: '9',
    name: 'Mediterranean Salad',
    description: 'Fresh and healthy salad with Mediterranean flavors',
    instructions:
      '1. Chop vegetables\n2. Prepare dressing\n3. Combine ingredients\n4. Toss and serve',
    cookingTime: 15,
    servings: 4,
    ingredients: [
      { ingredientId: '5', amount: 200 },
      { ingredientId: '7', amount: 3 },
      { ingredientId: '15', amount: 1 },
      { ingredientId: '16', amount: 30 },
    ],
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe',
    difficulty: 'easy',
  },
  {
    id: '10',
    name: 'Chocolate Lava Cake',
    description: 'Decadent chocolate cake with a molten center',
    instructions:
      '1. Prepare chocolate mixture\n2. Make batter\n3. Fill ramekins\n4. Bake until edges are set',
    cookingTime: 25,
    servings: 4,
    ingredients: [
      { ingredientId: '2', amount: 2 },
      { ingredientId: '12', amount: 100 },
      { ingredientId: '13', amount: 50 },
      { ingredientId: '14', amount: 100 },
    ],
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51',
    difficulty: 'hard',
  },
];
