import { Link } from "react-router";
import { ArrowRight, Smartphone, BarChart3, Zap, QrCode, Users, Globe, CheckCircle2, ChevronRight } from "lucide-react";
import { PageMeta } from "../components/PageMeta";

const ARENA_IMG = "https://images.unsplash.com/photo-1762445964939-123200d655ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBhcmVuYSUyMHN0YWRpdW0lMjBuaWdodCUyMGxpZ2h0c3xlbnwxfHx8fDE3NzQ3OTkzMzd8MA&ixlib=rb-4.1.0&q=80&w=1080";

const VALUE_PROPS = [
  {
    icon: "📱",
    title: "For customers",
    desc: "Order and pay on your phone, from your seat at the rink or on your way in. Get a pickup code and updates by email or text, then grab your food when it's ready.",
    features: ["Order and pay on your phone", "Pickup code and email or text updates", "Delivery and pre-ordering where the shop offers them"],
    color: "from-blue-500/10 to-blue-600/5",
    borderColor: "border-blue-500/20",
  },
  {
    icon: "🍳",
    title: "For the kitchen",
    desc: "Orders land on the kitchen screen with a chime. Split your menu into stations, like Bar and Grill, and set each screen to show just its station.",
    features: ["Kitchen order screen with a chime", "Stations for each part of the kitchen", "Print tickets right from the screen"],
    color: "from-amber-500/10 to-amber-600/5",
    borderColor: "border-amber-500/20",
  },
  {
    icon: "📋",
    title: "For managers",
    desc: "Build your menu, set your opening hours, give your staff the right roles, handle refunds and see your sales in one place.",
    features: ["Menus, options and sold out switches", "Sales analytics with CSV export", "Payments through Square, Moneris or Stripe"],
    color: "from-emerald-500/10 to-emerald-600/5",
    borderColor: "border-emerald-500/20",
  },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Open the menu",
    desc: "Scan the code at the counter or go to rinkfries.app, then choose where you're ordering.",
  },
  {
    step: "02",
    title: "Order and pay",
    desc: "Pick your food, choose your options and pay on your phone.",
  },
  {
    step: "03",
    title: "The kitchen gets it",
    desc: "Your order shows up on the kitchen screen with a chime, and you get a pickup code and updates by email or text.",
  },
  {
    step: "04",
    title: "Pick it up",
    desc: "When it's ready, show your pickup code and grab your food.",
  },
];



export function Home() {
  return (
    <div>
      <PageMeta
        title="Rink Fries | Mobile Ordering for Rinks, Restaurants, Cafés and Food Trucks"
        description="Order on your phone and pick up when it's ready. Mobile ordering for rink canteens, cafés and local food spots. Built in Nova Scotia, Canada."
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
              Order from your phone. Pick up when it's ready.
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-lg">
              We power the ordering, not the food. Customers order and pay on their phone, then pick up when it's ready or have it brought to them where the shop offers delivery. You keep your menu, your staff and your customers.
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
              One app for the whole operation.
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Rink Fries connects your customers, your kitchen and the person running the shop.
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
          <p className="text-center text-slate-500 text-sm mt-10">
            Supported payment providers: Square, Moneris and Stripe. Using a different provider? Email{" "}
            <a href="mailto:support@rinkfries.ca" className="text-[#F59E0B] hover:underline">support@rinkfries.ca</a>{" "}
            and we'll see what we can do.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#F59E0B] text-sm font-semibold tracking-widest uppercase mb-3">Simple by design</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0D1B2A] mb-4">How it works</h2>
            <p className="text-slate-500 max-w-xl mx-auto">From order to pickup in four steps.</p>
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
            Ready to bring Rink Fries to your rink or café?
          </h2>
          <p className="text-slate-400 mb-8 text-lg">
            Tell us about your place and we'll show you how it works.
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
              rinkfries.app
            </div>
          </div>
          {/* Dashboard content */}
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-white/70 text-xs font-semibold">Kitchen Screen</span>
              <span className="text-[#F59E0B] text-xs">● 12 active</span>
            </div>
            {[
              { table: "Order 214 · Grill", item: "Poutine + Coke", status: "Preparing", color: "bg-amber-500/20 text-amber-400" },
              { table: "Order 215 · Bar", item: "Hot Chocolate", status: "Ready", color: "bg-green-500/20 text-green-400" },
              { table: "Order 216 · Grill", item: "Hot Dog x2", status: "Received", color: "bg-blue-500/20 text-blue-400" },
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
              <p className="text-[#F59E0B] text-xs font-bold mb-1">Your Rink</p>
              <p className="text-white/50 text-xs mb-2">Pickup at the canteen</p>
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
        <span className="text-slate-700 text-xs font-semibold">Order Ready</span>
      </div>
    </div>
  );
}
