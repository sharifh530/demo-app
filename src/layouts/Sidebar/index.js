import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { menuList } from '../../configs/coreConfigs';

const Sidebar = () => {
  return (
    <div className='w-64 h-full fixed left-0 top-0'>
      <div className='px-5 pt-12 shadow-md h-full flex flex-col items-start gap-3 mt-5'>
        <div className='w-full text-center mb-10'>
          <h1 className='text-4xl font-bold text-cyan-900'>New Shop</h1>
        </div>

        {menuList.map((item, index) => (
          <>
            <NavLink
              key={index}
              to={item?.path}
              exact={true}
              activeClassName='text-green-600'
              activeStyle={{ backgroundColor: '#0E7490', color: '#fff' }}
              className='flex justify-start items-center space-x-1 w-full text-sm py-1 rounded text-cyan-700 p-3'
            >
              <div className='w-1/4'>
                <Icon className='text-4xl' icon={item?.icon} />
              </div>
              <div className='w-3/4'>
                <h1 className='text-xl font-bold'>{item?.title}</h1>
              </div>
            </NavLink>
          </>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
