import React from 'react';
import MainAppLayout from '@/components/layout/MainAppLayout';
import LoginCard from '@/components/Login/LoginCard';

/**
 * The main entry page for the application, displaying the login form.
 * It utilizes the MainAppLayout to center the LoginCard component on the screen.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <LoginCard />
    </MainAppLayout>
  );
};

export default IndexPage;
