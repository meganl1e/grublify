import React from 'react';
import Image from './image';

const RecipeListItem = ({ title, slug, img, tags }) => {

  return (
    <a 
      href={`/recipes/${slug}`} 
      className="flex flex-col border-2 border-secondary transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-lg rounded-md overflow-hidden"
    >
      {/* Image */}
      <div className="w-full">
        <Image
          src={img}
          className="w-full h-64 object-cover"
          alt="recipe image"
        />
      </div>

      {/* Details */}
      <div className="flex flex-col gap-2 p-4 bg-primary/10">
        <a href={`/recipes/${slug}`} className="text-3xl text-secondary font-semibold hover:underline">
          {title}
        </a>
        {/* Tag */}
        { tags && (
          <div className="flex flex-wrap gap-2 mt-1">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-sm text-primary font-bold bg-white px-3 py-1 rounded-full shadow-sm border-2 border-primary whitespace-normal break-words"

              >
                {tag}
              </span>
            ))}
          </div>
        )}
        

      </div>
    </a>
  );
};

export default RecipeListItem;