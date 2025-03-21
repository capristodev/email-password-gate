
import React from 'react';
import LoginForm from '@/components/LoginForm';

const Index = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-gray-50 p-4">
      <div className="w-full max-w-md space-y-6">
        <LoginForm />
      </div>
    </div>
  );
};

export default Index;
