import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Calendar, 
  Users, 
  TrendingUp, 
  DollarSign,
  CheckCircle,
  Target,
  Lightbulb,
  Code,
  Zap
} from 'lucide-react';
import { getProduct, formatMetric } from '../utils/portfolioUtils';

const ProductLanding: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProduct(id) : null;

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Product Not Found</h1>
          <p className="text-slate-600 mb-8">The product you're looking for doesn't exist.</p>
          <Link 
            to="/portfolio" 
            className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
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

  const getStatusText = (status: string) => {
    switch (status) {
      case 'launched':
        return 'Live Product';
      case 'in-development':
        return 'In Development';
      case 'concept':
        return 'Concept Phase';
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link 
            to="/portfolio" 
            className="inline-flex items-center text-slate-600 hover:text-amber-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <span className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(product.status)}`}>
              {getStatusText(product.status)}
            </span>
            <span className="text-sm text-slate-500 bg-slate-100 px-4 py-2 rounded-full">
              {product.category}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6">
            {product.title}
          </h1>

          <p className="text-2xl text-amber-600 font-medium mb-8 max-w-3xl mx-auto">
            {product.tagline}
          </p>

          <p className="text-xl text-slate-600 leading-relaxed mb-12 max-w-4xl mx-auto">
            {product.description}
          </p>

          {/* Primary CTA */}
          {product.demoUrl && (
            <div className="mb-12">
              <a
                href={product.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-amber-500 to-orange-500 text-white px-12 py-4 rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <ExternalLink className="w-5 h-5 mr-3" />
                Visit {product.title}
              </a>
            </div>
          )}

          {/* Product Preview */}
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                {product.imageUrl ? (
                  <img 
                    src={product.imageUrl} 
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-400 to-orange-500">
                    <div className="text-center text-white">
                      <div className="w-24 h-24 mx-auto mb-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                        <Code className="w-12 h-12" />
                      </div>
                      <p className="text-3xl font-bold mb-2">{product.title}</p>
                      <p className="text-xl opacity-90">{product.tagline}</p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Floating elements for visual appeal */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-amber-400 rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-orange-500 rounded-full opacity-40"></div>
            </div>
          </div>
        </div>

        {/* Metrics Section */}
        {product.metrics && product.status === 'launched' && (
          <div className="bg-white rounded-2xl p-12 mb-16 shadow-lg border border-slate-100">
            <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
              Success Metrics
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              {product.metrics.users && (
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-slate-800 mb-2">
                    {formatMetric(product.metrics.users, 'users')}
                  </div>
                  <div className="text-slate-600 font-medium">Active Users</div>
                </div>
              )}
              {product.metrics.revenue && (
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-slate-800 mb-2">
                    {formatMetric(product.metrics.revenue, 'revenue')}
                  </div>
                  <div className="text-slate-600 font-medium">Monthly Revenue</div>
                </div>
              )}
              {product.metrics.growth && (
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-slate-800 mb-2">
                    {formatMetric(product.metrics.growth, 'growth')}
                  </div>
                  <div className="text-slate-600 font-medium">Monthly Growth</div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Problem & Solution */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="flex items-center mb-4">
              <Target className="w-6 h-6 mr-3 text-red-500" />
              <h2 className="text-2xl font-semibold text-slate-800">Problems Solved</h2>
            </div>
            <ul className="space-y-3">
              {product.problems.map((problem, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-slate-600 leading-relaxed">{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center mb-4">
              <Lightbulb className="w-6 h-6 mr-3 text-green-500" />
              <h2 className="text-2xl font-semibold text-slate-800">Our Solutions</h2>
            </div>
            <ul className="space-y-3">
              {product.solutions.map((solution, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-slate-600 leading-relaxed">{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <Zap className="w-6 h-6 mr-3 text-amber-500" />
            <h2 className="text-2xl font-semibold text-slate-800">Key Features</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {product.features.map((feature, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-slate-700 text-sm leading-relaxed">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Target Audience */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">Target Audience</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <p className="text-slate-700 leading-relaxed">{product.targetAudience}</p>
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-slate-800 mb-6">Technology Stack</h2>
          <div className="flex flex-wrap gap-3">
            {product.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Final Call to Action */}
        <div className="text-center bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-16 text-white">
          <h3 className="text-4xl font-bold mb-6">
            Ready to experience {product.title}?
          </h3>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            Join thousands of users who are already transforming their workflow with our platform.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {product.demoUrl && (
              <a
                href={product.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-amber-500 to-orange-500 text-white px-10 py-4 rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <ExternalLink className="w-5 h-5 mr-3" />
                Visit {product.title}
              </a>
            )}
            <Link 
              to="/#connect"
              className="inline-flex items-center border-2 border-white text-white px-10 py-4 rounded-xl hover:bg-white hover:text-slate-800 transition-colors font-semibold text-lg"
            >
              Get in Touch
            </Link>
          </div>
          
          {/* Additional info */}
          {product.launchDate && (
            <div className="mt-8 pt-8 border-t border-slate-700">
              <div className="flex items-center justify-center text-slate-300">
                <Calendar className="w-4 h-4 mr-2" />
                <span>
                  {product.status === 'launched' ? 'Launched' : 'Expected Launch'}: {' '}
                  {new Date(product.launchDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="mt-12 text-center">
          <Link 
            to="/portfolio" 
            className="inline-flex items-center text-slate-600 hover:text-amber-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductLanding;
