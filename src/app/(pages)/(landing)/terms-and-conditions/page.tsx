import { VideoCTASection } from "@/app/_components/(landing)";
import { PageInfoRow } from "@/app/_components/(shared)";

export default function PrivacyPolicy() {
  return (
    <>
      <div className="primary-container">
        <div className="center-layout">
          <div className="mb-12 lg:mb-8 sm:mb-6">
            <PageInfoRow
              pagePath={[{ itemText: "Terms and Conditions", itemLink: "#" }]}
              title={
                <>
                  Terms and{" "}
                  <span className="text-main-primary">Conditions</span>
                </>
              }
              hasTopMargin
            />
          </div>
          <p className="paragraph-text">
            Welcome to LuxPro.vip. By accessing or using our website and
            services, you agree to the following Terms and Conditions. Please
            read them carefully before using LuxPro.
          </p>

          <div className="header-text">1. Overview</div>

          <div className="paragraph-text">
            LuxPro.vip offers premium services including:
          </div>

          <ul className="item-list">
            <li>Executive Travel Packages</li>
            <li>Luxury Rentals</li>
            <li>Custom Travel Planning</li>
            <li>Real Estate Inquiries</li>
            <li>Lifestyle Concierge Services</li>
          </ul>

          <div className="paragraph-text mt-7">
            All bookings, rentals, and service engagements are governed by the
            terms listed below.
          </div>

          <div className="header-text">2. Eligibility</div>

          <div className="paragraph-text">To use our services, you must:</div>
          <ul className="item-list">
            <li>Be at least 18 years old</li>
            <li>Provide accurate, up-to-date information</li>
            <li>
              Use our platform for lawful, personal or corporate purposes only
            </li>
          </ul>

          <div className="paragrapgh-text mt-6">
            We reserve the right to refuse service if we detect fraudulent,
            harmful, or illegal activity.
          </div>

          <div className="header-text">3. Booking & Payment</div>

          <ul className="item-list">
            <li>
              All bookings (travel or rentals) must be confirmed with full or
              agreed deposit payment.
            </li>
            <li>
              Prices are listed in USD or your local currency (when available).
            </li>
            <li>
              Payment must be made using approved payment channels only (e.g.,
              credit/debit card, bank transfer, or trusted payment gateway).
            </li>
            <li>
              For custom offers, a quote will be sent after reviewing your
              request. No booking is confirmed until payment is received.
            </li>
          </ul>

          <div className="paragrapgh-text mt-6">
            Note: All bookings are subject to availability and service partner
            confirmation.
          </div>

          <div className="header-text">4. Cancellation & Refunds</div>

          <ul className="item-list">
            <li>
              Executive Travel Packages:Cancellations must be made at least 14
              days before the start date. Refunds will be processed minus
              administrative or third-party fees. Late cancellations may attract
              partial or no refunds.
            </li>
            <li>
              Luxury Rentals: Cancellations vary based on the category (vehicle,
              yacht, apartment, etc.). The refund policy will be clearly stated
              in your invoice or quote.
            </li>
            <li>
              Custom Offers: Custom-made experiences may involve non-refundable
              fees once bookings are initiated. All terms will be disclosed
              before payment.
            </li>
          </ul>

          <div className="header-text">5. User Account</div>

          <div className="paragraph-text">If you create an account:</div>

          <ul className="item-list">
            <li>Keep your login credentials safe</li>
            <li>Do not share your account with others</li>
            <li>Notify us immediately if your account is compromised</li>
          </ul>

          <div className="paragraph-text">
            LuxPro will not be liable for unauthorized activity if your account
            was accessed without our fault.
          </div>

          <div className="header-text">6. Service Modifications</div>

          <div className="paragraph-text">LuxPro reserves the right to:</div>
          <ul className="item-list">
            <li>Modify, suspend, or discontinue any service or feature</li>
            <li>Adjust pricing when necessary</li>
            <li>
              Refuse requests that are impossible, unsafe, or conflict with our
              standards
            </li>
          </ul>

          <div className="paragrapgh-text mt-6">
            All changes will be communicated where applicable.
          </div>

          <div className="header-text">7. Intellectual Property</div>

          <div className="paragraph-text">
            All content on LuxPro.vip (text, images, branding, layout, software,
            etc.) is the property of LuxPro or its partners and may not be used
            without permission.
          </div>

          <div className="header-text">8. Limitation of Liability</div>

          <div className="paragraph-text">
            While we strive to provide excellent and secure services:
          </div>

          <ul className="item-list">
            <li>
              LuxPro is not responsible for events beyond our control (e.g.,
              flight delays, visa issues, weather, strikes)
            </li>
            <li>
              We are not liable for losses arising from misuse of our platform
            </li>
            <li>
              Our liability is limited to the amount paid for the service in
              question
            </li>
          </ul>

          <div className="header-text">9. Third-Party Services</div>

          <div className="paragraph-text">
            We may work with hotels, airlines, vehicle suppliers, or concierge
            vendors. While we choose trusted partners, LuxPro is not responsible
            for their individual actions or service quality outside agreed
            terms.
          </div>

          <div className="header-text">10. Termination</div>

          <div className="paragraph-text">
            We may suspend or terminate your access to LuxPro if:
          </div>

          <ul className="item-list">
            <li>You breach these Terms</li>
            <li>You use our services in a fraudulent or abusive way</li>
            <li>We are required to do so by law</li>
          </ul>

          <div className="header-text">11. Governing Law</div>

          <div className="paragraph-text">
            These Terms are governed by the laws of Nigeria. Any disputes shall
            be resolved through appropriate legal or alternative dispute
            resolution methods within Nigeria or your region of residence.
          </div>

          <div className="header-text">12. Updates to Terms</div>

          <div className="paragraph-text">
            We may update these Terms occasionally. Continued use of LuxPro.vip
            means you accept the latest version.
          </div>

          <div className="header-text">13. Contact Us</div>

          <div className="paragraph-text">
            Have questions about these terms or your account?
          </div>

          <div className="paragraph-text">
            LuxPro 123,
            <br />
            Onikoyi Street, Victoria Island, Lagos, Nigeria
            <br />
            Email: info@luxpro.vip
            <br />
            {` Phone: +1 (443) 590-6066`}
          </div>
        </div>
      </div>

      <VideoCTASection />
    </>
  );
}
