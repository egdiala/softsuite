import React from "react";
import { Icon } from "@iconify/react";
import "./header.css";

export const Header: React.FC = () => {
  return (
    <div className='softHeader'>
      <img src='/logo.png' className='h-10 w-44' alt='logo' />
      <div className='w-full flex items-center justify-between'>
        <div />
        <div>
          <div className='flex items-center gap-10'>
            <div className='relative w-5 h-5'>
              <Icon icon='solar:bell-bold' className='text-primary w-5 h-5' />
              <span className='absolute bg-error w-1.5 h-1.5 border border-white rounded-full top-0.5 right-0.5' />
            </div>
            <div className='flex items-start gap-5'>
              <img
                src='https://avatars.githubusercontent.com/u/46764458?v=4'
                className='w-12 h-12 rounded-full'
                alt='user'
              />
              <div className='grid pr-8'>
                <h1 className='text-lg font-semibold text-primary'>
                  Egwuchukwu Diala
                </h1>
                <span className='text-base text-primary/40'>
                  Payroll Manager
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
