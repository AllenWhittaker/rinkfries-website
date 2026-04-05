import { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router";
import { Menu, X, ChevronDown } from "lucide-react";

const NAV_LINKS = [
  { label: "Product", href: "/product" },
  { label: "White-Label", href: "/white-label" },
  { label: "Advertising", href: "/advertising" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="min-h-screen bg-white text-slate-900">
      {/* Sticky Nav */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#0D1B2A]/98 backdrop-blur-md shadow-lg" : "bg-[#0D1B2A]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <img src="/logo-white.png" alt="Rink Fries" className="h-9 w-auto" />
              <span className="text-white font-bold tracking-tight text-lg">
                Rink<span className="text-[#F59E0B]">Fries</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-3.5 py-2 rounded-md text-sm transition-colors ${
                    location.pathname === link.href
                      ? "text-[#F59E0B] bg-white/5"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <Link
                to="/contact"
                className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 bg-[#F59E0B] text-[#0D1B2A] rounded-lg text-sm font-semibold hover:bg-[#D97706] transition-colors"
              >
                Book a Demo
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden text-white p-1"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-[#0D1B2A] border-t border-white/10 px-6 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-3 py-2.5 rounded-md text-sm ${
                  location.pathname === link.href
                    ? "text-[#F59E0B] bg-white/5"
                    : "text-slate-300"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-3 px-4 py-2.5 bg-[#F59E0B] text-[#0D1B2A] rounded-lg text-sm font-semibold text-center"
            >
              Book a Demo
            </Link>
          </div>
        )}
      </header>

      {/* Page content */}
      <main className="pt-16">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0D1B2A] text-slate-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <img src="/logo-white.png" alt="Rink Fries" className="h-8 w-auto" />
              <span className="text-white font-bold tracking-tight">
                Rink<span className="text-[#F59E0B]">Fries</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Mobile ordering infrastructure for venues, restaurants, and events. Built in Nova Scotia, Canada.
            </p>
            <p className="text-xs text-slate-500">📍 Pembroke, Nova Scotia</p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Platform</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Product Overview", href: "/product" },
                { label: "White-Label", href: "/white-label" },
                { label: "Advertising", href: "/advertising" },
                { label: "Book a Demo", href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "About Us", href: "/about" },
                { label: "Blog & Resources", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="mailto:allen@rinkfries.ca" className="hover:text-white transition-colors">
                  allen@rinkfries.ca
                </a>
              </li>
              <li>
                <a href="mailto:support@rinkfries.app" className="hover:text-white transition-colors">
                  support@rinkfries.app
                </a>
              </li>
            </ul>
            <div className="flex gap-3 mt-5">
              <a href="https://www.linkedin.com/company/rink-fries-inc" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-8 h-8 rounded-md bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/people/Rinkfries-Inc/61579460236317/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-8 h-8 rounded-md bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Rink Fries Inc. All rights reserved. Built in Nova Scotia, Canada.</p>
          <div className="flex gap-5">
            <Link to="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <Link to="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link to="/cookies" className="hover:text-slate-300 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
