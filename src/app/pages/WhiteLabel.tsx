import { Link } from "react-router";
import { ChevronRight, CheckCircle2, ArrowRight } from "lucide-react";

const USE_CASES = [
  { icon: "🏢", title: "Arena Management Companies", desc: "Power ordering for your entire portfolio of arenas under one contract, each with their own branding and configuration." },
  { icon: "🍜", title: "Food Hall Operators", desc: "Give each vendor in your food hall their own branded section, while you manage the entire venue from one dashboard." },
  { icon: "🔗", title: "Franchise Groups", desc: "Deploy consistent ordering experiences across all franchise locations, each with their own menu and customization." },
  { icon: "🎉", title: "Event Production Companies", desc: "Spin up branded ordering for every event you produce. No recurring per-event setup fees." },
  { icon: "🏛️", title: "Municipal Recreation Departments", desc: "A single contract powers ordering at all your recreation facilities — arenas, pools, community centres." },
];

const PARTNER_STEPS = [
  {
    step: "01",
    title: "Contact us",
    desc: "Reach out via the form below or email allen@rinkfries.ca. Tell us about your portfolio and what you're trying to build.",
  },
  {
    step: "02",
    title: "We configure your tenant",
    desc: "Our team sets up your branded platform — domain, branding, menus, and permissions. Usually ready within a week.",
  },
  {
    step: "03",
    title: "You launch your platform",
    desc: "Go live under your own brand. Your customers order from your platform. You own the relationship.",
  },
];

const WHITELABEL_FEATURES = [
  "Custom domain (yourvenueorders.com)",
  "Your logo, colors, and typography",
  "Fully isolated tenant data",
  "Separate menu management per tenant",
  "Independent fee and tax configuration",
  "Per-tenant staff and role management",
  "White-labeled email notifications",
  "Custom QR codes with your branding",
  "Partner-level analytics dashboard",
  "Dedicated onboarding support",
  "Priority infrastructure SLA",
  "Co-branded partner materials",
];

// Real platform tenants
const BRANDED_TENANTS = [
  {
    name: "RinkFries",
    domain: "rinkfries.app",
    primaryColor: "#F59E0B",
    icon: "🏒",
    menu: ["Arena canteens", "Rink concessions", "Venue ordering"],
  },
  {
    name: "LocalEats",
    domain: "localeats.mobi",
    primaryColor: "#16A34A",
    icon: "🍽️",
    menu: ["Restaurants & cafés", "Table ordering", "Dine-in pickup"],
  },
  {
    name: "StreetEats",
    domain: "streeteats.mobi",
    primaryColor: "#DC2626",
    icon: "🚚",
    menu: ["Food trucks", "Mobile vendors", "Pop-up markets"],
  },
];

