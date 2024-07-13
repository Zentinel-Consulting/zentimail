"use client";

import React from 'react';
import { Button as AntButton } from 'antd';
import { ButtonProps as AntButtonProps } from 'antd/lib/button';

interface ButtonZentimailProps extends Omit<AntButtonProps, 'type'> {
  // Add any props you want to pass to the component
  type: 'filled' | 'oitlined' | 'text',
  text?: str,
  icon?: React.ReactNode,
}

export const Button: React.FC<ButtonZentimailProps> = ({
  type='filled',
  text,
  icon,
  children,
  ...restProps
}) => {

  const antType = type === 'filled' ? 'primary' : 'default';
  const style: React.CSSProperties = type === 'text' ? { border: 'none', background: 'none' } : {};

  return(
      <AntButton
        type={ antType }
        icon={ icon }
        style={ style }
        {...restProps}
      >
        { text || children }
      </AntButton>
  );
}
