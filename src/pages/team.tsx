export default function Team() {
  return (
    <div className="flex-1 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6" style={{ color: '#37474f' }}>
            Meet Our Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're a passionate team of pet nutrition experts, veterinarians, and dog lovers 
            working together to bring better nutrition to every <span className="text-primary">dog bowl</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "Sarah Johnson",
              role: "Founder & CEO",
              image: "https://images.unsplash.com/photo-1516880711640-ef7db81be3e1",
              bio: "Former veterinary nutritionist with 10+ years experience"
            },
            {
              name: "Michael Chen",
              role: "Head of Product",
              image: "https://images.unsplash.com/photo-1521830101529-057b1dfd9784",
              bio: "Pet food industry veteran focused on innovation"
            },
            {
              name: "Dr. Emily Rodriguez",
              role: "Chief Veterinarian",
              image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31",
              bio: "Specialist in canine nutrition and preventive care"
            },
            {
              name: "David Park",
              role: "Operations Director",
              image: "https://images.unsplash.com/photo-1543269865-cbf427effbad",
              bio: "Supply chain expert ensuring fresh ingredient quality"
            }
          ].map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg text-center border border-gray-100">
              <img 
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-2 border-primary"
              />
              <h3 className="text-xl font-semibold mb-1" style={{ color: '#37474f' }}>
                {member.name}
              </h3>
              <p className="text-sm font-medium mb-2 text-primary">
                {member.role}
              </p>
              <p className="text-sm text-muted-foreground">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}