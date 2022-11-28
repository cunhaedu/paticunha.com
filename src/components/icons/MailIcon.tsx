import React from 'react';

type MailIconProps = {
  size: number;
}

export function MailIcon({ size }: MailIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 20 20"
      className='group'
    >
      <path
        className='transition-colors duration-300 stroke-gray-500 group-hover:stroke-gray-900 dark:group-hover:stroke-white'
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.3"
        d="M14.167 17.083H5.833c-2.5 0-4.166-1.25-4.166-4.166V7.083c0-2.916 1.666-4.166 4.166-4.166h8.334c2.5 0 4.166 1.25 4.166 4.166v5.834c0 2.916-1.666 4.166-4.166 4.166z"
      ></path>
      <path
        className='transition-colors duration-300 stroke-gray-500 group-hover:stroke-gray-900 dark:group-hover:stroke-white'
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.3"
        d="M14.167 7.5l-2.609 2.083c-.858.684-2.266.684-3.125 0L5.833 7.5"
      ></path>
    </svg>
  );
}
