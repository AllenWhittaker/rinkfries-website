import { useState } from "react";
import { Mail, MessageSquare, CheckCircle2, ArrowRight } from "lucide-react";

const VENUE_TYPES = [
  "Arena / Rink",
  "Restaurant / Café",
  "Food Truck",
  "Event / Festival",
  "Food Hall",
  "Other",
];

const ROLES = [
  "Owner / Operator",
  "General Manager",
  "Food & Beverage Manager",
  "Technology / IT",
  "Agency / Consultant",
  "Investor",
  "Other",
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    venueType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-[#0D1B2A] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#F59E0B] text-sm font-semibold tracking-widest uppercase mb-4">Get in Touch</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Book a Demo.</h1>
          <p className="text-slate-400 text-xl max-w-2xl">
            See RinkFries in action — tailored to your venue type. 30 minutes, no sales pressure.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-3 gap-14">
          {/* Left sidebar — contact info */}
          <div>
            <h2 className="text-xl font-bold text-[#0D1B2A] mb-6">Contact Info</h2>

            <div className="space-y-5 mb-10">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#0D1B2A] flex items-center justify-center shrink-0">
                  <Mail size={16} className="text-[#F59E0B]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0D1B2A] mb-0.5">General Inquiries</p>
                  <a href="mailto:allen@rinkfries.ca" className="text-slate-500 text-sm hover:text-[#F59E0B] transition-colors">
                    allen@rinkfries.ca
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#0D1B2A] flex items-center justify-center shrink-0">
                  <MessageSquare size={16} className="text-[#F59E0B]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0D1B2A] mb-0.5">Support</p>
                  <a href="mailto:support@rinkfries.app" className="text-slate-500 text-sm hover:text-[#F59E0B] transition-colors">
                    support@rinkfries.app
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-8">
              <p className="font-semibold text-[#0D1B2A] mb-1 text-sm">📍 Based in Nova Scotia</p>
              <p className="text-slate-500 text-sm">Pembroke, Nova Scotia, Canada</p>
              <p className="text-slate-400 text-xs mt-1">Atlantic Standard Time (AST)</p>
            </div>

            <div className="flex gap-3 mb-8">
              <a
                href="https://www.linkedin.com/company/rink-fries-inc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-[#0D1B2A] text-white/60 hover:text-white flex items-center justify-center transition-colors"
              >
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/people/Rinkfries-Inc/61579460236317/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-[#0D1B2A] text-white/60 hover:text-white flex items-center justify-center transition-colors"
              >
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>

            {/* Calendly placeholder */}
            <div className="bg-slate-50 border border-dashed border-slate-300 rounded-xl p-5 text-center">
              <p className="text-slate-500 text-sm font-semibold mb-1">📅 Prefer to self-schedule?</p>
              <p className="text-slate-400 text-xs mb-3">Calendly integration coming soon</p>
              <div className="bg-slate-200 rounded-lg h-8 animate-pulse" />
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-12 text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-5">
                  <CheckCircle2 size={32} className="text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-[#0D1B2A] mb-3">Message received!</h2>
                <p className="text-slate-500 max-w-md mb-8">
                  Thanks for reaching out. Someone from our team will get back to you within one business day. We're based in Atlantic Canada — so expect a friendly reply.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", company: "", role: "", venueType: "", message: "" }); }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0D1B2A] text-white rounded-lg text-sm font-semibold hover:bg-[#1C2B3A] transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h2 className="text-xl font-bold text-[#0D1B2A] mb-7">Tell us about your venue</h2>

                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5" htmlFor="name">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/20 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5" htmlFor="email">
                      Work Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="alex@yourvenue.ca"
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/20 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5" htmlFor="company">
                      Company / Venue <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      required
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your Venue or Company"
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/20 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5" htmlFor="role">
                      Your Role
                    </label>
                    <select
                      id="role"
                      name="role"
                      value={form.role}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/20 transition-colors bg-white"
                    >
                      <option value="">Select your role…</option>
                      {ROLES.map((r) => (
                        <option key={r} value={r}>{r}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-5">
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5" htmlFor="venueType">
                    What type of venue? <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="venueType"
                    name="venueType"
                    required
                    value={form.venueType}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/20 transition-colors bg-white"
                  >
                    <option value="">Select venue type…</option>
                    {VENUE_TYPES.map((v) => (
                      <option key={v} value={v}>{v}</option>
                    ))}
                  </select>
                </div>

                <div className="mb-7">
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your venue, what you're trying to solve, and any questions you have…"
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/20 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#F59E0B] text-[#0D1B2A] rounded-lg font-bold hover:bg-[#D97706] transition-colors"
                >
                  Book a Demo
                  <ArrowRight size={16} />
                </button>

                <p className="text-slate-400 text-xs text-center mt-4">
                  We'll respond within one business day. No spam, no pressure.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
