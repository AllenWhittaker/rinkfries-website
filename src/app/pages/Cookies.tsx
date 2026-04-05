import { PageMeta } from "../components/PageMeta";

export function Cookies() {
  return (
    <div className="bg-white">
      <PageMeta title="Cookie Policy" description="How Rink Fries uses cookies and similar technologies." path="/cookies" />
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-20">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Cookie Policy</h1>
        <p className="text-sm text-slate-500 mb-10">Last Updated: March 28, 2026</p>

        <p className="text-slate-700 text-[15px] leading-relaxed mb-8">
          This Cookie Policy explains how <strong>Rink Fries Inc.</strong> ("Rink Fries") uses cookies and similar technologies on the Rink Fries platform.
        </p>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-700 text-[15px] leading-relaxed">
          <Section title="1. What Are Cookies">
            <p>Cookies are small text files stored on your device that help websites function properly and securely.</p>
          </Section>

          <Section title="2. Cookies We Use">
            <p>Rink Fries uses only essential and functional cookies, including:</p>

            <h4 className="font-semibold text-slate-900 mt-4">a. Authentication Cookies</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>An httpOnly refresh token cookie (<code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm">rf_refresh</code>) is set when you log in</li>
              <li>This cookie maintains your authenticated session across page visits</li>
              <li>Duration: 7 days or until you log out</li>
              <li>This cookie is not accessible to JavaScript and is transmitted only over HTTPS in production</li>
            </ul>

            <h4 className="font-semibold text-slate-900 mt-4">b. Security Cookies</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>CSRF protection cookies to prevent unauthorized requests and abuse</li>
            </ul>

            <h4 className="font-semibold text-slate-900 mt-4">c. Language Preference</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Your language selection (English or French) is stored in your browser's local storage</li>
              <li>This preference persists until you change it or clear your browser data</li>
            </ul>
          </Section>

          <Section title="3. No Advertising Cookies">
            <p>Rink Fries does <strong>not</strong> use:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Advertising cookies</li>
              <li>Third-party tracking pixels</li>
              <li>Behavioral advertising tools</li>
            </ul>
          </Section>

          <Section title="4. Error Monitoring">
            <p>
              Rink Fries may use error monitoring services (e.g., Sentry) to detect and fix technical issues. If enabled, these services collect error stack traces, page URLs, and general browser/device information. They do <strong>not</strong> collect personally identifiable information by default and are used solely for platform reliability.
            </p>
          </Section>

          <Section title="5. Managing Cookies">
            <p>Most browsers allow users to manage or disable cookies. Disabling cookies will prevent you from logging in and using the Platform.</p>
          </Section>

          <Section title="6. Governing Law">
            <p>This Policy is governed by the laws of the Province of Nova Scotia and the laws of Canada applicable therein.</p>
          </Section>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h3 className="text-lg font-semibold text-slate-900 mb-3">{title}</h3>
      {children}
    </section>
  );
}
