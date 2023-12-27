// components/CodeforcesLink.js
import React from 'react';
import { Icon } from '@iconify/react';

const CodechefLink = ({ handle }) => {
  return (
    <a
      href={`https://www.codechef.com/users//${handle}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 text-white ml-3"
    >
        <Icon icon="simple-icons:codechef" color="red" className='h-6 w-6' />
      
      <span>{handle}</span>
    </a>
  );
};

export default CodechefLink;
