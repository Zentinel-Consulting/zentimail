"use client";
import React, { useState, useEffect } from 'react';
import { ConfigProvider, Flex, Tag } from 'antd';
import token_theme from "@/themes/theme.json";

interface TagSelectProps {
  tagsData: string[];
  initialSelectedTags?: string[];
  onTagsChange?: (selectedTags: string[]) => void;
}

export const TagSelect: React.FC<TagSelectProps> = ({
  tagsData,
  initialSelectedTags = [],
  onTagsChange
}) => {
  const [selectedTags, setSelectedTags] = useState<string[]>(initialSelectedTags);

  useEffect(() => {
    if (onTagsChange) {
      onTagsChange(selectedTags);
    }
  }, [selectedTags, onTagsChange]);

  const handleChange = (tag: string, checked: boolean) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    setSelectedTags(nextSelectedTags);
  };

  const tagStyle = (checked: boolean) => ({
    border: checked ? 'none' : '1px solid #d9d9d9',
    backgroundColor: checked ? token_theme.token.colorPrimary : 'transparent',
    color: checked ? 'white' : token_theme.token.colorPrimary,
    borderRadius: '16px',
    padding: '4px 8px',
    cursor: 'pointer',
  });

  return (
    <ConfigProvider theme={token_theme}>
      <Flex gap={4} wrap align="center">
        {tagsData.map((tag) => {
          const isChecked = selectedTags.includes(tag);
          return (
            <Tag.CheckableTag
              key={tag}
              checked={isChecked}
              onChange={(checked) => handleChange(tag, checked)}
              style={tagStyle(isChecked)}
            >
              {tag}
            </Tag.CheckableTag>
          );
        })}
      </Flex>
    </ConfigProvider>
  );
}
