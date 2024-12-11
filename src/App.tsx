import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout';
import { IngredientList } from './pages/ingredients/list';
import { IngredientCreate } from './pages/ingredients/create';
import { RecipeList } from './pages/recipes/list';
import { RecipeCreate } from './pages/recipes/create';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/ingredients" element={<IngredientList />} />
          <Route path="/ingredients/create" element={<IngredientCreate />} />
          <Route path="/recipes" element={<RecipeList />} />
          <Route path="/recipes/create" element={<RecipeCreate />} />
        </Routes>
      </Layout>
      <Toaster />
    </>
  );
}

export default App;