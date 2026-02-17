import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="fixed top-0 w-full z-50 glass border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-primary">
              <span className="material-symbols-outlined text-4xl leading-none">terminal</span>
            </div>
            <span className="text-2xl font-black tracking-tighter text-white">
              NUKE<span className="text-primary">BUGS</span>
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link className="text-sm font-medium hover:text-primary transition-colors" href="/#services">Services</Link>
            <Link className="text-sm font-medium hover:text-primary transition-colors" href="/portfolio">Portfolio</Link>
            <Link className="text-sm font-medium hover:text-primary transition-colors" href="/#about">About</Link>
            <Link className="text-sm font-medium hover:text-primary transition-colors" href="/#contact">Contact</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              className="bg-primary text-background-dark px-6 py-2.5 rounded-lg font-bold text-sm tracking-wide hover:brightness-110 shadow-[0_0_20px_rgba(6,239,212,0.3)] btn-shimmer hover:scale-105 active:scale-95 transition-transform"
              href="/#contact"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-20 bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 selection:bg-primary/30">
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden grid-pattern">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-dark/50 to-background-dark"></div>
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] parallax-bg"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px] parallax-bg"></div>
          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest mb-8 animate-fade-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              AI-Driven Innovation
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tight mb-8 animate-fade-up delay-100">
              AI-Powered Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Solutions for Global</span> Businesses
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up delay-200">
              Revolutionizing industries with cutting-edge AI software, web development, and automation tailored for the high-performance global market.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-300">
              <button className="w-full sm:w-auto px-8 py-4 bg-primary text-background-dark font-bold rounded-xl text-lg hover:scale-105 transition-transform shadow-xl shadow-primary/20 btn-shimmer">
                Get Free Consultation
              </button>
              <Link
                className="w-full sm:w-auto px-8 py-4 glass text-white font-bold rounded-xl text-lg hover:bg-white/5 transition-colors border border-white/10"
                href="/portfolio"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12 border-y border-white/5 bg-surface/30">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center text-slate-500 text-sm font-semibold uppercase tracking-widest mb-10">Trusted by Global Tech Leaders</p>
            <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500 overflow-hidden">
              <div className="logo-scroll-container gap-12 md:gap-24">
                <div className="h-8 w-32 bg-slate-400 rounded"></div>
                <div className="h-8 w-32 bg-slate-400 rounded"></div>
                <div className="h-8 w-32 bg-slate-400 rounded"></div>
                <div className="h-8 w-32 bg-slate-400 rounded"></div>
                <div className="h-8 w-32 bg-slate-400 rounded"></div>
                <div className="h-8 w-32 bg-slate-400 rounded"></div>
                <div className="h-8 w-32 bg-slate-400 rounded"></div>
                <div className="h-8 w-32 bg-slate-400 rounded"></div>
                <div className="h-8 w-32 bg-slate-400 rounded"></div>
                <div className="h-8 w-32 bg-slate-400 rounded"></div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Core Expertise</h2>
                <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">Advanced Solutions for the <br />Digital Frontier</h3>
              </div>
              <p className="text-slate-400 max-w-xs text-sm">We combine human creativity with artificial intelligence to deliver unmatched results.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="group p-8 rounded-2xl bg-surface border border-white/5 service-card-gradient transition-all duration-300 hover-lift">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">language</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Web Development</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">Scalable, high-performance web applications built with React, Next.js, and cutting-edge cloud architectures.</p>
                <ul className="space-y-2 text-xs text-slate-500 font-medium">
                  <li className="flex items-center gap-2"><span className="text-primary">/</span> PWA &amp; SaaS Platforms</li>
                  <li className="flex items-center gap-2"><span className="text-primary">/</span> Real-time Dashboards</li>
                </ul>
              </div>

              <div className="group p-8 rounded-2xl bg-surface border border-white/5 service-card-gradient transition-all duration-300 hover-lift">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">phone_iphone</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Mobile Apps</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">Native and cross-platform mobile experiences that engage users and drive meaningful business outcomes.</p>
                <ul className="space-y-2 text-xs text-slate-500 font-medium">
                  <li className="flex items-center gap-2"><span className="text-primary">/</span> iOS &amp; Android Development</li>
                  <li className="flex items-center gap-2"><span className="text-primary">/</span> React Native Expertise</li>
                </ul>
              </div>

              <div className="group p-8 rounded-2xl bg-surface border border-white/5 service-card-gradient transition-all duration-300 hover-lift">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">smart_toy</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">AI Automation</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">Custom AI agents, LLM integrations, and intelligent workflow automations to multiply your efficiency.</p>
                <ul className="space-y-2 text-xs text-slate-500 font-medium">
                  <li className="flex items-center gap-2"><span className="text-primary">/</span> OpenAI &amp; Anthropic Integration</li>
                  <li className="flex items-center gap-2"><span className="text-primary">/</span> Automated Data Pipelines</li>
                </ul>
              </div>

              <div className="group p-8 rounded-2xl bg-surface border border-white/5 service-card-gradient transition-all duration-300 hover-lift">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">hub</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">GHL Solutions</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">High-converting GoHighLevel ecosystems with custom snapshots and advanced CRM automation.</p>
                <ul className="space-y-2 text-xs text-slate-500 font-medium">
                  <li className="flex items-center gap-2"><span className="text-primary">/</span> Custom Snapshots</li>
                  <li className="flex items-center gap-2"><span className="text-primary">/</span> Funnel Optimization</li>
                </ul>
              </div>

              <div className="group p-8 rounded-2xl bg-surface border border-white/5 service-card-gradient transition-all duration-300 hover-lift">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">sports_esports</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Game Development</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">Immersive 2D/3D gaming experiences, gamification systems, and interactive metaverse applications.</p>
                <ul className="space-y-2 text-xs text-slate-500 font-medium">
                  <li className="flex items-center gap-2"><span className="text-primary">/</span> Unity &amp; Unreal Engine</li>
                  <li className="flex items-center gap-2"><span className="text-primary">/</span> Multiplayer Networking</li>
                </ul>
              </div>

              <div className="group p-8 rounded-2xl bg-primary flex flex-col items-center justify-center text-center transition-all duration-300">
                <h4 className="text-2xl font-black text-background-dark mb-4">Have a unique idea?</h4>
                <p className="text-background-dark/80 text-sm font-medium mb-8">Let&apos;s build something the world hasn&apos;t seen yet.</p>
                <button className="px-6 py-3 bg-background-dark text-white rounded-lg font-bold text-sm hover:brightness-125 transition-all">Start Project</button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-surface/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">The Methodology</h2>
              <h3 className="text-4xl md:text-5xl font-black text-white">Our 6-Step Excellence Flow</h3>
            </div>
            <div className="relative">
              <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-white/5 z-0">
                <div className="h-full bg-primary w-1/3 shadow-[0_0_10px_rgba(6,239,212,0.5)]"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left animate-fade-up delay-100">
                  <div className="w-24 h-24 rounded-full bg-background-dark border-4 border-primary flex items-center justify-center text-white font-black text-2xl mb-6 shadow-[0_0_30px_rgba(6,239,212,0.2)]">01</div>
                  <h5 className="text-lg font-bold text-white mb-2">Discovery</h5>
                  <p className="text-slate-500 text-sm">Analyzing requirements and target market goals.</p>
                </div>
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left animate-fade-up delay-200">
                  <div className="w-24 h-24 rounded-full bg-background-dark border-4 border-primary flex items-center justify-center text-white font-black text-2xl mb-6 shadow-[0_0_30px_rgba(6,239,212,0.2)]">02</div>
                  <h5 className="text-lg font-bold text-white mb-2">Strategy</h5>
                  <p className="text-slate-500 text-sm">Defining tech stack and product roadmap.</p>
                </div>
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left animate-fade-up delay-300">
                  <div className="w-24 h-24 rounded-full bg-background-dark border-4 border-primary flex items-center justify-center text-white font-black text-2xl mb-6 shadow-[0_0_30px_rgba(6,239,212,0.2)]">03</div>
                  <h5 className="text-lg font-bold text-white mb-2">Design</h5>
                  <p className="text-slate-500 text-sm">UI/UX prototyping and interactive systems.</p>
                </div>
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left animate-fade-up delay-400">
                  <div className="w-24 h-24 rounded-full bg-background-dark border-4 border-white/10 flex items-center justify-center text-white/50 font-black text-2xl mb-6">04</div>
                  <h5 className="text-lg font-bold text-white mb-2">Dev</h5>
                  <p className="text-slate-500 text-sm">Agile implementation and coding phase.</p>
                </div>
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="w-24 h-24 rounded-full bg-background-dark border-4 border-white/10 flex items-center justify-center text-white/50 font-black text-2xl mb-6">05</div>
                  <h5 className="text-lg font-bold text-white mb-2">QA</h5>
                  <p className="text-slate-500 text-sm">Rigorous bug testing and optimization.</p>
                </div>
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="w-24 h-24 rounded-full bg-background-dark border-4 border-white/10 flex items-center justify-center text-white/50 font-black text-2xl mb-6">06</div>
                  <h5 className="text-lg font-bold text-white mb-2">Support</h5>
                  <p className="text-slate-500 text-sm">Deployment and continuous 24/7 maintenance.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-center mb-16">
              <h3 className="text-4xl font-black text-white">Recent Artifacts</h3>
              <Link className="text-primary font-bold flex items-center gap-2 group" href="/portfolio">
                Full Portfolio
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group relative aspect-video rounded-3xl overflow-hidden bg-slate-800 border border-white/10 hover-lift">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" data-alt="Screenshot of an AI analytics dashboard interface" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC7VkBy570dWrVxaaGesLBebAQow7yqnKQHkWThFn-PyuFs--nsh-iYG74T7tQTWh28HJayAsU6DWtKPCWpgb7kdLc3qyjueXKIAF8DnBDylB3srrulc5b-zyVlCACWJoYS1LXCBE6-pYO9NTFdx_jWZSD7G3Dva77Lj101GQk_IiIbILf53uxm7y_ZgmCJKlKCXMbIV7_pFkNonnnl5slnrS8vv1WftHbZKbavb7jfdojudXznLlwyZjU_u8Z1M47J5ZIRMSugRjZ8')" }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform">
                  <div className="flex gap-2 mb-4">
                    <span className="px-2 py-1 rounded bg-primary/20 text-primary text-[10px] font-bold uppercase">AI Analytics</span>
                    <span className="px-2 py-1 rounded bg-white/10 text-white text-[10px] font-bold uppercase">Enterprise</span>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">NeuralFlow Predictive Engine</h4>
                  <p className="text-slate-300 text-sm max-w-sm opacity-0 group-hover:opacity-100 transition-opacity">Custom AI model that predicts supply chain disruptions with 98.4% accuracy.</p>
                </div>
              </div>

              <div className="group relative aspect-video rounded-3xl overflow-hidden bg-slate-800 border border-white/10 hover-lift">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" data-alt="Screenshot of a mobile health app UI" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCoz7i8_NPD2eLmHZaHBARpCYmGKLfVr8yIcQyKD8-mUGYyg1NZ02_cIlLDhiTIzkoeH14tIVGms-s_HemlKDWNeX9b2PxKuzECDXiuAGgvLP-oubfRqRupKTxKMSP6ddWGsAOQJT5pecPfQ_veEKw-Fa8s8UV168YPQKM4bnKhQ-vHHP8EXb6gxMI84N-rWRukjZiDyMiYHav-KgU8WHEIufwfm80rYSFWUdsJI2zVt178kLsanF7HDfWgUVbLNS7fN0U0u9Jtu3D8')" }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform">
                  <div className="flex gap-2 mb-4">
                    <span className="px-2 py-1 rounded bg-primary/20 text-primary text-[10px] font-bold uppercase">Mobile App</span>
                    <span className="px-2 py-1 rounded bg-white/10 text-white text-[10px] font-bold uppercase">HealthTech</span>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">VitalPulse Real-time Sync</h4>
                  <p className="text-slate-300 text-sm max-w-sm opacity-0 group-hover:opacity-100 transition-opacity">Cloud-native mobile ecosystem connecting patient sensors to clinical teams.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-24 bg-surface/10 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1">
                <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Testimonials</h2>
                <h3 className="text-4xl font-black text-white mb-6">Trusted by the best builders in tech.</h3>
                <div className="flex items-center gap-4">
                  <div className="flex text-primary">
                    <span className="material-symbols-outlined fill-1">star</span>
                    <span className="material-symbols-outlined fill-1">star</span>
                    <span className="material-symbols-outlined fill-1">star</span>
                    <span className="material-symbols-outlined fill-1">star</span>
                    <span className="material-symbols-outlined fill-1">star</span>
                  </div>
                  <span className="text-white font-bold">4.9/5 Average Rating</span>
                </div>
              </div>

              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8 rounded-2xl bg-surface border border-white/5">
                  <div className="flex gap-1 text-primary mb-4">
                    <span className="material-symbols-outlined text-sm fill-1">star</span>
                    <span className="material-symbols-outlined text-sm fill-1">star</span>
                    <span className="material-symbols-outlined text-sm fill-1">star</span>
                    <span className="material-symbols-outlined text-sm fill-1">star</span>
                    <span className="material-symbols-outlined text-sm fill-1">star</span>
                  </div>
                  <p className="text-slate-300 italic mb-6">
                    &quot;NUKEBUGS didn&apos;t just build our app; they reinvented how we handle data. The AI automation layer they added saved us 40 hours of manual work weekly.&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-700" data-alt="Portrait of Sarah Chen, CTO of Fintech Global"></div>
                    <div>
                      <h5 className="text-white font-bold text-sm">Sarah Chen</h5>
                      <p className="text-slate-500 text-xs">CTO, Fintech Global</p>
                    </div>
                  </div>
                </div>

                <div className="p-8 rounded-2xl bg-surface border border-white/5">
                  <div className="flex gap-1 text-primary mb-4">
                    <span className="material-symbols-outlined text-sm fill-1">star</span>
                    <span className="material-symbols-outlined text-sm fill-1">star</span>
                    <span className="material-symbols-outlined text-sm fill-1">star</span>
                    <span className="material-symbols-outlined text-sm fill-1">star</span>
                    <span className="material-symbols-outlined text-sm fill-1">star</span>
                  </div>
                  <p className="text-slate-300 italic mb-6">
                    &quot;Professional, fast, and incredibly knowledgeable. Their GHL snapshot customization was the missing link in our marketing ecosystem.&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-700" data-alt="Portrait of Marcus Thorne, Founder of AeroMedia"></div>
                    <div>
                      <h5 className="text-white font-bold text-sm">Marcus Thorne</h5>
                      <p className="text-slate-500 text-xs">Founder, AeroMedia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="relative bg-primary rounded-[3rem] p-8 md:p-16 overflow-hidden flex flex-col lg:flex-row items-center gap-12">
              <div className="relative z-10 lg:w-1/2">
                <h2 className="text-background-dark text-4xl md:text-6xl font-black mb-6 leading-tight">Ready to Transform Your Business?</h2>
                <p className="text-background-dark/80 text-lg mb-8 max-w-md">Join the global elite using AI to scale. Get a detailed quote and architecture roadmap within 24 hours.</p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-background-dark/10 px-4 py-2 rounded-full text-background-dark font-bold text-sm">
                    <span className="material-symbols-outlined">check_circle</span> 100% Satisfaction
                  </div>
                  <div className="flex items-center gap-2 bg-background-dark/10 px-4 py-2 rounded-full text-background-dark font-bold text-sm">
                    <span className="material-symbols-outlined">check_circle</span> 24/7 Priority Support
                  </div>
                </div>
              </div>

              <div className="relative z-10 lg:w-1/2 w-full">
                <form className="bg-background-dark p-8 rounded-3xl shadow-2xl space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Name</label>
                      <input className="w-full bg-surface border-white/10 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary text-white" placeholder="John Doe" type="text" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Email</label>
                      <input className="w-full bg-surface border-white/10 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary text-white" placeholder="john@company.com" type="email" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Service Needed</label>
                    <select className="w-full bg-surface border-white/10 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary text-white">
                      <option>AI Automation</option>
                      <option>Web Development</option>
                      <option>Mobile App</option>
                      <option>Game Dev</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Project Details</label>
                    <textarea className="w-full bg-surface border-white/10 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary text-white" placeholder="Tell us about your project..." rows={3}></textarea>
                  </div>
                  <button className="w-full bg-primary text-background-dark font-black py-4 rounded-xl text-lg hover:brightness-110 transition-all btn-shimmer" type="submit">Submit Inquiry</button>
                </form>
              </div>
              <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/4"></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-surface/50 border-t border-white/5 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-3xl">terminal</span>
                <span className="text-2xl font-black tracking-tighter text-white">NUKE<span className="text-primary">BUGS</span></span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">Pioneering the next wave of digital evolution through custom AI software and high-performance digital architectures.</p>
              <div className="flex gap-4">
                <a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:border-primary hover:text-primary hover:scale-110 transition-all" href="#">
                  <span className="material-symbols-outlined text-lg">public</span>
                </a>
                <a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:border-primary hover:text-primary hover:scale-110 transition-all" href="#">
                  <span className="material-symbols-outlined text-lg">code</span>
                </a>
                <a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:border-primary hover:text-primary hover:scale-110 transition-all" href="#">
                  <span className="material-symbols-outlined text-lg">alternate_email</span>
                </a>
              </div>
            </div>

            <div>
              <h6 className="text-white font-bold mb-6">Services</h6>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><a className="hover:text-primary transition-colors" href="#">Web Development</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Mobile App Development</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">AI &amp; Machine Learning</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">GoHighLevel CRM</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Game Design</a></li>
              </ul>
            </div>

            <div>
              <h6 className="text-white font-bold mb-6">Company</h6>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><a className="hover:text-primary transition-colors" href="#">About Our Agency</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Our Process</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Career Opportunities</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Client Portfolio</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Contact Support</a></li>
              </ul>
            </div>

            <div>
              <h6 className="text-white font-bold mb-6">Newsletter</h6>
              <p className="text-sm text-slate-400 mb-6">Stay ahead of the AI curve with our weekly tech insights.</p>
              <div className="relative">
                <input className="w-full bg-background-dark border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-primary focus:ring-primary" placeholder="Email address" type="email" />
                <button className="absolute right-2 top-2 bottom-2 bg-primary text-background-dark px-3 rounded-lg text-xs font-bold btn-shimmer">Join</button>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-4">
            <p className="text-slate-500 text-xs">© 2024 NUKEBUGS AI Agency. All rights reserved.</p>
            <div className="flex gap-6 text-xs text-slate-500">
              <a className="hover:text-primary hover:scale-110 transition-transform" href="#">Privacy Policy</a>
              <a className="hover:text-primary hover:scale-110 transition-transform" href="#">Terms of Service</a>
              <a className="hover:text-primary hover:scale-110 transition-transform" href="#">SLA Agreement</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
