import { useState } from "react";
import { Link } from "react-router";
import { PageMeta } from "../components/PageMeta";
import {
  Smartphone, BarChart3, Zap, QrCode, Users, Globe, Clock,
  CreditCard, Settings, ShieldCheck, Tag, Monitor, ChevronRight,
  CheckCircle2, LayoutGrid, Mail, Truck, Printer, Ticket, RotateCcw, Percent,
  CalendarClock, Coins, ChefHat, Layers
} from "lucide-react";

const TABS = [
  { id: "customers", label: "For customers", icon: "📱" },
  { id: "kitchen", label: "For the kitchen", icon: "🍳" },
  { id: "managers", label: "For managers", icon: "📋" },
];

const TAB_CONTENT = {
  customers: {
    headline: "Order from your phone.",
    subhead: "Customers order and pay on their phone, then pick up when it's ready.",
    image: "/images/app-customer-phones.png",
    features: [
      { title: "Order on your phone", desc: "Browse the menu, choose your options and order from your seat at the rink or on your way in." },
      { title: "Pay on your phone", desc: "Checkout happens on your phone, so there is nothing to pay at the counter." },
      { title: "Pickup code", desc: "Every order gets a pickup code, so staff hand the right food to the right person." },
      { title: "Email or text updates", desc: "Get updates by email or text as your order is received, made and ready, plus your receipt by email." },
      { title: "Tipping", desc: "Add a tip at checkout." },
      { title: "Delivery", desc: "Where the shop offers it, have your order brought to your seat, your table or your door." },
      { title: "Pre-order for a set time", desc: "Where the shop turns it on, order ahead, pay now and choose a pickup time." },
    ],
  },
  kitchen: {
    headline: "Built for a busy kitchen.",
    subhead: "New orders arrive on the kitchen screen as they come in, so staff can focus on cooking.",
    image: "/images/app-kitchen-screen.png",
    features: [
      { title: "Kitchen order screen", desc: "Every new order appears on the kitchen screen with a chime." },
      { title: "Stations", desc: "Split your menu into stations, like Bar and Grill, and set each kitchen screen to show just its station." },
      { title: "Automatic printing", desc: "Run the kitchen screen in Chrome on a Windows, Mac or Linux computer and tickets print as orders come in. We help you set it up." },
      { title: "Print tickets", desc: "Print any order's ticket right from the kitchen screen." },
      { title: "Pre-order shopping list", desc: "See exactly what to make for each pre-order window, built from paid pre-orders. Print it or export it." },
    ],
  },
  managers: {
    headline: "Run your shop your way.",
    subhead: "Set up your menu, your hours and your team, and take payments through Square or Moneris.",
    image: "https://images.unsplash.com/photo-1548496600-1ca5fd14a56a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwdHJ1Y2slMjBmZXN0aXZhbCUyMGV2ZW50JTIwY3Jvd2R8ZW58MXx8fHwxNzc0Nzk5MzMzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    features: [
      { title: "We build your menu", desc: "Send us your menu and photos, and we'll set it up for you when you get started." },
      { title: "Menus with options", desc: "Build your menu with options, and switch any item to sold out when you run out." },
      { title: "Opening hours", desc: "Set when you take orders, and close for the day with one switch." },
      { title: "Staff roles", desc: "Owner, Manager, Lead and Worker, each with the right access." },
      { title: "Refunds", desc: "Refund a whole order or a single item." },
      { title: "Pre-order windows", desc: "Open pre-ordering for the times that suit you." },
      { title: "Sales analytics", desc: "See your sales by day and export them to CSV." },
      { title: "Canadian sales tax", desc: "HST set up for you, with tax included pricing if you prefer." },
      { title: "Square and Moneris", desc: "Take payments through the provider you already use." },
    ],
  },
};

const ALL_FEATURES = [
  { icon: <Smartphone size={20} />, title: "Order on your phone", desc: "Order and pay on any phone, no app to download." },
  { icon: <Ticket size={20} />, title: "Pickup codes", desc: "Every order gets a code for pickup." },
  { icon: <Mail size={20} />, title: "Email and text updates", desc: "Customers hear from you at every step." },
  { icon: <Truck size={20} />, title: "Delivery", desc: "To the seat, the table or the door, where you offer it." },
  { icon: <CalendarClock size={20} />, title: "Pre-ordering", desc: "Order ahead for a set pickup time." },
  { icon: <Coins size={20} />, title: "Tipping", desc: "Customers can add a tip at checkout." },
  { icon: <Monitor size={20} />, title: "Kitchen order screen", desc: "New orders appear with a chime." },
  { icon: <Layers size={20} />, title: "Stations", desc: "Split one order across Bar, Grill and more." },
  { icon: <Printer size={20} />, title: "Automatic printing", desc: "Tickets print as orders come in." },
  { icon: <LayoutGrid size={20} />, title: "Menus and options", desc: "Build menus with options and sold out switches." },
  { icon: <ChefHat size={20} />, title: "Menu setup included", desc: "Send us your menu and photos. We build it for you." },
  { icon: <Users size={20} />, title: "Hours and staff roles", desc: "Set when you take orders and who can do what." },
  { icon: <RotateCcw size={20} />, title: "Refunds", desc: "Refund a whole order or a single item." },
  { icon: <BarChart3 size={20} />, title: "Sales analytics", desc: "Sales by day, with CSV export." },
  { icon: <Percent size={20} />, title: "Canadian sales tax", desc: "HST set up for you." },
  { icon: <CreditCard size={20} />, title: "Square and Moneris", desc: "Take payments through the provider you use." },
];

export function Product() {
  const [activeTab, setActiveTab] = useState("customers");
  const content = TAB_CONTENT[activeTab as keyof typeof TAB_CONTENT];

  return (
    <div>
      <PageMeta
        title="Product"
        description="Mobile ordering for rinks, restaurants, cafés and food trucks. Kitchen screen, stations, pre-ordering, analytics, and Square or Moneris payments."
        path="/product"
      />
      {/* Hero */}
      <section className="bg-[#0D1B2A] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-[#F59E0B] text-sm font-semibold tracking-widest uppercase mb-4">Platform Overview</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Everything you need to take orders.
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-10">
            Built for rink canteens, restaurants, cafés and food trucks. Here is what Rink Fries does today.
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
      <section className="bg-white border-b border-slate-200 sticky top-[6.25rem] z-40">
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
          <p className="text-center text-slate-500 text-sm mt-10">
            Supported payment providers: Square and Moneris. Using a different provider? Email{" "}
            <a href="mailto:support@rinkfries.ca" className="text-[#F59E0B] hover:underline">support@rinkfries.ca</a>{" "}
            and we'll see what we can do.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0D1B2A]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">See it in action.</h2>
          <p className="text-slate-400 mb-8">Book a 30 minute demo and we'll walk you through it for your shop.</p>
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
