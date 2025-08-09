import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  BookOpen, 
  Calendar, 
  Mail, 
  Linkedin, 
  Twitter,
  Heart,
  Brain,
  Users,
  Target,
  Clock,
  Check
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Home: React.FC = () => {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [showBookingForm, setShowBookingForm] = useState(false);
  const { t } = useLanguage();

  const beliefs = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: t('home.beliefs.growthMindset.title'),
      description: t('home.beliefs.growthMindset.description')
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: t('home.beliefs.actionWithPrecision.title'),
      description: t('home.beliefs.actionWithPrecision.description')
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: t('home.beliefs.humility.title'),
      description: t('home.beliefs.humility.description')
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: t('home.beliefs.lifeIsAJourney.title'),
      description: t('home.beliefs.lifeIsAJourney.description')
    }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden border-4 border-white shadow-lg">
              <img 
                src="/profile.jpg" 
                alt="Jiabin Lu Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            {t('home.hero.title')}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">{t('home.hero.subtitle')}</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            {t('home.hero.description')}
          </p>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">{t('home.about.title')}</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p className="text-lg">
                  {t('home.about.description')}
                </p>
                <p>
                  {t('home.about.passion')}
                </p>
                <p>
                  {t('home.about.journey')}
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-6 rounded-xl">
                <h3 className="font-semibold text-slate-800 mb-2">{t('home.about.currentFocus')}</h3>
                <p className="text-slate-600">{t('home.about.currentFocusDesc')}</p>
              </div>
              <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-6 rounded-xl">
                <h3 className="font-semibold text-slate-800 mb-2">{t('home.about.experience')}</h3>
                <p className="text-slate-600">{t('home.about.experienceDesc')}</p>
              </div>
              <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-6 rounded-xl">
                <h3 className="font-semibold text-slate-800 mb-2">{t('home.about.passionTitle')}</h3>
                <p className="text-slate-600">{t('home.about.passionDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beliefs Section */}
      <section id="beliefs" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">{t('home.beliefs.title')}</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {t('home.beliefs.subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {beliefs.map((belief, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-lg text-amber-600 flex-shrink-0">
                    {belief.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-3">{belief.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{belief.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Connect Section */}
      <section id="connect" className="py-20 px-6 bg-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">{t('home.connect.title')}</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            {t('home.connect.description')}
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="bg-slate-700 p-8 rounded-xl">
              <Mail className="w-8 h-8 text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">{t('home.connect.getInTouch')}</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                {t('home.connect.contactDescription')}
              </p>
              <div className="flex justify-center space-x-4">
                <a href="mailto:jiabinlu325204@gmail.com" className="bg-amber-500 p-3 rounded-lg hover:bg-amber-400 transition-colors">
                  <Mail className="w-5 h-5 text-white" />
                </a>
                <a href="https://www.linkedin.com/in/jiabinlu/" className="bg-slate-600 p-3 rounded-lg hover:bg-slate-500 transition-colors">
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
                <a href="https://x.com/jiabinlu123" className="bg-slate-600 p-3 rounded-lg hover:bg-slate-500 transition-colors">
                  <Twitter className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-4">{t('home.footer.copyright')}</p>
          
        </div>
      </footer>
    </div>
  );
};

export default Home; 