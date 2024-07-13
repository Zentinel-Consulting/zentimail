import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Zentimail/Button',
  component: Button, 
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],  // Note: Changed from 'autodogs' to 'autodocs'
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    // Add any props you want to pass to the component
  },
};
