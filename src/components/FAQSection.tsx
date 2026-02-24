import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "What types of scrap do you buy?",
    a: "We buy a wide variety of scrap, including all types of metals (iron, steel, copper, aluminum, brass), e-waste (computers, TVs, refrigerators), old vehicles and parts, industrial machinery, batteries, plastics, and cardboard. If you're unsure, please call us!"
  },
  {
    q: "Which areas in Phnom Penh do you serve?",
    a: "We offer free scrap pickup services across all 14 Khans (districts) of Phnom Penh. Whether you are in Daun Penh, Tuol Kouk, Meanchey, or any other district, our team can come to your location."
  },
  {
    q: "How do I get the best price for my scrap?",
    a: "To get the best price, it helps to separate your materials (e.g., keep aluminum separate from steel). The price of scrap changes with the market, but we always offer the most competitive rates. For a large quantity, please call us directly for a custom quote."
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase mb-4">
            <span className="text-foreground">Frequently Asked </span>
            <span className="text-gradient-copper">Questions</span>
          </h2>
        </motion.div>

        <motion.div className="max-w-3xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-6 overflow-hidden">
                <AccordionTrigger className="font-heading text-lg font-bold uppercase text-foreground hover:text-primary py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
