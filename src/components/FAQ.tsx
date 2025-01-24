import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "How does Spectr AI Agent work?",
    answer: "Spectr AI Agent uses advanced machine learning algorithms to analyze market data, identify patterns, and generate trading insights. Our AI-powered system continuously learns and adapts to market conditions, providing users with real-time intelligence for informed decision-making.",
  },
  {
    question: "Who can benefit from Spectr AI Agent?",
    answer: "Both experienced traders and newcomers can benefit from Spectr AI Agent. For seasoned traders, it provides advanced analytics and automation tools to enhance their strategies. For newcomers, it offers guided insights and educational resources to help them navigate the crypto markets more effectively.",
  },
  {
    question: "What sets Spectr AI Agent apart?",
    answer: "Our unique combination of AI technology, real-time data analysis, and user-friendly interface makes Spectr AI Agent stand out. We focus on providing actionable insights while maintaining transparency and user control, ensuring our platform serves as a powerful tool rather than a black box.",
  },
  {
    question: "Is my data secure with Spectr AI Agent?",
    answer: "Yes, security is our top priority. Spectr AI Agent employs industry-leading encryption and security measures to protect user data and trading information. We never share or sell user data to third parties.",
  },
  {
    question: "How can I get started with Spectr AI Agent?",
    answer: "Getting started is simple. Hold $SPECTRAI tokens in your wallet to access the platform features. Follow @spectr_ai_ on Twitter for the latest updates and announcements about new features and improvements.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Find answers to common questions about Spectr AI Agent and how it can help optimize your trading experience.
        </p>
      </div>
      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-400">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};