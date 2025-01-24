import { motion } from "framer-motion";
import { CircleHelp, TrendingUp, TrendingDown, CircleArrowUp, CircleArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  RadarChart
} from "recharts";

const portfolioData = [
  { date: "Dec 10", value: 25000 },
  { date: "Dec 11", value: 32000 },
  { date: "Dec 12", value: 28000 },
  { date: "Dec 13", value: 35000 },
  { date: "Dec 14", value: 30000 },
  { date: "Dec 15", value: 38000 },
  { date: "Dec 16", value: 42000 },
];

const tradeData = Array.from({ length: 10 }, (_, i) => ({
  name: `Point ${i + 1}`,
  value: Math.floor(Math.random() * 30) + 10,
}));

const riskData = [
  { subject: "Low", A: 85 },
  { subject: "Medium", A: 65 },
  { subject: "High", A: 45 },
];

export const Dashboard = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full"
    >
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-0 border border-primary/20">
          {/* Portfolio Analysis Section */}
          <div className="space-y-0 flex flex-col h-full">
            <div className="flex-1">
              <div className="bg-background overflow-hidden shadow-none max-w-none mx-0 w-full h-full flex flex-col border border-primary/20 rounded-none">
                <div className="bg-card/50 px-4 py-2 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-[#ff605c]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#ffbd44]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#00ca4e]"></div>
                    </div>
                    <div className="bg-background text-secondary text-xs font-medium px-2 py-1 rounded">
                      Example Feature
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-400 hover:text-primary"
                  >
                    <CircleHelp className="w-5 h-5" />
                  </Button>
                </div>
                <pre className="text-left text-sm text-foreground overflow-y-auto whitespace-pre-wrap font-mono p-4 flex-grow">
{`Portfolio Analysis
Our Wallet Agent analyzed your portfolio, revealing SOL and ETH as your primary holdings, valued at $33,245 and $9,755, respectively. These assets offer stability, but increasing exposure to smaller tokens could unlock higher returns. Let us know if you'd like to explore strategies for diversification.

Price Action
SOL dropped -1.50% today, while ETH gained +0.75%. Both showed strong buying activity, signaling optimism for a rebound. Notably, GIGA, a smaller holding, rose 7.4% but had minimal impact on overall performance due to its lower allocation ($1,340).

Your portfolio is underexposed to trending sectors like AI and gaming tokens, which are gaining momentum. Rotating a portion of SOL, currently at a 30-day high, into these narratives could be a strategic move. Diversifying from underperformers like ASR might also enhance returns.

Whale Activity
Our Whale Agent tracked a major transfer of 26,069 ETH ($102M) from Coinbase Institutional to an unknown wallet. This movement may have market implications worth monitoring.

BTC Beta Impact
Your portfolio has a beta of 1.61 relative to Bitcoin, meaning a 1% BTC move causes a $692.30 fluctuation. SOL is the most responsive, contributing $499, while ETH adds $98.

Market News and Key Dates
January 20 marks Trump's inauguration, a potential catalyst for crypto policy announcements. Regulatory news could significantly affect market sentiment. If you'd like, we can analyze historical patterns or simulate risk scenarios to help prepare your portfolio. Let us know how we can assist further.`}
                </pre>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="p-4 border-t border-primary/20"
                >
                  <div className="flex flex-wrap gap-2 justify-start">
                    {[
                      "Explore ways to hedge risks from this event",
                      "Optimize holdings to reduce Bitcoin beta",
                      "Check whale activity for more patterns",
                      "Find strategies to diversify for better returns"
                    ].map((text, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="px-4 py-2 rounded-full text-sm bg-card/50 text-gray-300 hover:bg-primary/20 hover:text-white transition-colors border border-primary/20 whitespace-nowrap"
                      >
                        {text}
                      </Button>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="space-y-0">
            <div className="grid grid-cols-2 gap-0 border-l border-t border-primary/20">
              {/* BTC Impact Section */}
              {[
                { label: "BTC +1%", value: "+$692.30", icon: TrendingUp, type: "up" },
                { label: "BTC +5%", value: "+$3,461.50", icon: CircleArrowUp, type: "up" },
                { label: "BTC -1%", value: "-$692.30", icon: TrendingDown, type: "down" },
                { label: "BTC -5%", value: "-$3,461.50", icon: CircleArrowDown, type: "down" }
              ].map((item, index) => (
                <div
                  key={index}
                  className={`bg-background p-4 flex flex-col relative overflow-hidden border-r border-b border-primary/20`}
                  style={{
                    background: `linear-gradient(135deg, ${
                      item.type === "up" ? "rgba(185, 27, 224, 0.1)" : "rgba(245, 158, 11, 0.1)"
                    } 0%, ${
                      item.type === "up" ? "rgba(185, 27, 224, 0.05)" : "rgba(245, 158, 11, 0.05)"
                    } 100%)`
                  }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <p className="text-gray-400 text-xs sm:text-sm font-medium">{item.label}</p>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-400 hover:text-primary"
                      >
                        <CircleHelp className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className={`p-1 sm:p-2 rounded-lg ${
                      item.type === "up" ? "bg-primary/20" : "bg-secondary/20"
                    }`}>
                      <item.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${
                        item.type === "up" ? "text-primary" : "text-secondary"
                      }`} />
                    </div>
                  </div>
                  <p className={`text-lg sm:text-2xl font-bold ${
                    item.type === "up" ? "text-primary" : "text-secondary"
                  } mb-1`}>
                    {item.value}
                  </p>
                  <p className="text-gray-400 text-xs sm:text-sm">Impact on your portfolio</p>
                </div>
              ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* Total Trades Chart */}
              <div className="bg-background p-4 hover:bg-card/50 transition-colors relative overflow-hidden border-r border-b border-primary/20">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <p className="text-sm text-gray-400 text-left">TOTAL TRADES</p>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-400 hover:text-primary"
                      >
                        <CircleHelp className="w-4 h-4" />
                      </Button>
                    </div>
                    <h3 className="text-2xl font-bold mt-1">245</h3>
                  </div>
                  <div className="flex items-center text-red-400">
                    <TrendingDown className="w-4 h-4" />
                    <span className="text-sm ml-1">5.05%</span>
                  </div>
                </div>
                <div className="h-10">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={tradeData}>
                      <defs>
                        <linearGradient id="gradient-TOTAL TRADES" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#FFA500" stopOpacity={0.2} />
                          <stop offset="100%" stopColor="#FFA500" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#FFA500"
                        fill="url(#gradient-TOTAL TRADES)"
                        strokeWidth={2}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Active Positions Chart */}
              <div className="bg-background p-4 hover:bg-card/50 transition-colors relative overflow-hidden border-r border-b border-primary/20">
                <div className="absolute inset-0 backdrop-blur-sm z-10" />
                <div className="absolute inset-0 bg-black/40 z-20 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">Pro Feature</h3>
                    <p className="text-sm text-gray-400">Active Positions</p>
                  </div>
                </div>
                <div className="flex justify-between items-start mb-4 opacity-40">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <p className="text-sm text-gray-400 text-left">ACTIVE POSITIONS</p>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-400 hover:text-primary"
                      >
                        <CircleHelp className="w-4 h-4" />
                      </Button>
                    </div>
                    <h3 className="text-2xl font-bold mt-1">8</h3>
                  </div>
                  <div className="flex items-center text-green-400">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm ml-1">25.16%</span>
                  </div>
                </div>
                <div className="h-10 opacity-40">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={tradeData}>
                      <defs>
                        <linearGradient id="gradient-ACTIVE POSITIONS" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#818cf8" stopOpacity={0.2} />
                          <stop offset="100%" stopColor="#818cf8" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#818cf8"
                        fill="url(#gradient-ACTIVE POSITIONS)"
                        strokeWidth={2}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Portfolio Value Chart */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
              <div className="lg:col-span-1">
                <div className="bg-background p-4 h-[400px] flex flex-col relative overflow-hidden border border-primary/20">
                  <div className="absolute inset-0 backdrop-blur-sm z-10" />
                  <div className="absolute inset-0 bg-black/40 z-20 flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-2">Pro Feature</h3>
                      <p className="text-sm text-gray-400">Key Portfolio Metrics</p>
                    </div>
                  </div>
                  <h2 className="text-xl font-bold mb-4 text-left relative z-0">Key Portfolio Metrics</h2>
                  <div className="flex-grow flex flex-col justify-between relative z-0">
                    <div className="space-y-4">
                      {[
                        { label: "Total Assets", value: "12", icon: "users" },
                        { label: "Total Value", value: "$79,760", icon: "dollar-sign" },
                        { label: "24h Change", value: "+$1,240", icon: "image" }
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-4 hover:bg-[#2a2a2a] rounded-lg transition-colors"
                        >
                          <div>
                            <p className="text-sm text-gray-400 text-left">{item.label}</p>
                            <p className="text-xl font-bold mt-1">{item.value}</p>
                          </div>
                          <div className="text-gray-400">
                            <i className={`lucide lucide-${item.icon} w-6 h-6`}></i>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="bg-background p-4 h-[400px] flex flex-col border border-primary/20">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-left">Portfolio Value</h2>
                    <div className="flex gap-2">
                      {["1D", "1W", "1M", "3M", "1Y"].map((period, index) => (
                        <Button
                          key={period}
                          disabled={period !== "1W"}
                          className={`relative ${
                            period === "1W"
                              ? "bg-white/10 text-white"
                              : "hover:text-white hover:bg-white/5 bg-black/70 backdrop-blur-xl border border-gray-800 text-gray-500"
                          }`}
                        >
                          {period}
                          {period !== "1W" && (
                            <>
                              <CircleHelp className="w-3 h-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-300 z-10" />
                              <div className="absolute inset-0 bg-black/50 backdrop-blur-xl rounded-sm" />
                            </>
                          )}
                        </Button>
                      ))}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={portfolioData}>
                        <defs>
                          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#FFA500" stopOpacity={0.2} />
                            <stop offset="100%" stopColor="#FFA500" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <XAxis
                          dataKey="date"
                          axisLine={false}
                          tickLine={false}
                          tick={{ fill: "#6b7280" }}
                        />
                        <YAxis
                          axisLine={false}
                          tickLine={false}
                          tick={{ fill: "#6b7280" }}
                          tickFormatter={(value) => `$${value / 1000}k`}
                        />
                        <Tooltip
                          contentStyle={{
                            background: "#1e1e1e",
                            border: "none",
                            borderRadius: "8px",
                            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                          }}
                          labelStyle={{ color: "#6b7280" }}
                        />
                        <Area
                          type="monotone"
                          dataKey="value"
                          stroke="#FFA500"
                          fill="url(#colorValue)"
                          strokeWidth={2}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>

            {/* Risk Distribution and Fear & Greed Index */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="bg-background p-4 h-[300px] border border-primary/20">
                <h2 className="text-xl font-bold mb-4 text-left flex items-center gap-2">
                  Risk Distribution
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-400 hover:text-primary"
                  >
                    <CircleHelp className="w-4 h-4" />
                  </Button>
                </h2>
                <div className="h-[calc(100%-2rem)]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={riskData}>
                      <PolarGrid stroke="#555555" />
                      <PolarAngleAxis dataKey="subject" stroke="#555555" tick={{ fill: "#ffffff" }} />
                      <Radar
                        name="Risk Profile"
                        dataKey="A"
                        stroke="#FFA500"
                        fill="#FFA500"
                        fillOpacity={0.3}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="bg-background p-4 h-[300px] border border-primary/20">
                <h2 className="text-xl font-bold mb-4 text-left flex items-center gap-2">
                  Fear & Greed Index
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-400 hover:text-primary"
                  >
                    <CircleHelp className="w-4 h-4" />
                  </Button>
                </h2>
                <div className="flex items-center justify-center h-[calc(100%-2rem)]">
                  <div className="relative w-48 h-48">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="96"
                        cy="96"
                        r="80"
                        stroke="#333333"
                        strokeWidth="16"
                        fill="none"
                      />
                      <circle
                        cx="96"
                        cy="96"
                        r="80"
                        stroke="#4ade80"
                        strokeWidth="16"
                        fill="none"
                        strokeLinecap="round"
                        style={{
                          strokeDasharray: "502.655",
                          strokeDashoffset: "75.3982",
                          transition: "stroke-dashoffset 0.5s ease",
                        }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-5xl font-bold">85</span>
                      <span className="text-sm mt-2">Extreme Greed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
