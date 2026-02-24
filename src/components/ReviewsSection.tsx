import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { name: "Sokchea Phan", time: "2 hours ago", text: "Fast service and fair price for my scrap. Highly recommend.", avatar: "https://randomuser.me/api/portraits/men/50.jpg" },
  { name: "Chenda Lim", time: "8 hours ago", text: "Good experience, they pay on time and treat customers well.", avatar: "https://randomuser.me/api/portraits/women/2.jpg" },
  { name: "Vannak Nget", time: "8 hours ago", text: "Very professional in scrap buying. Honest and quick.", avatar: "https://randomuser.me/api/portraits/women/60.jpg" },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase mb-4">
            <span className="text-foreground">What Our </span>
            <span className="text-gradient-copper">Customers Say</span>
          </h2>
          <p className="text-muted-foreground text-lg">Honest feedback from people we've served</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              className="p-6 rounded-2xl bg-card border border-border shadow-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <img src={r.avatar} alt={r.name} className="w-12 h-12 rounded-full object-cover" loading="lazy" />
                <div>
                  <p className="font-heading font-bold text-foreground">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.time}</p>
                </div>
              </div>
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed">{r.text}</p>
              <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-4 h-4" />
                Posted on Google
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
