import { useState } from 'react';

const useReadMore = (initialText: string, initialShowAll: boolean = false) => {
  const [isReadMore, setIsReadMore] = useState(!initialShowAll);
  const [text, setText] = useState(initialText);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return {
    text: isReadMore ? `${text.substring(0, 100)}...` : text, // Show only the first 100 characters initially
    isReadMore,
    toggleReadMore,
  };
};

export default useReadMore;
