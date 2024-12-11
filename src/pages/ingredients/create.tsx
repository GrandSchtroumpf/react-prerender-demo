import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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

const formSchema = z.object({
  name: z.string().min(2).max(50),
  unit: z.enum(['g', 'ml', 'pieces', 'tbsp', 'tsp']),
  category: z.enum([
    'dairy',
    'meat',
    'vegetables',
    'fruits',
    'grains',
    'spices',
    'other',
  ]),
});

export function IngredientCreate() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const addIngredient = useStore((state) => state.addIngredient);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      unit: 'g',
      category: 'other',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    addIngredient(values);
    toast({
      title: 'Ingredient created',
      description: `${values.name} has been added to your ingredients.`,
    });
    navigate('/ingredients');
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Create Ingredient</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter ingredient name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="unit"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Unit</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a unit" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="g">Grams (g)</SelectItem>
                    <SelectItem value="ml">Milliliters (ml)</SelectItem>
                    <SelectItem value="pieces">Pieces</SelectItem>
                    <SelectItem value="tbsp">Tablespoon</SelectItem>
                    <SelectItem value="tsp">Teaspoon</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="dairy">Dairy</SelectItem>
                    <SelectItem value="meat">Meat</SelectItem>
                    <SelectItem value="vegetables">Vegetables</SelectItem>
                    <SelectItem value="fruits">Fruits</SelectItem>
                    <SelectItem value="grains">Grains</SelectItem>
                    <SelectItem value="spices">Spices</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end space-x-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate('/ingredients')}
            >
              Cancel
            </Button>
            <Button type="submit">Create Ingredient</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}