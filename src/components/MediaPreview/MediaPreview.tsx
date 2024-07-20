import React from 'react';
import {
  DownloadOutlined,
  RotateLeftOutlined,
  RotateRightOutlined,
  SwapOutlined,
  UndoOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
  DeleteOutlined, 
} from '@ant-design/icons';
import token_theme from "@/themes/theme.json";
import { Image, Space, ConfigProvider, Card } from 'antd';

const isImageFile = (fileName: string): boolean => {
  if (!fileName) return false;
  const imageExtensions = ['png', 'jpg', 'jpeg', 'gif', 'bmp', 'webp'];
  const extension = fileName.split('.').pop()?.toLowerCase();
  return extension ? imageExtensions.includes(extension) : false;
};

const getPlaceholderImage = (fileName: string): string => {
  if (!fileName) return '/assets/images/txt_img.png';
  const extension = fileName.split('.').pop()?.toLowerCase();
  switch (extension) {
    case 'pdf':
      return '/assets/images/pdf_img.png';
    case 'xlsx':
    case 'xls':
      return '/assets/images/xlcs_img.png';
    case 'mp4':
    case 'avi':
    case 'mov':
      return '/assets/images/mp4_img.png';
    // Add more cases for other file types
    default:
      return '/assets/images/txt_img.png';
  }
};

const onDownload = (fileUrl: string, fileName: string) => {
  fetch(fileUrl)
    .then((response) => response.blob())
    .then((blob) => {
      const url = URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      URL.revokeObjectURL(url);
      link.remove();
    });
};

interface MediaPreviewProps {
  src: string;
  fileName: string;
  cardWidth?: number;
}

const { Meta } = Card;

export const MediaPreview: React.FC<MediaPreviewProps> = ({
  src,
  fileName='',
  cardWidth = 300,
}) => {
  const isImage = isImageFile(fileName);
  const displaySrc = isImage ? src : getPlaceholderImage(fileName);

  return (
    <ConfigProvider theme={token_theme}>
      <Card
        style={{ width: cardWidth }}
        bodyStyle={{ 
          height: 0, 
          padding: 0
        }}
        cover={
          isImage ? (
            <Image
              width="100%"
              src={displaySrc}
              preview={{
                toolbarRender: (
                  _,
                  {
                    image: { url },
                    transform: { scale },
                    actions: { onFlipY, onFlipX, onRotateLeft, onRotateRight, onZoomOut, onZoomIn, onReset },
                  },
                ) => (
                  <Space size={12} className="toolbar-wrapper">
                    <DownloadOutlined onClick={() => onDownload(url, fileName)} />
                    <SwapOutlined rotate={90} onClick={onFlipY} />
                    <SwapOutlined onClick={onFlipX} />
                    <RotateLeftOutlined onClick={onRotateLeft} />
                    <RotateRightOutlined onClick={onRotateRight} />
                    <ZoomOutOutlined disabled={scale === 1} onClick={onZoomOut} />
                    <ZoomInOutlined disabled={scale === 50} onClick={onZoomIn} />
                    <UndoOutlined onClick={onReset} />
                  </Space>
                ),
              }}
            />
          ) : (
            <Image
              width="100%"
              src={displaySrc}
              preview={false}
            />
          )
        }
        actions={[
          <DeleteOutlined key="remove" />,
          <DownloadOutlined key="download" onClick={() => onDownload(src, fileName)} />,
        ]}
      />
    </ConfigProvider>
  );
};
