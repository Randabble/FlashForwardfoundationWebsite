import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useCounterAnimation } from '@/hooks/useCounterAnimation';

export default function Impact() {
  const titleRef = useScrollAnimation();
  const descRef = useScrollAnimation();
  const problemRef = useScrollAnimation();
  const solutionRef = useScrollAnimation();
  const progressRef = useScrollAnimation();
  
  const studentsCounter = useCounterAnimation(600, 'M+');
  const percentCounter = useCounterAnimation(60, '%');
  const hoursCounter = useCounterAnimation(3, '');
  const flashlightsCounter = useCounterAnimation(500, '');
  const communitiesCounter = useCounterAnimation(12, '');

  return (
    <div className="font-sans">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 ref={titleRef} className="scroll-fade text-4xl sm:text-5xl lg:text-6xl font-bold text-dark mb-6">
            Our Impact
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p ref={descRef} className="scroll-fade text-xl text-gray-600 leading-relaxed">
            See how solar-powered flashlights are transforming education and creating opportunities worldwide.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={problemRef} className="scroll-fade text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-8">The Global Education Crisis</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Millions of students around the world cannot study after sunset due to lack of electricity. 
              This creates a massive education gap that perpetuates cycles of poverty and limits human potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div ref={studentsCounter.elementRef} className="scroll-fade text-center bg-red-50 p-8 rounded-2xl">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-users text-white text-3xl"></i>
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-dark mb-2">{studentsCounter.displayValue}</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Students Affected</div>
              <p className="text-gray-600">Globally lack access to electricity for studying</p>
            </div>

            <div ref={percentCounter.elementRef} className="scroll-fade text-center bg-orange-50 p-8 rounded-2xl">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-moon text-white text-3xl"></i>
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-dark mb-2">{percentCounter.displayValue}</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Less Study Time</div>
              <p className="text-gray-600">Students in off-grid homes study after sunset</p>
            </div>

            <div ref={hoursCounter.elementRef} className="scroll-fade text-center bg-yellow-50 p-8 rounded-2xl">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-clock text-white text-3xl"></i>
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-dark mb-2">{hoursCounter.displayValue}</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Hours Lost Daily</div>
              <p className="text-gray-600">Potential study time lost each evening</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={solutionRef} className="scroll-fade text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-8">Why Flashlights Work</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Solar-powered flashlights provide a simple, sustainable solution that doesn't require 
              expensive infrastructure. They're portable, durable, and designed specifically for educational use.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-sun text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-dark mb-2">Solar Powered</h3>
                  <p className="text-gray-600">No electricity needed - charges during the day using sunlight</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-shield-alt text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-dark mb-2">Safe & Reliable</h3>
                  <p className="text-gray-600">Much safer than kerosene lamps or candles, with consistent light output</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary/80 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-dollar-sign text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-dark mb-2">Cost Effective</h3>
                  <p className="text-gray-600">One-time cost provides years of lighting without ongoing fuel expenses</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-leaf text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-dark mb-2">Environmentally Friendly</h3>
                  <p className="text-gray-600">Clean energy with no emissions or environmental impact</p>
                </div>
              </div>
            </div>

            <div>
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600"
                alt="Student using solar flashlight for studying"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Progress */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={progressRef} className="scroll-fade text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-8">Our Progress So Far</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We're just getting started, but we're already making a real difference. 
              Here's what we've accomplished and what's coming next.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div ref={flashlightsCounter.elementRef} className="scroll-fade text-center bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-2xl">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-lightbulb text-white text-3xl"></i>
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-dark mb-2">{flashlightsCounter.displayValue}</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Flashlights Ready</div>
              <p className="text-gray-600">For our first distribution in Ghana (Summer 2025)</p>
            </div>

            <div ref={communitiesCounter.elementRef} className="scroll-fade text-center bg-gradient-to-br from-secondary/10 to-primary/10 p-8 rounded-2xl">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-map-marker-alt text-white text-3xl"></i>
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-dark mb-2">{communitiesCounter.displayValue}</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Communities Identified</div>
              <p className="text-gray-600">Partner villages confirmed for initial distribution</p>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-dark mb-8 text-center">Looking Ahead</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-primary rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-dark">Summer 2025</h4>
                  <p className="text-gray-600">First distribution of 500 flashlights in Ghana</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-secondary rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-dark">Fall 2025</h4>
                  <p className="text-gray-600">Expand to 3 additional regions based on pilot feedback</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-accent rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-dark">2026</h4>
                  <p className="text-gray-600">Goal: 5,000 students across West Africa with reliable lighting</p>
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