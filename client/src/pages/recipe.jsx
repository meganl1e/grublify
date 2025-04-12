import React from "react";
import Image from "../components/Image";
import RecipeCard from "../components/recipe-card";
import chickenAndRiceRecipe from "../data/chicken-and-rice-recipe.json";
import RecipeDetailedInstructions from "../components/recipe-detailed-instructions";

const Recipe = () => {

  return (
  <div className="min-h-screen p-4 sm:p-8">

    {/* Main content area */}
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-full lg:max-w-6xl">

      {/* Main content */}
      <main className="w-full lg:col-span-6 lg:col-start-3 pt-4 lg:pt-6 space-y-6">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-bold text-secondary/80">RECIPE</h3>
          <h2 className="text-6xl lg:text-6xl font-bold text-primary">{chickenAndRiceRecipe.name}</h2>
        </div>
        
        {/* Recipe image */}
        <Image
          src="chicken-and-rice-7.jpeg"
          alt={chickenAndRiceRecipe.name}
          className="rounded-2xl object-cover"
          h="400"
        />

        {/* Recipe Card */}
        <RecipeCard recipe={chickenAndRiceRecipe} />

        {/* Detailed Instructions */}
        <RecipeDetailedInstructions />
      </main>
      
      {/* Sidebar (hidden on mobile) */}
      <aside className="hidden lg:block p-6"></aside>
    </div>
  </div>

  );
};

export default Recipe;
