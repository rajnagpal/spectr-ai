import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const Header = () => {
  const scrollToRoadmap = () => {
    const element = document.querySelector('h2.text-3xl.md\\:text-4xl.font-bold.mb-4');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-background/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/e5fd491b-d87e-4edc-b46f-32f9a25d0fe0.png" 
            alt="Spectr AI Logo" 
            className="h-8 w-auto"
          />
          <span className="text-xl font-bold gradient-text">Spectr AI</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/whitepaper" className="text-sm text-gray-400 hover:text-white transition-colors">
            Whitepaper
          </Link>
          <button 
            onClick={scrollToRoadmap}
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Roadmap
          </button>
          <Link to="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
            Terms
          </Link>
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                size="sm"
                className="bg-primary hover:bg-primary/90 text-white"
              >
                Pro Terminal →
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
        </nav>
      </div>
    </header>
  );
};