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

const onDownload = (imgUrl: string, imageName: string) => {
  fetch(imgUrl)
    .then((response) => response.blob())
    .then((blob) => {
      const url = URL.createObjectURL(new Blob([blob]));
      const link = document.createElement<'a'>('a');
      link.href = url;
      link.download = imageName;
      document.body.appendChild(link);
      link.click();
      URL.revokeObjectURL(url);
      link.remove();
    });
};

interface MediaPreviewProps {
  src: string;
  imageName: string;
  cardWidth?: number;
}

const { Meta } = Card;

export const MediaPreview: React.FC<MediaPreviewProps> = ({
  src,
  imageName,
  cardWidth = 300,
}) => {
  return(
    <ConfigProvider
      theme={token_theme}
    >
      <Card
        style={{width: cardWidth}}
        bodyStyle={{ 
          height: 0, 
          padding: 0
        }}
        cover={
              <Image
                width={"100%"}
                src={src}
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
                        <DownloadOutlined onClick={() => onDownload(url, imageName)} />
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
              >
              </Image>
        }
        actions={[
          <DeleteOutlined key="remove"/>,
          <DownloadOutlined key="download" onClick={() => onDownload(src, imageName)} />,
        ]}
      > 
      </Card>
    </ConfigProvider>
  );
}
