"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function PortfolioPage() {
  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("reveal-visible");
            }, index * 100);
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll(".reveal-hidden");
    revealElements.forEach((element) => revealObserver.observe(element));

    const cards = document.querySelectorAll<HTMLElement>(".project-card, .featured-card");
    const cleanupFns: Array<() => void> = [];

    cards.forEach((card) => {
      const onMouseMove = (event: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      };

      const onMouseLeave = () => {
        card.style.transform = "";
      };

      card.addEventListener("mousemove", onMouseMove);
      card.addEventListener("mouseleave", onMouseLeave);

      cleanupFns.push(() => {
        card.removeEventListener("mousemove", onMouseMove);
        card.removeEventListener("mouseleave", onMouseLeave);
      });
    });

    const onScroll = () => {
      const scrolled = window.pageYOffset;
      const hero = document.querySelector<HTMLElement>(".hero-parallax");
      if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.4}px)`;
      }
    };

    window.addEventListener("scroll", onScroll);

    const countUp = (element: HTMLElement, target: number) => {
      let current = 0;
      const increment = target / 100;

      const update = () => {
        current += increment;
        if (current < target) {
          element.innerText = `${Math.ceil(current)}${element.dataset.suffix || ""}`;
          requestAnimationFrame(update);
        } else {
          element.innerText = `${target}${element.dataset.suffix || ""}`;
        }
      };

      update();
    };

    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const targetElement = entry.target as HTMLElement;
        if (entry.isIntersecting && !targetElement.dataset.animated) {
          const target = Number.parseInt(targetElement.dataset.target || "0", 10);
          countUp(targetElement, target);
          targetElement.dataset.animated = "true";
        }
      });
    });

    const statElements = document.querySelectorAll(".stat-counter");
    statElements.forEach((stat) => statsObserver.observe(stat));

    return () => {
      revealObserver.disconnect();
      statsObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      cleanupFns.forEach((fn) => fn());
    };
  }, []);

  return (
    <div className="bg-background-light dark:bg-portfolio-dark text-slate-900 dark:text-white min-h-screen">
      <header className="fixed top-0 w-full z-50 glass-nav border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-primary">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.8261 17.4264C16.7203 18.1174 20.2244 18.5217 24 18.5217C27.7756 18.5217 31.2797 18.1174 34.1739 17.4264C36.9144 16.7722 39.9967 15.2331 41.3563 14.1648L24.8486 40.6391C24.4571 41.267 23.5429 41.267 23.1514 40.6391L6.64374 14.1648C8.00331 15.2331 11.0856 16.7722 13.8261 17.4264Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h1 className="text-xl font-black tracking-tighter uppercase">Nukebugs</h1>
          </div>
          <nav className="hidden md:flex items-center gap-10">
            <Link className="text-sm font-medium hover:text-primary transition-colors" href="/portfolio">
              Work
            </Link>
            <Link className="text-sm font-medium hover:text-primary transition-colors" href="/#services">
              Services
            </Link>
            <Link className="text-sm font-medium hover:text-primary transition-colors" href="/#about">
              About
            </Link>
            <Link className="text-sm font-medium hover:text-primary transition-colors" href="/#contact">
              Contact
            </Link>
          </nav>
          <Link className="bg-primary text-background-dark px-5 py-2.5 rounded-lg font-bold text-sm hover:opacity-90 transition-all" href="/#contact">
            Get in Touch
          </Link>
        </div>
      </header>

      <main className="pt-32 pb-20 max-w-7xl mx-auto px-6">
        <section className="mb-16 hero-parallax">
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-[1.1]">
              Our Work — <span className="text-primary/80">Global Impact</span> through Technology.
            </h2>
            <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 leading-relaxed">
              A cinematic gallery of technical excellence and creative impact. We build software that scales across continents and solves complex human problems.
            </p>
          </div>
        </section>

        <div className="flex flex-wrap items-center gap-3 mb-12 reveal-hidden">
          <button className="px-6 py-2 rounded-full bg-primary text-background-dark font-semibold text-sm">All Projects</button>
          <button className="px-6 py-2 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 transition-all text-sm font-medium">Web Systems</button>
          <button className="px-6 py-2 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 transition-all text-sm font-medium">Mobile Apps</button>
          <button className="px-6 py-2 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 transition-all text-sm font-medium">
            Artificial Intelligence
          </button>
          <button className="px-6 py-2 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 transition-all text-sm font-medium">Gaming</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="project-card group relative overflow-hidden rounded-xl bg-slate-900 aspect-[16/10] cursor-pointer reveal-hidden">
            <div className="glow-border"></div>
            <img
              alt="Cybersecurity Portal"
              className="w-full h-full object-cover transition-transform duration-700 opacity-60 group-hover:opacity-40"
              data-alt="Futuristic glowing digital security matrix interface"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcliKweLEB7Yxe8yzdI0ECzgXx10ZbgP1FSPJcxGMjfAt51xIferWz-yVTpSFzV9gukZpMc_hHGrPOIUfpz8wetXB2pYYfBPbK7rUVio61JfU31hYnhNbmYHF_tUX19leG-lAq3wS-T6it5sgo6Zij4QwwbfjTBXMJk-M-4fMbZjJa2J4WNcPUsJDXY2qui8-b-Ll8SDw2B7BFz_OSscF2lKf-pkmTNL7kp0eV-D3FLPrliLOb4f6nS_ytQArpMov_BnImwecBFjBy"
            />
            <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-background-dark via-transparent to-transparent">
              <span className="text-primary text-xs font-bold tracking-widest uppercase mb-2">Web / Security</span>
              <h3 className="text-3xl font-bold mb-4">Aegis Cyber-Portal</h3>
              <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:translate-x-2 transition-transform">
                View Case Study <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </div>
          </div>

          <div className="project-card group relative overflow-hidden rounded-xl bg-slate-900 aspect-[16/10] cursor-pointer reveal-hidden">
            <div className="glow-border"></div>
            <img
              alt="Fintech App"
              className="w-full h-full object-cover transition-transform duration-700 opacity-60 group-hover:opacity-40"
              data-alt="Clean mobile interface showing financial data charts"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlXJr-8uKDFMSEcgJlICEe-gM2MQaxk2bI5BErRwEdYEhhKq6ukwYv8OR66q-b8X2CUGwqGf4pwGEGjmRyqinUQGEDyl-KCD7tyQQdOnzPBql3ITtWf2L6E6gu96cPkjRd_qDh3eXn3Lkzgh8zCGEJLBYWpJxl_r3kwhz9LSuCQeIOP2eZwQ4AfbniqpzoNxSRzyFTNwbwhTOwPyx7GeM5BGuPFV855S56Br_s4aD6yRFCLehEwf4ZDCrxNsqJBcgAVidthZCjRZRl"
            />
            <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-background-dark via-transparent to-transparent">
              <span className="text-primary text-xs font-bold tracking-widest uppercase mb-2">Mobile / Fintech</span>
              <h3 className="text-3xl font-bold mb-4">Nova Banking Experience</h3>
              <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:translate-x-2 transition-transform">
                View Case Study <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </div>
          </div>

          <div className="project-card group relative overflow-hidden rounded-xl bg-slate-900 aspect-[16/10] cursor-pointer reveal-hidden">
            <div className="glow-border"></div>
            <img
              alt="RPG World"
              className="w-full h-full object-cover transition-transform duration-700 opacity-60 group-hover:opacity-40"
              data-alt="Immersive dark fantasy video game landscape environment"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVtnvvsZ9JlPTDqtsuQ1lkcvWM3n-PYHMyDEYRSDsZWwldSpon3SMvzejwXHfO_2eUqi271h2vXMhcdkFD6OzeWiEcuLIps-ABC06McTqjvUNxVtDVJoh2LMmzGcrSyrv0pnG3gaPedNdRzxBUSwPr_paDxtcuGKu3LAFdEYoantq4Sv8S050qQ82BmEdo-caL5Zxfbp--yN8fNIn1ValRIs0HGMiU84gJROoDjjGkStNb9shOSK-63y0PHfBMV_Vltj8J0WId8EyP"
            />
            <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-background-dark via-transparent to-transparent">
              <span className="text-primary text-xs font-bold tracking-widest uppercase mb-2">Games / Unreal Engine</span>
              <h3 className="text-3xl font-bold mb-4">Shadow Realm: Origins</h3>
              <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:translate-x-2 transition-transform">
                View Case Study <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </div>
          </div>

          <div className="project-card group relative overflow-hidden rounded-xl bg-slate-900 aspect-[16/10] cursor-pointer reveal-hidden">
            <div className="glow-border"></div>
            <img
              alt="Neural Network"
              className="w-full h-full object-cover transition-transform duration-700 opacity-60 group-hover:opacity-40"
              data-alt="Complex 3D neural network node visualization"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAI0Ru87zTjdt4yGHBNTjFIRzZbYOV1dktnt2khRYTWg8UOb4pW9rW_H2gy2MFDmDOaycsOZ3U_ShtSvDPt9V1zumGVjRXQ3Ro_mhPOeK8FLnBvnORBRxIQcRbU7dlc7SB7YFN9L9cm8CX7Ws-IVNtJkeVX9MuCC677cXTs_PpYamO2n3aNw_IPPA4lDzuGmhdKtbcnoctLvaNFvXUXoDRmpDzAzgDa8p4cT3dFEKRxd70usuHwnqMQgh-TqZ9d6uegNELs-qI65UGS"
            />
            <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-background-dark via-transparent to-transparent">
              <span className="text-primary text-xs font-bold tracking-widest uppercase mb-2">AI / Infrastructure</span>
              <h3 className="text-3xl font-bold mb-4">Core-AI Prediction Engine</h3>
              <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:translate-x-2 transition-transform">
                View Case Study <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden mb-24 reveal-hidden featured-card">
          <div className="glow-border"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 lg:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-primary mb-6">
                <span className="material-symbols-outlined">star</span>
                <span className="text-sm font-bold tracking-widest uppercase">Spotlight Case Study</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Optimizing Enterprise Supply Chain with Neural Nets</h3>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                We collaborated with a Fortune 500 logistics provider to overhaul their predictive maintenance system. By implementing a custom transformer-based architecture,
                we reduced downtime by 42%.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div>
                  <div className="text-4xl font-black text-primary mb-1">
                    <span className="stat-counter" data-suffix="%" data-target="42">
                      0%
                    </span>
                  </div>
                  <div className="text-sm text-slate-500 font-medium">Efficiency Increase</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-primary mb-1">
                    $<span className="stat-counter" data-suffix="M+" data-target="12">0</span>
                  </div>
                  <div className="text-sm text-slate-500 font-medium">Annual Savings</div>
                </div>
              </div>
              <button className="w-fit flex items-center gap-3 bg-white text-background-dark px-8 py-4 rounded-xl font-bold hover:bg-primary transition-colors">
                Deep Dive into AI Solutions <span className="material-symbols-outlined">trending_flat</span>
              </button>
            </div>
            <div className="relative min-h-[400px] bg-slate-800">
              <img
                alt="Logistics AI"
                className="absolute inset-0 w-full h-full object-cover opacity-80"
                data-alt="Abstract hardware circuit board with glowing blue lights"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSFT-ob7nlsB-UaJWwHHuD8QuDs1EKYBzZwG_0hWUUXZPq2I9Y1NJGA8JGp03b4G5BIIoAGTABMyr9Mwx91SjpF8wGoExwarv1Yh-frlfRAdn2nzKdQ-1aQUra_hNn3rvVgFMG1Eqi7izv24mVtXLEqYnE6Fz_zHBiNRLR02stEOfH4zh_c2ZEOU_JnYbAq_nqFxObB_8h2z2EO4RkLZ0skLRpOjjsF7YFmVG80DWMspDdA_wFjs95x-6_2g5cdP2mVgslOzYIibkN"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background-dark/20 to-transparent"></div>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto text-center py-20 reveal-hidden">
          <span className="material-symbols-outlined text-primary text-5xl mb-8">format_quote</span>
          <blockquote className="text-2xl md:text-4xl font-medium italic leading-snug mb-10 text-slate-200">
            "Nukebugs didn&apos;t just build our app; they redefined how we approach digital scale. Their technical depth in AI is unparalleled in the agency world."
          </blockquote>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-primary">
              <img
                alt="Client Avatar"
                data-alt="Professional portrait of a male executive in a suit"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEMznN8P3meOu0vBZ0mKQ00QY8QQRqBQLrnp80EHjixQXBmccTYE4okCemFWQ18K5avY7wnutKCRukJiMTLKbPKLqTqFH1X0sLIqT5CfEwk2EEvQmhBbyubX7Jn0gLXeNmtQ1npXBMdaKzclW3qmU_X-NitXpt_6wsxvfsURQVI4eUSmNLmdNTcZYtbHIi9Wnht3FKZxVKXr3ah3phPk-e3Bv163KyOkQlp4jA7mO6GEDuaWFyWv7WZC3MCoilmDch7GqAESpDBpql"
              />
            </div>
            <div className="font-bold text-lg">Marcus Sterling</div>
            <div className="text-primary text-sm font-medium uppercase tracking-widest">CTO, Global Logistics Corp</div>
          </div>
        </section>

        <section className="mt-20 p-12 md:p-20 bg-primary rounded-3xl text-background-dark text-center relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <h2 className="text-4xl md:text-6xl font-black mb-8 relative z-10">Ready to build the future?</h2>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <button className="bg-background-dark text-white px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform">Start a Project</button>
            <button className="border-2 border-background-dark/20 px-10 py-4 rounded-xl font-bold text-lg hover:bg-background-dark hover:text-white transition-all">
              View All Services
            </button>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.8261 17.4264C16.7203 18.1174 20.2244 18.5217 24 18.5217C27.7756 18.5217 31.2797 18.1174 34.1739 17.4264C36.9144 16.7722 39.9967 15.2331 41.3563 14.1648L24.8486 40.6391C24.4571 41.267 23.5429 41.267 23.1514 40.6391L6.64374 14.1648C8.00331 15.2331 11.0856 16.7722 13.8261 17.4264Z"
                fill="currentColor"
              ></path>
            </svg>
            <span className="font-bold uppercase tracking-widest text-sm">Nukebugs © 2024</span>
          </div>
          <div className="flex gap-8 text-sm text-slate-500 font-medium">
            <a className="hover:text-primary" href="#">
              LinkedIn
            </a>
            <a className="hover:text-primary" href="#">
              Twitter
            </a>
            <a className="hover:text-primary" href="#">
              Github
            </a>
            <a className="hover:text-primary" href="#">
              Dribbble
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
