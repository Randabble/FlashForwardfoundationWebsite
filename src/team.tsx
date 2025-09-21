import React from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { useScrollAnimation } from "./hooks/useScrollAnimation";

export default function Team() {
  const titleRef = useScrollAnimation();
  const descRef = useScrollAnimation();

  const teamMembers = [
    {
      name: "Sree Kokkonda",
      role: "President",
      bio: "Leads the team with vision and direction, passionate about combining technology and social impact.",
      longBio: "Sree leads our team with passion for using technology to address real-world issues. With a background in nonprofit leadership, he focuses on strategic planning, empowering team members, and aligning our mission with long-term impact.",
      image: "/images/team/sreeface.jpeg",
      email: "sreekokkonda@gmail.com",
      linkedin: "https://www.linkedin.com/in/sree-kokkonda/"
    },
    {
      name: "Nithilan Selvakumar",
      role: "Vice President",
      bio: "Handles the paperwork side—researching laws, partnerships, and ensuring we operate responsibly.",
      longBio: "Nithilan keeps our operations compliant and sustainable by managing research, legal documentation, and responsible practices. His focus on thoughtful infrastructure ensures we scale effectively and ethically.",
      image: "/images/team/nithilanface.jpeg",
      email: "nithilan@flashforwardfoundation.org",
      linkedin: "#"
    },
    {
      name: "Romir Chekuri",
      role: "Treasurer",
      bio: "Manages our budget, tracks donations, and ensures every dollar is spent wisely.",
      longBio: "Romir ensures financial transparency and efficiency across the organization. With an analytical mind and a heart for service, he ensures all funding is aligned with our mission to create impact where it's needed most.",
      image: "/images/team/romirface.jpeg",
      email: "romir@flashforwardfoundation.org",
      linkedin: "#"
    },
    {
      name: "Samarth Morentsov",
      role: "Secretary",
      bio: "Keeps us organized by documenting meetings, records, and keeping everyone in sync.",
      longBio: "Samarth is the organizational backbone of our team, ensuring accountability and clarity through precise documentation and scheduling. He makes sure our goals stay visible and on track.",
      image: "/images/team/samarthface.jpeg",
      email: "#",
      linkedin: "#"
    },
    {
      name: "Muzaffar Hussain",
      role: "Marketing & Outreach Lead",
      bio: "Spreads the word through impactful campaigns that build awareness and support.",
      longBio: "Muzaffar crafts compelling campaigns to amplify our mission. From social media strategy to community outreach, he helps tell the Flash Forward story in a way that inspires action.",
      image: "/images/team/sakshamface.jpeg",
      email: "#",
      linkedin: "#"
    },
    {
      name: "Neil Mukherjee",
      role: "Product Design Lead",
      bio: "Leads solar flashlight development with a balance of function and simplicity.",
      longBio: "Neil oversees the design of our flashlight, turning ideas into effective, manufacturable solutions. He blends creative design with technical precision to ensure the product is both beautiful and functional.",
      image: "/images/team/neilface.jpeg",
      email: "#",
      linkedin: "#"
    },
    {
      name: "Saksham Gupta",
      role: "Workshop Lead",
      bio: "Leads hands-on workshops that empower students to learn and build with confidence.",
      longBio: "Saksham designs and facilitates engaging workshops that bring technical concepts to life. By guiding students through practical, interactive sessions, he helps them gain real skills and the confidence to innovate.",
      image: "/images/team/sakshamface.jpeg",
      email: "#",
      linkedin: "#"
    },
    {
      name: "Shreyas Prabhu",
      role: "Engineering Lead",
      bio: "Drives engineering projects with creativity and precision to push our mission forward.",
      longBio: "Shreyas leads the technical development behind Flash Forward. From prototyping and product design to problem-solving complex challenges, he ensures our engineering work is both innovative and impactful.",
      image: "/images/team/shreyasface.jpeg",
      email: "#",
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