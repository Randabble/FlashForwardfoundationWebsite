import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function AboutSection() {
  const titleRef = useScrollAnimation();
  const descRef = useScrollAnimation();
  const value1Ref = useScrollAnimation();
  const value2Ref = useScrollAnimation();
  const value3Ref = useScrollAnimation();
  const value4Ref = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="scroll-fade text-4xl sm:text-5xl font-bold text-dark mb-6">Our Mission</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p ref={descRef} className="scroll-fade text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Flash Forward was founded by high school students in Washington state who recognized that 
            educational inequality could be addressed through sustainable technology. We believe every 
            child deserves the opportunity to learn, regardless of whether they have access to electricity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          <div ref={value1Ref} className="scroll-fade text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
              <i className="fas fa-lightbulb text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-dark mb-2">Innovation</h3>
            <p className="text-gray-600">Designing sustainable solutions with cutting-edge solar technology</p>
          </div>

          <div ref={value2Ref} className="scroll-fade text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
              <i className="fas fa-graduation-cap text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-dark mb-2">Education</h3>
            <p className="text-gray-600">Empowering students to continue learning after sunset</p>
          </div>

          <div ref={value3Ref} className="scroll-fade text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
              <i className="fas fa-users text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-dark mb-2">Community</h3>
            <p className="text-gray-600">Building partnerships that create lasting impact</p>
          </div>

          <div ref={value4Ref} className="scroll-fade text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
              <i className="fas fa-leaf text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-dark mb-2">Sustainability</h3>
            <p className="text-gray-600">Clean energy solutions for a brighter tomorrow</p>
          </div>
        </div>
      </div>
    </section>
  );
}
