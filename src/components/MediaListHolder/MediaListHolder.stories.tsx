import type { Meta, StoryObj } from '@storybook/react';
import { MediaListHolder } from './MediaListHolder';

const meta = {
  title: 'Zentimail/MediaListHolder',
  component: MediaListHolder,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    images: { control: 'object' },
    cardWidth: { control: 'number' },
  },
} satisfies Meta<typeof MediaListHolder>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleImages = [
  { src: "https://static.euronews.com/articles/stories/08/57/48/90/1200x675_cmsv2_7585d7f8-a3d3-5f22-9a63-721911271959-8574890.jpg", name: "image1.jpg" },
  { src: "https://static.euronews.com/articles/stories/08/57/48/90/1200x675_cmsv2_7585d7f8-a3d3-5f22-9a63-721911271959-8574890.jpg", name: "image2.jpg" },
  { src: "https://static.euronews.com/articles/stories/08/57/48/90/1200x675_cmsv2_7585d7f8-a3d3-5f22-9a63-721911271959-8574890.jpg", name: "image3.jpg" },
  { src: "https://static.euronews.com/articles/stories/08/57/48/90/1200x675_cmsv2_7585d7f8-a3d3-5f22-9a63-721911271959-8574890.jpg", name: "image4.jpg" },
  { src: "https://static.euronews.com/articles/stories/08/57/48/90/1200x675_cmsv2_7585d7f8-a3d3-5f22-9a63-721911271959-8574890.jpg", name: "image5.jpg" },
  { src: "https://static.euronews.com/articles/stories/08/57/48/90/1200x675_cmsv2_7585d7f8-a3d3-5f22-9a63-721911271959-8574890.jpg", name: "image6.jpg" },
];

export const Default: Story = {
  args: {
    images: sampleImages,
    cardWidth: 250,
  },
};

export const ManyImages: Story = {
  args: {
    images: [...sampleImages, ...sampleImages, ...sampleImages], // 18 images
    cardWidth: 250,
  },
};

export const SmallerCards: Story = {
  args: {
    images: sampleImages,
    cardWidth: 200,
  },
};
