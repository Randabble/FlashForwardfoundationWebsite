import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function TeamSection() {
  const titleRef = useScrollAnimation();
  const descRef = useScrollAnimation();
  const member1Ref = useScrollAnimation();
  const member2Ref = useScrollAnimation();
  const member3Ref = useScrollAnimation();
  const member4Ref = useScrollAnimation();
  const member5Ref = useScrollAnimation();
  const member6Ref = useScrollAnimation();

  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      bio: "Passionate about sustainable tech and global education equity",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300"
    },
    {
      name: "Maya Patel",
      role: "Chief Technology Officer",
      bio: "Engineering genius specializing in solar electronics design",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
    },
    {
      name: "Jordan Williams",
      role: "Head of Operations",
      bio: "Logistics expert ensuring efficient global distribution",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300"
    },
    {
      name: "Sofia Rodriguez",
      role: "Marketing Director",
      bio: "Creative storyteller spreading our mission worldwide",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300"
    },
    {
      name: "David Kim",
      role: "Finance Lead",
      bio: "Numbers wizard maximizing impact per donated dollar",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300"
    },
    {
      name: "Emma Thompson",
      role: "Partnership Coordinator",
      bio: "Relationship builder connecting communities globally",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300"
    }
  ];

  const memberRefs = [member1Ref, member2Ref, member3Ref, member4Ref, member5Ref, member6Ref];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="scroll-fade text-4xl sm:text-5xl font-bold text-dark mb-6">Meet the Students Behind the Mission</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p ref={descRef} className="scroll-fade text-xl text-gray-600 max-w-3xl mx-auto">
            Our diverse team of passionate high school students combines engineering, business, and social impact expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={member.name} ref={memberRefs[index]} className="scroll-fade text-center group">
              <div className="relative mb-6">
                <img 
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-gray-200 group-hover:border-primary transition-colors duration-200"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full w-32 h-32 mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-1">{member.name}</h3>
              <p className="text-primary font-medium mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
