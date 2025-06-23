import React from 'react';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * A responsive main layout component that centers its content vertically and horizontally
 * within the full viewport. It serves as the primary container for page content.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <main
      className={cn(
        'flex h-screen w-full items-center justify-center bg-background',
        className
      )}
    >
      {children}
    </main>
  );
};

export default MainAppLayout;
