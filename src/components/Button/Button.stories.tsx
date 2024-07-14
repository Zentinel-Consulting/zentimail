import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { HomeOutlined } from '@ant-design/icons';

const meta = {
  title: 'Zentimail/Button',
  component: Button, 
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'], 
  argTypes: {
    children: {
      control: 'text',
    },
    icon: {
      options: ['HomeOutlined'],
      control: { type: 'select' },
      mapping: {
        HomeOutlined: <HomeOutlined />,
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    // Add any props you want to pass to the component
    children: 'Send',
  },
};
export const IconText: Story = {
  args: {
    type: 'icon-text',
    icon: 'HomeOutlined',
    children: 'Home',
  },
};
export const Icon: Story = {
  args: {
    type: 'Icon',
    icon: 'HomeOutlined',
  },
};
