import { useState } from "react";
import { Link } from "react-router";
import { PageMeta } from "../components/PageMeta";
import {
  Smartphone, BarChart3, Zap, QrCode, Users, Globe, Clock,
  CreditCard, Settings, ShieldCheck, Tag, Monitor, ChevronRight,
  CheckCircle2, LayoutGrid
} from "lucide-react";

const TABS = [
  { id: "venues", label: "Venues & Arenas", icon: "🏒" },
  { id: "restaurants", label: "Restaurants & Cafés", icon: "🍽️" },
  { id: "events", label: "Events & Festivals", icon: "🎪" },
  { id: "whitelabel", label: "White-Label", icon: "🏷️" },
];

const TAB_CONTENT = {
  venues: {
    headline: "Built for the arena environment.",
    subhead: "Manage everything from concession stands to seat delivery on one dashboard. Fans stay in their seats.",
    image: "https://images.unsplash.com/photo-1762445964939-123200d655ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBhcmVuYSUyMHN0YWRpdW0lMjBuaWdodCUyMGxpZ2h0c3xlbnwxfHx8fDE3NzQ3OTkzMzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    features: [
      { title: "Seat delivery & section ordering", desc: "Customers order by seat number. Orders routed to the right concession stand automatically." },
      { title: "Multi-vendor concourse management", desc: "Run multiple vendors under one roof. Each gets their own dashboard, menu, and KDS." },
      { title: "Real-time Kitchen Display System", desc: "Instant order notifications. Staff see every order in sequence, no paper tickets." },
      { title: "Order throttling & capacity control", desc: "Set max orders per time window to prevent kitchen overload during peak periods." },
      { title: "Analytics & reporting", desc: "Per-vendor revenue, average order size, peak hour reports, and more." },
    ],
  },
  restaurants: {
    headline: "Table-side ordering without the friction.",
    subhead: "Guests scan a QR code, browse the menu, and pay. No app download, no waiting for a server.",
    image: "https://images.unsplash.com/photo-1723985860719-dfcb45214606?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwdGFibGUlMjBxciUyMGNvZGUlMjBzY2FubmluZ3xlbnwxfHx8fDE3NzQ3OTkzMzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    features: [
      { title: "QR code table ordering", desc: "One QR code per table. No equipment to install. Customers use their own phone." },
      { title: "No app download required", desc: "Web-based ordering works on any device. Scan, browse, done. Zero download barrier." },
      { title: "Menu builder with modifiers", desc: "Full menu management with categories, items, options, add-ons, and dietary tags." },
      { title: "Tipping & service fee config", desc: "Configure suggested tip amounts, mandatory fees, and split payment rules." },
      { title: "Operating hours & auto-pause", desc: "Set service hours. The platform pauses ordering automatically when you're closed." },
    ],
  },
  events: {
    headline: "From pop-ups to major festivals.",
    subhead: "Spin up a fully operational ordering system for a one-day event or run a recurring weekly market. Same platform, infinite flexibility.",
    image: "https://images.unsplash.com/photo-1548496600-1ca5fd14a56a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwdHJ1Y2slMjBmZXN0aXZhbCUyMGV2ZW50JTIwY3Jvd2R8ZW58MXx8fHwxNzc0Nzk5MzMzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    features: [
      { title: "Event credit & ticket-based ordering", desc: "Issue event credits tied to ticket purchases. Pre-loaded balances, no cash handling." },
      { title: "Temporary vendor onboarding", desc: "Add vendors for a single event. They're live in minutes, off the platform when done." },
      { title: "Event-specific menus & pricing", desc: "Different menus for different events. Seasonal pricing, limited-time items, and specials." },
      { title: "Settlement & reconciliation reports", desc: "End-of-event financial summaries for every vendor. Pay out with confidence." },
    ],
  },
  whitelabel: {
    headline: "Your brand. Our infrastructure.",
    subhead: "Deploy a fully branded ordering platform under your own domain, powered by RinkFries behind the scenes.",
    image: "https://images.unsplash.com/photo-1768120147807-8236818aa9f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwb3JkZXJpbmclMjBraW9zayUyMHRlY2hub2xvZ3klMjB2ZW51ZXxlbnwxfHx8fDE3NzQ3OTkzNDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    features: [
      { title: "Custom domain & branding", desc: "Your logo, your colors, your domain. Customers never see the RinkFries name." },
      { title: "Multi-tenant architecture", desc: "One platform, unlimited brands. Each tenant is fully isolated with its own data." },
      { title: "Tenant-level configuration", desc: "Menus, fees, branding, and domains configured independently per tenant." },
      { title: "Ideal for enterprise operators", desc: "Franchise groups, venue management companies, food hall operators, and municipal orgs." },
    ],
  },
};

