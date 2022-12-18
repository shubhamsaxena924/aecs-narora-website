import Link from 'next/link';
import React from 'react';
import { JsonListDataType } from 'types/ListingJsonData.type';
import BrandCardWithShadow from '../BrandCardWithShadow';

interface ListingByJsonFileProps {
  jsonObject: JsonListDataType;
}

const ListingByJsonFile: React.FC<ListingByJsonFileProps> = (props) => {
  const { jsonObject } = props;
  return (
    <div className='flex flex-col mt-6 space-y-8'>
      {Object.keys(jsonObject).map((key) => {
        const categoryTitle = key.split('-').join(' ');
        return (
          <div key={key}>
            <span className='text-lg capitalize md:text-2xl'>
              {categoryTitle}
            </span>
            <div className='grid gap-5 mt-5 md:grid-cols-2 xl:grid-cols-3'>
              {jsonObject[key].map((item) => (
                <BrandCardWithShadow
                  className='!flex-row !justify-start bg-opacity-50 rounded-lg text-slate-900 dark:text-slate-100 dark:bg-opacity-50 shadow-nft bg-slate-400 dark:bg-slate-700 backdrop-blur !py-3 !px-4'
                  key={`${key}_${item.title}`}
                >
                  <div className='flex justify-between w-full'>
                    <span className='flex-grow-0 pr-5 overflow-hidden text-ellipsis whitespace-nowrap'>
                      {item.title}
                    </span>
                    <Link href={item.target} passHref>
                      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                      <a
                        role='link'
                        target='_blank'
                        tabIndex={0}
                        className='text-blue-600 dark:text-yellow-400 hover:underline'
                      >
                        View
                      </a>
                    </Link>
                  </div>
                </BrandCardWithShadow>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(ListingByJsonFile);
