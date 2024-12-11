import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useStore } from '@/lib/store';
import { useToast } from '@/hooks/use-toast';
import { Plus, Trash2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2).max(50),
  description: z.string().min(10).max(200),
  instructions: z.string().min(10),
  cookingTime: z.number().min(1).max(480),
  servings: z.number().min(1).max(12),
  difficulty: z.enum(['easy', 'medium', 'hard']),
  image: z.string().url(),
  ingredients: z.array(
    z.object({
      ingredientId: z.string(),
      amount: z.number().min(0),
    })
  ),
});

export function RecipeCreate() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const addRecipe = useStore((state) => state.addRecipe);
  const ingredients = useStore((state) => state.ingredients);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      description: '',
      instructions: '',
      cookingTime: 30,
      servings: 4,
      difficulty: 'medium',
      image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f',
      ingredients: [{ ingredientId: '', amount: 0 }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'ingredients',
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    addRecipe(values);
    toast({
      title: 'Recipe created',
      description: `${values.name} has been added to your recipes.`,
    });
    navigate('/recipes');
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Create Recipe</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter recipe name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter recipe description"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="instructions"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Instructions</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter cooking instructions"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="cookingTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cooking Time (minutes)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      onChange={(e) =>
                        field.onChange(parseInt(e.target.value))
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="servings"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Servings</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      onChange={(e) =>
                        field.onChange(parseInt(e.target.value))
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="difficulty"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Difficulty</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select difficulty" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="easy">Easy</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="hard">Hard</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image URL</FormLabel>
                <FormControl>
                  <Input placeholder="Enter image URL" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">Ingredients</h3>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() =>
                  append({ ingredientId: '', amount: 0 })
                }
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Ingredient
              </Button>
            </div>
            <div className="space-y-4">
              {fields.map((field, index) => (
                <div key={field.id} className="flex gap-4">
                  <FormField
                    control={form.control}
                    name={`ingredients.${index}.ingredientId`}
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select ingredient" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {ingredients.map((ingredient) => (
                              <SelectItem
                                key={ingredient.id}
                                value={ingredient.id}
                              >
                                {ingredient.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`ingredients.${index}.amount`}
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Amount"
                            {...field}
                            onChange={(e) =>
                              field.onChange(parseInt(e.target.value))
                            }
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    onClick={() => remove(index)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-end space-x-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate('/recipes')}
            >
              Cancel
            </Button>
            <Button type="submit">Create Recipe</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}