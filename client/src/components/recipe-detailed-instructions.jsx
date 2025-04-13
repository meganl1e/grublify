import { useState } from "react";
import chickenAndRiceRecipe from "../data/chicken-and-rice-recipe.json";
import Image from "./image.jsx";

// everything is hardcoded for now rip
const RecipeDetailedInstructions = () => {

  return (
    <div className="">

        {/* Title */}
        <h1 className="text-4xl font-bold text-secondary mb-6">Detailed Instructions</h1>

        {/* Detailed Instuctions */}
        {chickenAndRiceRecipe.detailedInstructions.map((instruction, index) => (
          <section key={index} className="mb-8">
            <h3 className="font-semibold text-secondary text-2xl">{instruction.title}</h3>
            {instruction.text.map((text, textIndex) => (
              <p key={textIndex} className="text-secondary mb-2">{text}</p>
            ))}
            <div className="flex flex-wrap sm:flex-nowrap flex-col sm:flex-row items-center mb-4 gap-4">
            {instruction.images.map((image, imgIndex) => (
              <Image
                key={imgIndex}
                src={image}
                alt={`Step ${index + 1} Image ${imgIndex + 1}`}
                className="rounded-lg object-cover w-full sm:w-1/2 lg:w-1/2"
              />
            ))}
            </div>
          </section>
        ))}

    </div>
  );
};

export default RecipeDetailedInstructions;
