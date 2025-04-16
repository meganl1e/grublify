import RecipeListItem from "./recipe-list-item";

const RecipeList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
      <RecipeListItem
        title="Chicken and Rice"
        slug="chicken-and-rice"
        img="chicken-and-rice-7.jpeg"
        tags={["Easy to Make", "Delicious"]}
      />
      <RecipeListItem 
        img="chicken-and-rice-9.jpeg"
        title="Transition Guide"
        slug="transition-guide"
        tags={["Guide"]}
      />
    </div>
  )
}

export default RecipeList;