import React from 'react';
import { Button } from '@/components';
import { TagSelect } from '@/components';
import { HomeOutlined } from '@ant-design/icons';

const Home = () => (
  <div className="App">
    <Button type="icon"><HomeOutlined /></Button>
    <TagSelect />
  </div>
);

export default Home;
