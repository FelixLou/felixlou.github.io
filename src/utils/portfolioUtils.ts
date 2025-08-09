export interface Product {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  status: 'launched' | 'in-development' | 'concept';
  technologies: string[];
  features: string[];
  problems: string[];
  solutions: string[];
  targetAudience: string;
  imageUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  launchDate?: string;
  metrics?: {
    users?: string;
    revenue?: string;
    growth?: string;
  };
}

export const products: Product[] = [
  {
    id: 'loveable-moments',
    title: 'Loveable Moments',
    tagline: 'Turn precious words into warm family comics',
    description: 'An AI-powered app that captures the adorable things kids say and transforms them into heartwarming comic strips that families can treasure forever.',
    category: 'Family',
    status: 'launched',
    technologies: ['React Native', 'Node.js', 'OpenAI GPT', 'DALL-E', 'Firebase', 'Stripe'],
    features: [
      'Voice-to-text capture of kids\' sayings',
      'AI-powered comic generation',
      'Family member character creation',
      'Shareable comic strips',
      'Memory timeline',
      'Print-ready formats'
    ],
    problems: [
      'Parents forget the cute things their kids say',
      'Traditional baby books are hard to maintain',
      'Precious family moments get lost in daily life',
      'Limited creative ways to preserve memories'
    ],
    solutions: [
      'Instant capture through voice or text input',
      'Automatic comic generation preserves context and emotion',
      'Beautiful visual format makes memories more engaging',
      'Easy sharing with extended family members'
    ],
    targetAudience: 'Parents with young children (ages 2-12) who want to preserve family memories in a creative, engaging way.',
    imageUrl: 'https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=600&h=400&fit=crop&crop=center',
    demoUrl: 'https://loveable-moments.demo.jiabinlu.com',
    launchDate: '2024-09-15',
    metrics: {
      users: '2.5K+ families',
      revenue: '$12K MRR',
      growth: '25% monthly'
    }
  },
  {
    id: 'tone-improver',
    title: 'Professional Tone Improver',
    tagline: 'AI-powered communication clarity for non-native speakers',
    description: 'A micro SaaS that helps non-native English speakers improve their professional communication tone to avoid misunderstandings in the workplace.',
    category: 'Productivity SaaS',
    status: 'launched',
    technologies: ['Next.js', 'OpenAI GPT-4', 'Tailwind CSS', 'Stripe', 'Supabase', 'Vercel'],
    features: [
      'Real-time tone analysis',
      'Professional rewriting suggestions',
      'Context-aware improvements',
      'Industry-specific templates',
      'Chrome extension',
      'Slack integration'
    ],
    problems: [
      'Non-native speakers struggle with professional tone',
      'Miscommunication leads to workplace friction',
      'Existing tools are too generic',
      'Fear of sounding unprofessional'
    ],
    solutions: [
      'AI analyzes tone and suggests improvements',
      'Context-aware rewriting for different situations',
      'Learn patterns through personalized feedback',
      'Builds confidence in professional communication'
    ],
    targetAudience: 'Non-native English speakers in professional environments, remote workers, international teams.',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop&crop=center',
    demoUrl: 'https://tone-improver.jiabinlu.com',
    githubUrl: 'https://github.com/jiabinlu/tone-improver',
    launchDate: '2024-06-20',
    metrics: {
      users: '8.3K+ professionals',
      revenue: '$28K MRR',
      growth: '40% monthly'
    }
  },
  {
    id: 'contentseed',
    title: 'ContentSeed',
    tagline: 'AI-powered content generation and optimization platform',
    description: 'A comprehensive platform that helps content creators and businesses generate, optimize, and distribute high-quality content using advanced AI technology.',
    category: 'Content & AI',
    status: 'launched',
    technologies: ['Next.js', 'OpenAI GPT-4', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Vercel'],
    features: [
      'AI-powered content generation',
      'SEO optimization tools',
      'Content scheduling and distribution',
      'Performance analytics and insights',
      'Multi-platform publishing',
      'Content workflow management',
      'Team collaboration tools',
      'Brand voice consistency'
    ],
    problems: [
      'Content creators struggle with consistent output',
      'Time-consuming content research and creation',
      'Difficulty maintaining brand voice across content',
      'Lack of data-driven content optimization',
      'Manual content distribution across platforms'
    ],
    solutions: [
      'AI generates high-quality content based on your brand voice',
      'Automated research and topic suggestion',
      'Consistent brand messaging across all content',
      'Real-time performance analytics and optimization',
      'One-click distribution to multiple platforms'
    ],
    targetAudience: 'Content creators, marketing teams, small businesses, agencies, and entrepreneurs looking to scale their content production.',
    imageUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center',
    demoUrl: 'https://contentseed.jiabinlu.com/',
    launchDate: '2024-11-15',
    metrics: {
      users: '5.2K+ creators',
      revenue: '$35K MRR',
      growth: '45% monthly'
    }
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

export function getProductsByStatus(status: Product['status']): Product[] {
  return products.filter(product => product.status === status);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category === category);
}

export function getAllCategories(): string[] {
  return [...new Set(products.map(product => product.category))];
}

export function formatMetric(value: string | undefined, type: 'users' | 'revenue' | 'growth'): string {
  if (!value) return 'N/A';
  
  switch (type) {
    case 'users':
      return value.includes('+') ? value : `${value}+`;
    case 'revenue':
      return value.startsWith('$') ? value : `$${value}`;
    case 'growth':
      return value.includes('%') ? value : `${value}%`;
    default:
      return value;
  }
}