const ALL_FEATURES = [
  { icon: <Smartphone size={20} />, title: "Mobile ordering (no app)", desc: "Web-based ordering works on any phone, instantly." },
  { icon: <QrCode size={20} />, title: "Seat delivery / table service", desc: "Order by seat number or table and it gets fulfilled in place." },
  { icon: <Monitor size={20} />, title: "Real-time KDS", desc: "Kitchen display system with live order queue." },
  { icon: <LayoutGrid size={20} />, title: "Menu builder (drag & drop)", desc: "Build menus, categories, and modifiers visually." },
  { icon: <Users size={20} />, title: "Multi-vendor per venue", desc: "Run multiple vendors from one central platform." },
  { icon: <Tag size={20} />, title: "Event credits & ticketing", desc: "Pre-loaded credit ordering tied to ticket purchases." },
  { icon: <CreditCard size={20} />, title: "Payment processing", desc: "Stripe and Square supported out of the box." },
  { icon: <Zap size={20} />, title: "Order throttling", desc: "Set max orders per window to protect kitchen capacity." },
  { icon: <Globe size={20} />, title: "Multi-language (EN/FR)", desc: "Full bilingual support for Canadian operators." },
  { icon: <BarChart3 size={20} />, title: "Analytics dashboard", desc: "Revenue, order volume, and performance insights." },
  { icon: <Settings size={20} />, title: "White-label / custom domains", desc: "Deploy fully branded under your own domain." },
  { icon: <Users size={20} />, title: "Staff management & roles", desc: "Owner, manager, and staff permission levels." },
  { icon: <ShieldCheck size={20} />, title: "Canadian tax configuration", desc: "HST, GST, and PST rates by province." },
  { icon: <QrCode size={20} />, title: "QR code generation", desc: "Generate and print QR codes for any table or seat." },
  { icon: <Clock size={20} />, title: "Operating hours & overrides", desc: "Auto-pause when closed, with holiday overrides." },
  { icon: <ShieldCheck size={20} />, title: "Age-restricted item controls", desc: "Flag age-restricted items and require staff confirmation." },
];

export function Product() {
  const [activeTab, setActiveTab] = useState("venues");
  const content = TAB_CONTENT[activeTab as keyof typeof TAB_CONTENT];

  return (
    <div>
      <PageMeta
        title="Product"
        description="QR ordering, real-time dashboards, multi-vendor support, and integrated payments. Built for arenas, restaurants, and events."
        path="/product"
      />
      {/* Hero */}
      <section className="bg-[#0D1B2A] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-[#F59E0B] text-sm font-semibold tracking-widest uppercase mb-4">Platform Overview</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            The complete venue ordering platform.
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-10">
            Purpose-built for live venues, restaurants, and events. Not retrofitted from generic SaaS.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#F59E0B] text-[#0D1B2A] rounded-lg font-semibold hover:bg-[#D97706] transition-colors"
          >
            Book a Demo
            <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      {/* Tab navigation */}
      <section className="bg-white border-b border-slate-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex overflow-x-auto">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-4 text-sm font-semibold border-b-2 whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? "border-[#F59E0B] text-[#0D1B2A]"
                    : "border-transparent text-slate-500 hover:text-slate-700"
                }`}
              >
                <span>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab content */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* Features */}
            <div>
              <h2 className="text-3xl font-bold text-[#0D1B2A] mb-3">{content.headline}</h2>
              <p className="text-slate-500 text-lg mb-10 leading-relaxed">{content.subhead}</p>
              <div className="space-y-5">
                {content.features.map((f) => (
                  <div key={f.title} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#F59E0B]/15 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 size={14} className="text-[#F59E0B]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#0D1B2A] mb-1">{f.title}</p>
                      <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Image */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
              <img
                src={content.image}
                alt={content.headline}
                className="w-full h-72 lg:h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Full feature grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#0D1B2A] mb-4">Everything you need, built in.</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              No add-ons, no bolt-ons. Every feature ships with the platform.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ALL_FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-[#F59E0B]/40 hover:bg-amber-50/30 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-[#0D1B2A] text-[#F59E0B] flex items-center justify-center mb-3">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-[#0D1B2A] mb-1.5 text-sm">{feature.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0D1B2A]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">See it in action.</h2>
          <p className="text-slate-400 mb-8">Book a 30-minute demo and we'll walk through your specific venue type.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#F59E0B] text-[#0D1B2A] rounded-lg font-bold hover:bg-[#D97706] transition-colors"
          >
            Book a Demo
            <ChevronRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
