import type { Meta, StoryObj } from '@storybook/react';
import { EmailInput } from './EmailInput';
import { useState } from 'react';

const meta = {
  title: 'Zentimail/EmailInput',
  component: EmailInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof EmailInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
