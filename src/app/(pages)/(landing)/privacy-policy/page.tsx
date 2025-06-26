import { VideoCTASection } from "@/app/_components/(landing)";
import { PageInfoRow } from "@/app/_components/(shared)";

export default function PrivacyPolicy() {
  return (
    <>
      <div className="primary-container relative">
        <div className="center-layout ">
          <div className="mb-12 lg:mb-8 sm:mb-6">
            <PageInfoRow
              pagePath={[{ itemText: "Privacy Policy", itemLink: "#" }]}
              title={
                <>
                  Privacy <span className="text-main-primary">Policy</span>
                </>
              }
              hasTopMargin
            />
          </div>

          <p className="paragraph-text">
            Welcome to LuxPro.vip. Your privacy is very important to us. This
            Privacy Policy explains how we collect, use, store, and protect your
            personal information when you visit our website, book our services,
            or interact with us in any way.
          </p>

          <div className="header-text">1. Information We Collect</div>

          <div className="paragraph-text">
            When you use LuxPro, we may collect the following information:
          </div>

          <div className="paragraph-text">Personal Information</div>
          <ul className="item-list">
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Country of residence</li>
            <li>Passport or ID (when required for booking)</li>
            <li>Travel preferences</li>
            <li>Billing or payment information</li>
          </ul>

          <div className="paragraph-text mt-7">Service Details</div>
          <ul className="item-list">
            <li>Booking history</li>
            <li>Selected travel packages</li>
            <li>Rental or real estate inquiries</li>
            <li>Feedback and communication with support</li>
          </ul>

          <div className="paragraph-text mt-7">Automatic Data</div>
          <ul className="item-list">
            <li>IP address</li>
            <li>Device type</li>
            <li>Browser type</li>
            <li>Pages visited</li>
            <li>Time spent on our website</li>
          </ul>

          <div className="header-text">2. How We Use Your Information</div>

          <div className="paragraph-text">We use your information to:</div>
          <ul className="item-list">
            <li>Provide and manage your bookings</li>
            <li>Process payments securely</li>
            <li>Send updates about your trips or custom offers</li>
            <li>Respond to your inquiries and support requests</li>
            <li>Personalize your LuxPro experience</li>
            <li>Improve our website and services</li>
          </ul>

          <div className="paragrapgh-text mt-6">
            We do not sell your personal data to anyone.
          </div>

          <div className="header-text">3. Who We Share Information With</div>

          <div className="paragraph-text">We may share information with:</div>
          <ul className="item-list">
            <li>
              Our travel partners (hotels, airlines, security providers) when
              needed to fulfill your booking
            </li>
            <li>Secure payment gateways (Stripe, Paystack, etc.)</li>
            <li>Legal authorities when required by law</li>
          </ul>

          <div className="paragrapgh-text mt-6">
            All third parties we work with are required to respect the
            confidentiality of your data.
          </div>

          <div className="header-text">4. Cookies & Tracking</div>

          <div className="paragraph-text">
            We use cookies and similar tracking tools to:
          </div>
          <ul className="item-list">
            <li>Understand how you use our website</li>
            <li>Remember your preferences</li>
            <li>Show relevant content or promotions</li>
          </ul>

          <div className="paragrapgh-text mt-6">
            You can turn off cookies anytime in your browser settings.
          </div>

          <div className="header-text">5. Data Security</div>

          <div className="paragraph-text">
            Your information is stored on secure servers and protected by
            industry-standard encryption. We use strict access controls and
            monitor our systems regularly. <br />
            However, while we do our best to protect your data, no method of
            transmission over the internet is 100% secure.
          </div>

          <div className="header-text">6. Your Rights</div>

          <div className="paragraph-text">You have the right to:</div>
          <ul className="item-list">
            <li>Access the data we have about you</li>
            <li>Correct any inaccurate information</li>
            <li>Request deletion of your data</li>
            <li>
              Opt out of marketing emails (just click "Unsubscribe" in any
              email)
            </li>
          </ul>

          <div className="paragrapgh-text mt-6">
            To make any of these requests, please contact us at info@luxpro.vip.
          </div>

          <div className="header-text">7. Third-Party Links</div>

          <div className="paragraph-text">
            Our website may contain links to other websites. We are not
            responsible for their content or privacy practices. We encourage you
            to read their policies before sharing any information.
          </div>

          <div className="header-text">8. Updates to This Policy</div>

          <div className="paragraph-text">
            We may update this policy from time to time. If we make significant
            changes, we’ll notify you on our website or via email.
          </div>

          <div className="header-text">9. Contact Us</div>

          <div className="paragraph-text">
            If you have any questions or concerns about your privacy or this
            policy, please reach out:
          </div>

          <div className="paragraph-text">
            LuxPro123,
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
