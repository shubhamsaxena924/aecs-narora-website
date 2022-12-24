import Image from 'next/image';
import React from 'react';
import store from 'redux/store';

export interface Props {}
const Footer: React.FunctionComponent<Props> = () => (
  <>
    {/* Footer */}
    <footer className='flex flex-col items-center justify-between w-full px-4 pb-4 mt-24 border-t md:px-10 border-slate-700/20 dark:border-slate-400/20'>
      <div className='flex items-center justify-between w-full'>
        <div className='flex flex-wrap items-center self-start justify-center'>
          {/* Logo */}
          <span className='flex-shrink-0 px-2 py-8 md:pl-4'>
            <div className='absolute bg-[url("/assets/img/aecs-logo.png")] flex items-center justify-center bg-cover blur-2xl opacity-75 h-[4rem] w-[4rem]' />
            <Image
              src='/assets/img/aecs-logo.png'
              alt=''
              height={64}
              width={64}
              className='absolute top-0 left-0'
              unoptimized
            />
          </span>
          {/* Heading */}
          <div className='hidden text-xs tracking-widest transition duration-500 md:block text-slate-900 dark:text-slate-100'>
            <div className='font-bold'>ATOMIC ENERGY CENTRAL SCHOOL</div>
            <div className='text-[0.6rem] text-center sm:text-right'>
              NARORA
            </div>
          </div>
        </div>
        <div className='py-6 text-right'>
          <div className='text-lg md:text-xl'>CONTACT US</div>
          <div className='text-xl font-bold md:text-2xl lg:text-3xl'>
            (+91) 05734-222090
          </div>
          <a
            href='mailto:aecsnarora@yahoo.co.in'
            target='_blank'
            referrerPolicy='no-referrer'
            rel='noreferrer'
            className='block text-blue-600 md:text-xl dark:text-yellow-400 hover:underline'
          >
            aecsnarora@yahoo.co.in
          </a>
          <div>Fax: (+91) 05734-222251</div>

          {/* <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2799.6114859389418!2d78.37360986770324!3d28.20548525170257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390b349a2fadd601%3A0xd930f65f76aee0e4!2sAECS%20School!5e0!3m2!1sen!2sin!4v1671636070830!5m2!1sen!2sin'
              width='400'
              height='300'
              style={{
                border: 0,
              }}
              loading='lazy'
              referrerpolicy='no-referrer-when-downgrade'
              title='AECS Narora Map'
            /> */}
          <div className='mt-2 text-sm'>
            Address:{' '}
            <a
              href='https://goo.gl/maps/Q7CvDCkPAhv9a7rM7'
              className='text-blue-600 dark:text-yellow-400 hover:underline'
              target='_blank'
              referrerPolicy='no-referrer'
              rel='noreferrer'
            >
              Atomic Energy Central School,
              <br />
              NAPS Township, Narora, <br />
              Uttar Pradesh 203389
            </a>
          </div>
        </div>
      </div>
      <div className='px-5 py-3 my-4 text-sm text-center rounded-md bg-slate-400/50 dark:bg-slate-700/40 backdrop-blur'>
        Copyright © 2023 AECS Narora. All rights reserved.
      </div>
      <div className='self-end text-xs font-bold text-center dark:font-normal'>
        Website designed by{' '}
        <a
          href='https://www.linkedin.com/in/shubhamsaxena924'
          className='text-blue-600 dark:text-yellow-400 hover:underline'
          target='_blank'
          referrerPolicy='no-referrer'
          rel='noreferrer'
        >
          Shubham Saxena
        </a>{' '}
        (Alumni)
      </div>
    </footer>
  </>
);

export default store.withRedux(React.memo(Footer));
