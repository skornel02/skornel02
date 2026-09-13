'use client';

import React from 'react';
import { Icon as IconifyIcon } from '@iconify/react';

interface IconProps {
  name: string;
  className?: string;
  color?: string;
  height?: string | number;
  width?: string | number;
}

export function Icon({ name, className, color, height, width }: IconProps) {
  return (
    <IconifyIcon
      icon={name}
      className={className}
      color={color}
      height={height}
      width={width}
      style={{ display: 'inline-block' }}
    />
  );
}

export default Icon;
