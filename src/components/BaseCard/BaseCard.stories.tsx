import type { Meta, StoryObj } from '@storybook/react';
import { BaseCard } from './BaseCard';

const meta = {
  title: 'Zentimail/BaseCard',
  component: BaseCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    width: { control: 'text' },
    minHeight: { control: 'text' },
    maxHeight: { control: 'text' },
    children: { control: 'text' },
  },
} satisfies Meta<typeof BaseCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    width: '800px',
    minHeight: '400px',
    maxHeight: '600px',
    children: 'This is the content of the card',
  },
};

export const WithOverflow: Story = {
  parameters: {
    docs: {
      description: {
        story: 'If you click to the content, the card will expand.',
      },
    },
  },
  args: {
    width: '800px',
    minHeight: '400px',
    maxHeight: '600px',
    children: 'This is a card with a lot of content. '.repeat(100),
  },
};
