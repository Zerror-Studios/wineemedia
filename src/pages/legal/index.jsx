import React from "react";

const Legal = () => {
  return (
    <section className="w-full px-[4vw] sm:px-[2vw] py-[8vw] text-white">
      <div className="max-w-[900px] mx-auto">

        <h1 className="font-[heading] text-[8vw] sm:text-[5vw] leading-none mb-[5vw]">
          Legal
        </h1>

        <div className="space-y-[5vw]">

          {/* Privacy Policy */}
          <div>
            <h2 className="font-[heading] text-[5vw] sm:text-[2.5vw] mb-[1.5vw]">
              Privacy Policy
            </h2>

            <p className="font-[heading2] text-[4vw] sm:text-[1.2vw] leading-relaxed mb-[1vw]">
              At Winee Media, we respect your privacy and are committed to
              protecting your personal information. This Privacy Policy explains
              how we collect, use, and safeguard your information when you visit
              our website or use our services.
            </p>

            <p className="font-[heading2] text-[4vw] sm:text-[1.2vw] leading-relaxed">
              We may collect information such as your name, email address,
              phone number, business details, and any information you provide
              when you contact us or schedule a consultation.
            </p>
          </div>


          {/* Information Usage */}
          <div>
            <h2 className="font-[heading] text-[5vw] sm:text-[2.5vw] mb-[1.5vw]">
              How We Use Your Information
            </h2>

            <p className="font-[heading2] text-[4vw] sm:text-[1.2vw] leading-relaxed">
              The information collected may be used to:
            </p>

            <ul className="list-disc pl-[5vw] sm:pl-[2vw] font-[heading2] text-[4vw] sm:text-[1.2vw] leading-relaxed mt-[1vw]">
              <li>Provide and improve our services.</li>
              <li>Communicate with you regarding inquiries and consultations.</li>
              <li>Send relevant updates about our services.</li>
              <li>Improve website experience and performance.</li>
            </ul>
          </div>


          {/* Terms */}
          <div>
            <h2 className="font-[heading] text-[5vw] sm:text-[2.5vw] mb-[1.5vw]">
              Terms & Conditions
            </h2>

            <p className="font-[heading2] text-[4vw] sm:text-[1.2vw] leading-relaxed">
              By accessing this website, you agree to comply with these terms
              and conditions. Winee Media reserves the right to modify,
              update, or discontinue any part of the website or services at
              any time.
            </p>

            <p className="font-[heading2] text-[4vw] sm:text-[1.2vw] leading-relaxed mt-[1vw]">
              Our services are designed to help founders improve their
              personal branding and online presence. Results may vary depending
              on individual effort, market conditions, and business factors.
            </p>
          </div>


          {/* Disclaimer */}
          <div>
            <h2 className="font-[heading] text-[5vw] sm:text-[2.5vw] mb-[1.5vw]">
              Disclaimer
            </h2>

            <p className="font-[heading2] text-[4vw] sm:text-[1.2vw] leading-relaxed">
              Winee Media does not guarantee specific revenue, customer growth,
              or business outcomes. Any examples, case studies, or results
              shared are for informational purposes and represent individual
              experiences.
            </p>
          </div>


          {/* Contact */}
          <div>
            <h2 className="font-[heading] text-[5vw] sm:text-[2.5vw] mb-[1.5vw]">
              Contact Us
            </h2>

            <p className="font-[heading2] text-[4vw] sm:text-[1.2vw] leading-relaxed">
              If you have any questions regarding this Legal Policy, you can
              contact us through our official communication channels.
            </p>
          </div>


          <p className="font-[heading2] text-[3.5vw] sm:text-[1vw] text-black/50 pt-[2vw]">
            Last updated: January 2026
          </p>

        </div>

      </div>
    </section>
  );
};

export default Legal;