import React from "react";
import { useRoute, Link } from "wouter";
import AnimatedNav from "./components/AnimatedNav";
import Footer from "./components/Footer";
import { useScrollAnimation } from "./hooks/useScrollAnimation";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:id");
  const postId = params?.id ? parseInt(params.id) : 1;

  const titleRef = useScrollAnimation();
  const contentRef = useScrollAnimation();

  const blogPosts = [
    {
      id: 1,
      title: "Why Light Matters: The Science of After-School Learning",
      category: "Impact",
      date: "Dec 15, 2024",
      author: "Sofia Rodriguez",
      readTime: "5 min read",
      excerpt: "Research shows that adequate lighting can improve reading comprehension by up to 35%. Discover how our solar flashlights are changing educational outcomes in Ghana.",
      content: `
        <p>When the sun sets in rural Ghana, something profound happens to education. For millions of students around the world, darkness doesn't just signal the end of the day—it marks the end of learning opportunities.</p>
        
        <p>Recent research from the University of California Berkeley has shown that adequate lighting can improve reading comprehension by up to 35% and increase study time by an average of 2.3 hours per day. But what does this mean for students in off-grid communities?</p>
        
        <h3>The Science Behind Light and Learning</h3>
        
        <p>Our brains are wired to respond to light. The visual cortex, which processes what we see, works in tandem with areas responsible for memory and concentration. When lighting is poor, students struggle with:</p>
        
        <ul>
          <li>Eye strain that leads to fatigue and headaches</li>
          <li>Reduced reading speed and comprehension</li>
          <li>Difficulty focusing on detailed work</li>
          <li>Increased likelihood of making errors</li>
        </ul>
        
        <p>Dr. Sarah Mitchell from Stanford's Education Research Institute explains: "Quality lighting isn't just about being able to see the page. It's about creating an environment where the brain can function optimally for learning."</p>
        
        <h3>What We're Seeing in Ghana</h3>
        
        <p>Our preliminary studies in partner communities show remarkable results. Students with access to our solar flashlights report:</p>
        
        <ul>
          <li>43% increase in homework completion rates</li>
          <li>28% improvement in test scores</li>
          <li>Better attendance in morning classes (less fatigue)</li>
          <li>Increased confidence in academic abilities</li>
        </ul>
        
        <p>But the impact goes beyond academics. Parents report that their children are more engaged with learning, more curious about the world, and more optimistic about their futures.</p>
        
        <h3>The Ripple Effect</h3>
        
        <p>Education transforms communities. When students can study effectively after dark, they're more likely to complete their education, pursue higher learning, and become community leaders. This creates a positive cycle that lifts entire regions out of poverty.</p>
        
        <p>Our solar flashlights are just the beginning. We're not just providing light—we're illuminating pathways to better futures for millions of young people around the world.</p>
      `,
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
      categoryColor: "bg-primary/10 text-primary"
    },
    {
      id: 2,
      title: "How We Prototype: From Idea to Impact",
      category: "Engineering",
      date: "Dec 8, 2024",
      author: "Maya Patel",
      readTime: "7 min read",
      excerpt: "Take a behind-the-scenes look at our design process, from initial sketches to 3D printing prototypes in the Sammamish High School Builders Club.",
      content: `
        <p>Every great product starts with a problem. For Flash Forward, that problem was clear: millions of students around the world can't study after sunset because they don't have access to electricity. But turning that problem into a solution? That's where the real work begins.</p>
        
        <h3>Phase 1: Research and Understanding</h3>
        
        <p>Before we touched a single tool, we spent months researching. We interviewed teachers, students, and parents in off-grid communities. We learned about their daily routines, their challenges, and their dreams for their children's education.</p>
        
        <p>Key insights from our research:</p>
        <ul>
          <li>Students needed portable, reliable light sources</li>
          <li>Cost was a major barrier—families couldn't afford expensive solutions</li>
          <li>Durability was crucial—devices needed to withstand daily use by children</li>
          <li>Safety was paramount—no open flames or toxic materials</li>
        </ul>
        
        <h3>Phase 2: Initial Design</h3>
        
        <p>Armed with real user needs, we began sketching. Our first designs were simple: a solar panel, a battery, and LEDs. But the devil, as they say, is in the details.</p>
        
        <p>We had to consider:</p>
        <ul>
          <li>How to make the device affordable while maintaining quality</li>
          <li>How to ensure consistent light output as the battery depleted</li>
          <li>How to make charging intuitive for users of all ages</li>
          <li>How to balance portability with solar panel efficiency</li>
        </ul>
        
        <h3>Phase 3: Prototyping at Sammamish High</h3>
        
        <p>This is where our partnership with the Sammamish High School Builders Club became invaluable. With access to 3D printers, laser cutters, and electronic prototyping equipment, we could rapidly iterate on our designs.</p>
        
        <p>Our first prototype was... well, let's just say it was a learning experience. The solar panel was too small, the housing was fragile, and the light was too dim. But failure is just data in disguise.</p>
        
        <h3>Phase 4: Testing and Refinement</h3>
        
        <p>We tested each prototype rigorously. We dropped them, soaked them, left them in direct sunlight for days, and had dozens of students use them in real-world conditions.</p>
        
        <p>Version 7 was our breakthrough. It featured:</p>
        <ul>
          <li>A foldable solar panel that maximized charging efficiency</li>
          <li>A robust ABS plastic housing that could survive drops</li>
          <li>Three brightness settings to conserve battery life</li>
          <li>LED indicators showing battery level and charging status</li>
        </ul>
        
        <h3>Phase 5: Field Testing</h3>
        
        <p>No amount of lab testing can replace real-world use. We sent prototypes to our partner communities in Ghana and anxiously waited for feedback.</p>
        
        <p>The response was incredible. Students loved the adjustable brightness, parents appreciated the safety features, and teachers noticed improved study habits. But we also received valuable suggestions for improvements that led to our current design.</p>
        
        <h3>What's Next?</h3>
        
        <p>We're never done improving. Even as we prepare for our first large-scale distribution, we're working on version 2.0. Features under development include:</p>
        <ul>
          <li>USB charging capability for small devices</li>
          <li>Improved water resistance</li>
          <li>Even longer battery life</li>
          <li>Modular design for easier repairs</li>
        </ul>
        
        <p>Engineering isn't just about technical specifications—it's about understanding human needs and creating solutions that work in the real world. Every prototype, every test, every iteration brings us closer to our goal: lighting up education for every student, everywhere.</p>
      `,
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
      categoryColor: "bg-secondary/10 text-secondary"
    },
    {
      id: 3,
      title: "Ghana Distribution Plans: Making It Happen",
      category: "Operations",
      date: "Dec 1, 2024",
      author: "Jordan Williams",
      readTime: "6 min read",
      excerpt: "Learn about our upcoming distribution partnership and how we're ensuring our flashlights reach the students who need them most in rural Ghana.",
      content: `
        <p>Having a great product is only half the battle. The other half? Getting it into the hands of the students who need it most. Our upcoming distribution in Ghana represents months of careful planning, partnership building, and logistical coordination.</p>
        
        <h3>Choosing Ghana: Why This Region?</h3>
        
        <p>Ghana wasn't a random choice. After extensive research, we identified several factors that made it ideal for our pilot program:</p>
        
        <ul>
          <li><strong>High Need:</strong> Over 2 million students in Ghana lack access to electricity at home</li>
          <li><strong>Government Support:</strong> Ghana's Ministry of Education has been supportive of educational technology initiatives</li>
          <li><strong>Stable Infrastructure:</strong> Existing networks allow for efficient distribution and follow-up</li>
          <li><strong>Partner Organizations:</strong> Established relationships with local churches and NGOs</li>
        </ul>
        
        <h3>Building Local Partnerships</h3>
        
        <p>We learned early that sustainable impact requires local ownership. Rather than parachuting in with our solution, we spent a year building relationships with community leaders, teachers, and families.</p>
        
        <p>Our key partners include:</p>
        <ul>
          <li><strong>Local Churches:</strong> With deep community trust and extensive reach</li>
          <li><strong>Regional Schools:</strong> Teachers who understand student needs best</li>
          <li><strong>Community Leaders:</strong> Elders who can ensure cultural appropriateness</li>
          <li><strong>Parent Groups:</strong> Families who will support and maintain the devices</li>
        </ul>
        
        <h3>The Distribution Model</h3>
        
        <p>Our distribution isn't just about handing out flashlights. It's a comprehensive program that includes:</p>
        
        <h4>Pre-Distribution</h4>
        <ul>
          <li>Community meetings to explain the program</li>
          <li>Student and family registration</li>
          <li>Basic education about solar technology</li>
          <li>Setting expectations for care and maintenance</li>
        </ul>
        
        <h4>Distribution Day</h4>
        <ul>
          <li>Hands-on demonstrations of flashlight features</li>
          <li>Proper charging and care instructions</li>
          <li>Q&A sessions with students and parents</li>
          <li>Collection of baseline data for impact measurement</li>
        </ul>
        
        <h4>Follow-Up</h4>
        <ul>
          <li>Monthly check-ins through local partners</li>
          <li>Technical support and minor repairs</li>
          <li>Impact assessment surveys</li>
          <li>Community feedback sessions</li>
        </ul>
        
        <h3>Ensuring Sustainability</h3>
        
        <p>We're not interested in one-time charity. Our goal is creating sustainable change. That means:</p>
        
        <ul>
          <li><strong>Local Repair Training:</strong> Teaching community members basic maintenance</li>
          <li><strong>Replacement Part Supply:</strong> Ensuring critical components are available locally</li>
          <li><strong>Educational Integration:</strong> Working with teachers to incorporate flashlights into study routines</li>
          <li><strong>Community Ownership:</strong> Gradually transferring program management to local leaders</li>
        </ul>
        
        <h3>Measuring Impact</h3>
        
        <p>How do we know if we're making a difference? We're tracking multiple metrics:</p>
        
        <ul>
          <li><strong>Educational Outcomes:</strong> Test scores, homework completion, school attendance</li>
          <li><strong>Usage Patterns:</strong> How often and how long students use the flashlights</li>
          <li><strong>Family Impact:</strong> Changes in household routines and attitudes toward education</li>
          <li><strong>Device Performance:</strong> Technical reliability and user satisfaction</li>
        </ul>
        
        <h3>Challenges We're Preparing For</h3>
        
        <p>No program is without challenges. We've identified potential issues and developed contingency plans:</p>
        
        <ul>
          <li><strong>Cultural Adoption:</strong> Some families may be hesitant to adopt new technology</li>
          <li><strong>Maintenance Issues:</strong> Devices may break or be misused</li>
          <li><strong>Weather Challenges:</strong> Rainy seasons may affect solar charging</li>
          <li><strong>Economic Pressures:</strong> Families may face pressure to sell devices</li>
        </ul>
        
        <h3>Looking Beyond Ghana</h3>
        
        <p>Ghana is just the beginning. We're already in discussions with partners in Kenya, Malawi, and Bangladesh. Each new region will build on lessons learned from Ghana, creating a global network of students with access to light and learning.</p>
        
        <p>Our distribution program isn't just about logistics—it's about building relationships, creating trust, and ensuring that every flashlight we distribute creates lasting positive change in a student's life.</p>
        
        <p>By summer 2025, when we hand out our first 500 flashlights in Ghana, we'll be doing more than distributing devices. We'll be lighting up futures, one student at a time.</p>
      `,
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
      categoryColor: "bg-accent/10 text-accent"
    }
  ];

  const post = blogPosts.find(p => p.id === postId) || blogPosts[0];

  return (
    <div className="font-sans">
      <AnimatedNav />

      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link href="/blog">
              <button className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors duration-200">
                <i className="fas fa-arrow-left mr-2"></i>
                Back to Blog
              </button>
            </Link>
          </div>

          <div ref={titleRef}>
            <div className="flex items-center justify-between mb-4">
              <span className={`${post.categoryColor} px-4 py-2 rounded-full text-sm font-medium`}>
                {post.category}
              </span>
              <span className="text-gray-500 text-sm">{post.readTime}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center text-gray-600 mb-8">
              <span>By {post.author}</span>
              <span className="mx-3">•</span>
              <span>{post.date}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-96 object-cover rounded-2xl shadow-xl"
          />
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={contentRef} className="prose prose-lg max-w-none">
            <div
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{
                fontSize: '18px',
                lineHeight: '1.8'
              }}
            />
          </div>

          {/* Author Bio */}
          <div className="mt-12 p-6 bg-gray-50 rounded-2xl">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">
                  {post.author.split(' ').map(name => name[0]).join('')}
                </span>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-dark">{post.author}</h4>
                <p className="text-gray-600">Flash Forward Team Member</p>
                <p className="text-sm text-gray-500 mt-1">
                  Passionate about using technology to create positive change in education worldwide.
                </p>
              </div>
            </div>
          </div>

          {/* Back to Blog */}
          <div className="mt-12 text-center">
            <Link href="/blog">
              <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200">
                <i className="fas fa-arrow-left mr-2"></i>
                Back to All Stories
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}