import type { Meta, StoryObj } from '@storybook/react';
import { SearchBox } from './SearchBox';
import { useState } from 'react';

const meta = {
  title: 'Zentimail/SearchBox',
  component: SearchBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onSearch: { action: 'searched' },
    loading: { control: 'boolean' },
    placeholder: { control: 'text' },
    width: { control: 'number' },
  },
} satisfies Meta<typeof SearchBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    loading: false,
    placeholder: "input search text",
    width: 200,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    placeholder: "Searching...",
    width: 200,
  },
};

export const CustomWidth: Story = {
  args: {
    loading: false,
    placeholder: "Wide search box",
    width: 300,
  },
};

export const Interactive: Story = {
  render: (args) => {
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (value: string) => {
      setIsLoading(true);
      setSearchTerm(value);
      // Simulate an API call
      setTimeout(() => {
        setIsLoading(false);
        args.onSearch?.(value);
      }, 2000);
    };

    return (
      <div>
        <SearchBox 
          {...args} 
          onSearch={handleSearch} 
          loading={isLoading} 
          placeholder="Try searching..."
        />
        {searchTerm && !isLoading && (
          <p>Last search: {searchTerm}</p>
        )}
      </div>
    );
  },
};
