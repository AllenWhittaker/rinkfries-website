import { PageMeta } from "../components/PageMeta";

export function Terms() {
  return (
    <div className="bg-white">
      <PageMeta title="Terms of Service" description="Terms of Service for the Rink Fries platform." path="/terms" />
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-20">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Terms of Service</h1>
        <p className="text-sm text-slate-500 mb-10">Last Updated: March 28, 2026</p>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-700 text-[15px] leading-relaxed">
          <Section title="1. Acceptance of Terms">
            <p>
              By accessing, browsing, or using the Rink Fries platform (the "Platform"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you must not use the Platform.
            </p>
            <p>
              These Terms apply to all users, including customers, vendors, venue operators, and event attendees. These Terms are subject to supplemental terms and addenda applicable to specific services (Events, Delivery, etc.). In the event of conflict, the supplemental document controls for the applicable service.
            </p>
          </Section>

          <Section title="2. Platform Role & Scope">
            <p>
              Rink Fries provides a technology platform that facilitates ordering, payment processing, and communication between customers and independent vendors operating at venues or events.
            </p>
            <p className="font-semibold">Rink Fries is not a restaurant, food provider, caterer, or delivery service.</p>
            <p>
              Vendors are independent businesses and are solely responsible for their products, services, fulfillment, food safety, and customer service.
            </p>
            <div className="bg-slate-50 rounded-lg p-4 text-sm space-y-1">
              <p><strong>Business Name:</strong> Rink Fries Inc.</p>
              <p><strong>Jurisdiction:</strong> Nova Scotia, Canada</p>
              <p><strong>Contact:</strong> support@rinkfries.ca</p>
              <p><strong>Services Provided:</strong> Order placement and payment processing for food, beverages, and merchandise from independent vendors</p>
            </div>
          </Section>

          <Section title="3. Pricing & Fee Transparency">
            <p>Before you complete a purchase, the Platform displays:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Item prices as set by the vendor</li>
              <li>Platform service fee</li>
              <li>Applicable sales taxes (HST/GST/PST)</li>
              <li>Delivery fee (if applicable)</li>
              <li>Total amount to be charged</li>
            </ul>
            <p>No additional fees are added after purchase confirmation.</p>
          </Section>

          <Section title="4. Refund Policy">
            <h4 className="font-semibold text-slate-900">4.1 Vendor Orders (Food, Beverage, Merchandise)</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Rink Fries <strong>does not provide refunds</strong> for vendor orders, including food, beverages, or merchandise.</li>
              <li>Vendors may offer refunds, credits, or replacements at their own discretion and according to their individual business policies.</li>
              <li>Any refund request for vendor products must be directed <strong>directly to the vendor</strong>.</li>
              <li>Rink Fries is not responsible for approving, processing, or guaranteeing vendor refunds.</li>
            </ul>

            <h4 className="font-semibold text-slate-900 mt-4">4.2 Event Tickets Sold by Rink Fries</h4>
            <p>Event tickets sold by Rink Fries are refundable <strong>only</strong> if:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>An event is canceled</li>
              <li>An event is rescheduled</li>
              <li>As otherwise stated in event-specific terms displayed at the time of ticket purchase</li>
            </ul>
            <p>
              Service fees associated with ticket purchases may be non-refundable unless otherwise required by law. No refunds will be issued for missed events, late arrivals, or changes in personal availability.
            </p>
          </Section>

          <Section title="5. Cancellation Rights">
            <h4 className="font-semibold text-slate-900">5.1 Order Cancellation</h4>
            <p>
              Orders for food, beverages, or merchandise may be canceled only if the vendor has not yet begun preparation. Once preparation has started, cancellation is at the vendor's discretion.
            </p>

            <h4 className="font-semibold text-slate-900 mt-4">5.2 Internet Sales — Cooling-Off Period</h4>
            <p>
              For purchases that qualify as internet sales under the Nova Scotia Consumer Protection Act, you have the right to cancel within <strong>7 days</strong> of purchase, provided:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>The order has not been fulfilled</li>
              <li>The request is submitted in writing (email to support@rinkfries.ca is acceptable)</li>
            </ul>
            <p>
              Refunds for eligible cancellations will be processed within 15 days of the cancellation request. Platform service fees may be non-refundable as permitted by law.
            </p>
          </Section>

          <Section title="6. Payments & Transactions">
            <ul className="list-disc pl-5 space-y-1">
              <li>All payments are processed through third-party payment processors (e.g., Square, Stripe).</li>
              <li>By completing a transaction, you authorize Rink Fries and its payment partners to process payments on your behalf.</li>
              <li>Rink Fries is not responsible for payment processor outages, delays, or errors.</li>
              <li>Chargebacks, fraud, or abuse may result in account suspension or termination.</li>
            </ul>
          </Section>

          <Section title="7. User Responsibilities">
            <p>Users agree to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Provide accurate and complete information when placing orders or purchasing tickets.</li>
              <li>Ensure venue location details (e.g., section, row, seat, pickup location) are correct.</li>
              <li>Use the Platform in compliance with applicable laws and venue policies.</li>
              <li>Refrain from abusive, fraudulent, or disruptive behavior.</li>
            </ul>
          </Section>

          <Section title="8. Vendor Responsibilities">
            <p>Vendors are solely responsible for:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Menu accuracy, pricing, availability, and fulfillment.</li>
              <li>Food quality, safety, allergens, and regulatory compliance.</li>
              <li>Customer service related to their products.</li>
              <li>Honoring any refunds or adjustments they choose to offer.</li>
            </ul>
            <p>Rink Fries does not verify vendor inventory, preparation methods, or allergen information.</p>
          </Section>

          <Section title="9. Cancellations & Availability">
            <p>
              Orders may be delayed or canceled due to vendor capacity, technical issues, or venue constraints. Rink Fries does not guarantee order completion times or availability.
            </p>
          </Section>

          <Section title="10. Account Suspension & Termination">
            <p>Rink Fries reserves the right to suspend or terminate accounts that:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Violate these Terms</li>
              <li>Engage in fraud or abuse</li>
              <li>Disrupt platform operations</li>
              <li>Create legal or financial risk</li>
            </ul>
          </Section>

          <Section title="11. Dispute Resolution">
            <p>For disputes regarding Rink Fries services (not vendor products):</p>
            <ol className="list-decimal pl-5 space-y-1">
              <li><strong>Negotiation:</strong> Attempt good faith resolution by contacting support@rinkfries.ca within 30 days of the issue.</li>
              <li><strong>Mediation:</strong> If unresolved, either party may submit the dispute to mediation, with costs shared equally.</li>
              <li><strong>Litigation:</strong> If mediation is unsuccessful, disputes may proceed to the courts of Nova Scotia.</li>
            </ol>
            <p>
              <strong>Exceptions:</strong> Claims eligible for small claims court, requests for injunctive relief, and statutory claims are not subject to the mediation requirement.
            </p>
            <p>
              <strong>Dispute Timeline:</strong> Customers must file disputes within 120 days of the transaction. Disputes submitted after this window may not be reviewed.
            </p>
            <p>For product-related disputes, contact the vendor directly. See the Refund & Dispute Policy for details.</p>
          </Section>

          <Section title="12. Limitation of Liability">
            <p>
              To the maximum extent permitted by law, Rink Fries shall not be liable for any indirect, incidental, consequential, special, or punitive damages arising from:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Use of the Platform</li>
              <li>Vendor products or services</li>
              <li>Event attendance</li>
              <li>Delays, cancellations, or errors</li>
            </ul>
            <p>
              Rink Fries' total liability shall not exceed the amount paid by the user to Rink Fries for the applicable transaction. Nothing in these Terms limits liability for death or personal injury caused by negligence, fraud, or any liability that cannot be excluded by law.
            </p>
          </Section>

          <Section title="13. Indemnification">
            <p>
              You agree to indemnify and hold harmless Rink Fries, its officers, directors, and affiliates from any claims, damages, or liabilities arising from your use of the Platform or violation of these Terms.
            </p>
          </Section>

          <Section title="14. Force Majeure">
            <p>
              Rink Fries is not liable for failure to perform due to circumstances beyond its reasonable control, including but not limited to:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Natural disasters, severe weather, or acts of God</li>
              <li>Pandemics or public health emergencies</li>
              <li>Government actions, regulations, or restrictions</li>
              <li>Internet outages, cyberattacks, or infrastructure failures beyond our control</li>
              <li>War, terrorism, or civil unrest</li>
            </ul>
            <p>In such events, Rink Fries will provide notice and performance obligations are suspended for the duration of the event.</p>
          </Section>

          <Section title="15. Changes to Terms">
            <p>
              Material changes to these Terms (e.g., pricing, cancellation rights, refund policies) require <strong>30 days' notice</strong>. Minor updates (e.g., contact information, formatting) may be posted immediately. Continued use of the Platform after the notice period constitutes acceptance of the updated Terms.
            </p>
          </Section>

          <Section title="16. General Provisions">
            <p>
              <strong>Severability:</strong> If any provision of these Terms is found invalid or unenforceable, that provision is severed and the remaining provisions continue in full force and effect.
            </p>
            <p>
              <strong>Entire Agreement:</strong> These Terms, together with applicable supplemental terms, addenda, and policies, constitute the entire agreement between you and Rink Fries regarding use of the Platform.
            </p>
            <p>
              <strong>Waiver:</strong> Rink Fries' failure to enforce any provision is not a waiver of that provision or any future enforcement.
            </p>
            <p>
              <strong>Assignment:</strong> You may not assign these Terms without written consent. Rink Fries may assign to affiliates or in connection with a merger, acquisition, or sale of assets, with 30 days' notice for material changes affecting your data or rights.
            </p>
          </Section>

          <Section title="17. Governing Law">
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the Province of Nova Scotia and the laws of Canada applicable therein.
            </p>
          </Section>

          <Section title="18. Contact Information">
            <p>For questions regarding these Terms, please contact:</p>
            <p className="font-semibold">Rink Fries Inc.</p>
            <p>
              <a href="mailto:support@rinkfries.ca" className="text-[#2563EB] hover:underline">support@rinkfries.ca</a>
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
