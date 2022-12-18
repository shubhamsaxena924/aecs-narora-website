import { NextPage } from 'next';
import React from 'react';
import ListingByJsonFile from 'shared-resources/components/ListingComponents/ListingByJsonFile';
import GenericSetHead from 'shared/GenericSetHead';
import downloadsData from '../../public/assets/mocks/downloads/downloads.json';

const AboutUsPage: NextPage = () => (
  <>
    <GenericSetHead
      title='About Us, AECS Narora'
      metadata={[
        {
          property: 'description',
          content:
            'This is the about us section of Atomic Energy Central School, Narora Website. See our mission, the authority, board of members etc.',
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
    <div className='p-4 md:px-10 md:py-14'>
      <div className='text-2xl text-center md:text-4xl'>About Us</div>
      <p className='mx-10 my-8 text-lg tracking-wider text-center'>
        AECS Narora strives to create a pupil-friendly ambience, so that the
        pupil can do the fullest justice to their native genius and innate
        potential. The first tentative steps by AECS Narora in cause of
        education-the first streaks of Dawn are briefly retraced.
      </p>
      <ListingByJsonFile jsonObject={downloadsData} />
    </div>
  </>
);

export default React.memo(AboutUsPage);
