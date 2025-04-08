import React from 'react';

const RecipeListItem = ({ post = {} }) => {
  // Default placeholder values
  const {
    img = "https://plus.unsplash.com/premium_photo-1683141107194-61e40e327e2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title = "Chicken & Rice",
    slug = "chicken-and-rice",
    user = { username: "Megan Lie" },
    createdAt = new Date().toISOString(),
    desc = "This is a short description of the recipe. It gives a quick overview of what the recipe is about.",
  } = post;

  return (
    <div className="flex flex-col gap-4">
      {/* Image */}
      <div className="w-full">
        <img
          src={img}
          alt={title}
          className="w-full rounded-2xl object-cover"
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
        <p>{desc}</p>
        <a href={`/recipes/${slug}`} className="underline text-blue-800 text-sm">
          Read More
        </a>
      </div>
    </div>
  );
};

export default RecipeListItem;