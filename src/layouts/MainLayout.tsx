import type { ReactNode } from "react";
import { Header } from "components"

const MainLayout = ({ children }: { children: ReactNode }) => {

  return (
    <section className="flex flex-col h-full">
      <Header />
      <main className="flex-1 h-full overflow-hidden relative">
        {/* <Header /> */}

        <div className="pt-28 pb-10 px-5 lg:px-10 overflow-auto flex flex-col h-full min-h-full mx-auto scrollbar-hide bg-des-background">
          {children}
        </div>
      </main>
    </section>
  );
};

export default MainLayout;