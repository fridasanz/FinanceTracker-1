const Impressum = () => {
  return (
    <main className="min-h-screen bg-slate-50 pt-20 md:pt-24 pb-12 px-3 md:px-4 lg:px-12">
      <header className="mb-12">
        <h1 className="text-4xl font-black text-slate-900">Impressum</h1>
        <p className="text-slate-600 mt-2">Legal Notice</p>
      </header>

      <div className="bg-white rounded-xl shadow-sm p-8 max-w-4xl">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Responsible for the Content</h2>
          <p className="text-slate-700 mb-2">
            <strong>Finance Tracker Application</strong>
          </p>
          <p className="text-slate-600">
            This is a personal finance management application designed to help users track their income, expenses, budgets, and subscriptions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Developer</h2>
          <p className="text-slate-700 mb-2">
            <strong>Frida Stef Sanchez Burga</strong>
          </p>
          <p className="text-slate-600">
            Email: contact@financetracker.local
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Disclaimer</h2>
          <p className="text-slate-600 mb-4">
            The content of this application is provided "as is" without warranty of any kind, either express or implied. The developer does not guarantee that the application will be error-free, uninterrupted, or free of viruses or other harmful components.
          </p>
          <p className="text-slate-600">
            The developer shall not be liable for any damages, including but not limited to lost data, lost profits, or any other damages resulting from the use or inability to use this application.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Limitation of Liability</h2>
          <p className="text-slate-600">
            The developer assumes no responsibility for errors or omissions in the content of this application. The information contained in this application is provided on an "as is" basis. The developer disclaims all warranties, including but not limited to the warranties of merchantability, fitness for a particular purpose, and non-infringement.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Financial Advice Disclaimer</h2>
          <p className="text-slate-600">
            This application is intended for personal financial tracking purposes only and does not constitute financial advice. The developer does not provide professional financial, investment, tax, or legal advice. Users should consult with qualified professionals before making any financial decisions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Links to Third-Party Websites</h2>
          <p className="text-slate-600">
            This application may contain links to websites operated by third parties. The developer is not responsible for the content of these websites and does not endorse them. Your use of third-party websites is subject to the terms and conditions of those websites.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Copyright Notice</h2>
          <p className="text-slate-600">
            © 2026 Finance Tracker. All rights reserved. The design, layout, content, and graphics on this application are the intellectual property of the developer and are protected by international copyright laws.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Changes to This Impressum</h2>
          <p className="text-slate-600">
            The developer reserves the right to change or update this Impressum at any time without notice. Your continued use of this application after any changes signifies your acceptance of the updated Impressum.
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

export default Impressum
