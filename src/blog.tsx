import React from "react";
import { useState } from 'react';
import { Link } from "wouter";
import AnimatedNav from "./components/AnimatedNav";
import Footer from "./components/Footer";
import { useScrollAnimation } from "./hooks/useScrollAnimation";

export default function Blog() {
  const titleRef = useScrollAnimation();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts = [
    {
      id: 1,
      title: "Breaking the Cycle: How Energy Poverty Affects Education",
      category: "Research",
      date: "Dec 20, 2024",
      author: "Maya Patel",
      readTime: "7 min read",
      excerpt: "Over 685 million people live without access to electricity. Discover how energy poverty creates barriers to education and what we're doing to break this cycle.",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      featured: true
    },
    {
      id: 2,
      title: "The Hidden Health Crisis: Indoor Air Pollution in Off-Grid Communities",
      category: "Health",
      date: "Dec 18, 2024",
      author: "Dr. James Chen",
      readTime: "5 min read",
      excerpt: "Kerosene lamps and solid fuels cause over 3.2 million deaths annually. Learn about the devastating health impacts of energy poverty and how solar solutions can save lives.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      featured: false
    },
    {
      id: 3,
      title: "From Classroom to Community: Student Stories from Ghana",
      category: "Stories",
      date: "Dec 15, 2024",
      author: "Akosua Mensah",
      readTime: "4 min read",
      excerpt: "Meet the students whose lives have been transformed by solar-powered flashlights. Their stories show the real impact of bringing light to education.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      featured: false
    },
    {
      id: 4,
      title: "Engineering Hope: The Technology Behind Our Solar Flashlights",
      category: "Technology",
      date: "Dec 12, 2024",
      author: "Alex Kumar",
      readTime: "6 min read",
      excerpt: "Take a deep dive into the engineering process behind our solar flashlights. From 3D modeling to circuit design, see how student innovation creates real impact.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      featured: false
    },
    {
      id: 5,
      title: "Climate Change and Energy Justice: The Black Carbon Connection",
      category: "Environment",
      date: "Dec 10, 2024",
      author: "Sofia Rodriguez",
      readTime: "5 min read",
      excerpt: "One kilogram of black carbon has the same warming effect as 700 kilograms of CO2. Explore how energy poverty contributes to climate change and environmental injustice.",
      image: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      featured: false
    },
    {
      id: 6,
      title: "Women and Girls: The Disproportionate Impact of Energy Poverty",
      category: "Social Impact",
      date: "Dec 8, 2024",
      author: "Fatima Al-Rashid",
      readTime: "6 min read",
      excerpt: "Energy poverty affects women and children most severely. Learn how lack of electricity perpetuates gender inequality and limits educational opportunities for girls.",
      image: "https://images.unsplash.com/photo-1594736797933-d0c6ba0b5091?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      featured: false
    }
  ];

  const categories = ['All', 'Research', 'Health', 'Stories', 'Technology', 'Environment', 'Social Impact'];

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="font-sans">
      <AnimatedNav />

      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 ref={titleRef} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark mb-6">
            Blog & Stories
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Insights, research, and stories from our mission to end energy poverty through education.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </span>
                    <span className="text-gray-500 text-sm">{featuredPost.readTime}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-600">By {featuredPost.author}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-600">{featuredPost.date}</span>
                    </div>
                    <Link href={`/blog/${featuredPost.id}`}>
                      <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium">
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${post.category === 'Research' ? 'bg-blue-100 text-blue-800' :
                      post.category === 'Health' ? 'bg-red-100 text-red-800' :
                        post.category === 'Stories' ? 'bg-green-100 text-green-800' :
                          post.category === 'Technology' ? 'bg-purple-100 text-purple-800' :
                            post.category === 'Environment' ? 'bg-emerald-100 text-emerald-800' :
                              'bg-pink-100 text-pink-800'
                      }`}>
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                    <span className="text-gray-500 text-sm">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-sm">By {post.author}</span>
                    <Link href={`/blog/${post.id}`}>
                      <button className="text-primary font-medium hover:text-primary/80 transition-colors duration-200 text-sm">
                        Read More →
                      </button>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join the Conversation</h2>
          <p className="text-xl mb-8 opacity-90">
            Stay updated with our latest research, stories, and insights on energy poverty and education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://gofund.me/436b67db"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              <i className="fas fa-heart mr-2"></i>
              Support Our Mission
            </a>
            <a
              href="/contact"
              className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors duration-200"
            >
              <i className="fas fa-envelope mr-2"></i>
              Share Your Story
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}