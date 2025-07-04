import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Product() {
  const titleRef = useScrollAnimation();
  const descRef = useScrollAnimation();
  const featuresRef = useScrollAnimation();
  const imageRef = useScrollAnimation();
  const specsRef = useScrollAnimation();
  const processRef = useScrollAnimation();

  return (
    <div className="font-sans">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 ref={titleRef} className="scroll-fade text-4xl sm:text-5xl lg:text-6xl font-bold text-dark mb-6">
            What We Build
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p ref={descRef} className="scroll-fade text-xl text-gray-600 leading-relaxed">
            Solar-powered flashlights designed specifically for educational use in challenging environments.
          </p>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div ref={featuresRef} className="scroll-fade space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-solar-panel text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-dark mb-2">High-Efficiency Solar Panel</h3>
                  <p className="text-gray-600">Monocrystalline solar cells that charge quickly even in low-light conditions, ensuring reliable power for studying. Our panels are rated for over 10 years of use.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-battery-three-quarters text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-dark mb-2">Long-Lasting Battery</h3>
                  <p className="text-gray-600">3.7V Lithium-ion battery provides up to 8 hours of continuous bright light and can be recharged over 1000 times. Built-in protection against overcharging.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-toggle-on text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-dark mb-2">Smart Control System</h3>
                  <p className="text-gray-600">Simple on/off switch with multiple brightness levels (25%, 50%, 100%) and built-in LED indicators for battery status and charging.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-shield-alt text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-dark mb-2">Durable Design</h3>
                  <p className="text-gray-600">IP65 water-resistant rating, impact-resistant ABS plastic housing, and reinforced components designed to withstand daily use by students.</p>
                </div>
              </div>
            </div>

            <div ref={imageRef} className="scroll-fade">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600"
                  alt="Solar-powered flashlight prototype showing components"
                  className="rounded-2xl shadow-xl w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={specsRef} className="scroll-fade text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-8">Technical Specifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Engineered for reliability, efficiency, and ease of use in off-grid environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-lightbulb text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-dark mb-3">LED Array</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• 3 high-efficiency white LEDs</li>
                <li>• 300 lumens maximum output</li>
                <li>• 6000K color temperature</li>
                <li>• 50,000+ hour lifespan</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-solar-panel text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-dark mb-3">Solar Panel</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• 2W monocrystalline silicon</li>
                <li>• 6V output voltage</li>
                <li>• 4-6 hours full charge time</li>
                <li>• Tempered glass protection</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-battery-full text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-dark mb-3">Battery</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• 3.7V 2200mAh Li-ion</li>
                <li>• 8+ hours runtime (max brightness)</li>
                <li>• 1000+ charge cycles</li>
                <li>• Built-in protection circuit</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-ruler text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-dark mb-3">Dimensions</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Length: 18cm</li>
                <li>• Width: 8cm</li>
                <li>• Height: 3cm</li>
                <li>• Weight: 280g</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-thermometer-half text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-dark mb-3">Environment</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Operating temp: -10°C to 50°C</li>
                <li>• IP65 water resistance</li>
                <li>• Drop tested to 2 meters</li>
                <li>• UV resistant materials</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-tools text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-dark mb-3">Features</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• 3 brightness settings</li>
                <li>• Battery level indicators</li>
                <li>• Foldable solar panel</li>
                <li>• Carrying handle/stand</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={processRef} className="scroll-fade text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-8">Our Design Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial concept to final product, every step is guided by the needs of the students we serve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600"
                alt="Students working on prototypes in the lab"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-dark">Collaborative Engineering</h3>
              <p className="text-gray-600 leading-relaxed">
                Working with the Sammamish High School Builders Club, we combine student innovation 
                with engineering expertise. Our iterative design process includes:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center space-x-2">
                  <i className="fas fa-check text-accent"></i>
                  <span>User research with students in target communities</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fas fa-check text-accent"></i>
                  <span>Rapid prototyping and 3D printing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fas fa-check text-accent"></i>
                  <span>Extensive field testing in real conditions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fas fa-check text-accent"></i>
                  <span>Continuous improvement based on feedback</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Partnership Highlight */}
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-dark mb-4">Partnership Spotlight</h3>
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                    <i className="fas fa-school text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-dark">Sammamish High School Builders Club</h4>
                    <p className="text-gray-600">Engineering & Prototyping Partner</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Our partnership with the Builders Club provides access to professional-grade 
                  engineering tools, 3D printers, and expert mentorship. This collaboration 
                  ensures our designs meet the highest standards of quality and reliability.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white p-6 rounded-xl shadow-lg inline-block">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-handshake text-white text-2xl"></i>
                  </div>
                  <h5 className="font-semibold text-dark mb-2">Student-Led Innovation</h5>
                  <p className="text-gray-600 text-sm">
                    Combining fresh perspectives with technical expertise
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}