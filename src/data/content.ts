// ============================================
// 📝 文章数据 - 在这里修改你的文章内容
// ============================================
export interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  // 👇 下面是文章详情内容，修改这里即可
  content: string;  // 文章正文（支持换行）
  author: string;
}

export const articles: Article[] = [
  {
    id: 'llm-practical-guide',
    title: 'Getting Started with Large Language Models: A Practical Guide',
    excerpt: 'An accessible introduction to LLMs, covering the fundamentals and practical applications for beginners in AI.',
    date: 'March 2026',
    readTime: '8 min read',
    tags: ['AI', 'LLM', 'Tutorial'],
    author: 'Terrau',
    content: `
# Getting Started with Large Language Models

Large Language Models (LLMs) represent one of the most significant breakthroughs in artificial intelligence. If you're just getting started, here's what you need to know.

## What are LLMs?

At their core, LLMs are neural networks trained on vast amounts of text data. They learn patterns, relationships, and context from billions of sentences, enabling them to generate human-like text.

## Key Concepts

### 1. Tokens
LLMs process text by breaking it into tokens - these can be words, parts of words, or even individual characters. Understanding tokens is crucial for working with APIs.

### 2. Context Window
The context window defines how much text the model can "see" at once. Modern models can process thousands of tokens in a single prompt.

### 3. Temperature
Temperature controls randomness in output. Lower values make responses more predictable, while higher values add creativity.

## Getting Started

1. Choose your platform (OpenAI, Anthropic, local models)
2. Start with simple prompts
3. Experiment with different parameters
4. Learn from outputs and iterate

Remember: The best way to learn is by doing. Start small, experiment often, and don't be afraid to make mistakes.
    `
  },
  {
    id: 'ai-content-creation-future',
    title: 'The Future of AI Content Creation: Opportunities and Challenges',
    excerpt: 'Exploring how AI is reshaping content creation and what it means for creators in the digital age.',
    date: 'February 2026',
    readTime: '6 min read',
    tags: ['AI', 'Content', 'Future'],
    author: 'Terrau',
    content: `
# The Future of AI Content Creation

Artificial intelligence is fundamentally changing how content is created, distributed, and consumed. Let's explore what this means for creators.

## The Transformation

AI tools are democratizing content creation. What once required expensive equipment or specialized skills can now be accomplished by anyone with an idea and an internet connection.

## Opportunities

- **Speed**: Generate first drafts in minutes instead of hours
- **Scalability**: Produce more content without sacrificing quality
- **Personalization**: Tailor content to specific audiences at scale
- **Accessibility**: Lower barriers for non-native speakers

## Challenges

- **Authenticity**: Maintaining a unique voice amid AI-generated content
- **Quality Control**: Ensuring accuracy and relevance
- **Ethics**: Navigating disclosure and attribution
- **Competition**: Standing out in an ocean of content

## The Path Forward

The creators who will thrive are those who learn to work alongside AI, not against it. Use AI as a tool to amplify your creativity, not replace it.
    `
  },
  {
    id: 'personal-brand-ai-space',
    title: 'Building Your Personal Brand in the AI Space',
    excerpt: 'Practical strategies for establishing yourself as an AI expert and thought leader on social media.',
    date: 'January 2026',
    readTime: '10 min read',
    tags: ['Branding', 'Social Media', 'Career'],
    author: 'Terrau',
    content: `
# Building Your Personal Brand in the AI Space

In the rapidly evolving world of AI, establishing a strong personal brand can open doors to opportunities you never imagined.

## Why Personal Branding Matters

Your personal brand is your reputation, your expertise, and your network combined. In the AI space, where expertise is currency, it can accelerate your career significantly.

## Steps to Build Your Brand

### 1. Find Your Niche
Don't try to be everything to everyone. Focus on a specific aspect of AI where you can provide unique value.

### 2. Share Your Journey
People connect with stories. Share your learning process, failures, and successes.

### 3. Create Consistent Content
Whether it's blog posts, videos, or social media updates, consistency is key to building an audience.

### 4. Engage Authentically
Reply to comments, collaborate with others, and build genuine connections.

## Platforms to Consider

- **Twitter/X**: Best for real-time discussions and networking
- **LinkedIn**: Professional content and job opportunities
- **YouTube**: Long-form educational content
- **小红书**: Chinese audience and visual content

Start today. Your future self will thank you.
    `
  },
  {
    id: 'neural-networks-demystified',
    title: 'Neural Networks Demystified: From Theory to Practice',
    excerpt: 'Breaking down the complexity of neural networks into understandable concepts with hands-on examples.',
    date: 'December 2025',
    readTime: '12 min read',
    tags: ['AI', 'Deep Learning', 'Tutorial'],
    author: 'Terrau',
    content: `
# Neural Networks Demystified

Neural networks might sound intimidating, but at their heart, they're just mathematical functions that learn from data.

## The Basic Idea

Imagine you want to predict house prices based on size, location, and age. A neural network can learn the relationships between these inputs and output without you explicitly programming the rules.

## Key Components

### Neurons
Basic units that receive inputs, apply weights, and produce outputs through an activation function.

### Layers
- **Input Layer**: Receives your data
- **Hidden Layers**: Learn representations
- **Output Layer**: Produces predictions

### Weights and Biases
Parameters the network learns during training to minimize prediction errors.

## A Simple Example

Think of weights as the importance you assign to each feature. If location matters more than size, the network will learn to give location a higher weight.

## Getting Started with Code

\`\`\`python
import torch.nn as nn

# Simple neural network
model = nn.Sequential(
    nn.Linear(10, 64),
    nn.ReLU(),
    nn.Linear(64, 1)
)
\`\`\`

The best way to understand neural networks is to build them. Start simple, experiment, and learn from the results.
    `
  },
];

