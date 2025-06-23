import * as React from 'react';

import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ className, type, label, id, ...props }, ref) => {
    return (
      <div className={cn('grid w-full items-center gap-1.5', className)}>
        <Label htmlFor={id} className="text-sm font-normal text-muted-foreground">
          {label}
        </Label>
        <Input
          type={type}
          id={id}
          ref={ref}
          className="h-auto bg-transparent shadow-none border-0 border-b border-input rounded-none px-0.5 py-1 text-sm text-card-foreground focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-primary transition-colors"
          {...props}
        />
      </div>
    );
  }
);

InputField.displayName = 'InputField';

export default InputField;
