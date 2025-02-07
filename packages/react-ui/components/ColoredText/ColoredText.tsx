import React from 'react';

const googleColors = ['#4285F4', '#DB4437', '#F4B400', '#4285F4', '#0F9D58', '#DB4437'];

const ColoredText = ({ text }: { text: string }) => {
  if (!text) return null;

  // Use a regular expression to match all occurrences of [[...]]
  const matches = text.match(/(\[\[.*?]])/g);

  // If no matches, check for "GOOGLE" and render if found
  if (!matches) {
    return renderGoogleText(text);
  }

  // Initialize the index to track the position in the original text
  let currentIndex = 0;

  // Map through matches and render the text with spans
  const coloredText = matches.map((match, index) => {
    const startIndex = text.indexOf(match, currentIndex);
    const preMatch = text.slice(currentIndex, startIndex);
    currentIndex = startIndex + match.length;

    return (
      <React.Fragment key={index}>
        {renderGoogleText(preMatch)}
        <span>{match.slice(2, -2)}</span>
      </React.Fragment>
    );
  });

  // Add any remaining text after the last match
  coloredText.push(
    <React.Fragment key={matches.length}>{renderGoogleText(text.slice(currentIndex))}</React.Fragment>
  );

  return <>{coloredText}</>;
};

// Helper function to color the letters of "GOOGLE"
const renderGoogleText = (text: string) => {
  const googleIndex = text.toUpperCase().indexOf('GOOGLE');

  if (googleIndex !== -1) {
    const preText = text.slice(0, googleIndex);
    const postText = text.slice(googleIndex + 6); // After "GOOGLE"

    return (
      <>
        {preText}
        {'GOOGLE'.split('').map((letter, index) => (
          <span key={index} style={{ color: googleColors[index] }}>
            {letter}
          </span>
        ))}
        {postText}
      </>
    );
  }

  // If "GOOGLE" is not found, return the original text
  return <>{text}</>;
};

export default ColoredText;
