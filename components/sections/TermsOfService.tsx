export default function TermsOfService() {
  return (
    <section className="relative py-12 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <div className="flex flex-col space-y-8 bg-gray-900/20 rounded-3xl p-8 md:p-12 border border-gray-700/30">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Terms of Service</h1>
            <p className="text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="space-y-6 text-gray-300">
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">1. Acceptance of Terms</h2>
              <p className="text-gray-400">
                By accessing and using Laxizen&apos;s services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
              <p className="text-gray-400">
                Laxizen reserves the right to modify these terms at any time. Your continued use of the service following any changes indicates your acceptance of the new terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">2. Description of Service</h2>
              <p className="text-gray-400">
                LaxiZen provides AI-powered call management solutions for businesses. Our services include 
                call transcription, analysis, and automation features designed to improve business communication.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">3. User Accounts</h2>
              <p className="text-gray-400">
                To access certain features of our service, you may be required to create an account. You are 
                responsible for maintaining the confidentiality of your account information and for all activities 
                that occur under your account.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">4. Privacy and Data Protection</h2>
              <p className="text-gray-400">
                Your use of our services is also governed by our Privacy Policy. We are committed to protecting 
                your personal information and ensuring compliance with applicable data protection laws.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">5. Intellectual Property</h2>
              <p className="text-gray-400">
                All content, features, and functionality of our services are owned by LaxiZen and are protected 
                by international copyright, trademark, and other intellectual property laws.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">6. Prohibited Uses</h2>
              <p className="text-gray-400">You agree not to use our services to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-400">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Transmit any harmful or malicious content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the proper functioning of our services</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">7. Limitation of Liability</h2>
              <p className="text-gray-400">
                LaxiZen shall not be liable for any indirect, incidental, special, consequential, or punitive 
                damages resulting from your use of or inability to use our services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">8. Changes to Terms</h2>
              <p className="text-gray-400">
                We reserve the right to modify these terms at any time. We will notify users of any material 
                changes through our website or via email.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">9. Contact Information</h2>
              <p className="text-gray-400">
                If you have any questions about these Terms of Service, please contact us at{' '}
                <a href="mailto::contact@laxizen.fun" className="text-blue-400 hover:text-blue-300">
                  contact@laxizen.fun
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 