import type { Meta, StoryObj } from '@storybook/react';
import { TagSelect } from './TagSelect';
import { useState } from 'react';

const meta = {
  title: 'Zentimail/TagSelect',
  component: TagSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    tagsData: {
      control: 'array',
      description: 'Array of available tags',
    },
    initialSelectedTags: {
      control: 'array',
      description: 'Array of initially selected tags',
    },
    onTagsChange: { action: 'tags changed' }
  },
} satisfies Meta<typeof TagSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    tagsData: ['Movies', 'Books', 'Music', 'Sports', 'Beer', 'Time'],
    initialSelectedTags: ['Movies'],
  },
};

export const WithCustomTags: Story = {
  args: {
    tagsData: ['React', 'Angular', 'Vue', 'Svelte', 'Next.js'],
    initialSelectedTags: ['React', 'Next.js'],
  },
};

// Interactive example
export const Interactive: Story = {
  render: (args) => {
    const [selectedTags, setSelectedTags] = useState(args.initialSelectedTags || []);
    return (
      <div>
        <TagSelect
          {...args}
          initialSelectedTags={selectedTags}
          onTagsChange={setSelectedTags}
        />
        <div style={{ marginTop: '20px' }}>
          Selected Tags: {selectedTags.join(', ')}
        </div>
      </div>
    );
  },
  args: {
    tagsData: ['Red', 'Green', 'Blue', 'Yellow', 'Purple'],
    initialSelectedTags: ['Red'],
  },
};
