/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from 'react';
import { 
  Instagram, 
  Music2, 
  Youtube, 
  Calendar, 
  Mic2, 
  Star, 
  ArrowRight, 
  Play, 
  CheckCircle2,
  Mail,
  ExternalLink
} from 'lucide-react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const bentoRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero Entrance Animation
    const ctx = gsap.context(() => {
      gsap.from('.hero-title', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        stagger: 0.2
      });

      gsap.from('.hero-sub', {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: 'power3.out'
      });

      gsap.from('.hero-cta', {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        delay: 0.8,
        ease: 'back.out(1.7)'
      });

      // Scroll Reveal Animations
      gsap.utils.toArray('.reveal').forEach((elem: any) => {
        gsap.from(elem, {
          scrollTrigger: {
            trigger: elem,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          y: 60,
          opacity: 0,
          duration: 1,
          ease: 'power3.out'
        });
      });

      // Bento Grid Stagger
      gsap.from('.bento-item', {
        scrollTrigger: {
          trigger: '.bento-grid',
          start: 'top 80%'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out'
      });
    });

    return () => ctx.revert();
  }, []);

  const socialLinks = [
    { icon: <Instagram size={20} />, url: 'https://www.instagram.com/deboraharrudaoficial', label: 'Instagram' },
    { icon: <Music2 size={20} />, url: 'https://open.spotify.com/intl-pt/artist/5nUtih15k62VWe0909e5dZ?si=TPm33wkEROWOFLFwafZTpA', label: 'Spotify' },
    { icon: <Youtube size={20} />, url: 'https://www.youtube.com/@deboraharruda', label: 'YouTube' },
    { icon: <Play size={20} />, url: 'https://www.tiktok.com/@deboraharrudaoficial', label: 'TikTok' },
  ];

  return (
    <div className="min-h-screen selection:bg-accent selection:text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 glass py-3 px-4 md:px-12 flex justify-between items-center">
        <div className="text-xl md:text-2xl font-display font-bold tracking-tighter text-gradient">
          DEBORAH ARRUDA
        </div>
        
        <nav className="hidden lg:flex gap-8 text-[10px] md:text-xs font-medium uppercase tracking-widest opacity-80">
          <a href="#inicio" className="hover:text-accent transition-colors">Início</a>
          <a href="#video" className="hover:text-accent transition-colors">Lançamento</a>
          <a href="#diferenciais" className="hover:text-accent transition-colors">Diferenciais</a>
          <a href="#sobre" className="hover:text-accent transition-colors">Sobre</a>
          <a href="#contato" className="hover:text-accent transition-colors">Contato</a>
        </nav>

        <a 
          href="mailto:deboraharrudacontato@gmail.com"
          className="bg-accent hover:bg-accent-light text-white px-4 md:px-6 py-2 rounded-full text-[10px] md:text-sm font-bold transition-all transform hover:scale-105 flex items-center gap-2"
        >
          CONTRATAR <ArrowRight size={14} className="md:w-4 md:h-4" />
        </a>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center md:justify-end pt-24 pb-24 md:pb-32">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://instagram.fcpq7-1.fna.fbcdn.net/v/t51.82787-15/541667364_18520287214041570_7763048543614954907_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ig_cache_key=MzcxMzYzNTE1OTcyMDkzMDQ2Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=pcyOQrWtrF8Q7kNvwGv8iHA&_nc_oc=AdlM2rzgBQZWHqVNF9FwbMm6aJKbpv5zrvFx4A3bI86v1u58-_nQ-JxMdcg4GDt6BrE&_nc_ad=z-m&_nc_cid=1138&_nc_zt=23&_nc_ht=instagram.fcpq7-1.fna&_nc_gid=-JZdQNjgHK_mCGJj7UVaiA&_nc_ss=8&oh=00_Afy-ILlKnWwY862t8b02ikaXuK2r-y_N40kw95sp2wPwxw&oe=69B4C675" 
            alt="Deborah Arruda" 
            className="w-full h-full object-cover opacity-60 scale-105 object-top md:object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-r from-obsidian/20 via-obsidian/40 to-obsidian/90 hidden md:block"></div>
          <div className="absolute inset-0 bg-linear-to-b from-obsidian/60 via-obsidian/40 to-obsidian md:hidden"></div>
        </div>

        <div className="relative z-10 text-center md:text-right px-6 md:px-20 max-w-5xl flex flex-col items-center md:items-end">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-[10px] md:text-xs font-bold tracking-widest text-accent mb-6 md:mb-8 uppercase"
          >
            <Star size={12} fill="currentColor" /> A Voz que Transforma Eventos
          </motion.div>
          
          <h1 className="hero-title text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-black leading-[0.95] mb-6 uppercase">
            A Essência da <br />
            <span className="text-gradient italic">Música Ao Vivo</span>
          </h1>
          
          <p className="hero-sub text-sm md:text-lg lg:text-xl text-white/90 md:text-white/80 max-w-2xl mb-8 md:mb-10 font-light leading-relaxed drop-shadow-lg">
            Deborah Arruda traz sofisticação, técnica e emoção para os palcos mais exigentes do Brasil. Uma experiência artística completa para o seu evento.
          </p>

          <div className="hero-cta flex flex-col sm:flex-row items-center justify-center md:justify-end gap-4 w-full">
            <a 
              href="#contato"
              className="w-full sm:w-auto bg-white text-obsidian px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-accent hover:text-white transition-all shadow-2xl shadow-accent/20"
            >
              RESERVAR DATA
            </a>
            <a 
              href="https://open.spotify.com/intl-pt/artist/5nUtih15k62VWe0909e5dZ"
              target="_blank"
              className="w-full sm:w-auto glass px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              OUVIR NO SPOTIFY <Music2 size={18} className="md:w-5 md:h-5" />
            </a>
          </div>
        </div>

        {/* Floating Socials */}
        <div className="absolute bottom-10 left-10 hidden xl:flex flex-col gap-6 z-20">
          {socialLinks.map((social, i) => (
            <a 
              key={i} 
              href={social.url} 
              target="_blank"
              className="text-white/40 hover:text-accent transition-colors transform hover:scale-110"
              title={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </section>

      {/* Video Section */}
      <section id="video" className="relative z-10 py-20 px-6 md:px-12 max-w-7xl mx-auto reveal">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase">Lançamento <span className="text-gradient">Recente</span></h2>
          <p className="text-white/50 max-w-xl mx-auto text-sm md:text-base">Assista ao último videoclipe de Deborah Arruda e mergulhe em sua arte.</p>
        </div>
        <div className="aspect-video w-full rounded-2xl md:rounded-3xl overflow-hidden glass shadow-2xl shadow-accent/10">
          <iframe 
            className="w-full h-full"
            src="https://www.youtube.com/embed/CmdtBpTcGd4" 
            title="Deborah Arruda - Lançamento Recente" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Authority Marquee */}
      <div className="py-8 md:py-12 bg-white/5 border-y border-white/10 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 md:gap-12 mx-4 md:mx-6">
              <span className="text-xl md:text-2xl font-display font-bold opacity-20 uppercase tracking-tighter">Deborah Arruda</span>
              <Star className="opacity-10" size={16} />
              <span className="text-xl md:text-2xl font-display font-bold opacity-20 uppercase tracking-tighter">Tour 2026</span>
              <Star className="opacity-10" size={16} />
              <span className="text-xl md:text-2xl font-display font-bold opacity-20 uppercase tracking-tighter">Sua Música, Nossa Alma</span>
              <Star className="opacity-10" size={16} />
            </div>
          ))}
        </div>
      </div>

      {/* Diferenciais - Bento Grid */}
      <section id="diferenciais" className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-20 reveal">
          <h2 className="text-3xl md:text-6xl font-black mb-4 uppercase">Por que contratar <span className="text-gradient">Deborah Arruda?</span></h2>
          <p className="text-white/50 max-w-xl mx-auto text-sm md:text-base">Excelência técnica e presença de palco que elevam o nível de qualquer produção.</p>
        </div>

        <div className="bento-grid grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 h-auto">
          {/* Card 1: Performance */}
          <div className="bento-item md:col-span-2 glass rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col justify-end min-h-[250px] md:min-h-[300px] relative overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=2070&auto=format&fit=crop" 
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-700"
              alt="Performance"
              referrerPolicy="no-referrer"
            />
            <div className="relative z-10">
              <Mic2 className="text-accent mb-3 md:mb-4" size={32} />
              <h3 className="text-xl md:text-3xl font-bold mb-2 uppercase">Performance de Elite</h3>
              <p className="text-white/60 max-w-md text-sm md:text-base">Domínio vocal absoluto e interação magnética com o público, garantindo que cada show seja memorável.</p>
            </div>
          </div>

          {/* Card 2: Repertório */}
          <div className="bento-item glass rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col justify-between border-accent/20 min-h-[200px] md:min-h-0">
            <div className="bg-accent/10 w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-accent">
              <Music2 size={20} />
            </div>
            <div>
              <h3 className="text-lg md:text-2xl font-bold mb-2 uppercase">Repertório Versátil</h3>
              <p className="text-white/60 text-xs md:text-sm">Do Jazz ao Pop, do MPB ao Internacional. Adaptabilidade total ao perfil do seu evento.</p>
            </div>
          </div>

          {/* Card 3: Agenda */}
          <div className="bento-item glass rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col justify-between min-h-[200px] md:min-h-0">
            <div className="bg-white/10 w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center">
              <Calendar size={20} />
            </div>
            <div>
              <h3 className="text-lg md:text-2xl font-bold mb-2 uppercase">Gestão Profissional</h3>
              <p className="text-white/60 text-xs md:text-sm">Pontualidade, suporte técnico e uma equipe dedicada para garantir que tudo saia perfeito.</p>
            </div>
          </div>

          {/* Card 4: Plataformas */}
          <div className="bento-item md:col-span-2 glass rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 relative overflow-hidden min-h-[200px] md:min-h-0">
            <div className="flex-1">
              <h3 className="text-xl md:text-3xl font-bold mb-4 uppercase">Presença Digital</h3>
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-xl md:text-2xl font-bold text-accent">500k+</div>
                  <div className="text-[8px] md:text-[10px] uppercase tracking-widest opacity-50">Streams</div>
                </div>
                <div className="w-px h-8 md:h-10 bg-white/10"></div>
                <div className="text-center">
                  <div className="text-xl md:text-2xl font-bold text-accent">100k+</div>
                  <div className="text-[8px] md:text-[10px] uppercase tracking-widest opacity-50">Seguidores</div>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl glass flex items-center justify-center hover:bg-accent transition-colors cursor-pointer">
                <Instagram size={24} />
              </div>
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl glass flex items-center justify-center hover:bg-accent transition-colors cursor-pointer">
                <Music2 size={24} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre / Serviços */}
      <section id="sobre" className="py-20 md:py-32 bg-white/2">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="reveal relative">
            <div className="aspect-3/4 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl shadow-accent/10">
              <img 
                src="https://instagram.fcpq7-1.fna.fbcdn.net/v/t51.29350-15/464935536_1610290979903035_5317617604005901836_n.heic?stp=dst-jpg_e35_tt6&_nc_cat=101&ig_cache_key=MzQ4OTEwNzM1MzkwNjQwMjY4OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuZGVmYXVsdF9pbWFnZS5DMyJ9&_nc_ohc=tIyVrG6ODH8Q7kNvwGTcmwZ&_nc_oc=AdnpWNvrDBDOkkJGWoE11lXKhyZZwhNlBgY3On54x8E30q7wLZEKDjf6GgR84oGgIh4&_nc_ad=z-m&_nc_cid=1138&_nc_zt=23&_nc_ht=instagram.fcpq7-1.fna&_nc_gid=uxuHSGCIyHbeRoMJBsyyzA&_nc_ss=8&oh=00_AfwgcZIOewG1_H2WW4oMpSZyMYgSZcOiuun07zT4b736Og&oe=69B4A712" 
                alt="Deborah Arruda" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 glass p-6 md:p-8 rounded-2xl md:rounded-3xl hidden sm:block max-w-[200px] md:max-w-[250px]">
              <div className="text-accent font-serif italic text-2xl md:text-4xl mb-2">"A música é a linguagem da alma."</div>
              <div className="text-[10px] md:text-xs uppercase tracking-widest font-bold opacity-50">— Deborah Arruda</div>
            </div>
          </div>

          <div className="reveal">
            <h2 className="text-3xl md:text-5xl font-black mb-6 md:mb-8 uppercase leading-tight">A trajetória de uma <br /><span className="text-gradient">Artista Completa</span></h2>
            <p className="text-white/70 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
              Com mais de uma década dedicada aos palcos, Deborah Arruda consolidou sua carreira através de uma voz única e interpretações viscerais. Sua jornada musical é marcada pela busca incessante pela perfeição técnica e pela conexão emocional com o público.
            </p>
            
            <ul className="space-y-3 md:space-y-4 mb-8 md:mb-12">
              {[
                "Shows para Eventos Corporativos de Luxo",
                "Apresentações em Casamentos e Cerimônias",
                "Turnês em Casas de Shows e Teatros",
                "Produção Musical e Colaborações Artísticas"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/80 text-sm md:text-base">
                  <CheckCircle2 className="text-accent" size={18} /> {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <a href="#contato" className="w-full sm:w-auto text-center bg-accent text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold hover:bg-accent-light transition-all text-sm md:text-base">SOLICITAR ORÇAMENTO</a>
              <a href="https://www.instagram.com/deboraharrudaoficial" target="_blank" className="w-full sm:w-auto text-center glass px-6 md:px-8 py-3 md:py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all text-sm md:text-base">VER NO INSTAGRAM <ExternalLink size={16} /></a>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 md:py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20 reveal">
            <h2 className="text-3xl md:text-6xl font-black mb-4 uppercase">O que dizem os <span className="text-gradient">Contratantes</span></h2>
            <p className="text-white/50 text-sm md:text-base">Experiências reais de quem já viveu a magia de Deborah Arruda.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                name: "Ricardo Mendes",
                role: "Diretor de Eventos - Luxury Corp",
                text: "A Deborah transformou nosso jantar de gala em algo cinematográfico. A voz dela é impecável e a presença de palco é de outro mundo."
              },
              {
                name: "Juliana Costa",
                role: "Noiva",
                text: "Não tenho palavras para descrever a emoção de entrar no meu casamento com a Deborah cantando. Foi o momento mais lindo da minha vida."
              },
              {
                name: "Marcos Silva",
                role: "Produtor Cultural",
                text: "Uma das artistas mais profissionais com quem já trabalhei. Técnica vocal absurda e um carisma que conquista qualquer plateia."
              }
            ].map((testimonial, i) => (
              <div key={i} className="reveal glass p-8 md:p-10 rounded-2xl md:rounded-3xl relative">
                <Star className="text-accent/10 absolute top-6 right-6 md:top-8 md:right-8 w-10 h-10 md:w-16 md:h-16" />
                <div className="flex gap-1 mb-4 md:mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="#E11D48" className="text-accent md:w-4 md:h-4" />)}
                </div>
                <p className="text-white/80 italic mb-6 md:mb-8 text-sm md:text-base leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <div className="font-bold text-base md:text-lg uppercase tracking-tight">{testimonial.name}</div>
                  <div className="text-[10px] md:text-xs text-accent font-bold uppercase tracking-widest">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final / Contato */}
      <section id="contato" className="py-20 md:py-32 px-6 relative">
        <div className="max-w-4xl mx-auto glass rounded-[30px] md:rounded-[40px] p-8 md:p-20 text-center relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-1.5 md:h-2 bg-linear-to-r from-accent via-accent-light to-accent"></div>
          
          <div className="reveal">
            <h2 className="text-3xl md:text-7xl font-black mb-6 md:mb-8 uppercase leading-none">Pronto para elevar o seu <span className="text-gradient">Próximo Evento?</span></h2>
            <p className="text-white/60 text-sm md:text-lg mb-8 md:mb-12 max-w-2xl mx-auto">
              Datas limitadas para 2026. Entre em contato agora para garantir a melhor experiência musical para o seu público.
            </p>

            <div className="flex flex-col gap-4 md:gap-6 items-center">
              <a 
                href="mailto:deboraharrudacontato@gmail.com"
                className="w-full sm:w-auto group bg-white text-obsidian px-6 md:px-12 py-4 md:py-6 rounded-full font-black text-sm md:text-xl hover:bg-accent hover:text-white transition-all flex items-center justify-center gap-3 md:gap-4"
              >
                <Mail size={20} className="md:w-6 md:h-6" /> deboraharrudacontato@gmail.com
              </a>
              
              <div className="flex gap-6 md:gap-8 mt-6 md:mt-8">
                {socialLinks.map((social, i) => (
                  <a 
                    key={i} 
                    href={social.url} 
                    target="_blank"
                    className="w-10 h-10 md:w-14 md:h-14 rounded-full glass flex items-center justify-center hover:bg-accent hover:text-white transition-all transform hover:scale-110"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-12 px-6 border-t border-white/5 text-center">
        <div className="text-xl md:text-2xl font-display font-bold tracking-tighter text-gradient mb-4">
          DEBORAH ARRUDA
        </div>
        <p className="text-white/30 text-[10px] md:text-sm uppercase tracking-[0.2em] font-medium">
          Copyright 2026 — Todos os direitos reservados
        </p>
      </footer>

      {/* Custom Styles for Animations */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
