import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function BlogSection() {
  const titleRef = useScrollAnimation();
  const descRef = useScrollAnimation();
  const post1Ref = useScrollAnimation();
  const post2Ref = useScrollAnimation();
  const post3Ref = useScrollAnimation();
  const buttonRef = useScrollAnimation();

  const blogPosts = [
    {
      title: "Why Light Matters: The Science of After-School Learning",
      category: "Impact",
      date: "Dec 15, 2024",
      excerpt: "Research shows that adequate lighting can improve reading comprehension by up to 35%. Discover how our solar flashlights are changing educational outcomes in Ghana.",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
      categoryColor: "bg-primary/10 text-primary"
    },
    {
      title: "How We Prototype: From Idea to Impact",
      category: "Engineering",
      date: "Dec 8, 2024",
      excerpt: "Take a behind-the-scenes look at our design process, from initial sketches to 3D printing prototypes in the Sammamish High School Builders Club.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
      categoryColor: "bg-secondary/10 text-secondary"
    },
    {
      title: "Ghana Distribution Plans: Making It Happen",
      category: "Operations",
      date: "Dec 1, 2024",
      excerpt: "Learn about our upcoming distribution partnership and how we're ensuring our flashlights reach the students who need them most in rural Ghana.",
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
      categoryColor: "bg-accent/10 text-accent"
    }
  ];

  const postRefs = [post1Ref, post2Ref, post3Ref];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="scroll-fade text-4xl sm:text-5xl font-bold text-dark mb-6">In the Field & Behind the Scenes</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p ref={descRef} className="scroll-fade text-xl text-gray-600 max-w-3xl mx-auto">
            Follow our journey from the engineering lab to rural villages as we work to light up education worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={post.title} ref={postRefs[index]} className="scroll-fade bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <img 
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className={`${post.categoryColor} px-3 py-1 rounded-full text-sm font-medium`}>{post.category}</span>
                  <span className="text-gray-500 text-sm ml-auto">{post.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-dark mb-3 hover:text-primary transition-colors duration-200 cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <button className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors duration-200">
                  Read More 
                  <i className="fas fa-arrow-right ml-2 text-sm"></i>
                </button>
              </div>
            </article>
          ))}
        </div>

        <div ref={buttonRef} className="scroll-fade text-center mt-12">
          <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200">
            <i className="fas fa-newspaper mr-2"></i>
            Read More Stories
          </button>
        </div>
      </div>
    </section>
  );
}
