"use client";
import React from 'react';
import { ConfigProvider, Input } from 'antd';
import token_theme from "@/themes/theme.json";

interface SearchBoxProps {
  onSearch?: (value: string) => void;
  loading?: boolean;
}

export const SearchBox: React.FC<SearchBoxProps> = ({
  onSearch,
  loading = false,
}) => {
  const { Search } = Input;

  const customTheme = {
    ...token_theme,
    components: {
      ...token_theme.components,
      Input: {
        ...token_theme.components?.Input,
        colorIcon: '#FF6446',
        borderRadius: 20,
      },
    },
  };

  return(
    <ConfigProvider theme={customTheme}>
    <Search
      placeholder="input search text"
      allowClear
      onSearch={onSearch}
      style={{
        width: 200,
      }}
    />
    </ConfigProvider>
  );
}
