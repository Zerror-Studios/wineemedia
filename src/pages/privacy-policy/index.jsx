import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="w-full px-[4vw] sm:px-[2vw] pt-[8vw] text-white">
      <Navbar />
      <div className="max-w-[900px] mx-auto pb-[8vw]">
        <div className="space-y-[5vw] sm:space-y-[3vw]">
          <div>
            <h1 className="font-[heading] text-[5vw] sm:text-[2.5vw] mb-[1vw]">
              Privacy Policy
            </h1>
            <p className="font-[heading2] text-[3.5vw] sm:text-[1vw] text-white/50 mb-[2vw]">
              Last updated: July 27, 2026
            </p>

            <p className="font-[heading2] text-[4vw] sm:text-[1.2vw] leading-relaxed mb-[1vw]">
              This Privacy Policy explains how WineeMedia collects, uses, shares,
              and protects the information you provide when you visit our
              website, submit a form, book a call, or otherwise interact with us.
              Please read it carefully so you understand our practices.
            </p>

            <p className="font-[heading2] text-[4vw] sm:text-[1.2vw] leading-relaxed">
              In this policy, “WineeMedia”, “we”, “us”, and “our” refer to
              WineeMedia, operating the website{" "}
              <a
                href="https://www.wineemedia.com/"
                className="underline underline-offset-2"
              >
                https://www.wineemedia.com/
              </a>{" "}
              (the “Site”). “You” refers to any person who visits the Site or
              shares information with us.
            </p>
          </div>

          <div>
            <h2 className="font-[heading] text-[4.5vw] sm:text-[2vw] mb-[1.5vw]">
              1. Information we collect
            </h2>
            <p className="font-[heading2] text-[4vw] sm:text-[1.2vw] leading-relaxed mb-[1.5vw]">
              We collect information in the following ways.
            </p>

            <h3 className="font-[heading] text-[4vw] sm:text-[1.4vw] mb-[1vw]">
              Information you give us directly
            </h3>
            <p className="font-[heading2] text-[4vw] sm:text-[1.2vw] leading-relaxed mb-[1vw]">
              When you fill out a form, request a call, apply to work with us, or
              contact us, you may share:
            </p>
            <ul className="list-disc pl-[5vw] sm:pl-[2vw] font-[heading2] text-[4vw] sm:text-[1.2vw] leading-relaxed mb-[1.5vw] space-y-[0.5vw]">
              <li>
                Your name and contact details, such as email address and phone
                number.
              </li>
              <li>Your business or brand name, role, and website.</li>
              <li>
                Details about your goals, budget range, or current situation that
                you choose to share with us.
              </li>
              <li>Any message, note, or file you send us.</li>
            </ul>

            <h3 className="font-[heading] text-[4vw] sm:text-[1.4vw] mb-[1vw]">
              Information we collect automatically
            </h3>
            <p className="font-[heading2] text-[4vw] sm:text-[1.2vw] leading-relaxed mb-[1vw]">
              When you browse the Site, we and our service providers may collect:
            </p>
            <ul className="list-disc pl-[5vw] sm:pl-[2vw] font-[heading2] text-[4vw] sm:text-[1.2vw] leading-relaxed mb-[1.5vw] space-y-[0.5vw]">
              <li>
                Your IP address, approximate location, browser type, and device
                information.
              </li>
              <li>
                Pages you visit, links you click, time spent on pages, and how
                you arrived at the Site.
              </li>
              <li>
                Data collected through cookies, pixels, and similar technologies,
                described in Section 4.
              </li>
            </ul>

            <h3 className="font-[heading] text-[4vw] sm:text-[1.4vw] mb-[1vw]">
              Information from third parties
            </h3>
            <p className="font-[heading2] text-[4vw] sm:text-[1.2vw] leading-relaxed">
              We may receive information from advertising and analytics partners,
              such as Meta (Facebook and Instagram) and Google, and from
              scheduling tools you use to book a call with us.
            </p>
          </div>

          <div>
            <h2 className="font-[heading] text-[4.5vw] sm:text-[2vw] mb-[1.5vw]">
              2. How we use your information
            </h2>
            <p className="font-[heading2] text-[4vw] sm:text-[1.2vw] leading-relaxed mb-[1vw]">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-[5vw] sm:pl-[2vw] font-[heading2] text-[4vw] sm:text-[1.2vw] leading-relaxed space-y-[0.5vw]">
              <li>
                Respond to your enquiries and schedule and conduct calls with
                you.
              </li>
              <li>Provide, deliver, and improve our services.</li>
              <li>
                Send you relevant updates, offers, and marketing communications
                where you have agreed to receive them.
              </li>
              <li>
                Measure and improve the performance of our website, campaigns,
                and advertising.
              </li>
              <li>
                Understand who our audience is so we can reach similar people
                through advertising.
              </li>
              <li>Keep our Site secure and prevent fraud or misuse.</li>
              <li>Meet our legal and regulatory obligations.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-[heading] text-[4.5vw] sm:text-[2vw] mb-[1.5vw]">
              3. Legal basis for processing
            </h2>
            <p className="font-[heading2] text-[4vw] sm:text-[1.2vw] leading-relaxed mb-[1vw]">
              Where required by law, we rely on one or more of the following
              grounds to process your information:
            </p>
            <ul className="list-disc pl-[5vw] sm:pl-[2vw] font-[heading2] text-[4vw] sm:text-[1.2vw] leading-relaxed space-y-[0.5vw]">
              <li>
                Your consent, for example when you opt in to marketing or accept
                cookies.
              </li>
              <li>
                The performance of a contract or steps taken at your request
                before entering into one.
              </li>
              <li>
                Our legitimate interests in running and growing our business,
                provided these do not override your rights.
              </li>
              <li>Compliance with a legal obligation.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-[heading] text-[4.5vw] sm:text-[2vw] mb-[1.5vw]">
              4. Cookies and tracking technologies
            </h2>
            <p className="font-[heading2] text-[4vw] sm:text-[1.2vw] leading-relaxed mb-[1vw]">
              We use cookies, pixels, and similar technologies to run the Site,
              understand how it is used, and deliver relevant advertising. These
              include:
            </p>
            <ul className="list-disc pl-[5vw] sm:pl-[2vw] font-[heading2] text-[4vw] sm:text-[1.2vw] leading-relaxed mb-[1vw] space-y-[0.5vw]">
              <li>Essential cookies that keep the Site working correctly.</li>
              <li>
                Analytics tools such as Google Analytics and Microsoft Clarity,
                which help us understand how visitors use the Site.
              </li>
              <li>
                Advertising and remarketing pixels such as the Meta Pixel, which
                measure ad performance and allow us to show ads to people who
                have visited the Site.
              </li>
            </ul>
            <p className="font-[heading2] text-[4vw] sm:text-[1.2vw] leading-relaxed">
              You can control or disable cookies through your browser settings.
              Disabling certain cookies may affect how parts of the Site
              function.
            </p>
          </div>

          <div>
            <h2 className="font-[heading] text-[4.5vw] sm:text-[2vw] mb-[1.5vw]">
              5. Advertising and remarketing
            </h2>
            <p className="font-[heading2] text-[4vw] sm:text-[1.2vw] leading-relaxed mb-[1vw]">
              We advertise on platforms such as Meta and Google. These platforms
              may use data collected on our Site to show you our ads on other
              websites and apps, and to help us reach people with similar
              interests. We do not sell your personal information.
            </p>
            <p className="font-[heading2] text-[4vw] sm:text-[1.2vw] leading-relaxed">
              You can manage the ads you see and your ad preferences at{" "}
              <a
                href="https://www.facebook.com/adpreferences"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2"
              >
                facebook.com/adpreferences
              </a>{" "}
              for Meta and at{" "}
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2"
              >
                adssettings.google.com
              </a>{" "}
              for Google.
            </p>
          </div>

          <div>
            <h2 className="font-[heading] text-[4.5vw] sm:text-[2vw] mb-[1.5vw]">
              6. How we share your information
            </h2>
            <p className="font-[heading2] text-[4vw] sm:text-[1.2vw] leading-relaxed mb-[1vw]">
              We share information only where needed and never sell it. We may
              share it with:
            </p>
            <ul className="list-disc pl-[5vw] sm:pl-[2vw] font-[heading2] text-[4vw] sm:text-[1.2vw] leading-relaxed space-y-[0.5vw]">
              <li>
                Service providers who help us operate, including hosting,
                scheduling, email, analytics, and advertising partners.
              </li>
              <li>
                Professional advisers such as accountants and legal counsel,
                where relevant.
              </li>
              <li>
                Authorities or other parties when required by law, to enforce our
                terms, or to protect our rights, safety, or property.
              </li>
              <li>
                A successor entity in the event of a merger, acquisition, or sale
                of assets.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-[heading] text-[4.5vw] sm:text-[2vw] mb-[1.5vw]">
              7. Data retention
            </h2>
            <p className="font-[heading2] text-[4vw] sm:text-[1.2vw] leading-relaxed">
              We keep your information only for as long as we need it for the
              purposes described in this policy, or for as long as the law
              requires. When it is no longer needed, we delete it or anonymise
              it.
            </p>
          </div>

          <div>
            <h2 className="font-[heading] text-[4.5vw] sm:text-[2vw] mb-[1.5vw]">
              8. Data security
            </h2>
            <p className="font-[heading2] text-[4vw] sm:text-[1.2vw] leading-relaxed">
              We use reasonable technical and organisational measures to protect
              your information against loss, misuse, and unauthorised access. No
              method of transmission or storage is completely secure, so we
              cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="font-[heading] text-[4.5vw] sm:text-[2vw] mb-[1.5vw]">
              9. Your rights
            </h2>
            <p className="font-[heading2] text-[4vw] sm:text-[1.2vw] leading-relaxed mb-[1vw]">
              Depending on where you live, you may have the right to:
            </p>
            <ul className="list-disc pl-[5vw] sm:pl-[2vw] font-[heading2] text-[4vw] sm:text-[1.2vw] leading-relaxed mb-[1vw] space-y-[0.5vw]">
              <li>Access the personal information we hold about you.</li>
              <li>
                Ask us to correct information that is inaccurate or incomplete.
              </li>
              <li>Ask us to delete your information.</li>
              <li>Withdraw consent to marketing at any time.</li>
              <li>Object to or restrict certain processing.</li>
              <li>
                Request a copy of your information in a portable format.
              </li>
            </ul>
            <p className="font-[heading2] text-[4vw] sm:text-[1.2vw] leading-relaxed">
              To exercise any of these rights, contact us using the details in
              Section 12. You can unsubscribe from marketing emails at any time
              using the link in each message.
            </p>
          </div>

          <div>
            <h2 className="font-[heading] text-[4.5vw] sm:text-[2vw] mb-[1.5vw]">
              10. International visitors
            </h2>
            <p className="font-[heading2] text-[4vw] sm:text-[1.2vw] leading-relaxed">
              We operate from India and may process your information there or in
              other countries where our service providers operate. By using the
              Site, you understand that your information may be transferred to
              and processed in locations outside your own country, where data
              protection laws may differ.
            </p>
          </div>

          <div>
            <h2 className="font-[heading] text-[4.5vw] sm:text-[2vw] mb-[1.5vw]">
              11. Children’s privacy
            </h2>
            <p className="font-[heading2] text-[4vw] sm:text-[1.2vw] leading-relaxed">
              Our Site and services are intended for adults and for business use.
              We do not knowingly collect information from anyone under the age
              of 18. If you believe a minor has shared information with us,
              please contact us and we will remove it.
            </p>
          </div>

          <div>
            <h2 className="font-[heading] text-[4.5vw] sm:text-[2vw] mb-[1.5vw]">
              12. Contact us
            </h2>
            <p className="font-[heading2] text-[4vw] sm:text-[1.2vw] leading-relaxed mb-[1vw]">
              If you have questions about this policy or how we handle your
              information, reach us at:
            </p>
            <ul className="font-[heading2] text-[4vw] sm:text-[1.2vw] leading-relaxed space-y-[0.5vw]">
              <li>
                <span className="text-white/50">Company:</span> WineeMedia
              </li>
              <li>
                <span className="text-white/50">Attn:</span> Ramkrishna Tripathi
              </li>
              <li>
                <span className="text-white/50">Phone:</span>{" "}
                <a href="tel:+919372320060" className="underline underline-offset-2">
                9372320060
                </a>
              </li>
              <li>
                <span className="text-white/50">Email:</span>{" "}
                <a
                  href="mailto:info@wineemedia.com"
                  className="underline underline-offset-2"
                >
                  info@wineemedia.com
                </a>
              </li>
              <li>
                <span className="text-white/50">Website:</span>{" "}
                <a
                  href="https://www.wineemedia.com/"
                  className="underline underline-offset-2"
                >
                  https://www.wineemedia.com/
                </a>
              </li>
              <li>
                <span className="text-white/50">Address:</span> Shop No 8, Gaurav
                Avishkar, near Mahanagar CNG Petrol Pump, Beverly Park, Mira
                Bhayandar, Maharashtra 401107
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-[heading] text-[4.5vw] sm:text-[2vw] mb-[1.5vw]">
              13. Changes to this policy
            </h2>
            <p className="font-[heading2] text-[4vw] sm:text-[1.2vw] leading-relaxed">
              We may update this policy from time to time. When we do, we will
              change the date at the top of this page. If the changes are
              significant, we will take reasonable steps to let you know.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default PrivacyPolicy;
