import React, { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import InputField from './InputField';
import ForgotPasswordLink from './ForgotPasswordLink';
import SignUpLink from './SignUpLink';
import { cn } from '@/lib/utils';

const LoginCard: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would handle form submission here.
    console.log('Login attempt with:', { email, password });
  };

  return (
    <Card className={cn('w-96 bg-card text-card-foreground shadow-xl rounded-lg border-none p-2')}>
      <CardHeader className="pb-4">
        <CardTitle className="text-center text-3xl font-bold text-card-foreground">
          Welcome
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-6">
            <InputField
              id="email"
              label="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
            />
            <InputField
              id="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
            <ForgotPasswordLink />
          </div>
          <Button 
            type="submit" 
            className="w-full py-3 h-auto text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg"
          >
            Login
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center pt-6">
        <SignUpLink />
      </CardFooter>
    </Card>
  );
};

export default LoginCard;
