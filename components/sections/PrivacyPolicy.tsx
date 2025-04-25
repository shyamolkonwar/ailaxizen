export default function PrivacyPolicy() {
  return (
    <section className="relative py-12 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <div className="flex flex-col space-y-8 bg-gray-900/20 rounded-3xl p-8 md:p-12 border border-gray-700/30">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="space-y-6 text-gray-300">
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">1. Information We Collect</h2>
              <p>We collect information that you provide directly to us, including your email address when you sign up for our beta program.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Provide and maintain our services</li>
                <li>Notify you about changes to our services</li>
                <li>Send you updates about our beta program</li>
                <li>Respond to your requests and inquiries</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">3. Data Security</h2>
              <p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">4. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Access your personal data</li>
                <li>Request correction of your personal data</li>
                <li>Request deletion of your personal data</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">5. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:contact@laxizen.fun" className="text-blue-400 hover:text-blue-300">contact@laxizen.com</a>.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 