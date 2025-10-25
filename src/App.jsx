import { useState } from "react";
import { motion } from "framer-motion";
import { Building2, Gem, Trophy, Users2, ShieldCheck, Globe2, Mail, Phone, MapPin, Briefcase, LineChart, Sparkles, Target, CheckCircle2 } from "lucide-react";

function LogoCO() {
  const fallback = (e) => {
    // Si el enlace de Drive no carga, mostramos un monograma temporal
    e.currentTarget.outerHTML = `
      <div class='h-full w-full grid place-items-center rounded-2xl bg-neutral-900 border border-[#2CB1A6]/40'>
        <svg viewBox='0 0 48 48' class='h-8 w-8' aria-hidden="true">
          <defs>
            <linearGradient id='teal' x1='0' y1='0' x2='1' y2='1'>
              <stop offset='0' stop-color='#2CB1A6'/>
              <stop offset='1' stop-color='#1A5B6E'/>
            </linearGradient>
          </defs>
          <rect x='2' y='2' width='44' height='44' rx='12' fill='url(#teal)' opacity='0.15'/>
          <path d='M12 24c0-6.6 5.4-12 12-12s12 5.4 12 12-5.4 12-12 12' fill='none' stroke='url(#teal)' stroke-width='2'/>
          <text x='24' y='30' text-anchor='middle' font-size='14' font-weight='700' fill='#2CB1A6'>CO</text>
        </svg>
      </div>`;
  };

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="h-11 w-11 grid place-items-center rounded-2xl overflow-hidden"
    >
      <img
        src="https://drive.google.com/uc?export=view&id=1BnSzm08adHGRAs-FEA_EXx7xooZTtPjs"
        alt="Logo Corporativo Otavalo"
        className="h-full w-full object-contain"
        onError={fallback}
      />
    </motion.div>
  );
}

