import React from 'react';
import { Button } from '@/components';
import { TagSelect } from '@/components';
import { HomeOutlined } from '@ant-design/icons';

const Home = () => (
  <div className="App">
    <Button type="icon"><HomeOutlined /></Button>
    <TagSelect tagsData={['Tag1', 'Tag2', 'Tag3']}/>
  </div>
);

export default Home;
