import React, { useState, useEffect } from 'react';

const TextSlider = ({ text }: { text: string }) => {
  if (!text) return null;

  // Regex to extract words/phrases inside [[]]
  const regex = /\[\[(.*?)\]\]/g;

  // Use Array.from to convert the iterator into an array to avoid the TypeScript issue
  const matches = Array.from(text.matchAll(regex)).map((match) => match[1]);

  if (matches.length === 0) return <>{text}</>; // If no matches, display the text as-is

  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  useEffect(() => {
    const interval = setTimeout(
      () => setCurrentItemIndex((currentItemIndex + 1) % matches.length),
      2000 // Update every 2 seconds
    );
    return () => clearTimeout(interval);
  }, [currentItemIndex, matches.length]);

  return <>{matches[currentItemIndex]}</>;
};

export default TextSlider;
