import RecipeList from "../components/recipe-list";

export default function Recipes() {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative py-16 px-6 bg-secondary">
        <div className="max-w-7xl mx-auto text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Recipes
          </h1>
          <p className="text-lg text-white">
            Explore our collection of healthy and nutritious recipes tailored for your furry friend!
          </p>
        </div>
      </section>

      {/* Recipes Section */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* <h2 className="text-2xl font-semibold text-primary mb-6">
            Our Recipes
          </h2> */}
          <RecipeList />
        </div>
      </section>
    </div>
  );
}