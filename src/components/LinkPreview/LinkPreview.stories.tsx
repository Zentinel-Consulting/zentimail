import type { Meta, StoryObj } from '@storybook/react';
import { LinkPreview } from './LinkPreview';
import { useState } from 'react';

const meta = {
  title: 'Zentimail/LinkPreview',
  component: LinkPreview,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof LinkPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};
