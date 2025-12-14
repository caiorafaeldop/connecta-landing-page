import React from 'react';

export const ContactPage: React.FC = () => {
    return (
       <main className="flex-grow relative pt-20 animate-fade-in">
           <div className="absolute inset-0 pointer-events-none overflow-hidden">
               <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
               <div className="absolute top-1/2 -left-20 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
               <div className="absolute inset-0 opacity-40" style={{backgroundImage: "radial-gradient(rgba(41, 182, 246, 0.1) 1px, transparent 1px)", backgroundSize: "30px 30px"}}></div>
           </div>
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10">
               <div className="text-center mb-16">
                   <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wider uppercase mb-4">
                       Conexão Universidade & Mercado
                   </span>
                   <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-slate-900 dark:text-white mb-6">
                       Vamos construir o <br className="hidden md:block"/> <span className="text-primary">futuro juntos?</span>
                   </h1>
                   <p className="mt-4 text-xl text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
                       Seja para parcerias empresariais, dúvidas sobre processos seletivos ou projetos de extensão, a Connecta CI quer ouvir você.
                   </p>
               </div>
               
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                   {/* Left Column */}
                   <div className="space-y-10">
                       {/* Card: Para Empresas */}
                       <div className="bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-white/5 p-8 rounded-2xl shadow-xl relative overflow-hidden group">
                           <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full group-hover:bg-primary/10 transition-colors duration-500"></div>
                           <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                               <span className="material-icons-outlined text-primary mr-3 text-3xl">handshake</span>
                               Para Empresas
                           </h3>
                           <p className="text-slate-600 dark:text-gray-300 mb-6 leading-relaxed">
                               Conecte sua empresa aos talentos do Centro de Informática da UFPB. Oferecemos oportunidades de divulgação, hackathons, palestras e acesso direto aos futuros líderes de tecnologia.
                           </p>
                           <ul className="space-y-3 mb-8">
                               {[
                                   "Divulgação de vagas de estágio e trainee",
                                   "Patrocínio de eventos e bootcamps",
                                   "Networking com laboratórios de pesquisa"
                               ].map((item, idx) => (
                                   <li key={idx} className="flex items-start text-slate-600 dark:text-gray-300">
                                       <span className="material-icons-outlined text-primary mr-2 text-sm mt-1">check_circle</span>
                                       <span>{item}</span>
                                   </li>
                               ))}
                           </ul>
                           <a className="inline-flex items-center text-primary font-bold hover:text-blue-400 transition-colors cursor-pointer" onClick={() => document.getElementById('form')?.scrollIntoView({behavior: 'smooth'})}>
                               Seja um parceiro
                               <span className="material-icons-outlined ml-1 text-lg">arrow_forward</span>
                           </a>
                       </div>

                       {/* Contact Info Grid */}
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div className="bg-white/50 dark:bg-surface-dark/50 backdrop-blur-sm p-6 rounded-xl border border-gray-100 dark:border-white/5">
                               <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-primary mb-4">
                                   <span className="material-icons-outlined">email</span>
                               </div>
                               <h4 className="font-display font-bold text-lg dark:text-white mb-1">Email</h4>
                               <a className="text-slate-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors text-sm break-all" href="mailto:contato@connectaci.ufpb.br">
                                   contato@connectaci.ufpb.br
                               </a>
                           </div>
                           <div className="bg-white/50 dark:bg-surface-dark/50 backdrop-blur-sm p-6 rounded-xl border border-gray-100 dark:border-white/5">
                               <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-primary mb-4">
                                   <span className="material-icons-outlined">place</span>
                               </div>
                               <h4 className="font-display font-bold text-lg dark:text-white mb-1">Localização</h4>
                               <p className="text-slate-500 dark:text-gray-400 text-sm">
                                   Centro de Informática - UFPB<br/>João Pessoa, PB
                               </p>
                           </div>
                       </div>

                       {/* Social Links */}
                       <div className="p-6 rounded-xl border border-primary/30 bg-primary/5 flex items-center justify-between">
                           <div>
                               <p className="font-semibold text-slate-800 dark:text-white">Nos acompanhe</p>
                               <p className="text-sm text-slate-500 dark:text-gray-400">Fique por dentro das novidades</p>
                           </div>
                           <div className="flex gap-3">
                               {/* Instagram SVG */}
                               <a className="w-10 h-10 rounded-full bg-white dark:bg-surface-dark flex items-center justify-center text-slate-700 dark:text-white hover:text-primary dark:hover:text-primary hover:shadow-md transition-all" href="#">
                                   <span className="sr-only">Instagram</span>
                                   <svg fill="currentColor" height="20" viewBox="0 0 24 24" width="20"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
                               </a>
                               {/* LinkedIn SVG */}
                               <a className="w-10 h-10 rounded-full bg-white dark:bg-surface-dark flex items-center justify-center text-slate-700 dark:text-white hover:text-primary dark:hover:text-primary hover:shadow-md transition-all" href="#">
                                   <span className="sr-only">LinkedIn</span>
                                   <svg fill="currentColor" height="20" viewBox="0 0 24 24" width="20"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                               </a>
                           </div>
                       </div>
                   </div>

                   {/* Right Column: Form */}
                   <div className="bg-surface-light dark:bg-surface-dark p-8 md:p-10 rounded-2xl shadow-2xl border border-gray-200 dark:border-white/5 relative z-20" id="form">
                       <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-2">Envie uma mensagem</h3>
                       <p className="text-slate-500 dark:text-gray-400 mb-8 text-sm">Preencha o formulário abaixo e entraremos em contato o mais breve possível.</p>
                       <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Mensagem enviada com sucesso!"); }}>
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                               <div>
                                   <label className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-1" htmlFor="name">Nome</label>
                                   <input className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-background-dark border border-gray-300 dark:border-white/10 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow outline-none" id="name" name="name" placeholder="Seu nome" required type="text"/>
                               </div>
                               <div>
                                   <label className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-1" htmlFor="email">E-mail</label>
                                   <input className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-background-dark border border-gray-300 dark:border-white/10 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow outline-none" id="email" name="email" placeholder="seu@email.com" required type="email"/>
                               </div>
                           </div>
                           <div>
                               <label className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-1" htmlFor="subject">Assunto</label>
                               <select className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-background-dark border border-gray-300 dark:border-white/10 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow outline-none" id="subject" name="subject">
                                   <option value="partnership">Parceria Empresarial</option>
                                   <option value="doubt">Dúvida sobre Processo Seletivo</option>
                                   <option value="event">Proposta de Evento</option>
                                   <option value="other">Outro</option>
                               </select>
                           </div>
                           <div>
                               <label className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-1" htmlFor="message">Mensagem</label>
                               <textarea className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-background-dark border border-gray-300 dark:border-white/10 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow outline-none" id="message" name="message" placeholder="Como podemos ajudar?" required rows={4}></textarea>
                           </div>
                           <div className="pt-2">
                               <button className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-3.5 px-6 rounded-lg shadow-lg hover:shadow-primary/40 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2" type="submit">
                                   Enviar Mensagem
                                   <span className="material-icons-outlined text-lg">send</span>
                               </button>
                           </div>
                       </form>
                   </div>
               </div>
           </div>
       </main>
    );
};