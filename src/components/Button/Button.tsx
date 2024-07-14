"use client";

import React from 'react';
import { useState, useEffect } from 'react'
import { Button as AntButton } from 'antd';
import { ConfigProvider } from 'antd';
import { ButtonProps as AntButtonProps } from 'antd/lib/button';
import token_theme from "@/themes/theme.json";

interface ButtonZentimailProps extends Omit<AntButtonProps, 'type'> {
  // Add any props you want to pass to the component
  type: 'icon-text' | 'icon' | 'primary' | 'dashed' | 'text' | 'link',
  icon?: React.ReactNode,
}

export const Button: React.FC<ButtonZentimailProps> = ({
  type='primary',
  icon,
  children,
  ...restProps
}) => {

  const style: React.CSSProperties = type === 'text' ? { border: 'none', background: 'none' } : {};
  const [buttonType, setButtonType] = useState('primary');

  useEffect(() => {
    if(type==='icon-text'){
      setButtonType('primary');
    }else if (type==='icon'){
      setButtonType('text');
    }else{
      setButtonType(type);
    }
  }, []);

  return(
    <ConfigProvider
      theme={token_theme}
    >
      <AntButton
        type={ buttonType }
        icon={ icon }
        style={ style }
        {...restProps}
      >
        { children }
      </AntButton>
    </ConfigProvider>
  );
}
