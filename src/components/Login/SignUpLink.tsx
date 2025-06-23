import React from 'react';
import { cn } from '@/lib/utils';

interface SignUpLinkProps {
  className?: string;
}

const SignUpLink: React.FC<SignUpLinkProps> = ({ className }) => {
  return (
    <p className={cn('text-center text-sm text-muted-foreground', className)}>
      Don't have an account?{' '}
      <a
        href="#"
        onClick={(e) => e.preventDefault()} // In a real app, this would navigate to a registration page
        className="font-semibold text-primary hover:underline"
      >
        SignUp
      </a>
    </p>
  );
};

export default SignUpLink;
