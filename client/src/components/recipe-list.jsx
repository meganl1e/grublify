import RecipeListItem from "./recipe-list-item";

const RecipeList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
      <RecipeListItem
        title="Chicken and Rice"
        slug = "chicken-and-rice"
        user={{ username: "Megan Lie" }}
        createdAt="4/1/2025"
        desc="Easy to make and delicious recipe that pairs with the Grublify Nutrition Pack!"
        img="chicken-and-rice-9.jpeg"
      />
      <RecipeListItem 
        img="chicken-and-rice-1.jpeg"
        title="Transition Guide"
        slug="transition-guide"
        user={{ username: "Megan Lie" }}
        createdAt="4/1/2025"
        desc="A guide to help your dog transition to a new diet!"
      />
    </div>
  )
}

export default RecipeList;