"use client";
import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import token_theme from "@/themes/theme.json";

const { Meta } = Card;

interface LinkPreviewProps {
}
export const LinkPreview: React.FC<LinkPreviewProps> = ({
}) => {
  return(
    <Card 
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/90/45/f3/a-noruega-fica-no-norte.jpg?w=900&h=900&s=1" />}
    >
       <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
  );
}
