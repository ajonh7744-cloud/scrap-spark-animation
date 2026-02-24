import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase mb-4">
            <span className="text-foreground">About </span>
            <span className="text-gradient-copper">Our Business</span>
          </h2>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-lg text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Buy Scrap at High Prices</strong> is a trusted and licensed scrap dealer in Phnom Penh, Cambodia. Since 2025, we have been dedicated to providing the community with reliable recycling services.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We purchase all types of scrap from homes, businesses, and industrial sites at competitive prices, ensuring fairness with calibrated scales. Our mission is to promote responsible recycling while offering fast, friendly service to our clients in every Khan of Phnom Penh.
          </p>
          <p className="text-lg text-muted-foreground">
            For a free quote or to schedule a pickup, contact us at:{" "}
            <a href="tel:+85569460064" className="text-primary font-bold hover:underline">+855 69 460 064</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
