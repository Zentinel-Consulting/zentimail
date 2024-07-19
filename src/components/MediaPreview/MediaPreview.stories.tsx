import type { Meta, StoryObj } from '@storybook/react';
import { MediaPreview } from './MediaPreview';

const meta = {
  title: 'Zentimail/MediaPreview',
  component: MediaPreview,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text' },
    imageName: { control: 'text' },
  },
} satisfies Meta<typeof MediaPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    src: "https://static.euronews.com/articles/stories/08/57/48/90/1200x675_cmsv2_7585d7f8-a3d3-5f22-9a63-721911271959-8574890.jpg",
    imageName: "euronews-image.jpg",
  },
};
