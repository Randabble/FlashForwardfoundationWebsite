import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function About() {
  const titleRef = useScrollAnimation();
  const missionRef = useScrollAnimation();
  const storyRef = useScrollAnimation();
  const value1Ref = useScrollAnimation();
  const value2Ref = useScrollAnimation();
  const value3Ref = useScrollAnimation();
  const value4Ref = useScrollAnimation();

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
            We are a student-led nonprofit organization dedicated to lighting the future, one flashlight at a time.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Flash Forward was founded by high school students in Washington state who recognized that 
                educational inequality could be addressed through sustainable technology. We believe every 
                child deserves the opportunity to learn, regardless of whether they have access to electricity.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our solar-powered flashlights provide safe, reliable lighting that enables students in off-grid 
                communities to continue their education after sunset, fundamentally changing their prospects 
                for the future.
              </p>
            </div>
            <div ref={storyRef} className="scroll-fade">
              <img 
                src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600"
                alt="Students studying with solar lights"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do, from product design to community partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div ref={value1Ref} className="scroll-fade text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                <i className="fas fa-lightbulb text-white text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-3">Innovation</h3>
              <p className="text-gray-600">Designing sustainable solutions with cutting-edge solar technology to create lasting impact.</p>
            </div>

            <div ref={value2Ref} className="scroll-fade text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                <i className="fas fa-graduation-cap text-white text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-3">Education</h3>
              <p className="text-gray-600">Empowering students to continue learning after sunset and reach their full potential.</p>
            </div>

            <div ref={value3Ref} className="scroll-fade text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                <i className="fas fa-users text-white text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-3">Community</h3>
              <p className="text-gray-600">Building partnerships with local organizations that create meaningful change.</p>
            </div>

            <div ref={value4Ref} className="scroll-fade text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                <i className="fas fa-leaf text-white text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-3">Sustainability</h3>
              <p className="text-gray-600">Clean energy solutions that protect the environment for future generations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-6">Our Story</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-6">
              Flash Forward began in a high school classroom in Bellevue, Washington, where a group of 
              students learned about the global education crisis affecting children in off-grid communities. 
              The statistics were staggering: over 600 million students worldwide lack access to electricity 
              for studying after dark.
            </p>
            
            <p className="mb-6">
              Rather than accept this as an unchangeable reality, our founding team decided to take action. 
              We partnered with the Sammamish High School Builders Club to design and prototype solar-powered 
              flashlights specifically for educational use.
            </p>
            
            <p className="mb-6">
              What started as a school project has grown into a movement. Today, Flash Forward is preparing 
              to distribute our first 500 flashlights in Ghana, with plans to reach thousands more students 
              across West Africa and beyond.
            </p>
            
            <p>
              We believe that when students have access to light, they have access to opportunity. Every 
              flashlight we distribute represents not just a product, but a pathway to a brighter future.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}