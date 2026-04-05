import { Link } from "react-router";
import { ArrowRight, Smartphone, BarChart3, Zap, QrCode, Users, Globe, CheckCircle2, ChevronRight } from "lucide-react";
import { PageMeta } from "../components/PageMeta";

const ARENA_IMG = "https://images.unsplash.com/photo-1762445964939-123200d655ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBhcmVuYSUyMHN0YWRpdW0lMjBuaWdodCUyMGxpZ2h0c3xlbnwxfHx8fDE3NzQ3OTkzMzd8MA&ixlib=rb-4.1.0&q=80&w=1080";

const VALUE_PROPS = [
  {
    icon: "🏒",
    title: "Venues & Arenas",
    desc: "Mobile ordering, seat delivery, and concession management. Fans order from their phone and food comes to their seat. No more line-ups.",
    features: ["Seat-based ordering", "Multi-vendor concourse", "Real-time KDS"],
    color: "from-blue-500/10 to-blue-600/5",
    borderColor: "border-blue-500/20",
  },
  {
    icon: "🍽️",
    title: "Restaurants & Cafés",
    desc: "Table-side ordering without the app download. Guests scan, browse, order, and pay. Reduce wait staff bottlenecks, increase table turns.",
    features: ["QR code table ordering", "No app required", "Tipping & fee config"],
    color: "from-amber-500/10 to-amber-600/5",
    borderColor: "border-amber-500/20",
  },
  {
    icon: "🎪",
    title: "Events & Food Trucks",
    desc: "Pop-up ordering with event credits, ticketed experiences, and temporary vendor onboarding. From small markets to 10,000-person festivals.",
    features: ["Event credits & ticketing", "Temporary vendors", "Settlement reports"],
    color: "from-emerald-500/10 to-emerald-600/5",
    borderColor: "border-emerald-500/20",
  },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Scan or visit",
    desc: "Customer scans a QR code at their seat, table, or entrance. They can also just visit the venue's ordering URL.",
  },
  {
    step: "02",
    title: "Browse & order",
    desc: "They browse the menu, customize their order, and pay. No app download needed.",
  },
  {
    step: "03",
    title: "Vendor receives",
    desc: "The vendor receives the order on their dashboard or Kitchen Display System in real time.",
  },
  {
    step: "04",
    title: "Order fulfilled",
    desc: "Order is prepared and delivered to their seat, their table, or a pickup window.",
  },
];