function Clientes() {
  const logoFallback = (name) => {
    const svg = encodeURIComponent(`<?xml version="1.0" encoding="UTF-8"?><svg xmlns='http://www.w3.org/2000/svg' width='320' height='120'><rect width='100%' height='100%' fill='white'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Arial, Helvetica, sans-serif' font-size='20' fill='#111'>${name}</text></svg>`);
    return `data:image/svg+xml;charset=UTF-8,${svg}`;
  };

  const clientes = [
    { nombre: "Banco Pichincha", descripcion: "Líderes para transformación digital y banca corporativa.", logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/Logo_Banco_Pichincha.svg" },
    { nombre: "Corporación Favorita", descripcion: "Ejecutivos estratégicos para retail y cadena de suministro.", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Logo_Corporacion_Favorita.svg" },
    { nombre: "Cervecería Nacional", descripcion: "Talento para innovación y desarrollo comercial.", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Logo_Cerveceria_Nacional_Ecuador.svg" },
    { nombre: "CNT EP", descripcion: "Directivos expertos en telecomunicaciones e innovación.", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Logo_CNT_Ecuador.svg" },
    { nombre: "Banco Guayaquil", descripcion: "Perfiles senior para banca de personas y digital.", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Logo_Banco_Guayaquil.svg" },
    { nombre: "Produbanco", descripcion: "Gestión de riesgos y analítica avanzada en banca.", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Produbanco_logo.svg" }
  ];

  return (
    <section id="clientes" className="mx-auto max-w-7xl px-6 py-16">
      <div className="max-w-2xl mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold">Nuestros Clientes</h2>
        <p className="mt-3 text-neutral-300">Empresas ecuatorianas e internacionales que confían en Corporativo Otavalo para encontrar liderazgo de alto impacto.</p>
      </div>

      <div className="grid md:grid-cols-3 xl:grid-cols-3 gap-6">
        {clientes.map((c, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 flex flex-col items-center text-center">
            <div className="w-full h-16 grid place-items-center rounded-xl bg-white/95 border border-neutral-200 overflow-hidden">
              <img src={c.logo} alt={c.nombre} className="max-h-10 w-auto" onError={(e) => { e.currentTarget.src = logoFallback(c.nombre); }} />
            </div>
            <h3 className="mt-4 text-base font-semibold text-[#2CB1A6]">{c.nombre}</h3>
            <p className="mt-2 text-neutral-300 text-sm leading-relaxed">{c.descripcion}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-[#2CB1A6]/35">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <LogoCO />
              <div>
                <div className="text-[1.05rem] font-semibold tracking-[0.08em] uppercase">Corporativo <span className="text-[#2CB1A6]">Otavalo</span></div>
                <div className="text-[10px] text-neutral-400 -mt-0.5 tracking-widest uppercase">Executive Search • Poder • Confidencialidad</div>
                <div className="h-1 mt-1 w-24 rounded-full bg-gradient-to-r from-[#2CB1A6] to-[#1A5B6E]"/>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-sm">
              {[
                ["Inicio", "home"],
                ["Servicios", "services"],
                ["Metodología", "method"],
                ["Sectores", "sectors"],
                ["Clientes", "clientes"],
                ["Nosotros", "about"],
                ["Contacto", "contact"],
              ].map(([label, id]) => (
                <button key={id} onClick={() => scrollTo(id)} className="hover:text-[#2CB1A6] transition-colors">{label}</button>
              ))}
              <a href="#contact" onClick={(e)=>{e.preventDefault();scrollTo("contact");}} className="rounded-xl bg-gradient-to-br from-[#2CB1A6] to-[#1A5B6E] px-4 py-2 font-medium text-neutral-900 shadow hover:shadow-[rgba(44,177,166,0.25)]">Agenda una llamada</a>
            </nav>

            <button onClick={() => setMenuOpen(v=>!v)} className="md:hidden inline-flex items-center justify-center rounded-xl border border-neutral-800 p-2" aria-expanded={menuOpen} aria-controls="mobile-menu">
              <span className="sr-only">Abrir menú</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div id="mobile-menu" className="md:hidden border-t border-neutral-800 bg-neutral-950/90">
            <div className="mx-auto max-w-7xl px-6 py-4 grid gap-4">
              {[
                ["Inicio", "home"],
                ["Servicios", "services"],
                ["Metodología", "method"],
                ["Sectores", "sectors"],
                ["Clientes", "clientes"],
                ["Nosotros", "about"],
                ["Contacto", "contact"],
              ].map(([label, id]) => (
                <button key={id} onClick={() => scrollTo(id)} className="text-left py-1 hover:text-[#2CB1A6] transition-colors">{label}</button>
              ))}
              <a href="#contact" onClick={(e)=>{e.preventDefault();scrollTo("contact");}} className="rounded-xl bg-gradient-to-br from-[#2CB1A6] to-[#1A5B6E] px-4 py-2 font-medium text-neutral-900 text-center">Agenda una llamada</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07]" aria-hidden="true">
          <div className="absolute -left-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-[#2CB1A6] blur-3xl" />
          <div className="absolute -right-40 top-1/2 h-[26rem] w-[26rem] -translate-y-1/2 rounded-full bg-[#1A5B6E] blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-20 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Talento <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#2CB1A6] via-[#2CB1A6] to-[#1A5B6E]">estratégico</span> que
              impulsa resultados extraordinarios
            </h1>
            <p className="mt-5 text-neutral-300 text-lg">
              Somos una firma ecuatoriana con sede en <strong>Quito</strong> especializada en <em>Executive Search</em> y 
              adquisición de <strong>capital humano de nivel directivo</strong>. Diseñamos tácticas que conectan la visión corporativa con la ejecución operativa.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#services" onClick={(e)=>{e.preventDefault();scrollTo("services");}} className="rounded-xl bg-gradient-to-br from-[#2CB1A6] to-[#1A5B6E] px-6 py-3 font-semibold text-neutral-900 shadow hover:shadow-[rgba(44,177,166,0.25)]">Ver servicios</a>
              <a href="#contact" onClick={(e)=>{e.preventDefault();scrollTo("contact");}} className="rounded-xl border border-[#2CB1A6]/50 px-6 py-3 font-semibold text-[#2CB1A6] hover:bg-[#2CB1A6]/10">Solicitar propuesta</a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-neutral-400">
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[#2CB1A6]"/>Confidencialidad absoluta</div>
              <div className="flex items-center gap-2"><Trophy className="h-4 w-4 text-[#2CB1A6]"/>Enfoque en impacto</div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
            <div className="aspect-[4/3] rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-950 p-1">
              <div className="h-full w-full rounded-2xl bg-[radial-gradient(circle_at_30%_20%,rgba(44,177,166,0.18),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(26,91,110,0.1),transparent_40%)] grid place-items-center">
                <div className="text-center max-w-sm">
                  <Building2 className="h-12 w-12 mx-auto text-[#2CB1A6]"/>
                  <h3 className="mt-4 text-2xl font-bold">Búsqueda Ejecutiva de Alto Impacto</h3>
                  <p className="mt-2 text-neutral-300">Encontramos líderes que mueven los indicadores: crecimiento, rentabilidad y gobierno corporativo.</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 rotate-2 rounded-xl bg-neutral-900/50 px-4 py-2 text-xs border border-neutral-800 backdrop-blur">
              <span className="text-neutral-400">Sede:</span> <span className="text-[#2CB1A6]">Quito, Ecuador</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* KPIs */}
      <section className="border-y border-neutral-900 bg-neutral-950/60">
        <div className="mx-auto max-w-7xl px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            {k:"+90%", l:"retención 12 meses"},
            {k:"3–6 sem.", l:"ciclos típicos de búsqueda"},
            {k:"24/7", l:"acompañamiento directivo"},
            {k:"100%", l:"procesos confidenciales"},
          ].map((i, idx)=> (
            <div key={idx} className="rounded-2xl border border-neutral-800/80 p-6 bg-neutral-900/40">
              <div className="text-3xl font-extrabold text-[#2CB1A6]">{i.k}</div>
              <div className="mt-1 text-sm text-neutral-400">{i.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Servicios */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold">Servicios</h2>
          <p className="mt-3 text-neutral-300">Soluciones integrales para vincular la estrategia con la operación mediante liderazgo de alto desempeño.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {[
            {icon: Users2, title: "Executive Search (C-Level y Directores)", desc: "Identificación, mapeo y atracción de líderes con probada capacidad para guiar al nivel operativo hacia objetivos estratégicos."},
            {icon: Briefcase, title: "Headhunting para posiciones críticas", desc: "Cobertura acelerada de roles clave en áreas de crecimiento, transformación o turnaround."},
            {icon: LineChart, title: "Evaluación integral (competencias & liderazgo)", desc: "Assessment por competencias, entrevistas BEI y herramientas psicométricas para mitigar riesgos de contratación."},
            {icon: Target, title: "Onboarding y Success Planning", desc: "Acompañamiento de los primeros 90 días y planes de sucesión para continuidad del negocio."},
            {icon: Sparkles, title: "Employer Branding Ejecutivo", desc: "Narrativas de valor para atraer talento premium, alineadas a la cultura y estrategia corporativa."},
            {icon: ShieldCheck, title: "Compliance y Confidencialidad", desc: "Procesos con estrictos protocolos éticos, anticorrupción y de manejo de información."},
          ].map(({icon:Icon, title, desc}, idx)=> (
            <motion.div key={idx} initial={{ y: 18, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.05 }} className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-[#2CB1A6]/10 to-[#1A5B6E]/0" />
              <Icon className="h-8 w-8 text-[#2CB1A6]" />
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-neutral-300 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Metodología */}
      <section id="method" className="bg-neutral-950 border-y border-neutral-900">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold">Nuestra metodología</h2>
            <p className="mt-3 text-neutral-300">Un proceso riguroso con enfoque en impacto y tiempos de negocio.</p>
          </div>

          <ol className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {t:"Descubrimiento estratégico", d:"Alineamos objetivos, indicadores clave y cultura con el perfil del rol."},
              {t:"Investigación & mapeo", d:"Inteligencia de mercado, long-list y cartografía de talento regional."},
              {t:"Atracción & evaluación", d:"Entrevistas por competencias (BEI), referencias y validaciones técnicas."},
              {t:"Short-list & panel", d:"Presentación de candidatos de alto potencial con evidencias de logro."},
              {t:"Cierre & oferta", d:"Negociación win-win, detalles de compensación y due diligence."},
              {t:"Onboarding 90-días", d:"Acompañamiento para asegurar tracción temprana y transferencia de tácticas al nivel operativo."},
            ].map((step, idx)=> (
              <li key={idx} className="relative rounded-2xl border border-neutral-800 p-6 bg-neutral-900/40">
                <div className="absolute -top-3 -left-3 grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[#2CB1A6] to-[#1A5B6E] text-neutral-900 font-extrabold shadow">
                  {idx+1}
                </div>
                <h3 className="ml-10 text-lg font-semibold">{step.t}</h3>
                <p className="ml-10 mt-2 text-neutral-300 text-sm">{step.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Sectores & Cobertura */}
      <section id="sectors" className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold">Sectores</h2>
            <p className="mt-3 text-neutral-300">Experiencia transversal en industrias de alto impacto en Ecuador y la región andina.</p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                "Banca y Servicios Financieros",
                "Energía, Petróleo & Minería",
                "Consumo Masivo & Retail",
                "Tecnología y Servicios Digitales",
                "Salud & Farma",
                "Infraestructura & Construcción",
                "Agroindustria & Alimentos",
                "Logística & Transporte",
              ].map((s, i)=> (
                <div key={i} className="rounded-xl border border-neutral-800 bg-neutral-900/40 px-4 py-3 text-sm flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#2CB1A6]"/>{s}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold">Cobertura</h2>
            <p className="mt-3 text-neutral-300">Alcance nacional con enfoque ejecutivo.</p>
            <div className="mt-6 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
              <div className="grid gap-4 text-sm">
                <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-[#2CB1A6]"/> Quito (sede) • Guayaquil • Cuenca • Ambato • Manta</div>
                <div className="flex items-center gap-3"><Globe2 className="h-5 w-5 text-[#2CB1A6]"/> Búsquedas regionales en la Alianza del Pacífico y Cono Sur</div>
                <div className="flex items-center gap-3"><ShieldCheck className="h-5 w-5 text-[#2CB1A6]"/> Procesos confidenciales y cumpliendo normativa local</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clientes */}
      <Clientes />

      {/* Nosotros */}
      <section id="about" className="bg-neutral-950 border-y border-neutral-900">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold">Quiénes somos</h2>
              <p className="mt-3 text-neutral-300">Corporativo Otavalo es una firma boutique de búsqueda ejecutiva que combina análisis de negocio, psicología organizacional y un potente ecosistema de networking directivo. Nuestro propósito es simple: <strong>colocar líderes que aceleran el valor</strong>.</p>
              <ul className="mt-6 grid gap-3 text-sm text-neutral-300">
                <li className="flex items-start gap-2"><ShieldCheck className="mt-0.5 h-4 w-4 text-[#2CB1A6]"/> Ética, confidencialidad y ausencia de conflictos de interés.</li>
                <li className="flex items-start gap-2"><Users2 className="mt-0.5 h-4 w-4 text-[#2CB1A6]"/> Enfoque en posiciones C-Level, Dirección y Alta Gerencia.</li>
                <li className="flex items-start gap-2"><Trophy className="mt-0.5 h-4 w-4 text-[#2CB1A6]"/> Obsesión por métricas de impacto: EBITDA, NPS interno, rotación crítica.</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-neutral-800 bg-[linear-gradient(135deg,rgba(44,177,166,0.08),transparent_40%)] p-1">
              <div className="rounded-2xl bg-neutral-900/50 p-6">
                <h3 className="text-xl font-semibold flex items-center gap-2"><Gem className="h-5 w-5 text-[#2CB1A6]"/> Propuesta de valor</h3>
                <div className="mt-4 grid sm:grid-cols-2 gap-4 text-sm">
                  <div className="rounded-xl border border-neutral-800 p-4">
                    <div className="font-semibold">Estrategia → Táctica → Ejecución</div>
                    <p className="mt-1 text-neutral-300">Líderes que convierten visión en resultados operativos.</p>
                  </div>
                  <div className="rounded-xl border border-neutral-800 p-4">
                    <div className="font-semibold">Análisis basado en evidencia</div>
                    <p className="mt-1 text-neutral-300">Evaluaciones por competencias, referencias y data de desempeño.</p>
                  </div>
                  <div className="rounded-xl border border-neutral-800 p-4">
                    <div className="font-semibold">Velocidad con precisión</div>
                    <p className="mt-1 text-neutral-300">Procesos ágiles sin sacrificar la calidad del fit cultural.</p>
                  </div>
                  <div className="rounded-xl border border-neutral-800 p-4">
                    <div className="font-semibold">Acompañamiento post-ingreso</div>
                    <p className="mt-1 text-neutral-300">Seguimiento y coaching ejecutivo para asegurar adopción.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contact" className="bg-neutral-950 border-y border-neutral-900">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold">Conversemos</h2>
              <p className="mt-3 text-neutral-300">Cuéntanos sobre el reto de talento que necesitas resolver. Te enviaremos una propuesta ejecutiva.</p>
              <div className="mt-6 grid gap-3 text-sm">
                <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-[#2CB1A6]"/> contacto@corporativootavalo.ec</div>
                <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-[#2CB1A6]"/> <a href="tel:+59322604889" className="hover:underline">+593 2260 4889</a></div>
                <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-[#2CB1A6]"/> Edificio Millenium Plaza, Piso 1, Ofi 100, Av. Eloy Alfaro N35-09, Quito 170135, Ecuador</div>
              </div>
            </div>
            <form onSubmit={(e)=>e.preventDefault()} className="rounded-3xl border border-neutral-800 bg-neutral-900/40 p-6">
              <div className="grid gap-4">
                <div>
                  <label className="text-sm text-neutral-300">Nombre</label>
                  <input required className="mt-1 w-full rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-2 outline-none focus:border-[#2CB1A6]" placeholder="Tu nombre"/>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-neutral-300">Correo</label>
                    <input type="email" required className="mt-1 w-full rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-2 outline-none focus:border-[#2CB1A6]" placeholder="tucorreo@empresa.com"/>
                  </div>
                  <div>
                    <label className="text-sm text-neutral-300">Teléfono</label>
                    <input className="mt-1 w-full rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-2 outline-none focus:border-[#2CB1A6]" placeholder="+593 …"/>
                  </div>
                </div>
                <div>
                  <label className="text-sm text-neutral-300">Interés</label>
                  <select className="mt-1 w-full rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-2 outline-none focus:border-[#2CB1A6]">
                    <option>Executive Search (C-Level)</option>
                    <option>Headhunting de posiciones críticas</option>
                    <option>Evaluaciones y assessment</option>
                    <option>Onboarding & Success Planning</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-neutral-300">Mensaje</label>
                  <textarea rows={4} className="mt-1 w-full rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-2 outline-none focus:border-[#2CB1A6]" placeholder="Cuéntanos brevemente el reto o posición a cubrir…"/>
                </div>
                <button className="rounded-xl bg-gradient-to-br from-[#2CB1A6] to-[#1A5B6E] px-6 py-3 font-semibold text-neutral-900 shadow hover:shadow-[rgba(44,177,166,0.25)]">Solicitar propuesta</button>
                <p className="text-xs text-neutral-500">Al enviar, aceptas nuestro manejo confidencial de la información y tratamiento conforme a la normativa ecuatoriana aplicable.</p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950">
        <div className="mx-auto max-w-7xl px-6 py-10 grid md:grid-cols-2 items-center gap-6 border-t border-neutral-900">
          <div className="text-sm text-neutral-400">© {new Date().getFullYear()} Corporativo Otavalo. Todos los derechos reservados.</div>
          <div className="flex md:justify-end gap-6 text-sm">
            <a href="#services" onClick={(e)=>{e.preventDefault();scrollTo("services");}} className="hover:text-[#2CB1A6]">Servicios</a>
            <a href="#about" onClick={(e)=>{e.preventDefault();scrollTo("about");}} className="hover:text-[#2CB1A6]">Nosotros</a>
            <a href="#contact" onClick={(e)=>{e.preventDefault();scrollTo("contact");}} className="hover:text-[#2CB1A6]">Contacto</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
