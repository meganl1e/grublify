import React from "react";
import { useState } from "react";
import Image from "../components/Image";
import RecipeCard from "../components/recipe-card";

const Recipe = () => {
  const recipe = {
    name: "Chicken & Rice",
    description: "A healthy and delicious chicken-based meal for your dog.",
    image: "https://plus.unsplash.com/premium_photo-1683141107194-61e40e327e2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: ["chicken breast (boneless and skinless)", "brown rice (uncooked)", "water", "spinach (roughly chopped)", "carrots (1/4 inch chunks)", "large eggs", "low/no sodium canned sardines (drained)", "sunflower oil", "of Grublify Nutrition Pack"],
    instructions: [
      "Optional: Rinse rice to remove excess starch.",
      "Add chicken, rice, water, spinach,  carrots, and eggs to the Instant Pot or pressure cooker*. Stir until evenly combined.",
      "Pressure cook on high for 13 minutes with natural release.",
      "Let the cooked ingredients cool (~5 min).",
      "In a separate bowl, mix sardines, oil, and the nutrition pack until fully combined.",
      "Stir the sardine mixture into the cooked ingredients, breaking up any large chunks for a uniform consistency.",
      "Let it cool and serve with love — ‘Bone’ appétit!",
      "Optional: Let your dog lick the spoon."
    ],
  };

  // const [showOptions, setShowOptions] = useState(false); // State to toggle dropdown visibility


  return (
  <div className="min-h-screen p-4 sm:p-8">
    {/* Main content area */}
    <div className="container mx-auto grid grid-cols-1 gap-8 max-w-full lg:max-w-6xl">
      {/* Main content */}
      <main className="col-span-1 pt-8 lg:pt-16">
        <h2 className="text-xl font-bold text-secondary/80">RECIPE</h2>

        {/* Recipe title */}
        <h2 className="text-4xl sm:text-6xl font-bold mb-4 text-primary">{recipe.name}</h2>

        {/* Recipe image */}
        <Image
          src="chicken-and-rice-7.jpeg"
          alt={recipe.name}
          className="rounded-2xl object-cover mb-6"
          h="400"
        />

        {/* Recipe Card */}
        <RecipeCard />
      </main>
      
      {/* Sidebar (hidden on mobile) */}
      <aside className="hidden lg:block p-6"></aside>
    </div>
  </div>

  );
};

export default Recipe;
