import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import ThemeToggle from './components/ThemeToggle';
import ToolCard from './components/ToolCard';
import { getTools } from './lib/sanity';

function App() {
  const [tools, setTools] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadTools() {
      try {
        const toolData = await getTools();
        setTools(toolData);
      } catch (error) {
        console.error('Failed to load tools:', error);
      } finally {
        setIsLoading(false);
      }
    }

    loadTools();
  }, []);

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-zinc-950 text-slate-800 dark:text-zinc-200">
      <ThemeToggle />
      <Header />
      <div className="w-4/5 max-w-screen-xl mx-auto grid gap-5 sm:grid-cols-2 md:grid-cols-3 items-stretch">
        {tools.map((tool) => (
          <ToolCard
            key={tool._id}
            name={tool.name}
            description={tool.description}
            url={tool.url}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
