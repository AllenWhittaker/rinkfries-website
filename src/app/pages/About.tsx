import { Link } from "react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { PageMeta } from "../components/PageMeta";

const TEAM_IMG = "https://images.unsplash.com/photo-1657818023416-76df9aa8e093?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMHRlYW0lMjBzdGFydHVwJTIwb2ZmaWNlJTIwY2FuYWRhfGVufDF8fHx8MTc3NDc5OTMzN3ww&ixlib=rb-4.1.0&q=80&w=1080";

const TEAM_MEMBERS = [
  {
    name: "Allen Whittaker",
    role: "CEO",
    bio: "Has built LMS platforms, enterprise apps, and systems for Canadian universities and pharmaceutical companies. Recognized as a Pfizer Pharmaceutical Business Partner.",
    initials: "AW",
    color: "#1D4ED8",
  },
  {
    name: "Al Burr",
    role: "CTO",
    bio: "Deep experience in service and platform management, testing infrastructure, and systems reliability. Ensures the platform runs right.",
    initials: "AB",
    color: "#16A34A",
  },
  {
    name: "Kristen LeBlanc",
    role: "CRO",
    bio: "A lifetime of sales and marketing experience across diverse industries. Leads revenue, partnerships, and market strategy.",
    initials: "KL",
    color: "#D97706",
  },
];

const VALUES = [
  {
    icon: "🏟️",
    title: "Built for real venues",
    desc: "We don't ship features in theory. We test them at real venues, during real games, with real customers. If it doesn't work at the rink, it doesn't ship.",
  },
  {
    icon: "🤝",
    title: "Vendor-first design",
    desc: "The people operating concession stands and kitchens are our first users. If the dashboard is confusing at 7PM on a Friday game night, we've failed.",
  },
  {
    icon: "🍁",
    title: "Canadian-made",
    desc: "Built in Nova Scotia for the Canadian market. We understand HST, bilingual requirements, and the unique pace of Atlantic Canada.",
  },
  {
    icon: "🚀",
    title: "Ship fast, ship right",
    desc: "We're not building slides. We're shipping software. Fast iteration with real operators and a serious commitment to stability in production.",
  },
];

export function About() {
  return (
    <div>
      <PageMeta
        title="About"
        description="Rink Fries is a mobile ordering platform built in Pembroke, Nova Scotia. Meet the team behind the product."
        path="/about"
      />
      {/* Hero */}
      <section className="bg-[#0D1B2A] py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#F59E0B] text-sm font-semibold tracking-widest uppercase mb-4">Our Story</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Started in hockey arenas.<br />Built for every venue.
            </h1>
            <p className="text-slate-300 text-xl leading-relaxed mb-6">
              We built RinkFries because we were tired of missing the game standing in concession lines.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              The idea started simple: let fans order from their phones so they never miss a goal. But once we deployed in our first arena in Nova Scotia and saw how dramatically it changed the experience for both fans and operators, we knew we were building something bigger.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Today, RinkFries powers mobile ordering for arenas, restaurants, and events across Atlantic Canada. Our V2 platform lets any venue operator or management company deploy it under their own brand.
            </p>
            <div className="flex items-center gap-2 mt-8 text-slate-400 text-sm">
              <MapPin size={14} className="text-[#F59E0B]" />
              Based in Pembroke, Nova Scotia, Canada
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img src={TEAM_IMG} alt="The RinkFries team" className="w-full h-72 lg:h-96 object-cover" />
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[#F59E0B] text-sm font-semibold tracking-widest uppercase mb-4">Mission</p>
          <blockquote className="text-3xl lg:text-4xl font-bold text-[#0D1B2A] leading-snug">
            "Make ordering seamless for every venue, every event, every community."
          </blockquote>
          <p className="text-slate-500 mt-6 text-lg">
            Not just faster ordering. A better experience for the fan, the operator, and the vendor.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#F59E0B] text-sm font-semibold tracking-widest uppercase mb-3">What we believe</p>
            <h2 className="text-3xl font-bold text-[#0D1B2A] mb-4">Our values.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="font-bold text-[#0D1B2A] mb-2">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#F59E0B] text-sm font-semibold tracking-widest uppercase mb-3">The Team</p>
            <h2 className="text-3xl font-bold text-[#0D1B2A] mb-4">People who've worked in venues.</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Our team has actually run concession stands, built payment infrastructure, and managed venue operations. We're not guessing at the problem.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.name} className="text-center">
                <div
                  className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl"
                  style={{ backgroundColor: member.color }}
                >
                  {member.initials}
                </div>
                <h3 className="font-bold text-[#0D1B2A] mb-0.5">{member.name}</h3>
                <p className="text-[#F59E0B] text-sm font-semibold mb-2">{member.role}</p>
                <p className="text-slate-500 text-xs leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-400 text-sm mt-10">
            We're a small team. We're hiring. <Link to="/contact" className="text-[#F59E0B] hover:underline">Get in touch →</Link>
          </p>
        </div>
      </section>

      {/* Company stage */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            {[
              { icon: "🏒", title: "V1 in production", desc: "Real venues, real orders, real money flowing. We're not a prototype." },
              { icon: "🚀", title: "V2 launching now", desc: "Multi-tenant white-label platform. The biggest release in our history." },
              { icon: "📍", title: "Nova Scotia-based", desc: "Early-stage startup with production deployments across Atlantic Canada." },
            ].map((item) => (
              <div key={item.title}>
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-[#0D1B2A] mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0D1B2A]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Want to work with us?</h2>
          <p className="text-slate-400 mb-8">Whether you're an operator, investor, or someone who wants to join the team, we'd love to hear from you.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#F59E0B] text-[#0D1B2A] rounded-lg font-bold hover:bg-[#D97706] transition-colors"
          >
            Get in Touch
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
