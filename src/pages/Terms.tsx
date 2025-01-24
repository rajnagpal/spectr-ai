import { Header } from "@/components/Header";

const Terms = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-white">
      <Header />
      <main className="flex-grow pt-32 px-4 sm:px-8 max-w-4xl mx-auto w-full">
        <h1 className="text-4xl sm:text-5xl font-bold mb-8">Terms and Conditions</h1>
        <section className="space-y-8">
          <div>
            <p className="text-gray-300 leading-relaxed">
              Welcome to the Spectr AI Pro Terminal, The "Pro Terminal," operated by the Spectr AI team ("we," "us," or "our"). By accessing or using the Pro Terminal, holding Spectr AI ($SPECTRAI) tokens, or engaging with our related services (collectively, the "Services"), you agree to be bound by these Terms and Conditions (the "Terms"). If you do not agree to all of these Terms, you are not authorized to use the Services.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              These Terms apply to all users of the Pro Terminal, including those accessing through any holding of Spectr AI tokens and those interacting with the Spectr AI via the Pro Terminal or on external platforms such as Twitter (X) or Telegram.
            </p>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">1. Eligibility and Access Requirements</h2>
            <h3 className="text-xl font-bold mt-4 mb-2">1.1 Eligibility and Access Requirements</h3>
            <p className="text-gray-300 leading-relaxed">To access the Pro Terminal's guaranteed response service, you must hold a minimum of 100,000 Spectr AI ($SPECTRAI) tokens. We reserve the right to verify token holdings to ensure compliance with this requirement.</p>
            <h3 className="text-xl font-bold mt-4 mb-2">1.2 No Guarantee of Response on Twitter (X) or Telegram</h3>
            <p className="text-gray-300 leading-relaxed">While you may interact with the Spectr AI on Twitter (X) or Telegram by mentioning or engaging with it, there is no guarantee of receiving a reply.</p>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">2. Nature of the Content and Interactions</h2>
            <h3 className="text-xl font-bold mt-4 mb-2">2.1 Informational Use Only – Not Investment Advice</h3>
            <p className="text-gray-300 leading-relaxed">All content, including any news summaries, analysis, commentary, or opinions provided by the Spectr AI (the "Content"), is for informational purposes only. None of the Content should be considered investment advice, financial guidance, or a recommendation to buy, sell, or hold any digital asset or other financial product. You should always do your own research and, if necessary, consult qualified professional advisors before making any investment decisions.</p>
            <h3 className="text-xl font-bold mt-4 mb-2">2.2 Unpredictability of Outputs</h3>
            <p className="text-gray-300 leading-relaxed">The Spectr AI leverages complex models and dynamic data sources. While we strive for quality and reliability, the Content is inherently unpredictable and may contain errors, omissions, or misinformation. Use the Content at your own risk and discretion.</p>
            <h3 className="text-xl font-bold mt-4 mb-2">2.3 User-Generated Interactions</h3>
            <p className="text-gray-300 leading-relaxed">You understand that any prompts, questions, or content you provide ("User Content") may influence the Spectr AI's responses. We encourage users to provide thoughtful, constructive, and respectful input. Misleading, inappropriate, or harmful inputs may result in responses of limited value or potential refusal of service.</p>
            <h3 className="text-xl font-bold mt-4 mb-2">2.4 Sharing of Conversations</h3>
            <p className="text-gray-300 leading-relaxed">Users of the Pro Terminal have the option to share conversations they have had with the Spectr AI. By choosing to share such conversations, you grant us the right to publicly display, reproduce, modify, and distribute the shared content in any media, without further consent, notice, or compensation to you.</p>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">3. User Conduct</h2>
            <h3 className="text-xl font-bold mt-4 mb-2">3.1 Respectful Interactions</h3>
            <p className="text-gray-300 leading-relaxed">Users agree to be respectful and courteous when interacting with the Spectr AI, other community members, and our team. Harassment, hate speech, or other forms of abusive behavior will not be tolerated.</p>
            <h3 className="text-xl font-bold mt-4 mb-2">3.2 Prohibited Conduct</h3>
            <p className="text-gray-300 leading-relaxed">You agree not to use the Pro Terminal or the Spectr AI to:</p>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed mt-2">
              <li>Violate any applicable law, regulation, or third-party right;</li>
              <li>Transmit any malicious code, software, or data that may harm the Pro Terminal, the Spectr AI, or other users;</li>
              <li>Spread misleading or deceptive information with the intent to manipulate or confuse;</li>
              <li>Solicit personal or sensitive information from other users or the Spectr AI;</li>
              <li>Engage in any activity that interferes with, disrupts, or imposes an undue burden on the Pro Terminal's infrastructure or related services.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">4. Intellectual Property</h2>
            <h3 className="text-xl font-bold mt-4 mb-2">4.1 Ownership of Content</h3>
            <p className="text-gray-300 leading-relaxed">Unless otherwise stated, all intellectual property rights in the Pro Terminal, its underlying code, technology, design, and related materials belong to us or our licensors. You may not reproduce, distribute, or create derivative works from our Content without our prior written permission.</p>
            <h3 className="text-xl font-bold mt-4 mb-2">4.2 User-Provided Content</h3>
            <p className="text-gray-300 leading-relaxed">By providing prompts, feedback, suggestions, or other content to the Pro Terminal, you grant us a non-exclusive, worldwide, royalty-free, irrevocable license to use, reproduce, modify, and distribute such User Content for the purpose of improving our Services and developing new features.</p>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">5. Data Processing and Privacy</h2>
            <h3 className="text-xl font-bold mt-4 mb-2">5.1 Use of User Data for Analytics and Error Tracking</h3>
            <p className="text-gray-300 leading-relaxed">We reserve the right to process user data—including usage data, query logs, and other related information—for analytics, performance measurement, quality assurance, and error tracking purposes. Such data may be processed on third-party platforms and services to help us identify and resolve issues, improve our models, and enhance the overall user experience.</p>
            <h3 className="text-xl font-bold mt-4 mb-2">5.2 Privacy Measures</h3>
            <p className="text-gray-300 leading-relaxed">We value your privacy. While we collect and use data as described above, we strive to adhere to applicable data protection laws and industry best practices. Please refer to our Privacy Policy for more details on how we collect, use, store, and protect your personal information.</p>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">6. Disclaimers and Limitations of Liability</h2>
            <h3 className="text-xl font-bold mt-4 mb-2">6.1 No Warranties</h3>
            <p className="text-gray-300 leading-relaxed">THE TERMINAL, THE SPECTR AI, AND ALL ASSOCIATED CONTENT ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF ACCURACY, RELIABILITY, NON-INFRINGEMENT, OR FITNESS FOR A PARTICULAR PURPOSE. YOUR USE OF THE TERMINAL AND THE SPECTR AI IS AT YOUR SOLE RISK.</p>
            <h3 className="text-xl font-bold mt-4 mb-2">6.2 Limitation of Liability</h3>
            <p className="text-gray-300 leading-relaxed">TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE, OUR OFFICERS, DIRECTORS, EMPLOYEES, PARTNERS, AND AFFILIATES SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR INVESTMENT CAPITAL, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE TERMINAL, THE SPECTR AI, OR ANY CONTENT PROVIDED, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
            <h3 className="text-xl font-bold mt-4 mb-2">6.3 User Responsibility</h3>
            <p className="text-gray-300 leading-relaxed">You acknowledge and agree that you are solely responsible for your own investment decisions, actions, and any losses or gains that may result from your reliance on the Content.</p>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">7. Reporting Issues and Abuse</h2>
            <p className="text-gray-300 leading-relaxed">If you encounter errors, misleading content, abuse, or violations of these Terms, please report such instances via our social media channels. We may, at our sole discretion, review and address reported issues and take appropriate action.</p>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">8. Indemnification</h2>
            <p className="text-gray-300 leading-relaxed">You agree to indemnify, defend, and hold harmless us, our officers, directors, employees, partners, and affiliates from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Services.</p>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">9. Modifications to the Terms</h2>
            <p className="text-gray-300 leading-relaxed">We reserve the right to modify these Terms at any time. Any changes will be effective immediately upon posting on the Spectr AI Pro Terminal's website. Your continued use of the Services after the posting of revised Terms constitutes your acceptance of those changes.</p>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">10. Governing Law and Jurisdiction</h2>
            <p className="text-gray-300 leading-relaxed">These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which we operate, without regard to its conflict of law principles. You agree to submit to the exclusive jurisdiction of the courts located in that jurisdiction for the resolution of any disputes arising out of these Terms or your use of the Pro Terminal.</p>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">11. Severability</h2>
            <p className="text-gray-300 leading-relaxed">If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.</p>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">12. Entire Agreement</h2>
            <p className="text-gray-300 leading-relaxed">These Terms, together with any referenced policies such as our Privacy Policy, constitute the entire agreement between you and us regarding the use of the Pro Terminal and the Spectr AI and supersede any prior agreements or understandings.</p>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Contact Information</h2>
            <p className="text-gray-300 leading-relaxed">If you have any questions or concerns about these Terms, please contact us via our social media channels. By accessing or using the Pro Terminal and associated Services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.</p>
          </div>
        </section>
      </main>
      <footer className="bg-black text-white py-8 px-4 sm:px-8 mt-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center items-center">
            <p className="text-sm text-gray-400">© 2025 Spectr AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Terms;