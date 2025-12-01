import React, { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface BlogPost {
    id?: number;
    title: string;
    category: string;
    author: string;
    excerpt: string;
    content: string;
    image: string;
    featured: boolean;
    published: boolean;
    date?: string;
}

export default function BlogEditor() {
    const [, setLocation] = useLocation();
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [currentPost, setCurrentPost] = useState<BlogPost>({
        title: '',
        category: 'Impact',
        author: '',
        excerpt: '',
        content: '',
        image: '',
        featured: false,
        published: false,
    });

    // Check authentication
    useEffect(() => {
        const token = localStorage.getItem('admin_token');
        if (!token) {
            setLocation('/admin/login');
        } else {
            fetchPosts();
        }
    }, [setLocation]);

    const fetchPosts = async () => {
        try {
            const response = await fetch('/api/blogs');
            if (response.ok) {
                const data = await response.json();
                setPosts(data);
            }
        } catch (error) {
            console.error('Failed to fetch posts:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleCreateNew = () => {
        setCurrentPost({
            title: '',
            category: 'Impact',
            author: '',
            excerpt: '',
            content: '',
            image: '',
            featured: false,
            published: false,
        });
        setIsEditing(true);
    };

    const handleEdit = (post: BlogPost) => {
        setCurrentPost(post);
        setIsEditing(true);
    };

    const handleSave = async () => {
        const token = localStorage.getItem('admin_token');
        const url = currentPost.id ? `/api/blogs/${currentPost.id}` : '/api/blogs';
        const method = currentPost.id ? 'PUT' : 'POST';

        try {
            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(currentPost),
            });

            if (response.ok) {
                alert('Blog post saved successfully!');
                setIsEditing(false);
                fetchPosts();
            } else {
                alert('Failed to save blog post');
            }
        } catch (error) {
            console.error('Error saving post:', error);
            alert('An error occurred while saving');
        }
    };

    const handleDelete = async (id: number) => {
        if (!confirm('Are you sure you want to delete this post?')) return;

        const token = localStorage.getItem('admin_token');
        try {
            const response = await fetch(`/api/blogs/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (response.ok) {
                alert('Post deleted successfully');
                fetchPosts();
            } else {
                alert('Failed to delete post');
            }
        } catch (error) {
            console.error('Error deleting post:', error);
            alert('An error occurred while deleting');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('admin_token');
        setLocation('/admin/login');
    };

    if (isEditing) {
        return (
            <div className="font-sans min-h-screen flex flex-col">
                <Navigation />

                <section className="flex-1 pt-24 pb-16 bg-gray-50">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-white rounded-2xl shadow-xl p-8">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-8">
                                <h1 className="text-3xl font-bold text-dark">
                                    {currentPost.id ? 'Edit' : 'Create'} Blog Post
                                </h1>
                                <button
                                    onClick={() => setIsEditing(false)}
                                    className="text-gray-600 hover:text-gray-800"
                                >
                                    <i className="fas fa-times text-2xl"></i>
                                </button>
                            </div>

                            {/* Form */}
                            <form onSubmit={(e) => { e.preventDefault(); handleSave(); }} className="space-y-6">
                                {/* Title */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Title *
                                    </label>
                                    <input
                                        type="text"
                                        value={currentPost.title}
                                        onChange={(e) => setCurrentPost({ ...currentPost, title: e.target.value })}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                        placeholder="Enter post title"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    {/* Category */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Category *
                                        </label>
                                        <select
                                            value={currentPost.category}
                                            onChange={(e) => setCurrentPost({ ...currentPost, category: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                        >
                                            <option value="Impact">Impact</option>
                                            <option value="Health">Health</option>
                                            <option value="Stories">Stories</option>
                                            <option value="Technology">Technology</option>
                                            <option value="Environment">Environment</option>
                                            <option value="Social Impact">Social Impact</option>
                                        </select>
                                    </div>

                                    {/* Author */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Author *
                                        </label>
                                        <input
                                            type="text"
                                            value={currentPost.author}
                                            onChange={(e) => setCurrentPost({ ...currentPost, author: e.target.value })}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                            placeholder="Author name"
                                        />
                                    </div>
                                </div>

                                {/* Image URL */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Image URL *
                                    </label>
                                    <input
                                        type="url"
                                        value={currentPost.image}
                                        onChange={(e) => setCurrentPost({ ...currentPost, image: e.target.value })}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                        placeholder="https://example.com/image.jpg"
                                    />
                                    {currentPost.image && (
                                        <img src={currentPost.image} alt="Preview" className="mt-3 w-full h-48 object-cover rounded-lg" />
                                    )}
                                </div>

                                {/* Excerpt */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Excerpt *
                                    </label>
                                    <textarea
                                        value={currentPost.excerpt}
                                        onChange={(e) => setCurrentPost({ ...currentPost, excerpt: e.target.value })}
                                        required
                                        rows={3}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                        placeholder="Brief description for preview"
                                    />
                                </div>

                                {/* Content */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Content *
                                    </label>
                                    <textarea
                                        value={currentPost.content}
                                        onChange={(e) => setCurrentPost({ ...currentPost, content: e.target.value })}
                                        required
                                        rows={12}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-mono text-sm"
                                        placeholder="Write your blog post content here (supports markdown)..."
                                    />
                                </div>

                                {/* Toggles */}
                                <div className="flex items-center space-x-6">
                                    <label className="flex items-center space-x-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={currentPost.featured}
                                            onChange={(e) => setCurrentPost({ ...currentPost, featured: e.target.checked })}
                                            className="w-5 h-5 text-primary focus:ring-primary border-gray-300 rounded"
                                        />
                                        <span className="text-sm font-medium text-gray-700">Featured Post</span>
                                    </label>

                                    <label className="flex items-center space-x-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={currentPost.published}
                                            onChange={(e) => setCurrentPost({ ...currentPost, published: e.target.checked })}
                                            className="w-5 h-5 text-primary focus:ring-primary border-gray-300 rounded"
                                        />
                                        <span className="text-sm font-medium text-gray-700">Published</span>
                                    </label>
                                </div>

                                {/* Actions */}
                                <div className="flex items-center justify-end space-x-4 pt-6 border-t border-gray-200">
                                    <button
                                        type="button"
                                        onClick={() => setIsEditing(false)}
                                        className="px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                                    >
                                        <i className="fas fa-save mr-2"></i>
                                        Save Post
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        );
    }

    return (
        <div className="font-sans min-h-screen flex flex-col">
            <Navigation />

            <section className="flex-1 pt-24 pb-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h1 className="text-4xl font-bold text-dark mb-2">Blog Manager</h1>
                            <p className="text-gray-600">Create, edit, and manage blog posts</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={handleCreateNew}
                                className="bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                            >
                                <i className="fas fa-plus mr-2"></i>
                                New Post
                            </button>
                            <button
                                onClick={handleLogout}
                                className="text-gray-600 hover:text-gray-800 transition-colors"
                            >
                                <i className="fas fa-sign-out-alt mr-2"></i>
                                Logout
                            </button>
                        </div>
                    </div>

                    {/* Posts List */}
                    {isLoading ? (
                        <div className="text-center py-12">
                            <i className="fas fa-spinner fa-spin text-4xl text-primary mb-4"></i>
                            <p className="text-gray-600">Loading posts...</p>
                        </div>
                    ) : posts.length === 0 ? (
                        <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                            <i className="fas fa-blog text-6xl text-gray-300 mb-4"></i>
                            <h3 className="text-2xl font-bold text-dark mb-2">No posts yet</h3>
                            <p className="text-gray-600 mb-6">Create your first blog post to get started</p>
                            <button
                                onClick={handleCreateNew}
                                className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                            >
                                <i className="fas fa-plus mr-2"></i>
                                Create First Post
                            </button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-6">
                            {posts.map((post) => (
                                <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                    <div className="flex flex-col md:flex-row">
                                        {/* Image */}
                                        <div className="md:w-64 h-48 md:h-auto">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 p-6">
                                            <div className="flex items-start justify-between mb-3">
                                                <div>
                                                    <div className="flex items-center space-x-3 mb-2">
                                                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                                                            {post.category}
                                                        </span>
                                                        {post.featured && (
                                                            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                                                                <i className="fas fa-star mr-1"></i>
                                                                Featured
                                                            </span>
                                                        )}
                                                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${post.published
                                                                ? 'bg-green-100 text-green-800'
                                                                : 'bg-gray-100 text-gray-800'
                                                            }`}>
                                                            {post.published ? 'Published' : 'Draft'}
                                                        </span>
                                                    </div>
                                                    <h3 className="text-xl font-bold text-dark mb-2">{post.title}</h3>
                                                    <p className="text-sm text-gray-600 mb-2">
                                                        By {post.author} • {post.date || 'No date'}
                                                    </p>
                                                    <p className="text-gray-600 line-clamp-2">{post.excerpt}</p>
                                                </div>
                                            </div>

                                            {/* Actions */}
                                            <div className="flex items-center space-x-3 mt-4 pt-4 border-t border-gray-200">
                                                <button
                                                    onClick={() => handleEdit(post)}
                                                    className="text-primary hover:text-primary/80 font-medium transition-colors"
                                                >
                                                    <i className="fas fa-edit mr-1"></i>
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() => post.id && handleDelete(post.id)}
                                                    className="text-red-600 hover:text-red-700 font-medium transition-colors"
                                                >
                                                    <i className="fas fa-trash mr-1"></i>
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </div>
    );
}
