import { motion } from "framer-motion";
import { Code2, Rocket, Shield, Zap, Users, Timer } from "lucide-react";

const roadmapItems = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Building the Foundation",
    phase: "Current Phase",
    description: "Setting up core infrastructure and developing essential trading features"
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Expanding the Ecosystem",
    phase: "Next Phase",
    description: "Growing the platform's capabilities and integrating advanced features"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Integration and Enhancement",
    description: "Strengthening security and expanding platform functionality"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Multiplatform Accessibility",
    description: "Extending platform access across multiple devices and systems"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Community-Driven Development",
    description: "Implementing features based on community feedback and needs"
  },
  {
    icon: <Timer className="w-6 h-6" />,
    title: "Coming Soon",
    description: "Our Wildest Vision Yet!"
  }
];

export const Roadmap = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Building the Tools We Love: A Roadmap for Innovation
        </h2>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {roadmapItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card p-6 hover:bg-white/5 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                {item.icon}
              </div>
              {item.phase && (
                <span className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full">
                  {item.phase}
                </span>
              )}
            </div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-400">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};