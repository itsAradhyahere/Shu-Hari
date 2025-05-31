import React, { useState } from 'react';

/**
 * @typedef {Object} CollapsibleTextProps
 * @property {string} text
 * @property {number} [maxLength]
 */

/**
 * @param {CollapsibleTextProps} props
 */
const CollapsibleText = ({ text, maxLength = 200 }) => {
  const [expanded, setExpanded] = useState(false);

  if (text.length <= maxLength) {
    return <p>{text}</p>;
  }

  return (
    <div>
      <p>
        {expanded ? text : text.slice(0, maxLength) + '...'}
        <button
          onClick={() => setExpanded(!expanded)}
          className="ml-2 text-green-600 font-semibold hover:underline"
          aria-label={expanded ? 'Show less' : 'Read more'}
        >
          {expanded ? 'Show less' : 'Read more'}
        </button>
      </p>
    </div>
  );
};

export default CollapsibleText;