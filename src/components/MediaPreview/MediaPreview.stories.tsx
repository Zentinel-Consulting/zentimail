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
    fileName: { control: 'text' },
    cardWidth: { control: 'number' },
  },
} satisfies Meta<typeof MediaPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ImagePreview: Story = {
  args: {
    src: "https://static.euronews.com/articles/stories/08/57/48/90/1200x675_cmsv2_7585d7f8-a3d3-5f22-9a63-721911271959-8574890.jpg",
    fileName: "euronews-image.jpg",
    cardWidth: 300,
  },
};

export const PDFPreview: Story = {
  args: {
    src: "path/to/your/pdf/file.pdf",
    fileName: "document.pdf",
    cardWidth: 300,
  },
};

export const ExcelPreview: Story = {
  args: {
    src: "path/to/your/excel/file.xlsx",
    fileName: "spreadsheet.xlsx",
    cardWidth: 300,
  },
};

export const VideoPreview: Story = {
  args: {
    src: "path/to/your/video/file.mp4",
    fileName: "video.mp4",
    cardWidth: 300,
  },
};
