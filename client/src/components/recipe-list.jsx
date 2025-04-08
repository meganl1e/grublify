import RecipeListItem from "./recipe-list-item";

const RecipeList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <RecipeListItem />
      <RecipeListItem />
      <RecipeListItem />
      <RecipeListItem />
    </div>
  )
}

export default RecipeList;