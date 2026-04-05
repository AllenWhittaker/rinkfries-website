import { PageMeta } from "../components/PageMeta";

export function Privacy() {
  return (
    <div className="bg-white">
      <PageMeta title="Privacy Policy" description="How Rink Fries collects, uses, and protects your personal information." path="/privacy" />
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-20">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-slate-500 mb-10">Last Updated: March 28, 2026</p>

        <p className="text-slate-700 text-[15px] leading-relaxed mb-8">
          Rink Fries Inc. ("Rink Fries", "we", "our", or "us") respects your privacy and is committed to protecting personal and business information collected through the Rink Fries platform (the "Platform"). This Privacy Policy explains what information we collect, how we use it, how it is shared, and the choices available to you.
        </p>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-700 text-[15px] leading-relaxed">
          <Section title="1. Information We Collect">
            <p>We identify our collection purposes before or at the time of collection. We collect information directly from users, vendors, and venues, as well as automatically through use of the Platform.</p>

            <h4 className="font-semibold text-slate-900 mt-4">1.1 Personal Information (Users & Guests)</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>First and last name</li>
              <li>Email address (used as a unique identifier)</li>
              <li>Phone number</li>
              <li>Account credentials (passwords are stored in hashed form)</li>
              <li>Guest checkout contact details (email and/or phone number)</li>
              <li>Communication preferences (e.g., order update notifications, promotional opt-in/opt-out)</li>
            </ul>

            <h4 className="font-semibold text-slate-900 mt-4">1.2 Order & Transaction Data</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Items ordered, prices, quantities, and totals</li>
              <li>Special instructions submitted with orders</li>
              <li>Order timestamps and fulfillment status</li>
              <li>Transaction identifiers and payment references</li>
              <li>IP address at the time of order placement (for fraud prevention)</li>
            </ul>

            <h4 className="font-semibold text-slate-900 mt-4">1.3 Location Information</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Precise geolocation data</strong> (latitude and longitude) when users enable location services</li>
              <li>Venue, shop, and business physical addresses</li>
              <li>Seat or pickup location details (e.g., section, row, seat number)</li>
            </ul>
            <p>Location data is used strictly to enable location-based services and order fulfillment.</p>

            <h4 className="font-semibold text-slate-900 mt-4">1.4 Payment Information</h4>
            <p>Rink Fries does <strong>not</strong> store full credit card numbers. We store limited payment-related metadata, including:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Stripe and Square customer IDs</li>
              <li>Transaction IDs and status responses</li>
              <li>Gateway metadata associated with payments</li>
            </ul>

            <h4 className="font-semibold text-slate-900 mt-4">1.5 Business & Vendor Information</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Business name and contact information</li>
              <li>Tax registration numbers (e.g., GST/HST)</li>
              <li>Venue association and operational details</li>
              <li><strong>Encrypted OAuth access tokens</strong> for Stripe and Square integrations</li>
            </ul>

            <h4 className="font-semibold text-slate-900 mt-4">1.6 Authentication & Technical Data</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>IP address (stored with orders and payment transactions for fraud prevention and security)</li>
              <li>Authentication session data (login timestamps, impersonation audit logs for staff accounts)</li>
            </ul>
            <p>When error monitoring is enabled, we may collect error stack traces, page URLs, and general browser/device information solely for platform reliability.</p>

            <h4 className="font-semibold text-slate-900 mt-4">1.7 Google Authentication</h4>
            <p>
              Users may authenticate using Google Sign-In. When you choose this option, we receive your Google account identifier, name, and email address. We do not access your Google contacts, calendar, or other Google services.
            </p>
          </Section>

          <Section title="2. How We Use Information">
            <h4 className="font-semibold text-slate-900">2.1 Platform Operations</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Processing and fulfilling orders</li>
              <li>Displaying order details to vendors</li>
              <li>Facilitating event ticket sales and access</li>
              <li>Managing user accounts and authentication</li>
            </ul>

            <h4 className="font-semibold text-slate-900 mt-4">2.2 Location-Based Services</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Suggesting nearby venues or shops</li>
              <li>Associating orders with the correct venue or location</li>
              <li>Improving delivery and pickup accuracy</li>
            </ul>

            <h4 className="font-semibold text-slate-900 mt-4">2.3 Communications</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Transactional emails (order confirmations, receipts, verification links)</li>
              <li>System notifications related to account or service status</li>
            </ul>

            <h4 className="font-semibold text-slate-900 mt-4">2.4 Analytics & Platform Improvement</h4>
            <p>Analytics are used in aggregate form whenever possible to measure performance, identify trends, and improve features.</p>

            <h4 className="font-semibold text-slate-900 mt-4">2.5 Marketing & Announcements</h4>
            <p>
              We obtain <strong>express consent</strong> before sending commercial electronic messages. Express consent is obtained via explicit opt-in (not pre-checked) at account creation or through account settings. Every marketing email includes an unsubscribe link. Requests are processed within 10 business days.
            </p>
          </Section>

          <Section title="3. How Information Is Shared">
            <p>We do <strong>not sell personal information</strong>. Information is shared only as necessary to operate the Platform.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Vendors & Shops:</strong> Order details, customer names, and fulfillment information are shared only with the vendor fulfilling the order.</li>
              <li><strong>Payment Processors:</strong> We share required information with Stripe and Square.</li>
              <li><strong>Infrastructure Providers:</strong> Cloud infrastructure (e.g., AWS), mapping services (e.g., Google APIs), and error monitoring (e.g., Sentry).</li>
            </ul>

            <h4 className="font-semibold text-slate-900 mt-4">Cross-Border Data Transfers</h4>
            <p>
              Our providers may be located in the United States or other jurisdictions outside Canada. Your information remains subject to the protections described in this Policy but may also be subject to the laws of the jurisdiction in which it is stored.
            </p>

            <h4 className="font-semibold text-slate-900 mt-4">Legal & Compliance</h4>
            <p>We may disclose information to comply with legal obligations, respond to lawful requests, or protect the rights, safety, or property of Rink Fries, users, or partners.</p>
          </Section>

          <Section title="4. Cookies & Tracking Technologies">
            <p>
              The Platform uses an httpOnly authentication cookie for session persistence, CSRF protection cookies, and standard headers required for interactive features. For full details, see our <a href="/cookies" className="text-[#2563EB] hover:underline">Cookie Policy</a>.
            </p>
          </Section>

          <Section title="5. Data Security">
            <p>We take reasonable technical and organizational measures to protect information, including encryption of sensitive credentials and OAuth tokens at rest, secure access controls, and monitoring against abuse. No system is completely secure, but we continuously improve our safeguards.</p>
          </Section>

          <Section title="6. Data Breach Notification">
            <p>In the event of a security breach involving personal information that poses a real risk of significant harm, Rink Fries will:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Notify affected individuals without unreasonable delay</li>
              <li>Notify the Office of the Privacy Commissioner of Canada as required under PIPEDA</li>
              <li>Maintain records of all breaches involving personal information</li>
            </ul>
          </Section>

          <Section title="7. Data Retention">
            <p>We retain personal and business information only as long as necessary to provide the Platform, meet legal obligations, resolve disputes, and enforce agreements.</p>
          </Section>

          <Section title="8. User Rights & Choices">
            <p>Depending on your jurisdiction, you may have the right to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Access and update your account information</li>
              <li>Request correction of inaccurate data</li>
              <li>Withdraw consent for certain communications</li>
              <li>Request deletion of your account, subject to legal retention requirements</li>
            </ul>
            <p>Access and correction requests will be fulfilled within 30 days. No fees apply for access requests.</p>
          </Section>

          <Section title="9. Complaints">
            <p>If you are not satisfied with how we handle your personal information:</p>
            <ol className="list-decimal pl-5 space-y-1">
              <li>Contact our Privacy Contact at <a href="mailto:privacy@rinkfries.app" className="text-[#2563EB] hover:underline">privacy@rinkfries.app</a></li>
              <li>We will acknowledge your complaint within 5 business days</li>
              <li>We will investigate and respond within 30 days</li>
            </ol>
            <p>
              If you are not satisfied with our response, you may escalate to the <strong>Office of the Privacy Commissioner of Canada</strong> at 1-800-282-1376 or www.priv.gc.ca.
            </p>
          </Section>

          <Section title="10. Children's Privacy">
            <p>The Platform is not intended for children under the age of 13. We do not knowingly collect personal information from children.</p>
          </Section>

          <Section title="11. Changes to This Policy">
            <p>Material changes require <strong>30 days' notice</strong>. Minor updates may be posted immediately. Continued use of the Platform after the notice period constitutes acceptance.</p>
          </Section>

          <Section title="12. Governing Law">
            <p>This Privacy Policy is governed by the laws of the Province of Nova Scotia and the laws of Canada applicable therein, including PIPEDA.</p>
          </Section>

          <Section title="13. Contact Information">
            <p>If you have questions or concerns about this Privacy Policy or your data, contact:</p>
            <p className="font-semibold">Rink Fries Inc.</p>
            <p>
              <strong>Privacy Contact:</strong>{" "}
              <a href="mailto:privacy@rinkfries.app" className="text-[#2563EB] hover:underline">privacy@rinkfries.app</a>
            </p>
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
