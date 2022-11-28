import React from 'react';

type LinkedinIconProps = {
  size: number;
}

export function LinkedinIcon({ size }: LinkedinIconProps) {
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
        strokeWidth="1.3"
        d="M12.451 7.5c1.17 0 2.292.405 3.12 1.127.827.72 1.292 1.7 1.292 2.72v4.486h-2.941v-4.487c0-.34-.155-.666-.431-.906a1.587 1.587 0 00-1.04-.376c-.39 0-.764.135-1.04.376-.276.24-.43.566-.43.906v4.487H8.038v-4.487c0-1.02.465-1.998 1.292-2.72.828-.72 1.95-1.126 3.12-1.126zM5.98 7.67H3.333v8.163H5.98V7.67zM4.657 5.833c.73 0 1.323-.56 1.323-1.25s-.592-1.25-1.323-1.25-1.324.56-1.324 1.25.593 1.25 1.324 1.25z"
      ></path>
    </svg>
  );
}
