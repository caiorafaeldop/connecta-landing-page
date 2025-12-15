import React, { useState } from 'react';

export const SupportPage: React.FC = () => {
     const [amount, setAmount] = useState<number | null>(null);
     const [customAmount, setCustomAmount] = useState("");
     const [paymentMethod, setPaymentMethod] = useState('Pix');
     const [email, setEmail] = useState("");
     const [copied, setCopied] = useState(false);

     const pixKey = "11916216420";

     const handleCopyPix = () => {
        navigator.clipboard.writeText(pixKey);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
     };

     const handleCardPayment = () => {
        const finalAmount = customAmount ? customAmount : amount;
        if (!finalAmount) {
            alert("⚠️ Por favor, selecione ou digite um valor para contribuir.");
            return;
        }
        if (!email) {
            alert("⚠️ Por favor, informe seu e-mail.");
            return;
        }
        alert(`🚀 Obrigado pelo apoio!\n\nIniciando pagamento via Cartão no valor de R$ ${finalAmount}.\nAs instruções foram enviadas para ${email}.`);
     };

     return (
        <main className="flex-grow relative overflow-hidden pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    <div className="space-y-8">
                        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 dark:bg-primary/10 border border-primary/20 backdrop-blur-sm">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse mr-2"></span>
                            <span className="text-primary font-bold text-xs tracking-wide uppercase">Iniciativa Estudantil UFPB</span>
                        </div>
                        <h1 className="font-display font-extrabold text-5xl sm:text-6xl leading-tight text-gray-900 dark:text-white">
                            Construa o futuro da <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Tecnologia</span> conosco
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
                            Apoie o desenvolvimento técnico e profissional dos alunos do Centro de Informática. Sua doação viabiliza bootcamps, minicursos e conecta talentos ao mercado.
                        </p>
                        <div className="glass-panel dark:bg-white/5 bg-white p-6 rounded-2xl shadow-xl dark:shadow-none border border-gray-200 dark:border-white/10">
                            <h3 className="font-display font-bold text-xl mb-4 flex items-center text-gray-900 dark:text-white">
                                <span className="material-symbols-outlined text-primary mr-2">verified</span>
                                Impacto da sua doação
                            </h3>
                            <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                                {['Capacitação Técnica: Financiamento de workshops.', 'Networking: Eventos com grandes nomes.', 'Inclusão: Bolsas de auxílio.'].map((t, i) => (
                                    <li key={i} className="flex items-start group">
                                        <span className="material-symbols-outlined text-primary text-sm mt-1 mr-3 group-hover:translate-x-1 transition-transform">arrow_forward_ios</span>
                                        <span>{t}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-blue-600/30 blur-2xl rounded-3xl transform rotate-3 scale-105 opacity-50"></div>
                        <div className="bg-white dark:bg-card-dark backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl p-8 shadow-2xl relative">
                            <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg transform rotate-12">SEJA MEMBRO</div>
                            <div className="text-center mb-8">
                                <h2 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-2">Faça sua contribuição</h2>
                                <p className="text-sm text-gray-500 dark:text-gray-300">Escolha o método de pagamento.</p>
                            </div>
                            
                            {/* Payment Method Selection */}
                            <div className="flex p-1.5 bg-gray-100 dark:bg-black/30 rounded-xl mb-8 border border-gray-200 dark:border-white/5">
                                <button 
                                    onClick={() => setPaymentMethod('Pix')}
                                    className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2 ${paymentMethod === 'Pix' ? 'shadow-sm bg-white dark:bg-primary text-primary dark:text-white' : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}
                                >
                                    <span className="material-symbols-outlined text-lg">qr_code_2</span>
                                    Pix
                                </button>
                                <button 
                                    onClick={() => setPaymentMethod('Cartão')}
                                    className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2 ${paymentMethod === 'Cartão' ? 'shadow-sm bg-white dark:bg-primary text-primary dark:text-white' : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}
                                >
                                    <span className="material-symbols-outlined text-lg">credit_card</span>
                                    Cartão
                                </button>
                            </div>

                            {paymentMethod === 'Pix' ? (
                                <div className="flex flex-col items-center animate-fade-in">
                                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 mb-6 w-full max-w-xs mx-auto">
                                        <div className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600 relative overflow-hidden">
                                            <div className="text-center p-4">
                                                <span className="material-symbols-outlined text-5xl text-gray-400 mb-2">qr_code_2</span>
                                                <p className="text-sm text-gray-500 font-medium">QR Code aqui</p>
                                            </div>
                                        </div>
                                    </div>

                                    <button 
                                        onClick={handleCopyPix}
                                        className={`w-full py-4 rounded-xl font-bold shadow-lg transform transition-all hover:-translate-y-1 flex items-center justify-center gap-2 group text-lg ${
                                            copied 
                                            ? 'bg-green-500 text-white shadow-green-500/30' 
                                            : 'bg-gradient-to-r from-primary to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white shadow-blue-500/30'
                                        }`}
                                    >
                                        <span className="material-symbols-outlined text-2xl">
                                            {copied ? 'check_circle' : 'content_copy'}
                                        </span>
                                        <span>{copied ? 'Copiado com sucesso!' : 'Copiar Chave Pix'}</span>
                                    </button>
                                     <p className="text-center text-xs text-gray-400 mt-4 flex items-center justify-center gap-1">
                                        <span className="material-symbols-outlined text-sm">lock</span> Pagamento 100% seguro
                                    </p>
                                </div>
                            ) : (
                                <div className="animate-fade-in">
                                     <div className="grid grid-cols-3 gap-3 mb-6">
                                        {[20, 50, 100].map(val => (
                                            <button 
                                                key={val}
                                                onClick={() => {
                                                    setAmount(val);
                                                    setCustomAmount("");
                                                }}
                                                className={`py-4 px-4 rounded-xl border-2 font-semibold transition-all ${amount === val ? 'border-primary bg-primary/10 text-primary' : 'border-gray-200 dark:border-white/10 hover:border-primary text-gray-700 dark:text-white'}`}
                                            >
                                                R$ {val}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="relative mb-6">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <span className="text-gray-500 font-semibold sm:text-sm">R$</span>
                                        </div>
                                        <input 
                                            value={customAmount}
                                            onChange={(e) => {
                                                setCustomAmount(e.target.value);
                                                if(e.target.value) setAmount(null);
                                            }}
                                            className="focus:ring-2 focus:ring-primary focus:border-primary block w-full pl-10 pr-12 sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-black/20 dark:text-white rounded-xl py-4 transition-shadow" 
                                            placeholder="Outro valor" 
                                            type="number"
                                        />
                                    </div>
                                    <div className="space-y-4 mb-8">
                                        <div>
                                            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5 ml-1">Seu E-mail</label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <span className="material-symbols-outlined text-gray-400 text-sm">mail</span>
                                                </div>
                                                <input 
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    className="focus:ring-2 focus:ring-primary focus:border-primary block w-full pl-10 sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-black/20 dark:text-white rounded-xl py-3" 
                                                    placeholder="voce@exemplo.com" 
                                                    type="email"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <button 
                                        onClick={handleCardPayment}
                                        className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/30 transform transition hover:-translate-y-1 flex items-center justify-center gap-2 group text-lg"
                                    >
                                        <span>Pagar com Cartão</span>
                                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                    </button>
                                    <p className="text-center text-xs text-gray-400 mt-4 flex items-center justify-center gap-1">
                                        <span className="material-symbols-outlined text-sm">lock</span> Pagamento 100% seguro
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="mt-20 border-t border-gray-200 dark:border-white/10 pt-16 relative">
                    <div className="text-center mb-12">
                        <h2 className="font-display font-bold text-3xl text-gray-900 dark:text-white mb-4">Nossa Transparência</h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                            Acreditamos na clareza de nossas ações. Todo o valor arrecadado é revertido diretamente para iniciativas estudantis.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[{t: "Educação", p: "60%", d: "Bootcamps e workshops"}, {t: "Comunidade", p: "25%", d: "Eventos e integração"}, {t: "Infraestrutura", p: "15%", d: "Servidores e ferramentas"}].map((it, i) => (
                            <div key={i} className="bg-white dark:bg-white/5 p-8 rounded-2xl border border-gray-100 dark:border-white/5 hover:border-primary/50 transition-all hover:shadow-lg group">
                                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3">{it.t}</h3>
                                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mb-4">
                                    <div className="bg-primary h-1.5 rounded-full" style={{width: it.p}}></div>
                                </div>
                                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{it.p} - {it.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
     );
};