import { Link } from "react-router";
import { ArrowRight, Eye } from "lucide-react";
import { PageMeta } from "../components/PageMeta";

const AD_IMG = "https://images.unsplash.com/photo-1762417582263-7f423d344b77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlcnRpc2luZyUyMGJpbGxib2FyZCUyMGRpZ2l0YWwlMjBkaXNwbGF5fGVufDF8fHx8MTc3NDc5OTM0MHww&ixlib=rb-4.1.0&q=80&w=1080";

const AD_PLACEMENTS = [
  {
    icon: <Eye size={22} />,
    title: "Sponsored browse cards",
    desc: "Your banner appears as a card in the browse list on rinkfries.app, where fans pick a canteen. Active ads take turns, so every ad gets seen.",
    highlight: "Live today",
  },
];

const AUDIENCE_STATS = [
  { value: "$100", label: "Per month" },
  { value: "$1,000", label: "Per year, save $200" },
  { value: "Your link", label: "Every click goes to the page you choose" },
  { value: "Reporting", label: "Impressions and clicks" },
];

const IDEAL_ADVERTISERS = [
  "Local businesses and regional brands",
  "Snack and food brands",
  "Soft drink and beverage brands",
  "Sports apparel and merchandise",
  "Event and entertainment promoters",
];

export function Advertising() {
  return (
    <div>
      <PageMeta
        title="Advertising"
        description="Put your business in front of local fans while they choose where to order. Sponsored cards in the Rink Fries browse list."
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
            Reach local fans while they choose what to eat.
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Sponsored cards appear in the list fans browse to find a canteen on rinkfries.app. Your banner links to any page you choose: your website, a menu, a promotion or a sign up form.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="mailto:support@rinkfries.ca"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#F59E0B] text-[#0D1B2A] rounded-lg font-bold hover:bg-[#D97706] transition-colors"
            >
              Advertise With Us
              <ArrowRight size={16} />
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
          <p className="text-center text-slate-500 text-sm mt-10">
            All prices include HST. Every sponsor is also featured on our social media.
          </p>
        </div>
      </section>

      {/* Why it works */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#F59E0B] text-sm font-semibold tracking-widest uppercase mb-3">Why it works</p>
            <h2 className="text-3xl font-bold text-[#0D1B2A] mb-4">Context is everything.</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              People open Rink Fries when they're hungry and ready to order. Your ad sits in the list they scroll to pick a canteen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: "🍟", title: "Ready to order", desc: "Fans come to Rink Fries to buy food, so your ad meets them when they're ready to spend." },
              { icon: "📍", title: "A local crowd", desc: "Rink Fries is built in Nova Scotia for local rinks, so your ad reaches people close to home." },
              { icon: "🤝", title: "Simple to run", desc: "Send us your banner, your link and your dates. We set it up and send you the impression and click counts." },
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
            <h2 className="text-3xl font-bold text-[#0D1B2A] mb-4">How sponsored cards work.</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              One simple format, live in the app today.
            </p>
          </div>
          <div className="grid gap-6 max-w-2xl mx-auto">
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
            <h2 className="text-2xl font-bold text-[#0D1B2A] mb-3">Who advertises on Rink Fries?</h2>
            <p className="text-slate-500">A natural fit for businesses that want to be part of game night.</p>
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
      <section className="py-20 bg-[#0D1B2A]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to reach our audience?</h2>
          <p className="text-slate-400 mb-6">
            Tell us about your business and the dates you have in mind. We'll set up your sponsored card and send you the numbers.
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
