import { Button } from "components";
import { Icon } from "@iconify/react";

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
      <Button theme='primary'>Hi</Button>
    </div>
  );
};

export default ElementsPage;
