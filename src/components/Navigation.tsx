import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const linkClass = (path: string) => 
    `transition-colors ${isActive(path) 
      ? 'text-amber-600 font-medium' 
      : 'text-slate-600 hover:text-amber-600'
    }`;

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="font-bold text-xl text-slate-800 hover:text-amber-600 transition-colors">
            Jiabin Lu
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/blog" className={linkClass('/blog')}>
              Blog
            </Link>
            <a href="/#about" className={linkClass('/#about')}>
              About
            </a>
            <a href="/#beliefs" className={linkClass('/#beliefs')}>
              Beliefs
            </a>
            <a href="/#books" className={linkClass('/#books')}>
              Books
            </a>
            <a href="/#connect" className={linkClass('/#connect')}>
              Connect
            </a>
          </div>
          
          {/* Mobile menu button - you can enhance this later */}
          <div className="md:hidden">
            <button className="text-slate-600 hover:text-amber-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 