export interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  description: string;
  rating: number; // 1-5 scale
  dateRead?: string;
  status: 'read' | 'reading' | 'want-to-read';
  amazonUrl?: string;
  goodreadsUrl?: string;
  coverUrl?: string;
  keyTakeaways: string[];
  personalNotes?: string;
  recommendedFor: string[];
  tags: string[];
}

export const books: Book[] = [
  // Software Engineering
  {
    id: 'clean-code',
    title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
    author: 'Robert C. Martin',
    category: 'Software Engineering',
    description: 'A comprehensive guide to writing clean, readable, and maintainable code that every developer should read.',
    rating: 5,
    dateRead: '2023-08-15',
    status: 'read',
    amazonUrl: 'https://amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882',
    coverUrl: '/books/clean-code.jpg',
    keyTakeaways: [
      'Meaningful names make code self-documenting',
      'Functions should do one thing and do it well',
      'Comments should explain why, not what',
      'Code should be readable by humans, not just computers'
    ],
    personalNotes: 'This book fundamentally changed how I approach writing code. The principles here are timeless.',
    recommendedFor: ['Junior Developers', 'Senior Engineers', 'Team Leads'],
    tags: ['code-quality', 'best-practices', 'software-craftsmanship']
  },
  {
    id: 'system-design-interview',
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    category: 'Software Engineering',
    description: 'Deep dive into the architecture of modern data systems and the principles behind reliable, scalable applications.',
    rating: 5,
    dateRead: '2023-11-20',
    status: 'read',
    amazonUrl: 'https://amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321',
    coverUrl: '/books/designing-data-intensive-applications.jpg',
    keyTakeaways: [
      'Understand the trade-offs between consistency, availability, and partition tolerance',
      'Choose the right data model for your use case',
      'Design for failure and plan for scale',
      'Batch and stream processing patterns'
    ],
    personalNotes: 'Essential for understanding how to build systems that scale. Heavy but worth every page.',
    recommendedFor: ['System Architects', 'Backend Engineers', 'Technical Leads'],
    tags: ['system-design', 'scalability', 'databases', 'distributed-systems']
  },
  {
    id: 'pragmatic-programmer',
    title: 'The Pragmatic Programmer',
    author: 'David Thomas, Andrew Hunt',
    category: 'Software Engineering',
    description: 'Practical advice for becoming a better programmer through mindset, tools, and techniques.',
    rating: 4,
    dateRead: '2023-06-10',
    status: 'read',
    amazonUrl: 'https://amazon.com/Pragmatic-Programmer-journey-mastery-Anniversary/dp/0135957052',
    coverUrl: '/books/pragmatic-programmer.jpg',
    keyTakeaways: [
      'DRY: Don\'t Repeat Yourself',
      'Fix broken windows immediately',
      'Be a catalyst for change',
      'Learn one new language every year'
    ],
    personalNotes: 'Great foundational principles that apply regardless of technology stack.',
    recommendedFor: ['All Developers', 'Career Switchers', 'Self-taught Programmers'],
    tags: ['career-development', 'best-practices', 'programming-philosophy']
  },

  // Management
  {
    id: 'managers-path',
    title: 'The Manager\'s Path',
    author: 'Camille Fournier',
    category: 'Management',
    description: 'A guide for tech leaders navigating the path from individual contributor to engineering management.',
    rating: 5,
    dateRead: '2024-01-15',
    status: 'read',
    amazonUrl: 'https://amazon.com/Managers-Path-Leaders-Navigating-Growth/dp/1491973897',
    coverUrl: '/books/managers-path.jpg',
    keyTakeaways: [
      'Management is a skill to be developed, not a promotion',
      'One-on-ones are crucial for team relationships',
      'Technical leadership and people management are different skills',
      'Create psychological safety for your team'
    ],
    personalNotes: 'Must-read for anyone considering or starting in engineering management.',
    recommendedFor: ['New Managers', 'Tech Leads', 'Senior Engineers'],
    tags: ['leadership', 'engineering-management', 'career-growth']
  },
  {
    id: 'high-output-management',
    title: 'High Output Management',
    author: 'Andrew S. Grove',
    category: 'Management',
    description: 'Intel\'s former CEO shares his insights on effective management and organizational productivity.',
    rating: 4,
    dateRead: '2024-03-22',
    status: 'read',
    amazonUrl: 'https://amazon.com/High-Output-Management-Andrew-Grove/dp/0679762884',
    coverUrl: '/books/high-output-management.jpg',
    keyTakeaways: [
      'A manager\'s output = output of their organization + output of neighboring organizations under their influence',
      'Meetings are the medium of managerial work',
      'Performance reviews should have no surprises',
      'Training is the highest leverage activity a manager can perform'
    ],
    personalNotes: 'Classic management principles that still apply today. Dense but practical.',
    recommendedFor: ['Managers', 'Directors', 'VPs'],
    tags: ['management-fundamentals', 'productivity', 'organizational-behavior']
  },

  // Life & Philosophy
  {
    id: 'atomic-habits',
    title: 'Atomic Habits',
    author: 'James Clear',
    category: 'Life & Philosophy',
    description: 'Practical strategies for building good habits and breaking bad ones through small, incremental changes.',
    rating: 5,
    dateRead: '2023-12-05',
    status: 'read',
    amazonUrl: 'https://amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299',
    coverUrl: '/books/atomic-habits.jpg',
    keyTakeaways: [
      'You don\'t rise to the level of your goals; you fall to the level of your systems',
      'Make it obvious, attractive, easy, and satisfying',
      'Focus on who you want to become, not what you want to achieve',
      '1% better every day compounds over time'
    ],
    personalNotes: 'Transformed how I think about personal development and building sustainable practices.',
    recommendedFor: ['Anyone seeking personal improvement', 'Goal-oriented individuals'],
    tags: ['habits', 'productivity', 'self-improvement', 'psychology']
  },
  {
    id: 'mans-search-for-meaning',
    title: 'Man\'s Search for Meaning',
    author: 'Viktor E. Frankl',
    category: 'Life & Philosophy',
    description: 'A profound exploration of finding purpose and meaning in life, based on the author\'s experiences in Nazi concentration camps.',
    rating: 5,
    dateRead: '2023-09-30',
    status: 'read',
    amazonUrl: 'https://amazon.com/Mans-Search-Meaning-Viktor-Frankl/dp/0807014273',
    coverUrl: '/books/mans-search-for-meaning.jpg',
    keyTakeaways: [
      'Everything can be taken from you but your freedom to choose your response',
      'Those who have a \'why\' to live can bear almost any \'how\'',
      'Meaning comes from responsibility, not happiness',
      'Suffering is optional when you can find meaning in it'
    ],
    personalNotes: 'Life-changing perspective on resilience and finding purpose in difficult circumstances.',
    recommendedFor: ['Anyone facing challenges', 'People seeking deeper purpose'],
    tags: ['philosophy', 'psychology', 'resilience', 'meaning']
  },

  // Investment & Finance
  {
    id: 'intelligent-investor',
    title: 'The Intelligent Investor',
    author: 'Benjamin Graham',
    category: 'Investment & Finance',
    description: 'The definitive book on value investing and long-term wealth building strategies.',
    rating: 4,
    dateRead: '2024-02-14',
    status: 'read',
    amazonUrl: 'https://amazon.com/Intelligent-Investor-Definitive-Investing-Essentials/dp/0060555661',
    coverUrl: '/books/intelligent-investor.jpg',
    keyTakeaways: [
      'Invest in businesses, not stock prices',
      'Market volatility is your friend when you\'re a buyer',
      'Have a margin of safety in all investments',
      'Dollar-cost averaging reduces timing risk'
    ],
    personalNotes: 'Foundation of value investing. Some concepts are dated but principles are timeless.',
    recommendedFor: ['Beginning Investors', 'Long-term Wealth Builders'],
    tags: ['value-investing', 'financial-planning', 'wealth-building']
  },
  {
    id: 'psychology-of-money',
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    category: 'Investment & Finance',
    description: 'How psychology and behavior drive financial decisions more than pure logic and math.',
    rating: 5,
    dateRead: '2024-04-08',
    status: 'read',
    amazonUrl: 'https://amazon.com/Psychology-Money-Timeless-lessons-happiness/dp/0857197681',
    coverUrl: '/books/psychology-of-money.jpg',
    keyTakeaways: [
      'Wealth is what you don\'t see - the income not spent',
      'Time and compound interest are the most powerful forces',
      'Your personal experiences shape your financial views',
      'Enough is realizing that the opposite of poverty is not wealth, it\'s enough'
    ],
    personalNotes: 'Excellent blend of psychology and practical financial wisdom. Easy to read.',
    recommendedFor: ['Everyone', 'Young Professionals', 'Anyone with money decisions'],
    tags: ['behavioral-finance', 'wealth-building', 'psychology', 'personal-finance']
  },

  // Currently Reading
  {
    id: 'staff-engineer',
    title: 'Staff Engineer: Leadership beyond the management track',
    author: 'Will Larson',
    category: 'Software Engineering',
    description: 'A guide to the staff engineer role and how to operate effectively as a senior technical leader.',
    rating: 0,
    status: 'reading',
    amazonUrl: 'https://amazon.com/Staff-Engineer-Leadership-beyond-management/dp/1736417916',
    coverUrl: '/books/staff-engineer.jpg',
    keyTakeaways: [],
    personalNotes: 'Currently reading. Excellent insights so far on technical leadership.',
    recommendedFor: ['Senior Engineers', 'Technical Leads', 'Staff+ Engineers'],
    tags: ['technical-leadership', 'career-growth', 'staff-engineer']
  }
];

export function getBooksByCategory(category: string): Book[] {
  if (category === 'all') {
    return books;
  }
  return books.filter(book => book.category === category);
}

export function getBooksByStatus(status: Book['status']): Book[] {
  return books.filter(book => book.status === status);
}

export function getAllCategories(): string[] {
  return [...new Set(books.map(book => book.category))];
}

export function getBook(id: string): Book | undefined {
  return books.find(book => book.id === id);
}

export function getBooksByRating(minRating: number): Book[] {
  return books.filter(book => book.rating >= minRating && book.rating > 0);
}

export function formatRating(rating: number): string {
  if (rating === 0) return 'Not rated';
  return '★'.repeat(rating) + '☆'.repeat(5 - rating);
}

export function getRecommendedBooks(limit: number = 6): Book[] {
  return books
    .filter(book => book.rating >= 4 && book.status === 'read')
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
}
