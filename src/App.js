import React from 'react';
import Header from './components/Header';
import ThemeToggle from './components/ThemeToggle';
import ToolCard from './components/ToolCard';

const tools = [
  {
    name: 'External Resource Checker',
    description: 'Verify libraries and resources used on web pages.',
    url: 'https://external-resource-checker.netlify.app/',
  },
  {
    name: 'Placeholder Replacer',
    description: 'Enter a URL to replace its image links with random placeholders.',
    url: 'https://mjwells-inv.github.io/imageswap/swap.html',
  },
  {
    name: 'Audio Placeholder Replacer',
    description: 'Enter a URL to replace its audio links.',
    url: 'https://mjwells-inv.github.io/imageswap/audioswap.html',
  },
  {
    name: 'Image Placeholder Guide',
    description: 'An interactive guide on how to deal with images placeholders.',
    url: 'https://sites.google.com/invisible.email/interactive-webpages/video-placeholders-guide',
  },
  {
    name: 'Video Placeholder Guide',
    description: 'An interactive guide on how to deal with video placeholders.',
    url: 'https://sites.google.com/invisible.email/interactive-webpages/video-placeholders-guide',
  },
];

function App() {
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-zinc-950 text-slate-800 dark:text-zinc-200">
      <ThemeToggle />
      <Header />
      <div className="w-4/5 max-w-screen-xl mx-auto grid gap-5 sm:grid-cols-2 md:grid-cols-3 items-stretch">
        {tools.map((tool, index) => (
          <ToolCard key={index} name={tool.name} description={tool.description} url={tool.url} />
        ))}
      </div>
    </div>
  );
}

export default App;