export function Home() {
  return (
    <div>
      <PageMeta
        title="Rink Fries | Mobile Ordering for Venues, Restaurants & Events"
        description="Mobile ordering infrastructure for arenas, restaurants, food trucks, and events. White-label ready. Built in Nova Scotia, Canada."
        path="/"
      />
      {/* Hero */}
      <section
        className="relative min-h-[92vh] flex items-center bg-[#0D1B2A] overflow-hidden"
      >
        {/* Background arena image with overlay */}
        <div className="absolute inset-0">
          <img
            src={ARENA_IMG}
            alt="Hockey arena"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A] via-[#0D1B2A]/90 to-[#0D1B2A]/60" />
        </div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Copy */}
          <div>
            <h1 className="text-4xl lg:text-[3.25rem] font-bold text-white leading-[1.15] mb-6" style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}>
              Mobile ordering infrastructure for venues, restaurants, and events.
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-lg">
              We power the ordering experience, not the food. Vendors keep their brand, their menu, their customers. You just get more orders, faster.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#F59E0B] text-[#0D1B2A] rounded-lg font-semibold hover:bg-[#D97706] transition-colors"
              >
                Book a Demo
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/product"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/5 transition-colors"
              >
                See How It Works
              </Link>
            </div>
          </div>

          {/* Right — Stylized mockup */}
          <div className="relative flex items-center justify-center">
            <MockupVisual />
          </div>
        </div>
      </section>

      {/* Value props — 3 columns */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0D1B2A] mb-4">
              One platform. Every venue type.
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Whether you're running a 5,000-seat arena, a 12-table café, or a weekend festival, RinkFries scales to fit.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {VALUE_PROPS.map((vp) => (
              <div
                key={vp.title}
                className={`rounded-2xl border ${vp.borderColor} bg-gradient-to-b ${vp.color} p-7 flex flex-col`}
              >
                <div className="text-4xl mb-4">{vp.icon}</div>
                <h3 className="text-xl font-bold text-[#0D1B2A] mb-3">{vp.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-5 flex-1">{vp.desc}</p>
                <ul className="space-y-2">
                  {vp.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle2 size={14} className="text-[#F59E0B] shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform section */}
      <section className="py-24 bg-[#0D1B2A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#F59E0B] text-sm font-semibold tracking-widest uppercase mb-4">White-Label Platform</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                One platform. Every ordering scenario.
              </h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Run your own branded ordering experience. Your domain, your logo, your customers. Powered by our infrastructure.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Our V2 multi-tenant architecture lets franchise groups, venue management companies, and food hall operators run dozens of branded experiences from a single backend. Each one fully customized.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {["Custom domains", "Your branding", "Menu control", "Tenant isolation"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-slate-300 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                    {item}
                  </div>
                ))}
              </div>
              <Link
                to="/white-label"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#F59E0B] text-[#0D1B2A] rounded-lg font-semibold text-sm hover:bg-[#D97706] transition-colors"
              >
                Explore White-Label
                <ChevronRight size={14} />
              </Link>
            </div>
            <div className="relative">
              <PlatformDiagram />
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#F59E0B] text-sm font-semibold tracking-widest uppercase mb-3">Simple by design</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0D1B2A] mb-4">How it works</h2>
            <p className="text-slate-500 max-w-xl mx-auto">From QR scan to fulfilled order in four steps.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_IT_WORKS.map((step, i) => (
              <div key={step.step} className="relative">
                {i < HOW_IT_WORKS.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-gradient-to-r from-[#F59E0B]/40 to-transparent z-10" style={{ width: "calc(100% - 3rem)" }} />
                )}
                <div className="bg-white rounded-2xl border border-slate-200 p-6 h-full">
                  <div className="text-3xl font-black text-[#F59E0B]/30 mb-3">{step.step}</div>
                  <h3 className="text-lg font-bold text-[#0D1B2A] mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-[#0D1B2A]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to modernize your venue?
          </h2>
          <p className="text-slate-400 mb-8 text-lg">
            Join venues across Atlantic Canada already running on RinkFries. Setup takes days, not months.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#F59E0B] text-[#0D1B2A] rounded-lg font-bold text-lg hover:bg-[#D97706] transition-colors"
          >
            Book a Demo
            <ArrowRight size={18} />
          </Link>

          {/* Backed by */}
          <div className="mt-16 pt-10 border-t border-white/10">
            <p className="text-xs uppercase tracking-widest text-slate-500 mb-5">Backed by</p>
            <a href="https://igniteatlantic.com" target="_blank" rel="noopener noreferrer" className="inline-block opacity-50 hover:opacity-80 transition-opacity">
              <img src="/ignite-atlantic.png" alt="Ignite Atlantic" className="h-10 w-auto" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

// Stylized phone + laptop mockup
function MockupVisual() {
  return (
    <div className="relative w-full max-w-md mx-auto h-80 lg:h-96">
      {/* Laptop frame */}
      <div className="absolute right-0 top-8 w-72 lg:w-80">
        <div className="bg-[#1C2B3A] rounded-xl border border-white/10 shadow-2xl overflow-hidden">
          {/* Laptop top bar */}
          <div className="bg-[#152032] px-3 py-2 flex items-center gap-1.5 border-b border-white/5">
            <div className="w-2 h-2 rounded-full bg-red-500/70" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
            <div className="w-2 h-2 rounded-full bg-green-500/70" />
            <div className="flex-1 mx-3 bg-white/5 rounded text-xs text-center text-white/30 py-0.5">
              dashboard.rinkfries.com
            </div>
          </div>
          {/* Dashboard content */}
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-white/70 text-xs font-semibold">Live Orders</span>
              <span className="text-[#F59E0B] text-xs">● 12 active</span>
            </div>
            {[
              { table: "Seat 14A", item: "Nachos + Coke", status: "Preparing", color: "bg-amber-500/20 text-amber-400" },
              { table: "Table 7", item: "Burger Combo", status: "Ready", color: "bg-green-500/20 text-green-400" },
              { table: "Section B3", item: "Hot Dog x2", status: "Received", color: "bg-blue-500/20 text-blue-400" },
            ].map((order) => (
              <div key={order.table} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                <div>
                  <p className="text-white/80 text-xs font-medium">{order.table}</p>
                  <p className="text-white/40 text-xs">{order.item}</p>
                </div>
                <span className={`text-xs px-2 py-0.5 rounded-full ${order.color}`}>{order.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Phone frame */}
      <div className="absolute left-0 bottom-0 w-28 lg:w-32">
        <div className="bg-[#1C2B3A] rounded-3xl border-2 border-white/15 shadow-2xl overflow-hidden">
          <div className="bg-[#152032] h-5 flex items-center justify-center">
            <div className="w-8 h-1 rounded-full bg-white/20" />
          </div>
          <div className="p-2">
            <div className="bg-[#0D1B2A] rounded-xl p-2 mb-1.5">
              <p className="text-[#F59E0B] text-xs font-bold mb-1">Your Arena</p>
              <p className="text-white/50 text-xs mb-2">Seat 14A · Section C</p>
              <div className="space-y-1">
                {["Nachos $8.50", "Hot Dog $5.00", "Pepsi $4.00"].map((item) => (
                  <div key={item} className="bg-white/5 rounded px-2 py-1 text-white/60 text-xs">{item}</div>
                ))}
              </div>
            </div>
            <button className="w-full bg-[#F59E0B] text-[#0D1B2A] rounded-lg py-1.5 text-xs font-bold">
              Place Order
            </button>
          </div>
        </div>
      </div>

      {/* Floating badge */}
      <div className="absolute top-0 left-10 bg-white rounded-full px-3 py-1.5 shadow-lg flex items-center gap-1.5">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-slate-700 text-xs font-semibold">Order Received</span>
      </div>
    </div>
  );
}

// Platform multi-brand diagram
function PlatformDiagram() {
  const brands = [
    { name: "RinkFries", color: "#3B82F6", icon: "🏒" },
    { name: "LocalEats", color: "#10B981", icon: "🍽️" },
    { name: "StreetEats", color: "#F59E0B", icon: "🚚" },
  ];

  return (
    <div className="relative flex flex-col items-center gap-5">
      {/* Central hub */}
      <div className="relative bg-[#1C2B3A] border border-white/10 rounded-2xl p-5 w-full text-center">
        <div className="inline-flex items-center gap-2 mb-2">
          <div className="w-5 h-5 bg-[#F59E0B] rounded-md" />
          <span className="text-white font-bold text-sm">RinkFries Infrastructure</span>
        </div>
        <p className="text-slate-400 text-xs">V2 Multi-tenant Platform</p>
        <div className="flex flex-wrap justify-center gap-2 mt-3">
          {["Orders", "Payments", "KDS", "Analytics", "Menus"].map((t) => (
            <span key={t} className="px-2 py-0.5 bg-white/5 text-slate-400 rounded text-xs">{t}</span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2 text-slate-600 text-xs">
        <div className="h-px w-8 bg-[#F59E0B]/50" />
        Powers each tenant independently
        <div className="h-px w-8 bg-[#F59E0B]/50" />
      </div>

      {/* Brand tenants */}
      <div className="grid grid-cols-3 gap-3 w-full">
        {brands.map((b) => (
          <div
            key={b.name}
            className="bg-[#1C2B3A] border border-white/10 rounded-xl p-3 text-center"
          >
            <div className="text-2xl mb-1">{b.icon}</div>
            <p className="text-white text-xs font-semibold leading-tight">{b.name}</p>
            <div
              className="w-full h-0.5 rounded-full mt-2"
              style={{ backgroundColor: b.color }}
            />
            <p className="text-slate-500 text-xs mt-1">own brand</p>
          </div>
        ))}
      </div>
    </div>
  );
}
