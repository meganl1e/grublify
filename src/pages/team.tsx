<<<<<<< HEAD:client/src/pages/team.tsx

=======
>>>>>>> parent of 2ee557e (backend setup):src/pages/team.tsx
import teamMembers from '../data/teamMembers.json';

export default function Team() {
  return (
    <div className="flex-1 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl text-secondary font-bold mb-6">
            Meet Our Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're a passionate team of pet nutrition experts, pet parents, and dog lovers 
            working together to bring better nutrition to every <span className="text-primary font-semibold">dog bowl</span>
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-primary/15 p-6 mx-4 rounded-lg text-center border-2 border-gray-100 w-64">
              <img 
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-2 border-primary"
              />
              <h3 className="text-xl text-secondary font-bold mb-1">
                {member.name}
              </h3>
              <p className="text-md font-medium mb-2 text-primary">
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