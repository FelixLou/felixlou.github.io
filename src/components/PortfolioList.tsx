import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, Calendar, Users, TrendingUp, DollarSign, Zap, Code, Target, ArrowRight } from 'lucide-react';
import { products, getAllCategories, formatMetric, type Product } from '../utils/portfolioUtils';

const PortfolioList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const categories = getAllCategories();

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const getStatusColor = (status: Product['status']) => {
    switch (status) {
      case 'launched':
        return 'bg-green-100 text-green-800';
      case 'in-development':
        return 'bg-blue-100 text-blue-800';
      case 'concept':
        return 'bg-amber-100 text-amber-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: Product['status']) => {
    switch (status) {
      case 'launched':
        return 'Live';
      case 'in-development':
        return 'In Development';
      case 'concept':
        return 'Concept';
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
            My Portfolio
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Building products that solve real problems using software, AI, and thoughtful design. 
            From family apps to professional tools, each project focuses on creating meaningful impact.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === 'all'
                ? 'bg-amber-500 text-white'
                : 'bg-white text-slate-600 hover:bg-amber-50 hover:text-amber-600'
            }`}
          >
            All Projects
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-amber-500 text-white'
                  : 'bg-white text-slate-600 hover:bg-amber-50 hover:text-amber-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              {/* Product Image */}
              <div className="h-48 bg-gradient-to-br from-amber-400 to-orange-500 relative overflow-hidden">
                {product.imageUrl ? (
                  <img 
                    src={product.imageUrl} 
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center text-white">
                      <Code className="w-12 h-12 mx-auto mb-3 opacity-80" />
                      <p className="text-lg font-semibold">{product.title}</p>
                    </div>
                  </div>
                )}
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(product.status)}`}>
                    {getStatusText(product.status)}
                  </span>
                </div>
              </div>

              {/* Product Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-slate-800 group-hover:text-amber-600 transition-colors">
                    {product.title}
                  </h3>
                  <span className="text-sm text-slate-500 bg-slate-100 px-2 py-1 rounded">
                    {product.category}
                  </span>
                </div>

                <p className="text-amber-600 font-medium text-sm mb-3">
                  {product.tagline}
                </p>

                <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {product.description}
                </p>





                {/* Action Button */}
                <div className="text-right">
                  {product.demoUrl ? (
                    <a
                      href={product.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition-colors font-medium text-sm group"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit
                    </a>
                  ) : (
                    <button
                      disabled
                      className="inline-flex items-center bg-gray-400 text-white px-4 py-2 rounded-lg cursor-not-allowed font-medium text-sm"
                    >
                      Coming Soon
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <Target className="w-12 h-12 mx-auto mb-4 text-amber-500" />
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">
              Have a Project in Mind?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              I'm always interested in collaborating on projects that create meaningful impact. 
              Whether it's a technical challenge, a product idea, or just a conversation about building better software.
            </p>
            <Link 
              to="/#connect"
              className="inline-flex items-center bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition-colors font-medium"
            >
              Let's Connect
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link
            to="/"
            className="inline-flex items-center text-slate-600 hover:text-amber-600 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioList;
