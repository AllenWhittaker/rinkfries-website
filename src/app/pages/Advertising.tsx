import { Link } from "react-router";
import { ArrowRight, Target, TrendingUp, Eye, Zap } from "lucide-react";
import { PageMeta } from "../components/PageMeta";

const AD_IMG = "https://images.unsplash.com/photo-1762417582263-7f423d344b77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlcnRpc2luZyUyMGJpbGxib2FyZCUyMGRpZ2l0YWwlMjBkaXNwbGF5fGVufDF8fHx8MTc3NDc5OTM0MHww&ixlib=rb-4.1.0&q=80&w=1080";

const AD_PLACEMENTS = [
  {
    icon: <Target size={22} />,
    title: "Sponsored Menu Items",
    desc: "Your product appears as a featured or sponsored item in the menu, complete with your branding, imagery, and a direct link. Shown at the point of selection.",
    highlight: "Highest conversion placement",
  },
  {
    icon: <Eye size={22} />,
    title: "Banner Placements",
    desc: "Display banners appear on the ordering home screen, cart page, and order confirmation. Multiple touchpoints in a single order.",
    highlight: "Max impression volume",
  },
  {
    icon: <Zap size={22} />,
    title: "Event Sponsorship Integration",
    desc: "Co-brand your product with a venue's event. Your logo and messaging appear throughout the event's ordering experience, from the hero banner all the way to the receipt.",
    highlight: "Full event coverage",
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Post-Order Upsell Placements",
    desc: "After order submission, customers see a full-screen brand moment. Ideal for loyalty programs, upcoming promotions, or partner cross-sells.",
    highlight: "100% viewable impression",
  },
];

const AUDIENCE_STATS = [
  { value: "100%", label: "Purchase Intent" },
  { value: "Live", label: "At Point of Purchase" },
  { value: "Zero", label: "Ad Blindness" },
  { value: "Direct", label: "Venue Targeting" },
];

const IDEAL_ADVERTISERS = [
  "Beverage brands (beer, soft drinks, energy)",
  "Snack and food brands",
  "Sports apparel and merchandise",
  "Financial products (credit cards, rewards programs)",
  "Local businesses and regional brands",
  "Event and entertainment promoters",
];

export function Advertising() {
  return (
    <div>
      <PageMeta
        title="Advertising"
        description="Reach fans and foodies at the point of purchase. Targeted in-app advertising across venues, arenas, and events."
        path="/advertising"
      />
      {/* Hero */}
      <section className="relative bg-[#0D1B2A] py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={AD_IMG} alt="Advertising" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B2A] via-[#0D1B2A]/90 to-[#0D1B2A]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-[#F59E0B] text-sm font-semibold tracking-widest uppercase mb-4">Advertising Opportunities</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Reach customers at the point of purchase.
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Your brand reaches consumers while they're actively ordering food and beverages at venues and events. That's the highest-intent advertising moment there is.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="mailto:support@rinkfries.ca"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#F59E0B] text-[#0D1B2A] rounded-lg font-bold hover:bg-[#D97706] transition-colors"
            >
              Advertise With Us
              <ArrowRight size={16} />
            </a>
            <a
              href="mailto:support@rinkfries.ca?subject=Media%20Kit%20Request"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/5 transition-colors"
            >
              Request Media Kit
            </a>
          </div>
        </div>
      </section>

      {/* Audience stats */}
      <section className="bg-white py-16 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {AUDIENCE_STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl font-black text-[#0D1B2A] mb-1">{s.value}</div>
                <div className="text-slate-500 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why it works */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#F59E0B] text-sm font-semibold tracking-widest uppercase mb-3">Why it works</p>
            <h2 className="text-3xl font-bold text-[#0D1B2A] mb-4">Context is everything.</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Traditional digital ads interrupt. RinkFries ads integrate. Your brand reaches customers at the exact moment they're deciding what to eat and drink, not when they're scrolling social media.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: "🍺", title: "Active purchase intent", desc: "Users are in ordering mode, ready to spend. They're not passively browsing." },
              { icon: "📍", title: "Physical-context targeting", desc: "Your ad appears at specific venues and events. Geographic precision at its most relevant." },
              { icon: "🎯", title: "Captive audience", desc: "Users are engaged with the ordering flow. No banner blindness, no scroll-past." },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-slate-200 rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-[#0D1B2A] mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad placements */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#0D1B2A] mb-4">Ad placement options.</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              From subtle sponsored items to full-event co-branding. Flexible formats to match your campaign goals.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {AD_PLACEMENTS.map((p) => (
              <div key={p.title} className="border border-slate-200 rounded-xl p-7 bg-white hover:border-[#F59E0B]/40 hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#0D1B2A] text-[#F59E0B] flex items-center justify-center shrink-0">
                    {p.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-[#0D1B2A]">{p.title}</h3>
                      <span className="text-xs bg-[#F59E0B]/15 text-[#D97706] px-2 py-0.5 rounded-full font-semibold">
                        {p.highlight}
                      </span>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal advertisers */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#0D1B2A] mb-3">Who advertises on RinkFries?</h2>
            <p className="text-slate-500">Our platform is a natural fit for brands that want to be part of the game-day or event experience.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {IDEAL_ADVERTISERS.map((item) => (
              <div key={item} className="flex items-center gap-3 bg-white border border-slate-200 rounded-lg px-4 py-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] shrink-0" />
                <span className="text-slate-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media kit / contact */}
      <section id="media-kit" className="py-20 bg-[#0D1B2A]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to reach our audience?</h2>
          <p className="text-slate-400 mb-6">
            Contact our team to discuss placement options, venue targeting, and campaign packages. We'll send over our media kit with full audience data.
          </p>
          <a
            href="mailto:support@rinkfries.ca"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#F59E0B] text-[#0D1B2A] rounded-lg font-bold hover:bg-[#D97706] transition-colors"
          >
            Advertise With Us
            <ArrowRight size={16} />
          </a>
          <p className="mt-4 text-slate-500 text-sm">Or email us directly at <a href="mailto:support@rinkfries.ca" className="text-[#F59E0B]">support@rinkfries.ca</a></p>
        </div>
      </section>
    </div>
  );
}
