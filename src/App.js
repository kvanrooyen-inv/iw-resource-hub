// App.js
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import ThemeToggle from "./components/ThemeToggle";
import Dashboard from "./components/Dashboard";
import { getTools, getCategories } from "./lib/sanity";

function App() {
  const [tools, setTools] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [toolData, categoryData] = await Promise.all([
          getTools(),
          getCategories(),
        ]);
        setTools(toolData);
        setCategories(categoryData);
      } catch (error) {
        console.error("Failed to load data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-zinc-950 text-slate-800 dark:text-zinc-200">
      <ThemeToggle />
      <Header />
      <Dashboard categories={categories} tools={tools} />
    </div>
  );
}

export default App;
