import type { Meta, StoryObj } from '@storybook/react';
import { ButtonZentimail } from './ButtonZentimail';

const meta = {
  title: 'Zentimail/ButtonZentimail',
  component: ButtonZentimail,  // Note: Changed from 'components' to 'component'
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],  // Note: Changed from 'autodogs' to 'autodocs'
} satisfies Meta<typeof ButtonZentimail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    // Add any props you want to pass to the component
  },
};
