import { useState } from "react";
import { Link } from "react-router";
import { ArrowRight, Calendar, Clock, ChevronRight } from "lucide-react";
import { PageMeta } from "../components/PageMeta";

const CATEGORIES = ["All", "Product Updates", "Industry Insights", "Case Studies", "White Papers"];

const BLOG_POSTS: {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  featured: boolean;
}[] = [];

const CATEGORY_COLORS: Record<string, string> = {
  "Product Updates": "bg-blue-100 text-blue-700",
  "Industry Insights": "bg-purple-100 text-purple-700",
  "Case Studies": "bg-green-100 text-green-700",
  "White Papers": "bg-amber-100 text-amber-700",
};

export function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const featured = BLOG_POSTS.find((p) => p.featured);
  const rest = BLOG_POSTS.filter(
    (p) =>
      !p.featured &&
      (activeCategory === "All" || p.category === activeCategory)
  );

  return (
    <div>
      <PageMeta
        title="Blog"
        description="Product updates, industry insights, and case studies from the Rink Fries team."
        path="/blog"
      />
      {/* Header */}
      <section className="bg-[#0D1B2A] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[#F59E0B] text-sm font-semibold tracking-widest uppercase mb-4">Blog & Resources</p>
          <h1 className="text-4xl font-bold text-white mb-4">Insights for venue operators.</h1>
          <p className="text-slate-400 text-xl max-w-2xl">
            Product updates, industry research, case studies, and practical guides for the people building the future of live venue experiences.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        {/* Featured post */}
        {featured && (
          <div className="mb-14">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">Featured</p>
            <div className="grid lg:grid-cols-2 gap-8 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-64 lg:h-auto">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 w-fit ${CATEGORY_COLORS[featured.category]}`}>
                  {featured.category}
                </span>
                <h2 className="text-2xl font-bold text-[#0D1B2A] mb-3 leading-tight">{featured.title}</h2>
                <p className="text-slate-500 leading-relaxed mb-5">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-slate-400 text-sm mb-6">
                  <span className="flex items-center gap-1.5"><Calendar size={13} />{featured.date}</span>
                  <span className="flex items-center gap-1.5"><Clock size={13} />{featured.readTime}</span>
                </div>
                <a href="#" className="inline-flex items-center gap-2 text-[#F59E0B] font-semibold text-sm hover:gap-3 transition-all">
                  Read Article <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                activeCategory === cat
                  ? "bg-[#0D1B2A] text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post) => (
            <article
              key={post.id}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md hover:border-slate-300 transition-all"
            >
              <div className="h-44 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <span className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full mb-3 ${CATEGORY_COLORS[post.category]}`}>
                  {post.category}
                </span>
                <h3 className="font-bold text-[#0D1B2A] mb-2 leading-snug line-clamp-2">{post.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-slate-400 text-xs">
                    <span className="flex items-center gap-1"><Calendar size={11} />{post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={11} />{post.readTime}</span>
                  </div>
                  <a href="#" className="text-[#F59E0B] hover:text-[#D97706]">
                    <ChevronRight size={18} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {rest.length === 0 && !featured && (
          <div className="text-center py-20">
            <div className="text-5xl mb-6">📝</div>
            <h2 className="text-2xl font-bold text-[#0D1B2A] mb-3">Coming Soon</h2>
            <p className="text-slate-500 max-w-md mx-auto mb-6">
              We're working on product updates, industry insights, case studies, and practical guides for venue operators. Check back soon.
            </p>
            <a
              href="mailto:support@rinkfries.ca?subject=Blog%20Updates"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0D1B2A] text-white rounded-lg text-sm font-semibold hover:bg-[#1C2B3A] transition-colors"
            >
              Notify Me When We Publish
              <ArrowRight size={14} />
            </a>
          </div>
        )}
        {rest.length === 0 && featured && (
          <div className="text-center py-16 text-slate-400">
            No posts in this category yet. Check back soon.
          </div>
        )}
      </div>
    </div>
  );
}
