import React from 'react';
import { cn } from '@/lib/utils';

interface ForgotPasswordLinkProps {
  className?: string;
}

const ForgotPasswordLink: React.FC<ForgotPasswordLinkProps> = ({ className }) => {
  return (
    <a
      href="#"
      onClick={(e) => e.preventDefault()} // In a real app, this would navigate to a password reset page
      className={cn(
        'text-sm font-medium text-muted-foreground hover:text-primary transition-colors',
        className
      )}
    >
      Forgot Password
    </a>
  );
};

export default ForgotPasswordLink;