export function WhiteLabel() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0D1B2A] py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#F59E0B] text-sm font-semibold tracking-widest uppercase mb-4">White-Label Platform</p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Your brand.<br />Our infrastructure.
              </h1>
              <p className="text-slate-300 text-xl leading-relaxed mb-8">
                Deploy a fully branded mobile ordering platform under your own domain — without building the technology yourself.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                RinkFries powers the entire ordering stack — payments, menus, KDS, analytics — invisibly. Your customers only ever see your brand.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#F59E0B] text-[#0D1B2A] rounded-lg font-bold hover:bg-[#D97706] transition-colors"
              >
                Become a Partner
                <ArrowRight size={16} />
              </Link>
            </div>
            <div>
              <BrandedTenants />
            </div>
          </div>
        </div>
      </section>

      {/* Features list */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-[#F59E0B] text-sm font-semibold tracking-widest uppercase mb-3">What's included</p>
              <h2 className="text-3xl font-bold text-[#0D1B2A] mb-6">
                Everything you need to launch your branded platform.
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                No partial implementations. Every white-label partner gets access to the full platform — configured and branded for you from day one.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {WHITELABEL_FEATURES.map((f) => (
                  <div key={f} className="flex items-center gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 size={15} className="text-[#F59E0B] shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#0D1B2A] rounded-2xl p-8">
              <p className="text-[#F59E0B] text-xs font-semibold tracking-widest uppercase mb-4">Architecture</p>
              <ArchitectureDiagram />
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#0D1B2A] mb-4">Who it's built for.</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              The white-label platform is designed for operators who manage multiple venues, brands, or events under one umbrella.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {USE_CASES.map((uc) => (
              <div key={uc.title} className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="text-3xl mb-3">{uc.icon}</div>
                <h3 className="font-bold text-[#0D1B2A] mb-2">{uc.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How partnership works */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#F59E0B] text-sm font-semibold tracking-widest uppercase mb-3">Partnership process</p>
            <h2 className="text-3xl font-bold text-[#0D1B2A] mb-4">Three steps to your branded platform.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PARTNER_STEPS.map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-[#F59E0B] text-[#0D1B2A] font-black text-lg flex items-center justify-center mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="font-bold text-[#0D1B2A] mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0D1B2A]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to build your branded platform?</h2>
          <p className="text-slate-400 mb-8">
            Get in touch and we'll walk you through what a white-label partnership looks like for your organization.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#F59E0B] text-[#0D1B2A] rounded-lg font-bold hover:bg-[#D97706] transition-colors"
          >
            Become a Partner
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}

function BrandedTenants() {
  return (
    <div className="grid grid-cols-3 gap-3">
      {BRANDED_TENANTS.map((t) => (
        <div key={t.name} className="bg-[#152032] rounded-2xl overflow-hidden border border-white/10">
          {/* Branded header */}
          <div className="p-3 border-b border-white/5" style={{ backgroundColor: t.primaryColor + "22" }}>
            <div className="text-2xl mb-1">{t.icon}</div>
            <p className="text-white text-xs font-bold leading-tight">{t.name}</p>
            <p className="text-white/30 text-xs mt-0.5">{t.domain}</p>
            <div className="w-full h-0.5 rounded-full mt-2" style={{ backgroundColor: t.primaryColor }} />
          </div>
          {/* Menu items */}
          <div className="p-2 space-y-1">
            {t.menu.map((item) => (
              <div key={item} className="bg-white/5 rounded px-2 py-1 text-white/50 text-xs">{item}</div>
            ))}
          </div>
          <div className="px-2 pb-2">
            <button
              className="w-full py-1 rounded text-xs font-bold text-[#0D1B2A]"
              style={{ backgroundColor: t.primaryColor }}
            >
              Order Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

function ArchitectureDiagram() {
  return (
    <div className="space-y-3">
      <div className="bg-[#F59E0B] rounded-xl p-3 text-center">
        <p className="text-[#0D1B2A] font-bold text-sm">RinkFries Core Infrastructure</p>
        <p className="text-[#0D1B2A]/60 text-xs">Payments · KDS · Menus · Analytics</p>
      </div>
      <div className="text-center text-slate-500 text-xs">↓ Multi-tenant layer ↓</div>
      <div className="grid grid-cols-3 gap-2">
        {["Tenant A", "Tenant B", "Tenant C"].map((t) => (
          <div key={t} className="bg-white/5 border border-white/10 rounded-lg p-2 text-center">
            <p className="text-white/70 text-xs font-semibold">{t}</p>
            <p className="text-white/30 text-xs">own brand</p>
          </div>
        ))}
      </div>
      <div className="text-center text-slate-500 text-xs">↓ Customer-facing ↓</div>
      <div className="grid grid-cols-3 gap-2">
        {["yourvenue.ca", "theirfood.ca", "ourbrand.ca"].map((d) => (
          <div key={d} className="bg-white/5 rounded px-2 py-1.5 text-center">
            <p className="text-[#F59E0B] text-xs">{d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
