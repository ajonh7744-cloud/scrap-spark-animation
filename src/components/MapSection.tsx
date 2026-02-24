import { motion } from "framer-motion";

const MapSection = () => {
  return (
    <section id="location" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase mb-4">
            <span className="text-foreground">Find </span>
            <span className="text-gradient-copper">Us</span>
          </h2>
          <p className="text-muted-foreground text-lg">Visit us or request a free pickup anywhere in Phnom Penh</p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-border shadow-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7818.100755770028!2d104.80702!3d11.548244!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31094f231fd6c501%3A0xc9668305379705f0!2z4Z6R4Z634Z6J4Z6i4Z-B4Z6P4Z6F4Z624Z6ZIOGej-GemOGfkuGem-Gfg-GegeGfkuGeluGen-GfiyAoQnV5IGFsbCB0eXBlcyBvZiBzY3JhcCk!5e0!3m2!1sen!2skh!4v1771895127509!5m2!1sen!2skh"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Buy All Types of Scrap - Location in Phnom Penh"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default MapSection;
