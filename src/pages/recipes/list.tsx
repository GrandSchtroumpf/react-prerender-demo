import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Search, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useStore } from '@/lib/store';
import { Badge } from '@/components/ui/badge';

export function RecipeList() {
  const [search, setSearch] = useState('');
  const recipes = useStore((state) => state.recipes);
  const ingredients = useStore((state) => state.ingredients);

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Recipes</h1>
        <Link to="/recipes/create">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Recipe
          </Button>
        </Link>
      </div>
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search recipes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredRecipes.map((recipe) => (
          <div
            key={recipe.id}
            className="rounded-lg border bg-card overflow-hidden"
          >
            <img
              loading="lazy"
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{recipe.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {recipe.description}
              </p>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {recipe.cookingTime} min
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  {recipe.servings} servings
                </div>
              </div>
              <Badge>{recipe.difficulty}</Badge>
              <div className="mt-4">
                <h4 className="text-sm font-medium mb-2">Ingredients:</h4>
                <div className="flex flex-wrap gap-2">
                  {recipe.ingredients.map((ingredient) => {
                    const ing = ingredients.find(
                      (i) => i.id === ingredient.ingredientId
                    );
                    return (
                      ing && (
                        <Badge key={ing.id} variant="secondary">
                          {ing.name}
                        </Badge>
                      )
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}