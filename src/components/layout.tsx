import { Link } from 'react-router-dom';
import { CookingPot } from 'lucide-react';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <CookingPot className="h-6 w-6" />
              <span className="text-xl font-bold">Cookbook</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link
                to="/ingredients"
                className="text-sm font-medium hover:text-primary"
              >
                Ingredients
              </Link>
              <Link
                to="/recipes"
                className="text-sm font-medium hover:text-primary"
              >
                Recipes
              </Link>
            </div>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">{children}</main>
    </div>
  );
}