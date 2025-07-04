import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function About() {
  const titleRef = useScrollAnimation();
  const missionRef = useScrollAnimation();
  const storyRef = useScrollAnimation();
  const faqRef = useScrollAnimation();

  return (
    <div className="font-sans">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 ref={titleRef} className="scroll-fade text-4xl sm:text-5xl lg:text-6xl font-bold text-dark mb-6">
            About Flash Forward
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p ref={missionRef} className="scroll-fade text-xl text-gray-600 leading-relaxed">
            We're a student-led nonprofit organization dedicated to bringing solar-powered light to children in off-grid communities across Ghana and beyond.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                Flash Forward exists to illuminate education and create opportunities for students living in energy poverty. We design, build, and distribute solar-powered flashlights to help children continue their studies after dark.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Energy poverty affects over 685 million people worldwide, leaving children without access to safe and reliable lighting for studying. Without proper lighting, students cannot complete homework, read books, or pursue their education after sunset, severely limiting their opportunities for academic success.
              </p>
              <div className="bg-primary/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">The Four Pillars of Energy Poverty</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <i className="fas fa-graduation-cap text-primary mt-1 mr-3"></i>
                    <span><strong>Education:</strong> Without safe lighting, children cannot study after dusk</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-heart text-primary mt-1 mr-3"></i>
                    <span><strong>Health:</strong> Kerosene lamps cause over 3.2 million deaths annually from indoor air pollution</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-leaf text-primary mt-1 mr-3"></i>
                    <span><strong>Environment:</strong> Fuel-based lighting emits 190 million tonnes of CO2 per year</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-dollar-sign text-primary mt-1 mr-3"></i>
                    <span><strong>Economic:</strong> Families spend up to 40% of income on kerosene lamps</span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
                alt="Students studying with solar lights"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 ref={storyRef} className="scroll-fade text-3xl font-bold text-gray-900 mb-8 text-center">Our Team Story</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  Flash Forward was founded by a group of passionate students at Sammamish High School who witnessed the devastating effects of energy poverty during a school presentation about global challenges. Moved by the stories of children unable to study after dark, our founders decided to take action.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  What started as a small project in the Builders Club has grown into a comprehensive nonprofit organization. Our team combines engineering students who design and prototype the solar flashlights, business students who manage operations and partnerships, and advocacy students who raise awareness about energy poverty.
                </p>
                <p className="text-lg text-gray-700">
                  We believe that young people have the power to create meaningful change. Through Flash Forward, we're not just providing light – we're empowering the next generation of leaders to tackle global challenges with innovation and compassion.
                </p>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
                  alt="Team working together"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Meet Our Team Section */}
            <div className="border-t border-gray-200 pt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Meet Our Core Team</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="relative mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
                      alt="Alex Chen"
                      className="w-32 h-32 rounded-full mx-auto object-cover"
                    />
                    <div className="absolute inset-0 w-32 h-32 rounded-full mx-auto bg-gradient-to-br from-primary/20 to-accent/20"></div>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Alex Chen</h4>
                  <p className="text-primary font-medium mb-2">Co-Founder & Engineering Lead</p>
                  <p className="text-gray-600 text-sm">Leads our 3D design and circuit development, passionate about sustainable technology solutions.</p>
                </div>

                <div className="text-center">
                  <div className="relative mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108755-2616c998f4e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
                      alt="Maya Patel"
                      className="w-32 h-32 rounded-full mx-auto object-cover"
                    />
                    <div className="absolute inset-0 w-32 h-32 rounded-full mx-auto bg-gradient-to-br from-primary/20 to-accent/20"></div>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Maya Patel</h4>
                  <p className="text-primary font-medium mb-2">Co-Founder & Operations Director</p>
                  <p className="text-gray-600 text-sm">Manages partnerships, distribution logistics, and impact measurement across our program regions.</p>
                </div>

                <div className="text-center">
                  <div className="relative mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
                      alt="Jordan Williams"
                      className="w-32 h-32 rounded-full mx-auto object-cover"
                    />
                    <div className="absolute inset-0 w-32 h-32 rounded-full mx-auto bg-gradient-to-br from-primary/20 to-accent/20"></div>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Jordan Williams</h4>
                  <p className="text-primary font-medium mb-2">Advocacy & Communications Lead</p>
                  <p className="text-gray-600 text-sm">Drives awareness campaigns and tells the stories of students whose lives have been transformed.</p>
                </div>

                <div className="text-center">
                  <div className="relative mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
                      alt="Sofia Rodriguez"
                      className="w-32 h-32 rounded-full mx-auto object-cover"
                    />
                    <div className="absolute inset-0 w-32 h-32 rounded-full mx-auto bg-gradient-to-br from-primary/20 to-accent/20"></div>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Sofia Rodriguez</h4>
                  <p className="text-primary font-medium mb-2">Research & Development</p>
                  <p className="text-gray-600 text-sm">Conducts impact studies and develops new features to improve our solar flashlight design.</p>
                </div>
              </div>

              <div className="mt-12 bg-primary/10 rounded-lg p-8 text-center">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Join Our Growing Team</h4>
                <p className="text-gray-700 mb-6">
                  We're always looking for passionate students, educators, and professionals who want to make a difference in global education and energy access.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/volunteer"
                    className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
                  >
                    <i className="fas fa-hands-helping mr-2"></i>
                    Volunteer With Us
                  </a>
                  <a 
                    href="/partner"
                    className="bg-white text-primary border-2 border-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors duration-200"
                  >
                    <i className="fas fa-handshake mr-2"></i>
                    Partner With Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white" id="faq">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-lg shadow-lg p-8">
            <h2 ref={faqRef} className="scroll-fade text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">How do the solar flashlights work?</h3>
                <p className="text-gray-700">
                  Our solar flashlights use high-efficiency solar panels to charge during the day and provide bright LED lighting for 6-8 hours at night. They're designed to be durable, weather-resistant, and easy to maintain.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">How do you distribute the flashlights?</h3>
                <p className="text-gray-700">
                  We partner with local organizations and schools in Ghana to ensure our flashlights reach the students who need them most. Each flashlight comes with educational materials and instructions in local languages.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Can students get involved?</h3>
                <p className="text-gray-700">
                  Absolutely! We welcome student volunteers to help with assembly, fundraising, advocacy, and project management. Contact us to learn about current opportunities at your school.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">How much does it cost to provide one flashlight?</h3>
                <p className="text-gray-700">
                  Each solar flashlight costs approximately $15 to produce and distribute. This includes materials, assembly, packaging, and shipping to Ghana.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What impact have you made so far?</h3>
                <p className="text-gray-700">
                  We've distributed over 500 solar flashlights to students across 15 schools in Ghana, enabling more than 2,000 additional study hours and directly impacting educational outcomes in rural communities.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Why focus on energy poverty?</h3>
                <p className="text-gray-700">
                  Energy poverty disproportionately affects women and children. Among affected communities, girls often miss educational opportunities due to domestic duties like collecting fuelwood. Of the 3.8 million people who die annually from toxic lighting sources, 32% are children under 5.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8 opacity-90">
            Together, we can light up education and create brighter futures for children around the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://gofund.me/436b67db" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              <i className="fas fa-heart mr-2"></i>
              Donate Now
            </a>
            <a 
              href="/contact"
              className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors duration-200"
            >
              <i className="fas fa-envelope mr-2"></i>
              Get Involved
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}