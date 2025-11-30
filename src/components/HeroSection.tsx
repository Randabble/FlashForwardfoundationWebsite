export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}
      />
      <div className="absolute inset-0 bg-dark/60"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Lighting the Future,
          <span className="text-primary"> One Flashlight </span>
          at a Time
        </h1>

        <p className="text-xl sm:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
          Student-led nonprofit delivering solar-powered light to kids in off-grid communities across Ghana and beyond.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://gofund.me/436b67db"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transform hover:scale-105 transition-all duration-200 shadow-lg text-center"
          >
            <i className="fas fa-heart mr-2"></i>
            Donate Now
          </a>
          <a
            href="/about"
            className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-all duration-200 text-center"
          >
            <i className="fas fa-info-circle mr-2"></i>
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
