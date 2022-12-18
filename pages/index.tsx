import React from 'react';
import type { NextPage } from 'next';
import ImageSlideshow from 'shared-resources/components/ImageSlideshow';
import GenericSetHead from 'shared/GenericSetHead';
import images from '../public/assets/mocks/home/home_slideshow.json';

const Home: NextPage = () => (
  <>
    <GenericSetHead
      title='Home, AECS Narora'
      metadata={[
        {
          property: 'description',
          content:
            'This is the home page of Atomic Energy Central School, Narora Website',
        },
        {
          property: 'robots',
          content: 'index, follow',
        },
        {
          property: 'viewport',
          content: 'width=device-width, initial-scale=1.0',
        },
      ]}
    />
    <div className='px-10 py-14'>
      <div className='w-full lg:w-2/3'>
        <ImageSlideshow images={images} ambientMode grayscale animate />
      </div>
    </div>
  </>
);

export default Home;
