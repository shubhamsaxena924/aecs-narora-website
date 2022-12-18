import useEscapeKeyDetector from 'hooks/useEscapeKeyDetector';
import useOutsideClickDetector from 'hooks/useOutsideClickDetector';
import useWindowSize from 'hooks/useWindowSize';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import store from 'redux/store';
import DarkModeToggle from './Toggle/DarkModeToggle';

export interface Props {}

export interface NavLinkItem {
  label: string;
  value: string;
  routePath: string;
  class?: string;
}

const NavBar: React.FunctionComponent<Props> = () => {
  const { isScreenMdPlus } = useWindowSize();

  // Required for theme
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const navbarRef = useRef<HTMLDivElement>(null);
  const [totalAvailableWidth, setTotalAvailableWidth] = useState<number>();

  const router = useRouter();
  const [selected, setSelected] = useState<string>(router.pathname);
  const [dropdown, setDropdown] = useState(false);

  const dropdownWrapOne = useEscapeKeyDetector<HTMLDivElement>(() =>
    setDropdown(false)
  );
  const dropdownWrapTwo = useOutsideClickDetector<HTMLDivElement>(() =>
    setDropdown(false)
  );
  const navLinks = [
    {
      url: '/',
      text: 'Home',
    },
    {
      url: '/about',
      text: 'About Us',
    },
    {
      url: '/admissions',
      text: 'Admissions',
    },
    {
      url: '/downloads',
      text: 'Downloads',
    },
    {
      url: '/gallery',
      text: 'Gallery',
    },
    {
      url: '/notices',
      text: 'Notices',
    },
    {
      url: '/tenders',
      text: 'Tenders',
    },
  ];

  useEffect(() => {
    setTotalAvailableWidth(navbarRef?.current?.offsetWidth);
    // Dependency of mounted is needed to rerender after the UI has been mounted to get width from it
  }, [mounted, navbarRef?.current?.offsetWidth]);

  const widthOfOneLink = 112;
  const numberOfLinksToShow =
    (totalAvailableWidth || widthOfOneLink) / widthOfOneLink - 2;
  const showButton: boolean = numberOfLinksToShow < navLinks.length;

  useEffect(() => {
    if (!showButton) {
      setDropdown(false);
    }
  }, [showButton]);

  const slicedLinks = useCallback(
    (start: number, end: number) =>
      navLinks.slice(start, end).map((link) => (
        <Link key={link.url} href={link.url}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            role='link'
            tabIndex={0}
            onClick={() => {
              setSelected(link.url);
              setDropdown(false);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && setSelected) {
                setSelected(link.url);
                setDropdown(false);
              }
            }}
            className={`w-[7rem] flex-shrink-0 cursor-pointer my-1 `}
          >
            <span
              className={`duration-500 bg-transparent font-bold dark:font-normal px-1 text-ellipsis inline-block text-xs tracking-widest transition-all text-slate-900 dark:text-slate-100 hover:text-opacity-80 dark:hover:text-opacity-80 uppercase border-b whitespace-nowrap  first-letter:text-base hover:border-slate-900 dark:hover:border-slate-100 hover:border-opacity-80  ${
                selected === link.url
                  ? 'text-opacity-100 border-transparent'
                  : 'text-opacity-100 border-transparent'
              }`}
            >
              {selected === link.url && '*'}
              {link.text}
              {selected === link.url && '*'}
            </span>
          </a>
        </Link>
      )),
    [selected, totalAvailableWidth]
  );

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* Header */}
      <header className='flex items-center justify-between w-full '>
        <div className='flex items-center'>
          {/* Logo */}
          <span className='flex-shrink-0 p-4 md:p-10'>
            <div className='absolute bg-[url("/assets/img/aecs-logo.png")] flex items-center justify-center bg-cover blur-2xl opacity-75 h-[3rem] w-[3rem] md:h-[6.25rem] md:w-[6.25rem] ' />
            <Image
              src='/assets/img/aecs-logo.png'
              alt=''
              height={isScreenMdPlus ? 100 : 48}
              width={isScreenMdPlus ? 100 : 48}
              className='absolute top-0 left-0'
              unoptimized
            />
          </span>
          {/* Heading */}
          <div className='py-1 pl-6 text-xs tracking-widest transition duration-500 border-l text-slate-900 border-slate-900 dark:text-slate-100 dark:border-slate-100 md:py-3 border-opacity-20 md:text-base'>
            <div className='font-bold'>
              ATOMIC ENERGY CENTRAL SCHOOL, NARORA
            </div>
            <div className='mt-2 font-bold'>
              परमाणु ऊर्जा केन्द्रीय विद्यालय, नरौरा
            </div>
          </div>
        </div>
        {/* Toggle Dark mode */}
        <div className='absolute top-8 right-10 sm:right-14 md:right-20'>
          <DarkModeToggle
            setEnabled={() => {
              setTheme(theme === 'dark' ? 'light' : 'dark');
            }}
            enabled={theme === 'dark'}
          />
        </div>
      </header>

      {/* Navbar */}
      <nav className='relative mx-5 my-2 bg-opacity-50 rounded-full shadow-lg dark:bg-opacity-50 md:mx-10 bg-slate-400 dark:bg-slate-700'>
        <div
          ref={navbarRef}
          className='relative flex items-center justify-around px-5 py-1 space-x-2 text-center rounded-full backdrop-blur'
        >
          {slicedLinks(0, numberOfLinksToShow)}
          {/* Dropdown Button */}
          {showButton && (
            <div className='w-[7rem] text-center'>
              <AiOutlineMenu
                className='mx-auto w-[7rem] text-center cursor-pointer'
                onClick={() => setDropdown(true)}
              />
            </div>
          )}
        </div>
        {/* Dropdown */}
        <div ref={dropdownWrapOne}>
          <div
            ref={dropdownWrapTwo}
            className={`absolute flex flex-col text-center p-2 space-y-2 bg-opacity-50 rounded-lg dark:bg-opacity-50 bg-slate-400 dark:bg-slate-700 backdrop-blur z-[100] transition-all duration-300 right-0 top-[125%] shadow-nft ${
              dropdown
                ? 'visible opacity-100 scale-100'
                : 'invisible scale-75 opacity-0'
            }`}
          >
            {slicedLinks(numberOfLinksToShow, navLinks.length)}
          </div>
        </div>
      </nav>
    </>
  );
};

export default store.withRedux(React.memo(NavBar));
