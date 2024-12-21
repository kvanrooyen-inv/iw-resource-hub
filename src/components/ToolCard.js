import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './Card';

function ToolCard({ name, description, url }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="no-underline">
      <Card className="h-full hover:shadow-lg transform hover:-translate-y-1 transition duration-200">
        <CardHeader>
          <CardTitle>{name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">{description}</p>
        </CardContent>
      </Card>
    </a>
  );
}

export default ToolCard;
