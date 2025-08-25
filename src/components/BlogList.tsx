import React, { useState, useEffect } from 'react';
import { Calendar, ChevronRight, Rss } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getAllBlogPosts, getPublishedPosts, formatDate, type BlogPostMeta } from '../utils/blogUtils';
import { useLanguage } from '../contexts/LanguageContext';

const BlogList: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPostMeta[]>([]);
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    async function loadPosts() {
      try {
        const allPosts = await getAllBlogPosts();
        // For development, show all posts. In production, you can filter to published only
        const postsToShow = process.env.NODE_ENV === 'development' ? allPosts : getPublishedPosts(allPosts);
        setBlogPosts(postsToShow);
      } catch (error) {
        console.error('Error loading blog posts:', error);
      } finally {
        setLoading(false);
      }
    }

    loadPosts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
              {t('blog.title')}
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {t('blog.loading')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm animate-pulse">
                <div className="h-4 bg-slate-200 rounded mb-3"></div>
                <div className="h-6 bg-slate-200 rounded mb-3"></div>
                <div className="h-16 bg-slate-200 rounded mb-4"></div>
                <div className="h-4 bg-slate-200 rounded w-24"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
            {t('blog.title')}
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {t('blog.subtitle')}
          </p>
          {/* RSS Feed Link */}
          <div className="mt-6">
            <a
              href="/rss.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 transition-colors"
              title="Subscribe to RSS Feed"
            >
              <Rss className="w-5 h-5" />
              <span className="font-medium">RSS Feed</span>
            </a>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link 
              key={post.id}
              to={`/blog/${post.id}`}
              className="group"
            >
              <article className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                <div className="flex items-center justify-between text-sm text-slate-500 mb-3">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{formatDate(post.date)}</span>
                    {!post.published && process.env.NODE_ENV === 'development' && (
                      <span className="ml-2 bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">
                        {t('blog.draft')}
                      </span>
                    )}
                  </div>
                  <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs font-medium">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-amber-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-amber-600 font-medium">
                  <span>{t('blog.readMore')}</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-slate-600 mb-4">{t('blog.moreArticles')}</p>
          <div className="flex justify-center space-x-4">
            <a 
              href="https://www.linkedin.com/in/jiabinlu/" 
              className="text-amber-600 hover:text-amber-700 font-medium transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a 
              href="https://x.com/jiabinlu123" 
              className="text-amber-600 hover:text-amber-700 font-medium transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              X.com
            </a>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link 
            to="/" 
            className="inline-flex items-center text-slate-600 hover:text-amber-600 transition-colors"
          >
            {t('common.backToHome')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogList; 