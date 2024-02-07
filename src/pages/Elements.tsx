import { Icon } from "@iconify/react";
import { Button } from "components";

const ElementsPage = () => {
  return (
    <div className='grid gap-3'>
      <div className='flex items-center gap-2'>
        <span className='font-bold text-base text-primary/40'>
          Payroll Management
        </span>
        <Icon icon='ph:caret-right' className='text-primary/80' />
        <span className='font-bold text-base text-primary/40'>
          Element Setup
        </span>
        <Icon icon='ph:caret-right' className='text-primary/80' />
        <span className='font-bold text-base text-primary'>Elements</span>
      </div>
      <div className='bg-white rounded-md'>
        <div className='grid gap-6 p-6'>
          <h1 className='font-bold text-lg text-primary'>Elements</h1>
          <div className='bg-[#F4F6F8] p-4 flex items-center justify-between'>
            <div className='flex items-center gap-4'>
              <Button theme='primary' variant='filled' size='40'>
                <Icon icon='lets-icons:filter-big' className='stroke-2' />
              </Button>
            </div>
            <Button theme='secondary' variant='filled'>
              Create Element
              <Icon icon='ph:plus-bold' className='' />
            </Button>
          </div>
        </div>
        <div className='grid content-center justify-items-center py-32'>
          <div className='grid justify-items-center gap-6'>
            <img
              src='/empty-state.png'
              alt='empty_state'
              className='w-40 h-40'
            />
            <div className='flex items-center gap-4'>
              <Icon icon='fluent:warning-20-regular' className='text-error' />
              <span className='text-primary font-semibold text-base'>
                There are no elements to display
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElementsPage;
