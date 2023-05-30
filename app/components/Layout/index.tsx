'use client'
import useMobileDetect from "@/app/hooks/useMobileDetect";
import clsx from "clsx";
import { ReactNode, useEffect, useState } from "react";
import Sidebar from "../Sidebar";

export interface ILayoutProps {
  children: ReactNode;
  className?: string;
}
function Layout({ children, className }: ILayoutProps) {
  const isMobile = useMobileDetect();
  const [openSidebar, setOpenSidebar] = useState(false);

  useEffect(() => {
    if (isMobile) {
      setOpenSidebar(false);
    } else {
      setOpenSidebar(true);
    }
  }, [isMobile]);

  const handleopenSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <main className="bg-gray-soft flex">
    <Sidebar />
    <div
      className={clsx(
        openSidebar &&
          'bg-blue-dark-400 z-10 absolute opacity-50 h-screen w-full md:hidden duration-500',
      )}
    />
    <div
      className={clsx(
        'flex flex-1 flex-col mx-auto max-w-u1440 w-full bg-gray-soft',
        openSidebar && isMobile && 'absolute',
      )}
    >
      {/* <NavbarMobile
        onClick={handleopenSidebar}
        className={clsx(
          'mb-u30 p-6',
          !isMobile && 'hidden -mt-20',
          openSidebar && 'z-20 duration-500',
        )}
        opened={openSidebar}
      /> */}
      {/* <Header className="mb-7 flex-0 px-5 sm:pt-6 md:px-6" /> */}
      <div
        className={clsx(
          'flex flex-col flex-1 py-12 px-7 md:p-6 md:pt-0 animate-fade-in',
          className,
        )}
      >
        {children}
      </div>
    </div>
  </main>
  )
}

export default Layout