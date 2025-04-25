import React from "react";
import ToolCard from "./ToolCard";

function CategorySection({ title, tools }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-zinc-100">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
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

export default CategorySection;
