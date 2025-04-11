const RecipePage = ({  }) => {


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

  return (
    <div className="bg-primary/40 min-h-screen p-6 rounded-lg">
      {/* Recipe Header */}
      <div className="max-w-4xl p-4 bg-white rounded-lg overflow-hidden">

        {/* Ingredients */}
        <section className="mb-6">
          <h3 className="text-2xl text-secondary font-semibold mb-4">Ingredients</h3>
          <ul className="list-disc list-inside text-secondary space-y-2">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </section>

        {/* Instructions */}
        <section>
          <h3 className="text-2xl text-secondary font-semibold mb-2">Instructions</h3>
          <ol className="list-decimal list-inside text-secondary space-y-2">
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
};

export default RecipePage;
