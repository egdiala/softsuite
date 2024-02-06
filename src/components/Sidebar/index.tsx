import React, { useMemo } from "react";
import "./sidebar.css";

export interface SidebarProps {
  children?: React.ReactNode | null;
  showSidebar: boolean;
}

export interface MenuProps {
  children: React.ReactNode;
}

export type ManagementProps = MenuProps;
export type FooterProps = ManagementProps;

export const Sidebar: React.FC<SidebarProps> = ({
  children,
  showSidebar = false,
  ...props
}) => {
  const sidenavClass = useMemo(
    () =>
      showSidebar
        ? "lg:relative translate-x-0"
        : "fixed -translate-x-full lg:relative lg:translate-x-0",
    [showSidebar]
  );

  return (
    <nav className={["softSidebar", sidenavClass].join(" ")} {...props}>
      <div className='grid gap-6 content-between w-full h-full overflow-y-scroll'>
        <div className='grid gap-6'>
          <>{children}</>
        </div>
      </div>
    </nav>
  );
};
