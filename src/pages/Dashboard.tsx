
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Copy, Check } from 'lucide-react';
import { toast } from 'sonner';
import { Card } from '@/components/ui/card';

const Dashboard = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('789068');
  const [copied, setCopied] = useState(false);
  
  // Simulate checking if user is logged in
  useEffect(() => {
    // Get stored email from sessionStorage (this would be set during login)
    const storedEmail = sessionStorage.getItem('userEmail');
    if (!storedEmail) {
      toast.error('Você precisa fazer login para acessar esta página');
      navigate('/');
      return;
    }
    
    setEmail(storedEmail);
  }, [navigate]);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    toast.success('Código copiado para a área de transferência');
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('userEmail');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-800 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl flex flex-wrap justify-center gap-8">
        <Card className="w-full max-w-xs relative bg-white rounded-lg overflow-hidden pb-6">
          <div className="flex flex-col items-center pt-6 pb-3 relative">
            {/* Logo Circle */}
            <div className="w-20 h-20 rounded-full bg-teal-500 flex items-center justify-center mb-4 absolute -top-10">
              <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2 L8 7 L12 12 L8 17 L12 22 L16 17 L12 12 L16 7 Z" />
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>
            
            <div className="mt-10">
              <p className="text-gray-400 text-sm">Usuário ChatGpt</p>
              <h2 className="text-lg font-medium text-gray-700">{email}</h2>
            </div>
          </div>
          
          <div className="px-6 flex flex-col items-center">
            <p className="my-2 text-gray-600">Código: {code}</p>
            
            <Button 
              onClick={handleCopyCode} 
              className="bg-blue-500 hover:bg-blue-600 text-white flex items-center gap-2 px-4 py-2"
            >
              {copied ? (
                <>
                  <Check size={16} /> Copiado
                </>
              ) : (
                <>
                  <Copy size={16} /> Copiar Código
                </>
              )}
            </Button>
            
            {/* Gold badge at the bottom */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center">
              <div className="bg-yellow-400 text-yellow-800 rounded-t-lg px-4 py-1 font-bold text-xs flex flex-col items-center transform translate-y-1">
                <span>DANIEL</span>
                <span>DIGITAL</span>
                <span>PREMIUM</span>
              </div>
            </div>
          </div>
        </Card>
        
        {/* Duplicate card */}
        <Card className="w-full max-w-xs relative bg-white rounded-lg overflow-hidden pb-6">
          <div className="flex flex-col items-center pt-6 pb-3 relative">
            {/* Logo Circle */}
            <div className="w-20 h-20 rounded-full bg-teal-500 flex items-center justify-center mb-4 absolute -top-10">
              <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2 L8 7 L12 12 L8 17 L12 22 L16 17 L12 12 L16 7 Z" />
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>
            
            <div className="mt-10">
              <p className="text-gray-400 text-sm">Usuário ChatGpt</p>
              <h2 className="text-lg font-medium text-gray-700">{email}</h2>
            </div>
          </div>
          
          <div className="px-6 flex flex-col items-center">
            <p className="my-2 text-gray-600">Código: {code}</p>
            
            <Button 
              onClick={handleCopyCode} 
              className="bg-blue-500 hover:bg-blue-600 text-white flex items-center gap-2 px-4 py-2"
            >
              {copied ? (
                <>
                  <Check size={16} /> Copiado
                </>
              ) : (
                <>
                  <Copy size={16} /> Copiar Código
                </>
              )}
            </Button>
            
            {/* Gold badge at the bottom */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center">
              <div className="bg-yellow-400 text-yellow-800 rounded-t-lg px-4 py-1 font-bold text-xs flex flex-col items-center transform translate-y-1">
                <span>DANIEL</span>
                <span>DIGITAL</span>
                <span>PREMIUM</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
      
      <Button 
        onClick={handleLogout}
        variant="outline" 
        className="mt-8 flex items-center gap-2"
      >
        <ArrowLeft size={16} /> Sair
      </Button>
    </div>
  );
};

export default Dashboard;
