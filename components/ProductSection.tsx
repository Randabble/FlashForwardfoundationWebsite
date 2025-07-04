import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function ProductSection() {
  const titleRef = useScrollAnimation();
  const descRef = useScrollAnimation();
  const whyRef = useScrollAnimation();
  const featuresRef = useScrollAnimation();
  const imageRef = useScrollAnimation();

  return (
    <section id="product" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Why Flashlights Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 ref={titleRef} className="scroll-fade text-4xl sm:text-5xl font-bold text-dark mb-6">Why Flashlights Matter</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
            <p ref={descRef} className="scroll-fade text-xl text-gray-600 max-w-3xl mx-auto">
              Solar-powered flashlights address critical challenges faced by students in energy poverty, creating transformative benefits across health, environment, economics, and education.
            </p>
          </div>

          <div ref={whyRef} className="scroll-fade grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Health Benefits */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-heart text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Health & Safety</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-2 text-sm"></i>
                  <span className="text-sm">Eliminates toxic kerosene fumes that cause 3.2M deaths annually</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-2 text-sm"></i>
                  <span className="text-sm">Prevents fires and burns from open flame lamps</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-2 text-sm"></i>
                  <span className="text-sm">Reduces eye strain and headaches from poor lighting</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-2 text-sm"></i>
                  <span className="text-sm">Clean air leads to better respiratory health</span>
                </li>
              </ul>
            </div>

            {/* Environmental Benefits */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-leaf text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Environmental Impact</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-2 text-sm"></i>
                  <span className="text-sm">Prevents 190M tonnes of CO2 emissions from fuel-based lighting</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-2 text-sm"></i>
                  <span className="text-sm">1kg black carbon = 700kg CO2 warming effect</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-2 text-sm"></i>
                  <span className="text-sm">Reduces deforestation from fuel wood collection</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-2 text-sm"></i>
                  <span className="text-sm">Zero ongoing environmental impact after production</span>
                </li>
              </ul>
            </div>

            {/* Economic Benefits */}
            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-6 border border-yellow-100">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-dollar-sign text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Economic Freedom</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-2 text-sm"></i>
                  <span className="text-sm">Families save up to 40% of income spent on kerosene</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-2 text-sm"></i>
                  <span className="text-sm">One-time cost vs. ongoing fuel expenses</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-2 text-sm"></i>
                  <span className="text-sm">Frees up money for food, healthcare, and education</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-2 text-sm"></i>
                  <span className="text-sm">Enables income-generating activities after dark</span>
                </li>
              </ul>
            </div>

            {/* Educational Benefits */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-100">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-graduation-cap text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Extended Learning</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-2 text-sm"></i>
                  <span className="text-sm">2-4 additional study hours per day after sunset</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-2 text-sm"></i>
                  <span className="text-sm">35% improvement in reading comprehension</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-2 text-sm"></i>
                  <span className="text-sm">Enables homework completion and exam preparation</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-2 text-sm"></i>
                  <span className="text-sm">Particularly benefits girls who help with evening chores</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="mt-16 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">685M</div>
                <div className="text-gray-700 font-medium">People without electricity access</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">3.8M</div>
                <div className="text-gray-700 font-medium">Deaths annually from indoor air pollution</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">32%</div>
                <div className="text-gray-700 font-medium">Of pollution deaths are children under 5</div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Features Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-6">Our Solar Flashlight Design</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Engineered by students for durability, efficiency, and ease of use in challenging environments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={featuresRef} className="scroll-fade space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                <i className="fas fa-solar-panel text-white text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-dark mb-2">High-Efficiency Solar Panel</h3>
                <p className="text-gray-600">5W monocrystalline solar cells with 20% efficiency rating that charge quickly even in low-light conditions, ensuring reliable power for studying.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center flex-shrink-0">
                <i className="fas fa-battery-full text-white text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-dark mb-2">Long-Lasting Battery</h3>
                <p className="text-gray-600">3000mAh lithium-ion battery provides up to 8 hours of continuous bright light and can be recharged over 1000 times with proper care.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                <i className="fas fa-lightbulb text-white text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-dark mb-2">Adjustable LED Array</h3>
                <p className="text-gray-600">12 high-brightness LEDs with multiple intensity levels and wide beam angle, perfect for reading and group study sessions.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                <i className="fas fa-shield-alt text-white text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-dark mb-2">Durable Construction</h3>
                <p className="text-gray-600">IP65 waterproof rating with shock-resistant 3D-printed housing designed to withstand daily use in challenging conditions.</p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="text-sm text-gray-600 mb-2">
                <i className="fas fa-handshake text-primary mr-2"></i>
                <strong>Student Innovation:</strong>
              </p>
              <p className="text-gray-700">
                Designed and assembled by Sammamish High School Builders Club students, combining engineering expertise with real-world impact.
              </p>
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
            
            <div className="mt-8 bg-gray-100 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-cog text-white text-2xl"></i>
              </div>
              <h4 className="text-lg font-semibold text-dark mb-2">Product Specifications</h4>
              <div className="text-gray-600 text-sm space-y-1">
                <p>• Solar Panel: 5W Monocrystalline</p>
                <p>• Battery: 3000mAh Lithium-ion</p>
                <p>• Brightness: 200+ Lumens</p>
                <p>• Runtime: 8+ Hours</p>
                <p>• Charge Time: 6-8 Hours</p>
                <p>• Lifespan: 1000+ Cycles</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}