import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

const Navigation: React.FC = () => {
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
  
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
                                <div className="hidden md:flex items-center space-x-8">
                        <Link to="/blog" className={linkClass('/blog')}>
                          {t('nav.blog')}
                        </Link>
                        <Link to="/portfolio" className={linkClass('/portfolio')}>
                          {t('nav.portfolio')}
                        </Link>
                        <a href="/#about" className={linkClass('/#about')}>
                          {t('nav.about')}
                        </a>
                        <Link to="/books" className={linkClass('/books')}>
                          {t('nav.books')}
                        </Link>
                        <a href="/#connect" className={linkClass('/#connect')}>
                          {t('nav.connect')}
                        </a>
                        
                        {/* Language Switcher */}
                        <div className="relative group">
                          <button className="flex items-center space-x-1 text-slate-600 hover:text-amber-600 transition-colors">
                            <Globe className="w-4 h-4" />
                            <span className="text-sm">{language === 'en' ? 'EN' : '中文'}</span>
                          </button>
                          <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                            <button
                              onClick={() => setLanguage('en')}
                              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 rounded-t-lg ${
                                language === 'en' ? 'text-amber-600 font-medium' : 'text-slate-700'
                              }`}
                            >
                              {t('language.english')}
                            </button>
                            <button
                              onClick={() => setLanguage('zh')}
                              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 rounded-b-lg ${
                                language === 'zh' ? 'text-amber-600 font-medium' : 'text-slate-700'
                              }`}
                            >
                              {t('language.chinese')}
                            </button>
                          </div>
                        </div>
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