import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown, Pill, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const Hero = () => {
  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#dashboard-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Animated gradient background */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-primary/20 via-purple-500/20 to-blue-500/20 animate-gradient"
        style={{
          backgroundSize: "200% 200%",
        }}
      />
      
      {/* Animated stars */}
      <div className="absolute inset-0">
        {[...Array(200)].map((_, i) => {
          // Calculate initial position spread across the entire width
          const initialLeft = Math.random() * 200 - 100; // Start from -100% to +100% of viewport width
          return (
            <div
              key={i}
              className={`absolute bg-white rounded-full animate-glow`}
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${initialLeft}%`,
                opacity: Math.random() * 0.7 + 0.3,
                animation: `moveLeftward ${Math.random() * 8 + 15}s linear infinite, glow ${Math.random() * 3 + 2}s ease-in-out infinite ${Math.random() * 2}s`,
                boxShadow: '0 0 3px #fff, 0 0 5px #fff',
              }}
            />
          );
        })}
      </div>
      
      {/* Content container */}
      <div className="relative z-10 container mx-auto px-6 py-28 min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center mb-6"
          >
            <img
              src="/lovable-uploads/e5fd491b-d87e-4edc-b46f-32f9a25d0fe0.png"
              alt="Spectr AI Logo"
              className="w-32 h-32 object-contain"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold gradient-text leading-normal pb-4"
          >
            AI-Powered Trading on Solana
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Experience the future of trading with our advanced AI-powered platform.
            Get real-time insights and outsmart the markets.
          </motion.p>

          {/* Links section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center gap-6 mb-6"
          >
            <a 
              href="#" 
              className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors"
            >
              <Pill className="w-4 h-4" />
              Buy $SPECTRAI Tokens
            </a>
            <a 
              href="https://x.com/spectr_ai_" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors"
            >
              <Twitter className="w-4 h-4" />
              Follow Spectr AI on X
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center gap-4"
          >
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="gap-2">
                  Access Pro Terminal <ArrowRight className="w-4 h-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-xl font-bold">Stay Tuned</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col items-center gap-4 py-4">
                  <p className="text-center">
                    Portfolios holding $SPECTRAI will be granted Pro Terminal access in the near future. Check out{' '}
                    <a 
                      href="https://x.com/spectr_ai_" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-primary hover:underline"
                    >
                      @spectr_ai_
                    </a>
                    {' '}for the latest news!
                  </p>
                  <Button 
                    variant="default" 
                    onClick={() => document.querySelector<HTMLButtonElement>('[data-state="open"]')?.click()}
                  >
                    Got it
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
            <Link to="/whitepaper">
              <Button size="lg" variant="outline">
                Whitepaper
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Animated scroll down arrow */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0, y: -10 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            translateY: [0, 10, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          onClick={scrollToNextSection}
        >
          <ArrowDown className="w-8 h-8 text-primary hover:text-primary/80 transition-colors" />
        </motion.div>
      </div>
    </div>
  );
};
