import React from 'react';

type BehanceIconProps = {
  size: number;
}

export function BehanceIcon({ size }: BehanceIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 21 21"
      className='group'
    >
      <path
        className='transition-colors duration-300  stroke-gray-500 group-hover:stroke-gray-900 dark:group-hover:stroke-white'
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M1.75 10.5h6.125c1.488 0 2.625 1.137 2.625 2.625S9.363 15.75 7.875 15.75h-5.25c-.525 0-.875-.35-.875-.875v-8.75c0-.525.35-.875.875-.875H7c1.488 0 2.625 1.138 2.625 2.625C9.625 9.363 8.488 10.5 7 10.5H1.75z"
      ></path>
      <path
        className='transition-colors duration-300  stroke-gray-500 group-hover:stroke-gray-900 dark:group-hover:stroke-white'
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M12.25 12.25h7a3.51 3.51 0 00-3.5-3.5 3.51 3.51 0 00-3.5 3.5zm0 0a3.51 3.51 0 003.5 3.5h1.488M17.063 6.563h-2.625"
      ></path>
    </svg>
  );
}