// ============================================
// 💼 项目数据 - 在这里修改你的项目内容
// ============================================
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  icon: string;
  status: string;
  color: string;
  // 👇 下面是项目详情内容
  overview: string;      // 项目概述
  features: string[];    // 主要功能
  challenges: string;    // 遇到的挑战
  solutions: string;     // 解决方案
  githubUrl?: string;    // GitHub 链接（可选）
  demoUrl?: string;      // 演示链接（可选）
}

export const projects: Project[] = [
  {
    id: 'ai-content-assistant',
    title: 'AI Content Assistant',
    description: 'A GPT-powered tool for generating and optimizing social media content',
    tags: ['Python', 'OpenAI', 'React'],
    icon: 'Zap',
    status: 'In Progress',
    color: 'from-amber-500 to-orange-600',
    overview: 'An intelligent content generation tool that helps creators produce engaging social media posts using the power of GPT models.',
    features: [
      'Automated content generation based on topic keywords',
      'Multiple tone options (professional, casual, humorous)',
      'Hashtag suggestions and optimization',
      'Content scheduling integration',
      'Performance analytics dashboard',
    ],
    challenges: 'Balancing creativity with consistency was challenging. Making AI-generated content feel authentic while maintaining brand voice required multiple iterations.',
    solutions: 'Implemented a hybrid approach where AI generates drafts and users can fine-tune. Added personality customization settings to maintain unique voices.',
    githubUrl: 'https://github.com/terrau/ai-content-assistant',
    demoUrl: 'https://demo.example.com',
  },
  {
    id: 'ml-learning-platform',
    title: 'ML Learning Platform',
    description: 'Interactive tutorials for understanding machine learning concepts',
    tags: ['Next.js', 'TensorFlow', 'TypeScript'],
    icon: 'Layers',
    status: 'Live',
    color: 'from-emerald-500 to-teal-600',
    overview: 'A web platform making machine learning concepts accessible through interactive exercises and visualizations.',
    features: [
      'Step-by-step ML tutorials with live code execution',
      'Visual representations of model architectures',
      'Interactive hyperparameter tuning',
      'Progress tracking and certificates',
      'Community discussion forums',
    ],
    challenges: "Creating educational content that's both accurate and accessible to beginners while maintaining depth for advanced users.",
    solutions: "Developed a progressive difficulty system that adapts to user skill levels. Used visual analogies to explain complex concepts.",
    githubUrl: 'https://github.com/terrau/ml-learning',
    demoUrl: 'https://ml-platform.example.com',
  },
  {
    id: 'data-visualization-dashboard',
    title: 'Data Visualization Dashboard',
    description: 'Real-time analytics dashboard for AI model performance metrics',
    tags: ['Python', 'Plotly', 'FastAPI'],
    icon: 'BarChart',
    status: 'Completed',
    color: 'from-blue-500 to-indigo-600',
    overview: 'A comprehensive dashboard for monitoring and analyzing AI model performance in real-time.',
    features: [
      'Real-time prediction monitoring',
      'Accuracy and loss curve visualization',
      'Dataset drift detection',
      'Custom alert thresholds',
      'Export reports in multiple formats',
    ],
    challenges: 'Handling high-frequency updates while maintaining smooth visualizations without browser performance issues.',
    solutions: 'Implemented WebSocket connections with intelligent throttling and used canvas-based rendering for large datasets.',
    githubUrl: 'https://github.com/terrau/dashboard',
  },
  {
    id: 'ai-newsletter',
    title: 'AI Newsletter',
    description: 'Weekly newsletter summarizing the latest developments in AI',
    tags: ['Writing', 'Research', 'Community'],
    icon: 'ExternalLink',
    status: 'Ongoing',
    color: 'from-violet-500 to-purple-600',
    overview: 'A curated weekly newsletter delivering the most important AI news and insights directly to subscribers.',
    features: [
      'Weekly curated AI news digest',
      'Technical deep-dives for advanced readers',
      'Practical tutorials and guides',
      'Community highlights and discussions',
      'Exclusive interviews with AI researchers',
    ],
    challenges: 'Staying current with the fast-paced AI field while maintaining high-quality, original analysis.',
    solutions: 'Built a content pipeline with RSS feeds, social monitoring, and AI-assisted research to streamline the curation process.',
    demoUrl: 'https://newsletter.example.com',
  },
];
