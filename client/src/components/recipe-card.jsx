import { useState } from "react";

const RecipeCard = ({ recipe }) => {
  const [selectedMethod, setSelectedMethod] = useState("pressureCooker")

  return (
    <div className="bg-primary/40 min-h-screen p-6 rounded-lg">
      
      <div className="max-w-4xl p-4 bg-white rounded-lg overflow-hidden">

        {/* Title */}
        <h1 className="text-3xl font-bold text-secondary">{recipe.name}</h1>

        {/* Recipe Information */}
        <div className="">
            
          {/* Content */}
          <div className="grid grid-cols-2 gap-4 p-2 text-gray-800">
            {/* Prep Time */}
            <div>
              <p className="font-semibold">Prep Time:</p>
              <p>{recipe.methods[selectedMethod].prepTime}</p>
            </div>

            {/* Cook Time */}
            <div>
              <p className="font-semibold">Cook Time:</p>
              <p>{recipe.methods[selectedMethod].cookTime}</p>
            </div>

            {/* Total Time */}
            <div>
              <p className="font-semibold">Total Time:</p>
              <p>{recipe.methods[selectedMethod].totalTime}</p>
            </div>

            {/* Servings */}
            <div>
              <p className="font-semibold">Servings:</p>
              <p>XX</p>
            </div>
          </div>
        </div>

        {/* Ingredients */}
        <section className="mb-6">
          <h3 className="text-2xl text-secondary font-semibold mb-4">Ingredients</h3>
          <ul className="list-disc list-inside text-secondary space-y-2">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </section>

        {/* Cooking Method Selector */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-secondary mb-4">Select Cooking Method:</h3>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-4 sm:justify-center sm:items-center w-fit justify-center">
            {Object.keys(recipe.methods).map((method) => (
              <button
              key={method}
              className={`px-4 py-2 rounded-lg font-semibold shadow-md transition-transform duration-200 ease-in-out ${
                selectedMethod === method
                  ? "bg-secondary/90 text-white scale-105"
                  : "bg-primary/25 text-secondary hover:bg-secondary/90 hover:text-white"
              }`}
              onClick={() => setSelectedMethod(method)}>
                {method === "pressureCooker" && "Pressure Cooker"}
                {method === "crockpot" && "Crockpot"}
                {method === "stovetop" && "Stovetop"}
              </button>
            ))}
          </div>
        </div>

        {/* Instructions */}
        <section className="mb-6">
          <h3 className="text-2xl text-secondary font-semibold mb-2">Instructions</h3>
          <ol className="list-decimal list-inside text-secondary space-y-2">
            {recipe.methods[selectedMethod].instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </section>

        {/* Consumption and Storage */}
        <section className="mb-6">
          <h3 className="text-2xl text-secondary font-semibold mb-2">Consumption and Storage</h3>
          <p className="text-secondary mb-2">{recipe.consumptionAndStorage}</p>
        </section>

        {/* Nutritional Info */}
        <section className="mb-6">
          <h3 className="text-2xl text-secondary font-semibold mb-2">Nutritional Info</h3>
          <p className="text-secondary mb-2">{recipe.nutritionalInfo}</p>
        </section>



      </div>
    </div>
  );
};

export default RecipeCard;
