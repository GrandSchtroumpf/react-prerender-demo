import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useStore } from '@/lib/store';

export function IngredientList() {
  const [search, setSearch] = useState('');
  const ingredients = useStore((state) => state.ingredients);

  const filteredIngredients = ingredients.filter((ingredient) =>
    ingredient.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Ingredients</h1>
        <Link to="/ingredients/create">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Ingredient
          </Button>
        </Link>
      </div>
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search ingredients..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredIngredients.map((ingredient) => (
          <div
            key={ingredient.id}
            className="rounded-lg border bg-card p-4 shadow-sm"
          >
            <h3 className="font-semibold">{ingredient.name}</h3>
            <p className="text-sm text-muted-foreground">
              Unit: {ingredient.unit}
            </p>
            <p className="text-sm text-muted-foreground">
              Category: {ingredient.category}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}