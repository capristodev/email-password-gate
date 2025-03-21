
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { Eye, EyeOff, ArrowRight } from 'lucide-react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error('Por favor, preencha todos os campos');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success('Login realizado com sucesso');
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <div className="w-full">
      <div className="space-y-1.5 mb-6">
        <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm text-gray-600">
          Bem-vindo
        </div>
        <h1 className="text-3xl font-bold tracking-tight">
          Faça login na sua conta
        </h1>
        <p className="text-gray-500">
          Entre com suas credenciais para acessar o sistema
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <label htmlFor="email" className="block text-gray-700 font-medium">
            E-mail
          </label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu@email.com"
            className="h-12 px-4 bg-gray-50 border border-gray-200"
            required
            autoComplete="email"
            autoFocus
            disabled={isLoading}
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="password" className="block text-gray-700 font-medium">
            Senha
          </label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="h-12 px-4 bg-gray-50 border border-gray-200 pr-10"
              required
              disabled={isLoading}
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
              onClick={() => setShowPassword(!showPassword)}
              tabIndex={-1}
            >
              {showPassword ? (
                <EyeOff size={18} className="text-gray-400" />
              ) : (
                <Eye size={18} className="text-gray-400" />
              )}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-end">
          <button type="button" className="text-sm text-gray-500 hover:text-gray-700">
            Esqueceu a senha?
          </button>
        </div>

        <Button 
          type="submit" 
          className="w-full h-12 bg-black text-white hover:bg-black/90 flex items-center justify-center gap-2"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="animate-pulse-soft">Entrando...</div>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2">
              Entrar <ArrowRight size={16} className="ml-1" />
            </div>
          )}
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
