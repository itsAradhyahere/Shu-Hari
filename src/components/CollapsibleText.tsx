import { useState } from 'react';

type CollapsibleTextProps = {
  text: string;
  maxLength?: number;
};

const CollapsibleText = ({ text, maxLength = 200 }: CollapsibleTextProps) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const isLong = text.length > maxLength;
  const displayText = expanded || !isLong ? text : text.substring(0, maxLength) + '...';

  return (
    <div className="text-gray-800 text-lg leading-relaxed">
      <p>{displayText}</p>
      {isLong && (
        <button
          onClick={toggleExpanded}
          className="mt-2 text-green-600 hover:text-green-800 underline transition duration-300"
        >
          {expanded ? 'Show Less' : 'Read More'}
        </button>
      )}
    </div>
  );
};

export default CollapsibleText;
