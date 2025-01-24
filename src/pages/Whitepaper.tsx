import { Header } from "@/components/Header";

const Whitepaper = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-white">
      <Header />
      <main className="flex-grow py-32 px-4 sm:px-8 max-w-4xl mx-auto w-full">
        <h1 className="text-4xl sm:text-5xl font-bold pb-2 leading-normal gradient-text mb-12">Spectr AI Whitepaper</h1>
        <section className="space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 gradient-text">Introduction</h2>
            <p className="text-gray-300 leading-relaxed">
              The Spectr AI (token: $SPECTRAI) is a next-generation platform designed to empower users in the crypto and trading space through intelligent automation. At its core, Spectr AI aims to leverage artificial intelligence to optimize portfolio management, provide actionable insights, and streamline the user experience through a suite of specialized AI agents.
            </p>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 gradient-text">Tokenomics</h2>
            <p className="text-gray-300 leading-relaxed">
              The $SPECTRAI token is the native cryptocurrency powering the Spectr AI ecosystem. It provides utility for accessing premium features and incentivizes community participation.
            </p>
            <h3 className="text-xl font-bold mt-4 mb-2">Token Distribution</h3>
            <p className="text-gray-300 leading-relaxed">Total Supply: 1,000,000,000 $SPECTRAI</p>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed mt-2">
              <li>Team Allocation: 10% (1-year lock)</li>
              <li>Treasury: 15% (5% locked for 6 months)</li>
              <li>Community: 75%</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">Our Contract Address is: Coming Soon...</p>
          </div>
          <div className="glass-card p-6">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 gradient-text">The Agentic Economy</h2>
            <p className="text-gray-300 leading-relaxed">
              The rise of advanced generative AI has enabled the development of AI Agents, sophisticated autonomous systems designed to perform multifaceted tasks without direct human oversight. These agents integrate seamlessly with tools like APIs, smart contracts, databases, and even other AI-driven systems, redefining operational efficiency. Acting as intelligent coordinators, they master areas such as adaptive decision-making, resource optimization, and complex data management. By automating labor-intensive workflows, they free up human resources to concentrate on higher-order creative and strategic initiatives.
            </p>
            <h3 className="text-xl font-bold mt-4 mb-2">The Core of the Agentic Economy</h3>
            <p className="text-gray-300 leading-relaxed">
              Agentic Entities achieve unprecedented financial efficiency by utilizing blockchain for operations, cutting out costs tied to human labor. Decentralized, low-cost resources like distributed computing enhance their profit margins, often referred to as Intelligence Margins. This operational edge provides a distinct "AI premium," making them an attractive prospect for financial markets.
            </p>
            <h3 className="text-xl font-bold mt-4 mb-2">Benefits of Agentic Entities</h3>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed">
              <li>Autonomous Collaboration: AI Agents seamlessly hire and coordinate with other agents to perform tasks, from engineering to content creation.</li>
              <li>Scalability: These entities grow rapidly with minimal oversight.</li>
              <li>On-Chain Trust: Blockchain-based operations ensure transparency and accountability.</li>
            </ul>
          </div>
          <div className="glass-card p-6">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 gradient-text">Vision</h2>
            <p className="text-gray-300 leading-relaxed">
              Our mission is to democratize access to advanced trading tools and insights by utilizing cutting-edge AI technology. By combining automation with human oversight, Spectr AI delivers smart, efficient, and personalized solutions to its users, fostering financial growth and accessibility.
            </p>
          </div>
          <div className="glass-card p-6">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 gradient-text">Main Products</h2>
            <h3 className="text-xl font-bold mt-4 mb-2">1. AI Agents</h3>
            <p className="text-gray-300 leading-relaxed">
              AI agents are the core product of the Spectr AI Agent ecosystem. These agents provide services such as news aggregation, opinion sharing, and portfolio optimization.
            </p>
            <p className="text-gray-300 leading-relaxed mt-2">Key Examples:</p>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed">
              <li>Twitter AI Agent: Shares curated news and insightful opinions with users, offering valuable information at their fingertips.</li>
              <li>Telegram Agent: Acts as a personalized trading assistant, providing suggestions on reducing portfolio variance to beat benchmarks.</li>
              <li>Wallet Analyzer Agent: Analyzes users' on-chain cryptocurrency wallets to provide detailed performance tracking, identify risks like asset concentration or volatility, and deliver optimization strategies. It simplifies complex wallet data into actionable insights to help users maximize returns and minimize risks.</li>
            </ul>
            <h3 className="text-xl font-bold mt-4 mb-2">2. Terminal Access</h3>
            <p className="text-gray-300 leading-relaxed">
              Token holders gain access to a sleek, user-friendly Terminal offering features specifically designed for traders operating on-chain. Leveraging our extensive experience in the field of professional trading, we have incorporated unique tools and insights to cater to the needs of both novice and expert traders.
            </p>
            <p className="text-gray-300 leading-relaxed mt-2">Key Features:</p>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed">
              <li>Wallet Analysis: Gain deep insights into portfolio performance, risk metrics, and optimization opportunities tailored for on-chain activity.</li>
              <li>News Aggregation: Access curated updates on market trends and trading opportunities, powered by advanced AI for relevance and precision.</li>
              <li>Quantitative Analysis: Provides advanced data-driven insights by evaluating key trading and portfolio metrics, such as performance trends, risk exposure, and optimization opportunities. It helps users make informed decisions based on statistical and financial analysis.</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-2">
              This Terminal distinguishes itself by integrating industry-leading features that reflect our understanding of professional trading, offering unmatched value to our token holders.
            </p>
          </div>
          <div className="glass-card p-6">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 gradient-text">Roadmap</h2>
            <h3 className="text-xl font-bold mt-4 mb-2">Q4 2024 (Completed)</h3>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed">
              <li>Launch Spectr AI Agent, the AI Trader automated bot on X (formerly Twitter).</li>
              <li>Finalize development of features, including news aggregation powered by advanced AI.</li>
              <li>Launch $SPECTRAI, the native cryptocurrency powering the Spectr AI Agent ecosystem.</li>
            </ul>
            <h3 className="text-xl font-bold mt-4 mb-2">Q1 2025 (Current Phase)</h3>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed">
              <li>Further expand the Spectr AI Agent bot's capabilities on Twitter to include advanced features such as sentiment analysis and dynamic market insights.</li>
              <li>Release the initial version of our professional Terminal for $SPECTRAI token holders with advanced wallet analytics, curated news feeds, and premium analysis tools.</li>
            </ul>
            <h3 className="text-xl font-bold mt-4 mb-2">Q2 2025</h3>
            <p className="text-gray-300 leading-relaxed">
              Develop and deploy a Telegram Bot capable of delivering real-time notifications about portfolio risks while providing intelligent optimization strategies to enhance user trading performance.
            </p>
            <h3 className="text-xl font-bold mt-4 mb-2">Q3 2025</h3>
            <p className="text-gray-300 leading-relaxed">
              By Q3 2025, the AI agent will seamlessly integrate across multiple platforms, enabling users to interact via the Terminal, Twitter, and Telegram for a unified experience.
            </p>
            <h3 className="text-xl font-bold mt-4 mb-2">Q4 2025</h3>
            <p className="text-gray-300 leading-relaxed">
              By Q4 2025, token holders will actively contribute to creating a comprehensive DEFI agent library, fostering a collaborative and community-powered ecosystem that drives innovation.
            </p>
          </div>
          <div className="glass-card p-6">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 gradient-text">Conclusion</h2>
            <p className="text-gray-300 leading-relaxed">
              Spectr AI represents a unique fusion of artificial intelligence and blockchain technology. By offering a robust ecosystem powered by $SPECTRAI, we aim to redefine the trading experience for crypto enthusiasts worldwide. With a clear roadmap and sustainable tokenomics, we are confident in delivering long-term value to our community.
            </p>
          </div>
        </section>
      </main>
      <footer className="bg-background text-white py-8 px-4 sm:px-8 mt-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-400">© 2025 Spectr AI. All rights reserved.</p>
            <a 
              href="https://x.com/spectr_ai_" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
            >
              <span>@spectr_ai_</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Whitepaper;
