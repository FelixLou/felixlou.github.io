import React, { useState } from 'react';
import { 
  ChevronRight, 
  BookOpen, 
  Calendar, 
  Mail, 
  Linkedin, 
  Github, 
  Twitter,
  Heart,
  Brain,
  Users,
  Target,
  Clock,
  Check
} from 'lucide-react';

function App() {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [showBookingForm, setShowBookingForm] = useState(false);

  const beliefs = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Continuous Learning",
      description: "Technology evolves rapidly, but the fundamentals of good leadership and clear thinking remain constant. I believe in staying curious and adapting while holding onto core principles."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "People First",
      description: "The best technology serves humanity. I prioritize building teams and products that genuinely improve lives while fostering inclusive, collaborative environments."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Thoughtful Execution",
      description: "Moving fast is important, but moving thoughtfully is crucial. I believe in taking time to understand problems deeply before building solutions."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Authentic Leadership",
      description: "Vulnerability and authenticity create stronger connections than perfection ever could. I lead by example and admit when I don't know something."
    }
  ];

  const favoriteBooks = [
    {
      title: "The Manager's Path",
      author: "Camille Fournier",
      insight: "A practical guide that demystifies engineering leadership. Fournier's experience-based approach resonates with anyone navigating technical leadership roles.",
      image: "https://images.pexels.com/photos/1261180/pexels-photo-1261180.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop"
    },
    {
      title: "Thinking, Fast and Slow",
      author: "Daniel Kahneman",
      insight: "Understanding cognitive biases has transformed how I approach decision-making in both technical and people challenges. Essential for any leader.",
      image: "https://images.pexels.com/photos/1261180/pexels-photo-1261180.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop"
    },
    {
      title: "The Lean Startup",
      author: "Eric Ries",
      insight: "The build-measure-learn cycle applies beyond startups. This methodology has shaped how I approach product development and team processes.",
      image: "https://images.pexels.com/photos/1261180/pexels-photo-1261180.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop"
    },
    {
      title: "Staff Engineer",
      author: "Will Larson",
      insight: "Larson articulates the often-unclear path of senior technical leadership. His frameworks for influence without authority are invaluable.",
      image: "https://images.pexels.com/photos/1261180/pexels-photo-1261180.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop"
    }
  ];

  const timeSlots = [
    "9:00 AM - 10:00 AM",
    "2:00 PM - 3:00 PM", 
    "4:00 PM - 5:00 PM",
    "7:00 PM - 8:00 PM"
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would integrate with Stripe and calendar booking
    alert('Booking functionality would integrate with payment processing and calendar scheduling. Thank you for your interest!');
    setShowBookingForm(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
                          <div className="font-bold text-xl text-slate-800">Jiabin Lu</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 hover:text-amber-600 transition-colors">About</a>
              <a href="#beliefs" className="text-slate-600 hover:text-amber-600 transition-colors">Beliefs</a>
              <a href="#books" className="text-slate-600 hover:text-amber-600 transition-colors">Books</a>
              <a href="#connect" className="text-slate-600 hover:text-amber-600 transition-colors">Connect</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-bold text-white">
              AC
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            Thoughtful Tech Leadership for 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600"> Meaningful Impact</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            I'm Jiabin Lu, a tech leader passionate about building teams and products that matter. 
            Let's explore the intersection of technology, leadership, and human impact together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#about" 
              className="bg-slate-800 text-white px-8 py-4 rounded-lg hover:bg-slate-700 transition-all duration-300 flex items-center justify-center group"
            >
              Learn About My Journey
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button 
              onClick={() => setShowBookingForm(true)}
              className="border-2 border-amber-500 text-amber-600 px-8 py-4 rounded-lg hover:bg-amber-500 hover:text-white transition-all duration-300 flex items-center justify-center"
            >
              <Calendar className="mr-2 w-5 h-5" />
              Book 1:1 Chat ($10)
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">My Journey</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p className="text-lg">
                  I started my career as a software engineer, fascinated by the power of code to solve real problems. 
                  Over the past decade, I've evolved from writing algorithms to architecting teams and cultures.
                </p>
                <p>
                  As a tech leader at companies ranging from scrappy startups to established enterprises, 
                  I've learned that the most impactful technology decisions aren't just about choosing the right framework—
                  they're about understanding people, processes, and the bigger picture.
                </p>
                <p>
                  Today, I focus on helping engineering teams build thoughtfully, scale sustainably, 
                  and create products that genuinely improve lives. I believe the best leaders are those who 
                  can bridge the gap between technical excellence and human impact.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-6 rounded-xl">
                <h3 className="font-semibold text-slate-800 mb-2">Current Focus</h3>
                <p className="text-slate-600">Engineering Leadership & Product Strategy</p>
              </div>
              <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-6 rounded-xl">
                <h3 className="font-semibold text-slate-800 mb-2">Experience</h3>
                <p className="text-slate-600">10+ years in tech, 5+ years in leadership</p>
              </div>
              <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-6 rounded-xl">
                <h3 className="font-semibold text-slate-800 mb-2">Passion</h3>
                <p className="text-slate-600">Building inclusive, high-performing teams</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beliefs Section */}
      <section id="beliefs" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Core Beliefs</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              The principles that guide my approach to technology, leadership, and life
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

      {/* Favorite Books Section */}
      <section id="books" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Books That Shaped Me</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              These books have profoundly influenced my thinking about leadership, technology, and human behavior
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {favoriteBooks.map((book, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex space-x-6">
                  <div className="flex-shrink-0">
                    <img 
                      src={book.image} 
                      alt={book.title}
                      className="w-20 h-28 object-cover rounded-lg shadow-md"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-800 mb-1">{book.title}</h3>
                    <p className="text-amber-600 font-medium mb-3">by {book.author}</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{book.insight}</p>
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
          <h2 className="text-4xl font-bold text-white mb-6">Let's Connect</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            I love connecting with fellow tech leaders, aspiring entrepreneurs, and anyone passionate about building meaningful products.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-700 p-8 rounded-xl">
              <Calendar className="w-8 h-8 text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">1:1 Consultation</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Book a focused 1-hour conversation about leadership challenges, career growth, or product strategy.
              </p>
              <div className="flex items-center justify-center space-x-2 text-amber-400 mb-4">
                <span className="text-2xl font-bold">$10</span>
                <span>/hour</span>
              </div>
              <button 
                onClick={() => setShowBookingForm(true)}
                className="bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-400 transition-colors"
              >
                Schedule Now
              </button>
            </div>
            
            <div className="bg-slate-700 p-8 rounded-xl">
              <Mail className="w-8 h-8 text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">Get In Touch</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Have a question, want to collaborate, or just say hello? I'd love to hear from you.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="mailto:alex@example.com" className="bg-amber-500 p-3 rounded-lg hover:bg-amber-400 transition-colors">
                  <Mail className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="bg-slate-600 p-3 rounded-lg hover:bg-slate-500 transition-colors">
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="bg-slate-600 p-3 rounded-lg hover:bg-slate-500 transition-colors">
                  <Twitter className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="bg-slate-600 p-3 rounded-lg hover:bg-slate-500 transition-colors">
                  <Github className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {showBookingForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Book Your 1:1 Session</h3>
              <p className="text-slate-600">$10 for a focused 1-hour conversation</p>
            </div>
            
            <form onSubmit={handleBookingSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Preferred Time Slot
                </label>
                <select 
                  value={selectedTimeSlot} 
                  onChange={(e) => setSelectedTimeSlot(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  required
                >
                  <option value="">Select a time slot</option>
                  {timeSlots.map((slot, index) => (
                    <option key={index} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Your Name
                </label>
                <input 
                  type="text" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  required 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email
                </label>
                <input 
                  type="email" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  required 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  What would you like to discuss?
                </label>
                <textarea 
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Brief description of topics you'd like to cover..."
                  required
                />
              </div>
              
              <div className="flex space-x-4">
                <button 
                  type="submit" 
                  className="flex-1 bg-amber-500 text-white py-3 rounded-lg hover:bg-amber-400 transition-colors font-medium"
                >
                  Proceed to Payment
                </button>
                <button 
                  type="button" 
                  onClick={() => setShowBookingForm(false)}
                  className="flex-1 bg-slate-200 text-slate-700 py-3 rounded-lg hover:bg-slate-300 transition-colors font-medium"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-4">© 2025 Jiabin Lu. Building thoughtful technology, one conversation at a time.</p>
          <div className="flex justify-center space-x-6">
            <a href="mailto:alex@example.com" className="hover:text-amber-400 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;