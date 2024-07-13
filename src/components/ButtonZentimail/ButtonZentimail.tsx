import React from 'react';
import { Button } from "antd";

interface ButtonZentimailProps {
  // Add any props you want to pass to the component
  type: str,
  text?: str,
  icon?: any,
}

export const ButtonZentimail: React.FC<ButtonZentimailProps> = ({
  type = "filled",
  text,
  icon,
}: ButtonZentimail) => {
  return (
    <Button type="primary">Primary Button</Button>
  );
};
