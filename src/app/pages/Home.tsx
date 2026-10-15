import { Link } from "react-router";
import { ArrowRight, MapPin, Smartphone, BarChart3, Zap, QrCode, Users, Globe, CheckCircle2, ChevronRight } from "lucide-react";
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



// Live locations. Every venue has agreed to be listed (Allen, 2026-10-07).
// Add a shop's rinkfries.app link as `href` to make its name a link.
const LOCATION_GROUPS: { area: string; places: { name: string; town: string; href?: string }[] }[] = [
  {
    area: "Pictou County",
    places: [{ name: "Pictou County Wellness Centre", town: "New Glasgow" }],
  },
  {
    area: "Yarmouth area",
    places: [
      { name: "Third Cup Café", town: "Yarmouth" },
      { name: "Mama's Good Eats", town: "Yarmouth" },
      { name: "Mr. Singh's Quick and Tasty", town: "Yarmouth" },
      { name: "Breezeway Café", town: "Tusket" },
    ],
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

      {/* Where you can order today */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0D1B2A] mb-4">Where you can order today</h2>
            <p className="text-slate-500 text-lg mb-10">Live at rinks, cafés and restaurants in Nova Scotia, and growing.</p>
            <div className="grid sm:grid-cols-2 gap-8">
              {LOCATION_GROUPS.map((group) => (
                <div key={group.area}>
                  <p className="text-[#F59E0B] text-sm font-semibold tracking-widest uppercase mb-3">{group.area}</p>
                  <ul className="space-y-2.5">
                    {group.places.map((place) => (
                      <li key={place.name} className="flex items-start gap-2 text-sm text-slate-700">
                        <MapPin size={14} className="text-[#F59E0B] shrink-0 mt-0.5" />
                        <span>
                          {place.href ? (
                            <a href={place.href} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#0D1B2A] hover:text-[#D97706] hover:underline">{place.name}</a>
                          ) : (
                            <span className="font-semibold text-[#0D1B2A]">{place.name}</span>
                          )}
                          , {place.town}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <NovaScotiaMap />
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
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
              <a href="https://igniteatlantic.com" target="_blank" rel="noopener noreferrer" className="inline-block opacity-80 hover:opacity-100 transition-opacity">
                <img src="/ignite-atlantic.png" alt="Ignite Atlantic" className="h-14 sm:h-16 w-auto" />
              </a>
              <a href="https://sparknovascotia.com" target="_blank" rel="noopener noreferrer" className="inline-block opacity-80 hover:opacity-100 transition-opacity">
                <img src="/spark-nova-scotia.png" alt="Spark Nova Scotia" className="h-12 sm:h-14 w-auto" />
              </a>
            </div>
            <div className="mt-8 space-y-1.5 text-sm text-slate-400">
              <p>Second place, Spark Nova Scotia 2025.</p>
              <p>Nominated for Rising Star of the Year at the 2026 Yarmouth Business Awards.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Phone + laptop mockup, styled after the live v1 app (rinkfries.app)
const APP_FONT = { fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif" };

const KITCHEN_ORDERS = [
  { code: "7K2Q", status: "Preparing Order", badge: "bg-sky-50 text-sky-800 ring-sky-200", name: "Jordan", items: [["2x Poutine", "Extra gravy"], ["1x Pepsi", ""]], action: "Mark Ready" },
  { code: "M4TX", status: "Ready", badge: "bg-emerald-50 text-emerald-800 ring-emerald-200", name: "Sam", items: [["1x Hot Chocolate", "Medium"]], action: "Mark Complete" },
  { code: "Q9RB", status: "Order Received", badge: "bg-sky-50 text-sky-800 ring-sky-200", name: "Guest", items: [["2x Hot Dog", "Ketchup, mustard"]], action: "Confirm Order" },
];

const MENU_ITEMS = [
  { emoji: "🍟", name: "Poutine", desc: "Fries, curds, gravy", price: "$8.50" },
  { emoji: "🌭", name: "Hot Dog", desc: "All beef", price: "$5.00" },
  { emoji: "☕", name: "Hot Chocolate", desc: "Medium", price: "$3.00" },
  { emoji: "🧀", name: "Nachos", desc: "Cheese, salsa", price: "$9.00", soldOut: true },
];

function MockupVisual() {
  return (
    <div className="relative w-full max-w-md mx-auto h-80 lg:h-96" style={APP_FONT}>
      {/* Laptop frame: the v1 kitchen orders screen */}
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
          <div className="flex bg-gray-100">
            <div className="w-8 bg-[#002C5F] shrink-0" />
            <div className="flex-1 p-2.5 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-900">Order Management</span>
                <span className="flex items-center gap-1 text-[8px] text-slate-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live updates active
                </span>
              </div>
              {KITCHEN_ORDERS.map((o) => (
                <div key={o.code} className="bg-white rounded-lg shadow-sm px-2 py-1.5">
                  <div className="flex items-center gap-1 mb-1">
                    <span className={`text-[7px] font-semibold px-1.5 py-px rounded-full ring-1 ${o.badge}`}>{o.status}</span>
                    <span className="text-[7px] font-mono font-bold bg-slate-100 text-slate-700 px-1 rounded">{o.code}</span>
                    <span className="text-[7px] text-slate-400 ml-auto">{o.name} · Pickup</span>
                  </div>
                  <div className="flex items-end justify-between gap-2">
                    <div className="min-w-0">
                      {o.items.map(([item, opt]) => (
                        <p key={item} className="text-[8px] text-slate-800 leading-tight truncate">
                          {item}{opt && <span className="text-slate-400"> · {opt}</span>}
                        </p>
                      ))}
                    </div>
                    <span className="shrink-0 text-[7px] font-black text-white bg-[#002C5F] rounded px-1.5 py-0.5">{o.action}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Phone frame: the v1 customer menu */}
      <div className="absolute left-0 bottom-0 w-32 lg:w-36">
        <div className="bg-[#1C2B3A] rounded-3xl border-2 border-white/15 shadow-2xl overflow-hidden">
          <div className="bg-[#002C5F] h-5 flex items-center justify-center">
            <div className="w-8 h-1 rounded-full bg-white/20" />
          </div>
          <div className="bg-white">
            <div className="bg-[#002C5F] px-2 pt-3 pb-2">
              <p className="text-white text-[11px] font-black leading-tight">Rink Canteen</p>
            </div>
            <div className="flex gap-1 px-1.5 py-1 border-b border-slate-100">
              <span className="text-[6px] font-bold rounded-full px-1.5 py-px bg-[#002C5F] text-white">Hot Food</span>
              <span className="text-[6px] font-bold rounded-full px-1.5 py-px border border-slate-200 text-slate-600">Drinks</span>
            </div>
            {MENU_ITEMS.map((m) => (
              <div key={m.name} className={`flex items-center gap-1 px-1.5 py-1 border-b border-slate-100 ${m.soldOut ? "opacity-60 grayscale bg-slate-50" : ""}`}>
                <div className="w-5 h-5 rounded bg-[#FBEEDB] flex items-center justify-center text-[10px] shrink-0">{m.emoji}</div>
                <div className="min-w-0 flex-1">
                  <p className="text-[7px] font-bold text-slate-900 truncate leading-tight">{m.name}</p>
                  <p className="text-[6px] text-slate-500 truncate leading-tight">{m.soldOut ? "Sold Out" : m.desc}</p>
                </div>
                <span className="text-[7px] font-extrabold text-slate-900">{m.price}</span>
                <span className="w-3 h-3 rounded-full bg-blue-50 text-blue-600 text-[7px] flex items-center justify-center shrink-0">›</span>
              </div>
            ))}
            <div className="h-5 bg-[#002C5F]" />
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

// Static map of Nova Scotia (outline: Natural Earth, public domain) with one
// bubble per area. No map provider, so no third party requests.
const NS_OUTLINE = "M177 157 L181 155 L186 148 L192 139 L202 138 L204 133 L219 140 L235 154 L247 151 L253 151 L267 160 L271 164 L273 168 L281 167 L291 164 L309 164 L329 169 L328 176 L325 181 L340 180 L350 185 L353 183 L355 179 L375 170 L399 152 L402 154 L404 161 L407 173 L416 181 L428 182 L443 176 L449 181 L456 191 L463 204 L463 209 L454 213 L446 219 L479 221 L483 224 L487 229 L483 234 L480 237 L474 234 L463 237 L453 243 L443 247 L436 247 L428 251 L422 255 L415 257 L393 269 L370 276 L347 289 L323 297 L298 306 L293 307 L286 306 L272 316 L265 314 L258 316 L250 314 L244 310 L248 320 L250 329 L247 333 L244 337 L229 336 L224 333 L217 328 L214 321 L207 315 L202 323 L203 329 L197 336 L191 323 L180 328 L175 342 L177 346 L181 357 L175 362 L171 361 L163 377 L152 382 L142 398 L129 411 L125 419 L104 438 L96 437 L90 438 L81 445 L80 461 L76 459 L72 460 L70 465 L67 465 L59 461 L50 463 L43 460 L34 437 L29 429 L20 426 L18 431 L15 436 L6 426 L0 391 L0 382 L9 352 L31 325 L24 325 L4 343 L6 339 L10 334 L16 326 L26 319 L39 315 L48 314 L54 311 L63 304 L65 300 L57 304 L44 308 L47 303 L51 300 L122 252 L136 244 L164 234 L168 227 L164 223 L176 227 L175 232 L173 236 L172 243 L173 249 L185 253 L194 265 L190 248 L198 239 L230 226 L258 225 L266 219 L243 215 L216 218 L199 213 L175 216 L150 213 L143 217 L136 225 L128 221 L124 221 L121 218 L129 205 L154 185 L169 167 L174 164 L177 157 Z M480 142 L483 143 L496 137 L502 137 L502 141 L491 147 L486 150 L492 154 L492 156 L485 162 L481 168 L484 174 L496 168 L501 168 L508 170 L514 168 L518 165 L539 142 L540 139 L517 144 L515 140 L530 126 L529 119 L536 107 L543 101 L548 97 L556 93 L561 99 L562 109 L575 107 L587 109 L597 113 L598 116 L598 120 L595 126 L590 132 L600 139 L599 142 L582 151 L573 159 L564 169 L547 181 L520 189 L512 189 L502 187 L492 187 L482 190 L472 190 L467 192 L463 191 L459 188 L451 179 L447 172 L443 142 L444 127 L451 112 L461 102 L467 94 L491 48 L496 37 L502 28 L512 20 L526 5 L530 1 L538 0 L545 1 L543 6 L544 12 L553 32 L552 36 L548 53 L538 79 L536 94 L537 99 L533 106 L529 112 L514 122 L505 125 L498 129 L480 142 Z";

function MapBubble({ x, y, count, label, labelDx }: { x: number; y: number; count: number; label: string; labelDx: number }) {
  return (
    <g>
      <circle cx={x} cy={y} r="30" fill="#F59E0B" opacity="0.35" className="animate-ping" style={{ transformBox: "fill-box", transformOrigin: "center" }} />
      <circle cx={x} cy={y} r="22" fill="#F59E0B" stroke="#fff" strokeWidth="5" />
      <circle cx={x + 19} cy={y - 19} r="15" fill="#0D1B2A" stroke="#fff" strokeWidth="2" />
      <text x={x + 19} y={y - 13} textAnchor="middle" fontSize="17" fontWeight="700" fill="#fff">{count}</text>
      <text x={x + labelDx} y={y + 8} textAnchor={labelDx < 0 ? "end" : "start"} fontSize="24" fontWeight="700" fill="#0D1B2A">{label}</text>
    </g>
  );
}

function NovaScotiaMap() {
  const [pictou, yarmouth] = LOCATION_GROUPS;
  return (
    <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 sm:p-6">
      <svg viewBox="-40 -20 680 510" className="w-full h-auto" role="img" aria-label="Map of Nova Scotia showing Rink Fries locations in Pictou County and the Yarmouth area">
        <path d={NS_OUTLINE} fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="2" strokeLinejoin="round" />
        <MapBubble x={334} y={189} count={pictou.places.length} label="Pictou County" labelDx={-38} />
        <MapBubble x={12} y={420} count={yarmouth.places.length} label="Yarmouth area" labelDx={44} />
      </svg>
    </div>
  );
}
