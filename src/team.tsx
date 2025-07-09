import React from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { useScrollAnimation } from "./hooks/useScrollAnimation";

export default function Team() {
  const titleRef = useScrollAnimation();
  const descRef = useScrollAnimation();

  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      bio: "Passionate about sustainable tech and global education equity. Alex founded Flash Forward after learning about the global education crisis in AP Environmental Science class.",
      longBio: "As the founder of Flash Forward, Alex leads our strategic vision and partnerships. A senior at Sammamish High School, Alex is passionate about using technology to solve global challenges. When not working on Flash Forward, Alex enjoys robotics competitions and environmental advocacy.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300",
      email: "alex@flashforwardfoundation.org",
      linkedin: "#"
    },
    {
      name: "Maya Patel",
      role: "Chief Technology Officer",
      bio: "Engineering genius specializing in solar electronics design. Maya leads our technical development and ensures our products meet the highest standards.",
      longBio: "Maya oversees all technical aspects of our flashlight design and manufacturing. With a deep interest in renewable energy systems, Maya has won multiple science fair awards for solar energy projects. Maya also mentors younger students in STEM programs.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      email: "maya@flashforwardfoundation.org",
      linkedin: "#"
    },
    {
      name: "Jordan Williams",
      role: "Head of Operations",
      bio: "Logistics expert ensuring efficient global distribution. Jordan manages our supply chain and partnership relationships.",
      longBio: "Jordan coordinates our international distribution efforts and manages relationships with our partners in Ghana and other regions. With a talent for organization and project management, Jordan ensures our operations run smoothly and efficiently.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300",
      email: "jordan@flashforwardfoundation.org",
      linkedin: "#"
    },
    {
      name: "Sofia Rodriguez",
      role: "Marketing Director",
      bio: "Creative storyteller spreading our mission worldwide. Sofia creates compelling content that helps people understand our impact.",
      longBio: "Sofia leads our marketing and communications efforts, creating content that tells the story of Flash Forward and the communities we serve. With a background in digital media and a passion for social justice, Sofia ensures our message reaches the right audiences.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300",
      email: "sofia@flashforwardfoundation.org",
      linkedin: "#"
    },
    {
      name: "David Kim",
      role: "Finance Lead",
      bio: "Numbers wizard maximizing impact per donated dollar. David ensures our financial transparency and strategic resource allocation.",
      longBio: "David manages our finances and ensures every donated dollar creates maximum impact. With strong analytical skills and a commitment to transparency, David tracks our progress and helps guide strategic decisions about resource allocation.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300",
      email: "david@flashforwardfoundation.org",
      linkedin: "#"
    },
    {
      name: "Emma Thompson",
      role: "Partnership Coordinator",
      bio: "Relationship builder connecting communities globally. Emma develops and maintains our partnerships with schools and organizations.",
      longBio: "Emma builds and maintains relationships with our partners around the world, from local churches in Ghana to consulting firms in the US. With excellent communication skills and cultural sensitivity, Emma ensures our partnerships are mutually beneficial and sustainable.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300",
      email: "emma@flashforwardfoundation.org",
      linkedin: "#"
    }
  ];

  return (
    <div className="font-sans">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 ref={titleRef} className="scroll-fade text-4xl sm:text-5xl lg:text-6xl font-bold text-dark mb-6">
            Meet Our Team
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p ref={descRef} className="scroll-fade text-xl text-gray-600 leading-relaxed">
            The passionate students behind Flash Forward, working together to light up education worldwide.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => {
              const memberRef = useScrollAnimation();
              return (
                <div key={member.name} ref={memberRef} className="scroll-fade">
                  <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                      <div className="relative flex-shrink-0">
                        <img 
                          src={member.image}
                          alt={`${member.name} - ${member.role}`}
                          className="w-24 h-24 rounded-full object-cover border-4 border-gray-200"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full w-24 h-24"></div>
                      </div>
                      
                      <div className="flex-1 text-center sm:text-left">
                        <h3 className="text-2xl font-bold text-dark mb-1">{member.name}</h3>
                        <p className="text-primary font-semibold mb-3">{member.role}</p>
                        <p className="text-gray-600 mb-4 leading-relaxed">{member.longBio}</p>
                        
                        <div className="flex justify-center sm:justify-start space-x-4">
                          <a 
                            href={`mailto:${member.email}`}
                            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-200"
                          >
                            <i className="fas fa-envelope"></i>
                          </a>
                          <a 
                            href={member.linkedin}
                            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-200"
                          >
                            <i className="fab fa-linkedin"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-6">Want to Join Our Team?</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            We're always looking for passionate students who want to make a difference. 
            Whether you're interested in engineering, marketing, operations, or something else entirely, 
            we'd love to hear from you.
          </p>
          <a 
            href="mailto:contact@flashforwardfoundation.org?subject=Joining the Team"
            className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
          >
            <i className="fas fa-users mr-2"></i>
            Get Involved
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}