'use client'

import clsx from "clsx";
import { ReactNode, useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import useMobileDetect from "@/hooks/useMobileDetect";

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
    <main className="flex w-full overflow-hidden">
      <Sidebar />
      <div className="flex  flex-col p-20 w-full pl-[26%]">
        {children}
      </div>
    </main>
  )
}

export default Layout