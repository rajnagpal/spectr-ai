import { Hero } from "@/components/Hero";
import { Dashboard } from "@/components/Dashboard";
import { Roadmap } from "@/components/Roadmap";
import { FAQ } from "@/components/FAQ";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      <Header />
      <Hero />
      <Dashboard />
      <Roadmap />
      <FAQ />
      <Footer />
    </motion.div>
  );
};

export default Index;