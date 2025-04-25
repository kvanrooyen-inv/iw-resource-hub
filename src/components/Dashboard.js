import React from "react";
import CategorySection from "./CategorySection";

function Dashboard({ categories, tools }) {
  // Group tools by category
  const toolsByCategory = categories
    .sort((a, b) => a.title.localeCompare(b.title))
    .map((category) => ({
      ...category,
      tools: tools
        .filter((tool) => tool.categoryId === category._id)
        .sort((a, b) => a.name.localeCompare(b.name)),
    }));

  // Add console log to debug
  console.log("Categories:", categories);
  console.log("Tools:", tools);
  console.log("Tools by category:", toolsByCategory);

  return (
    <div className="w-4/5 max-w-screen-xl mx-auto py-6">
      {toolsByCategory.map((category) => (
        <CategorySection
          key={category._id}
          title={category.title}
          tools={category.tools}
        />
      ))}
    </div>
  );
}

export default Dashboard;
