import React from 'react';
import NavBar from 'shared-resources/components/NavBar';
import wrapper from '../redux/store';

interface AppComponentWrapperProps {
  children: any;
}

const AppComponentWrapper: React.FC<AppComponentWrapperProps> = ({
  children,
}) => (
  <div className='w-full px-2 py-1 sm:px-8 lg:px-8'>
    <NavBar />
    {children}
  </div>
);

export default wrapper.withRedux(AppComponentWrapper);
