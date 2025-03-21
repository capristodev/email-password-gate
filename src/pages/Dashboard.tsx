
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 animate-fade-in">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-muted-foreground">
            Dashboard
          </div>
          <h1 className="text-3xl font-bold">Bem-vindo ao sistema</h1>
          <p className="text-muted-foreground">
            Você está logado com sucesso!
          </p>
        </div>
        
        <div className="glass-morphism rounded-lg p-8 shadow-sm">
          <p className="text-lg mb-4">
            Esta é sua área restrita. Aqui você pode gerenciar seu perfil e acessar recursos exclusivos.
          </p>
          <Button 
            onClick={() => navigate('/')}
            variant="outline"
            className="mt-4 flex items-center gap-2"
          >
            <ArrowLeft size={16} /> Voltar para o Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
