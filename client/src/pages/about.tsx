

export default function About() {
  return (
    <div className="flex-1">
      {/* Mission Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-secondary to-secondary/90">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6 text-white">
              Our Mission
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              At Grublify, we believe every dog deserves fresh, nutritious food made with real ingredients. 
              We're on a mission to revolutionize pet nutrition through science and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img 
              src="https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2"
              alt="Happy dog eating"
              className="rounded-lg"
            />
            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Why Fresh Food Matters
              </h2>
              <p className="text-lg text-white/90 mb-6">
                Just like humans, dogs thrive on fresh, minimally processed food. Our nutrition packs are made with 
                human-grade ingredients, perfectly balanced for your dog's optimal health.
              </p>
              <ul className="space-y-4">
                {[
                  "Higher energy levels and vitality",
                  "Improved digestion and gut health",
                  "Healthier coat and skin",
                  "Better weight management"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3 text-white/90">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-secondary">
            Our Process
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Sourcing",
                description: "We carefully select fresh, human-grade ingredients from trusted suppliers",
                image: "https://images.unsplash.com/photo-1517260739337-6799d239ce83"
              },
              {
                title: "Preparation",
                description: "Our recipes are developed by veterinary nutritionists for optimal health",
                image: "https://images.unsplash.com/photo-1555243896-c709bfa0b564"
              },
              {
                title: "Delivery",
                description: "Fresh, perfectly portioned meals delivered right to your door",
                image: "https://images.unsplash.com/photo-1514995669114-6081e934b693"
              }
            ].map((step, index) => (
              <div key={index} className="bg-primary/10 p-6 rounded-lg">
                <img 
                  src={step.image}
                  alt={step.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-primary">
                  {step.title}
                </h3>
                <p className="text-secondary/80">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}