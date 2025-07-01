import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function ProductSection() {
  const titleRef = useScrollAnimation();
  const descRef = useScrollAnimation();
  const featuresRef = useScrollAnimation();
  const imageRef = useScrollAnimation();

  return (
    <section id="product" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="scroll-fade text-4xl sm:text-5xl font-bold text-dark mb-6">What We Build</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p ref={descRef} className="scroll-fade text-xl text-gray-600 max-w-3xl mx-auto">
            Our solar-powered flashlights are designed for durability, efficiency, and ease of use in challenging environments.
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
                <p className="text-gray-600">Monocrystalline solar cells that charge quickly even in low-light conditions, ensuring reliable power for studying.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center flex-shrink-0">
                <i className="fas fa-battery-three-quarters text-white text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-dark mb-2">Long-Lasting Battery</h3>
                <p className="text-gray-600">Lithium-ion battery provides up to 8 hours of continuous bright light and can be recharged over 1000 times.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                <i className="fas fa-toggle-on text-white text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-dark mb-2">Smart Control System</h3>
                <p className="text-gray-600">Simple on/off switch with multiple brightness levels and built-in LED indicators for battery status.</p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="text-sm text-gray-600 mb-2">
                <i className="fas fa-handshake text-primary mr-2"></i>
                <strong>Partnership Highlight:</strong>
              </p>
              <p className="text-gray-700">
                Developed in collaboration with Sammamish High School Builders Club, combining student innovation with engineering expertise.
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
                <i className="fas fa-play text-white text-2xl"></i>
              </div>
              <h4 className="text-lg font-semibold text-dark mb-2">Product Demo Video</h4>
              <p className="text-gray-600 text-sm">Watch our flashlight in action and see how it changes lives</p>
              <button className="mt-4 text-primary font-medium hover:text-primary/80 transition-colors duration-200">
                <i className="fas fa-external-link-alt mr-1"></i>
                View Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
