const DataPrivacy = () => {
  return (
    <main className="min-h-screen bg-slate-50 pt-20 md:pt-24 pb-12 px-3 md:px-4 lg:px-12">
      <header className="mb-12">
        <h1 className="text-4xl font-black text-slate-900">Data Privacy</h1>
        <p className="text-slate-600 mt-2">Privacy Policy</p>
      </header>

      <div className="bg-white rounded-xl shadow-sm p-8 max-w-4xl">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Introduction</h2>
          <p className="text-slate-600">
            This Privacy Policy explains how Finance Tracker collects, uses, discloses, and safeguards your information when you use our application. Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our application.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Information We Collect</h2>
          <p className="text-slate-600 mb-4">
            <strong>The information we collect includes:</strong>
          </p>
          <ul className="text-slate-600 space-y-2 ml-6">
            <li>• <strong>Financial Data:</strong> Transactions, budgets, income, expenses, and subscription information that you manually enter into the application</li>
            <li>• <strong>Device Information:</strong> Your device type, operating system, and browser type</li>
            <li>• <strong>Usage Data:</strong> Information about how you interact with the application, including features used and time spent</li>
            <li>• <strong>Location Data:</strong> Your approximate location based on IP address (not stored permanently)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">2. How We Use Your Information</h2>
          <p className="text-slate-600 mb-4">
            We use the information we collect for the following purposes:
          </p>
          <ul className="text-slate-600 space-y-2 ml-6">
            <li>• To provide, maintain, and improve the application</li>
            <li>• To personalize your experience and deliver content tailored to your interests</li>
            <li>• To process your financial data as you request</li>
            <li>• To monitor and analyze trends, usage, and activities</li>
            <li>• To detect, investigate, and prevent fraudulent transactions</li>
            <li>• To comply with legal obligations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Data Storage and Security</h2>
          <p className="text-slate-600 mb-4">
            <strong>Local Storage:</strong> Your financial data is primarily stored within your web browser's local storage. This data remains on your device and is not automatically transmitted to our servers unless you explicitly sync or export it.
          </p>
          <p className="text-slate-600 mb-4">
            <strong>Backend Storage:</strong> Any data you choose to sync with our backend servers is encrypted in transit using SSL/TLS encryption. We implement industry-standard security measures including:
          </p>
          <ul className="text-slate-600 space-y-2 ml-6">
            <li>• 256-bit SSL encryption for data in transit</li>
            <li>• Secure password hashing and storage practices</li>
            <li>• Regular security audits and vulnerability assessments</li>
            <li>• Access controls and authentication mechanisms</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Sharing of Information</h2>
          <p className="text-slate-600 mb-4">
            We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
          </p>
          <ul className="text-slate-600 space-y-2 ml-6">
            <li>• <strong>Legal Compliance:</strong> When required by law or legal process</li>
            <li>• <strong>Service Providers:</strong> With trusted third parties who assist us in operating our application and conducting our business, subject to confidentiality agreements</li>
            <li>• <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            <li>• <strong>User Consent:</strong> With your explicit consent for specific purposes</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Cookies and Tracking Technologies</h2>
          <p className="text-slate-600 mb-4">
            Finance Tracker uses essential cookies to maintain session information and improve user experience. These cookies are necessary for the application to function properly. You can disable non-essential cookies through your browser settings, but this may affect your ability to use certain features.
          </p>
          <p className="text-slate-600">
            We may also use analytics tools to understand how users interact with our application. These tools may collect aggregated, non-personally identifiable data.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Your Rights</h2>
          <p className="text-slate-600 mb-4">
            Depending on your location, you may have the following rights regarding your personal data:
          </p>
          <ul className="text-slate-600 space-y-2 ml-6">
            <li>• <strong>Access:</strong> The right to access your personal data</li>
            <li>• <strong>Correction:</strong> The right to correct inaccurate data</li>
            <li>• <strong>Deletion:</strong> The right to request deletion of your data</li>
            <li>• <strong>Portability:</strong> The right to receive a copy of your data in a portable format</li>
            <li>• <strong>Opt-out:</strong> The right to opt-out of certain data processing activities</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Data Retention</h2>
          <p className="text-slate-600">
            We retain your personal data for as long as necessary to provide our services and fulfill the purposes outlined in this policy. You can request deletion of your data at any time. However, we may retain certain information as required by law or for legitimate business purposes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Children's Privacy</h2>
          <p className="text-slate-600">
            Finance Tracker is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we discover that a child under 13 has provided us with personal information, we will promptly delete such information from our records.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Third-Party Links</h2>
          <p className="text-slate-600">
            Our application may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party websites before providing your personal information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Changes to This Privacy Policy</h2>
          <p className="text-slate-600">
            We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by updating the "Last Updated" date at the bottom of this policy. Your continued use of the application following any changes constitutes your acceptance of the updated Privacy Policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Contact Us</h2>
          <p className="text-slate-600">
            If you have questions about this Privacy Policy or our privacy practices, please contact us at:
          </p>
          <p className="text-slate-600 mt-4">
            <strong>Email:</strong> privacy@financetracker.local
          </p>
        </section>

        <section className="border-t border-slate-200 pt-8">
          <p className="text-slate-600 text-sm">
            <strong>Last Updated:</strong> April 1, 2026
          </p>
        </section>
      </div>
    </main>
  )
}

export default DataPrivacy
