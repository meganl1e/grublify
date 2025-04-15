import React from 'react';
import Image from './image';

const RecipeListItem = ({ title, slug, user, createdAt, desc, img }) => {

  return (
    <div className="flex flex-col gap-4">
      {/* Image */}
      <div className="w-full">
        <Image
          src={img}
          className="w-full h-64 object-cover rounded-2xl"
          alt="recipe image"
        />
      </div>

      {/* Details */}
      <div className="flex flex-col gap-2">
        <a href={`/recipes/${slug}`} className="text-4xl text-secondary font-semibold">
          {title}
        </a>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by {user.username}</span>
          <span>{new Date(createdAt).toLocaleDateString()}</span>
        </div>
        <p className="text-secondary">{desc}</p>
        <a href={`/recipes/${slug}`} className="underline text-blue-800 text-sm">
          Read More
        </a>
      </div>
    </div>
  );
};

export default RecipeListItem;