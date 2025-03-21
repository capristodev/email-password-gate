
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { ArrowRight, Eye, EyeOff } from 'lucide-react';

interface LoginFormProps {
  className?: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ className }) => {
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
    <div className={cn('w-full max-w-md', className)}>
      <form onSubmit={handleSubmit} className="space-y-6 animate-fade-up">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium">
            E-mail
          </Label>
          <div className="relative">
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              className="h-11 px-4 bg-secondary/50 border-0 input-focus-ring"
              required
              autoComplete="email"
              autoFocus
              disabled={isLoading}
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="password" className="text-sm font-medium">
            Senha
          </Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="h-11 px-4 bg-secondary/50 border-0 input-focus-ring pr-10"
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
                <EyeOff size={18} className="text-muted-foreground" />
              ) : (
                <Eye size={18} className="text-muted-foreground" />
              )}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-end">
          <button type="button" className="text-sm text-primary/80 hover:text-primary transition-colors">
            Esqueceu a senha?
          </button>
        </div>

        <Button 
          type="submit" 
          className="w-full h-11 bg-primary text-white hover:bg-primary/90 button-hover transition-all duration-300"
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

        <div className="relative my-6">
          <Separator className="absolute inset-0 my-auto" />
          <div className="relative flex justify-center">
            <span className="bg-background px-2 text-xs text-muted-foreground">
              OU CONTINUE COM
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button 
            type="button" 
            variant="outline" 
            className="h-11 bg-white border border-gray-200 hover:bg-gray-50 button-hover"
            disabled={isLoading}
          >
            <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
              <path d="M1 1h22v22H1z" fill="none" />
            </svg>
            Google
          </Button>
          <Button 
            type="button" 
            variant="outline" 
            className="h-11 bg-white border border-gray-200 hover:bg-gray-50 button-hover"
            disabled={isLoading}
          >
            <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.933.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            GitHub
          </Button>
        </div>

        <div className="mt-6 text-center text-sm">
          <p className="text-muted-foreground">
            Não tem uma conta?{" "}
            <button
              type="button"
              className="text-primary font-medium hover:underline"
              onClick={() => toast.info('Funcionalidade em desenvolvimento')}
            >
              Cadastre-se
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
