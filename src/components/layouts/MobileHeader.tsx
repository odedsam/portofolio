'use client';
import { ArrowLeft, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SideBar } from '../ui/SideBar';
import { useState } from 'react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { NavLinksMob } from '../navigation/NavLinks';

export default function MobileHeader() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between px-4 py-6 fixed w-full bg-white dark:bg-accent top-0 z-40 shadow-lg lg:hidden">
        <Button variant="ghost" className="cursor-pointer transition-colors" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <Menu className="w-8 h-8 md:w-10 md:h-10 cursor-pointer" style={{ width: '24px', height: '24px' }} />
        </Button>
        <ThemeToggle className="size-6" />
      </header>

      <SideBar isOpen={isSidebarOpen} >
        <div className="flex flex-col gap-4 justify-between mt-18">
          <NavLinksMob onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
        </div>
        <div className="absolute bottom-20 right-10">
            <ArrowLeft onClick={() => setIsSidebarOpen(false)} className="cursor-pointer" />
          </div>
      </SideBar>
    </>
  );
}
