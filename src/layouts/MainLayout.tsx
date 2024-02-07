import type { ReactNode } from "react";
import { Header, Sidebar } from "components";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className='flex flex-col h-full'>
      <Header />
      <main className='flex h-full overflow-hidden relative'>
        <Sidebar showSidebar={true}>
          <div>hello</div>
        </Sidebar>

        <div className='flex-1 pt-2 pb-10 px-5 lg:px-12 overflow-auto flex flex-col h-full min-h-full mx-auto scrollbar-hide bg-[#F6F7F9]'>
          {children}
        </div>
      </main>
      <footer className='px-10 py-5 flex items-center justify-between bg-primary'>
        <span className='text-white text-base'>
          © 2022 SoftSuite. All rights reserved.
        </span>
        <a href='mailto:support@softsuite.com' className='text-white text-base'>
          support@softsuite.com
        </a>
      </footer>
    </section>
  );
};

export default MainLayout;
