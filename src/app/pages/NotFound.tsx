import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-white">
      <div className="text-center px-6">
        <div className="text-8xl font-black text-slate-100 mb-4">404</div>
        <h1 className="text-3xl font-bold text-[#0D1B2A] mb-3">Page not found.</h1>
        <p className="text-slate-500 mb-8 max-w-sm mx-auto">
          Looks like this page wandered off to get a hot dog. Let's get you back on track.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0D1B2A] text-white rounded-lg font-semibold hover:bg-[#1C2B3A] transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
