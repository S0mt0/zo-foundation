import { teamsData } from "./team-data";
import { TeamMember } from "./team-member";

export const OurTeam = () => {
  return (
    <section className="py-20 px-6 md:px-14 bg-gray-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-bold text-red-700 uppercase text-center mb-14">
          Meet The Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamsData.map((member, i) => (
            <TeamMember {...member} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
