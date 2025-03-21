
import React, { useEffect } from 'react';
import LoginForm from '@/components/LoginForm';
import { cn } from '@/lib/utils';

const Index = () => {
  useEffect(() => {
    // Trigger the animations on load
    document.body.classList.add('page-loaded');
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row">
      {/* Left side - Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-16">
        <div className="w-full max-w-md space-y-8 animate-fade-in">
          <div className="space-y-2 mb-8">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-muted-foreground animate-fade-up" style={{ animationDelay: '100ms' }}>
              Bem-vindo
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight animate-fade-up" style={{ animationDelay: '200ms' }}>
              Faça login na sua conta
            </h1>
            <p className="text-muted-foreground animate-fade-up" style={{ animationDelay: '300ms' }}>
              Entre com suas credenciais para acessar o sistema
            </p>
          </div>
          
          <LoginForm className="animate-fade-up" />
        </div>
      </div>

      {/* Right side - Background Image or Pattern */}
      <div 
        className={cn(
          "hidden md:block md:w-1/2 bg-secondary relative overflow-hidden",
          "after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-l after:from-transparent after:to-background/10"
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3')",
            backgroundPosition: "center",
            filter: "saturate(0.9)" 
          }}
        ></div>
        <div className="absolute inset-0 glass-morphism opacity-30"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-12">
          <div className="glass-morphism rounded-2xl p-8 max-w-md text-center space-y-4 shadow-xl">
            <div className="text-3xl font-bold tracking-tight text-white">Design Minimalista</div>
            <p className="text-white/80">
              "Simplicidade é a sofisticação suprema. O bom design é tão pouco design quanto possível."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
