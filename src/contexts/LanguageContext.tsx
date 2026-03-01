import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Lang = "en" | "km";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const translations: Record<Lang, Record<string, string>> = {
  en: {
    // Navbar
    "nav.materials": "Materials",
    "nav.reviews": "Reviews",
    "nav.faq": "FAQ",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.call": "Call Now",
    "nav.callShort": "Call",

    // Hero
    "hero.badge": "Top Scrap Buyers in Phnom Penh",
    "hero.title1": "Selling Scrap?",
    "hero.title2": "We Buy at High Prices!",
    "hero.desc": "Fast service, fair scales in",
    "hero.location": "Phnom Penh",
    "hero.and": "and surrounding areas.",
    "hero.copper": "Copper",
    "hero.aluminum": "Aluminum",
    "hero.iron": "Iron & Steel",
    "hero.ewaste": "E-Waste & more.",
    "hero.callNow": "Call Now: 069 460 064",
    "hero.viewMaterials": "View Materials",

    // Slideshow
    "slide.heading1": "What We ",
    "slide.heading2": "Buy",
    "slide.sub": "Browse the types of scrap materials we purchase every day",
    "slide.copper": "Copper",
    "slide.copperDesc": "Electric wires, pipes, red copper — we pay premium prices for all copper scrap",
    "slide.aluminum": "Aluminum",
    "slide.aluminumDesc": "Cans, window frames, engine parts — lightweight metal we buy in bulk",
    "slide.metal": "Metal & Steel",
    "slide.metalDesc": "Rebar, beams, sheets, old machinery — all ferrous metals accepted",
    "slide.plastic": "Plastic",
    "slide.plasticDesc": "Industrial plastic, bottles, containers — sorted or unsorted",
    "slide.cans": "Beverage Cans",
    "slide.cansDesc": "Aluminum and tin cans from beverages — collected in any quantity",
    "slide.ewaste": "E-Waste",
    "slide.ewasteDesc": "Old computers, phones, circuit boards — responsible recycling guaranteed",

    // Copper Highlight
    "copper.tag": "Most Wanted Material",
    "copper.badge": "Premium Prices Paid",
    "copper.heading1": "We Pay Top Dollar for",
    "copper.heading2": "Copper Scrap",
    "copper.desc": "Copper is one of the most valuable scrap metals. Whether you have electric wires, plumbing pipes, red copper, or industrial copper parts — we offer the highest prices in Phnom Penh with instant cash payment.",
    "copper.type1": "Electric Wires & Cables",
    "copper.type2": "Plumbing Pipes & Fittings",
    "copper.type3": "Red Copper & Bright Copper",
    "copper.type4": "Industrial Copper Parts & Motors",
    "copper.stat1": "Price",
    "copper.stat1Val": "Top $$",
    "copper.stat2": "Scales",
    "copper.stat2Val": "100%",
    "copper.stat3": "Pickup",
    "copper.stat3Val": "Free",
    "copper.callNow": "Sell Copper Now",

    // Materials
    "mat.heading1": "Scrap We Buy in ",
    "mat.heading2": "Phnom Penh",
    "mat.subtext": "We purchase all types of residential, commercial, and industrial scrap",
    "mat.iron": "Iron & Steel",
    "mat.ironDesc": "All types of iron, rebar, scrap metal",
    "mat.copper": "Copper",
    "mat.copperDesc": "Electric wires, pipes, red copper",
    "mat.aluminum": "Aluminum",
    "mat.aluminumDesc": "Cans, window frames, parts",
    "mat.ewaste": "E-Waste",
    "mat.ewasteDesc": "Old TVs, refrigerators, computers",
    "mat.batteries": "Batteries",
    "mat.batteriesDesc": "Car batteries, all types of batteries",
    "mat.brass": "Brass & Bronze",
    "mat.brassDesc": "Faucets, pipes, decorative items",
    "mat.phones": "Old Phones",
    "mat.phonesDesc": "Used smartphones & parts",
    "mat.machinery": "Old Machinery",
    "mat.machineryDesc": "Industrial machines, motors",
    "mat.vehicles": "Vehicle Parts",
    "mat.vehiclesDesc": "Car & motorcycle parts",
    "mat.more": "And More",
    "mat.moreDesc": "Plastics, cardboard, etc.",
    "feat.prices": "Highest Prices",
    "feat.pricesDesc": "Best market rates guaranteed",
    "feat.scales": "Fair Scales",
    "feat.scalesDesc": "Honest calibrated scales",
    "feat.pickup": "Free Pickup",
    "feat.pickupDesc": "All across Phnom Penh",
    "feat.payment": "Instant Payment",
    "feat.paymentDesc": "Cash on the spot",

    // Reviews
    "reviews.heading1": "What Our ",
    "reviews.heading2": "Customers Say",
    "reviews.sub": "Honest feedback from people we've served",
    "reviews.r1": "Fast service and fair price for my scrap. Highly recommend.",
    "reviews.r2": "Good experience, they pay on time and treat customers well.",
    "reviews.r3": "Very professional in scrap buying. Honest and quick.",
    "reviews.postedOn": "Posted on Google",

    // FAQ
    "faq.heading1": "Frequently Asked ",
    "faq.heading2": "Questions",
    "faq.q1": "What types of scrap do you buy?",
    "faq.a1": "We buy a wide variety of scrap, including all types of metals (iron, steel, copper, aluminum, brass), e-waste (computers, TVs, refrigerators), old vehicles and parts, industrial machinery, batteries, plastics, and cardboard. If you're unsure, please call us!",
    "faq.q2": "Which areas in Phnom Penh do you serve?",
    "faq.a2": "We offer free scrap pickup services across all 14 Khans (districts) of Phnom Penh. Whether you are in Daun Penh, Tuol Kouk, Meanchey, or any other district, our team can come to your location.",
    "faq.q3": "How do I get the best price for my scrap?",
    "faq.a3": "To get the best price, it helps to separate your materials (e.g., keep aluminum separate from steel). The price of scrap changes with the market, but we always offer the most competitive rates. For a large quantity, please call us directly for a custom quote.",

    // About
    "about.heading1": "About ",
    "about.heading2": "Our Business",
    "about.p1": "Buy Scrap at High Prices is a trusted and licensed scrap dealer in Phnom Penh, Cambodia. Since 2025, we have been dedicated to providing the community with reliable recycling services.",
    "about.p2": "We purchase all types of scrap from homes, businesses, and industrial sites at competitive prices, ensuring fairness with calibrated scales. Our mission is to promote responsible recycling while offering fast, friendly service to our clients in every Khan of Phnom Penh.",
    "about.p3": "For a free quote or to schedule a pickup, contact us at:",

    // Map
    "map.heading1": "Find ",
    "map.heading2": "Us",
    "map.sub": "Visit us or request a free pickup anywhere in Phnom Penh",

    // CTA
    "cta.heading1": "Ready to ",
    "cta.heading2": "Sell?",
    "cta.sub": "Get the best price for your scrap. Contact us today for a free quote and fast pickup in Phnom Penh.",
    "cta.phone": "Call Us",
    "cta.phoneVal": "+855 69 460 064",
    "cta.telegram": "Telegram",
    "cta.telegramVal": "069 460 064",
    "cta.facebook": "Facebook",
    "cta.facebookVal": "Buy All Scrap",
    "cta.location": "Location",
    "cta.locationVal": "Phnom Penh, Cambodia",
    "cta.hours": "Working Hours",
    "cta.hoursVal": "Mon–Sat 7AM–6PM",

    // Footer
    "footer.title1": "Buy All Types of ",
    "footer.title2": "Scrap",
    "footer.desc": "Trusted scrap dealer in Phnom Penh, Cambodia — Copper, Aluminum, Iron, E-Waste & more.",
    "footer.copy": "Buy All Types of Scrap. All rights reserved.",
  },
  km: {
    // Navbar
    "nav.materials": "សម្ភារៈ",
    "nav.reviews": "ការវាយតម្លៃ",
    "nav.faq": "សំណួរ",
    "nav.about": "អំពីយើង",
    "nav.contact": "ទំនាក់ទំនង",
    "nav.call": "ទូរស័ព្ទមក",
    "nav.callShort": "ទូរស័ព្ទ",

    // Hero
    "hero.badge": "អ្នកទិញសំណល់លំដាប់កំពូលនៅភ្នំពេញ",
    "hero.title1": "មានសំណល់លក់?",
    "hero.title2": "យើងទិញក្នុងតម្លៃខ្ពស់!",
    "hero.desc": "សេវាកម្មរហ័ស ជញ្ជីងត្រឹមត្រូវនៅ",
    "hero.location": "ភ្នំពេញ",
    "hero.and": "និងតំបន់ជុំវិញ។",
    "hero.copper": "ទង់ដែង",
    "hero.aluminum": "អាលុយមីញ៉ូម",
    "hero.iron": "ដែក និងថែប",
    "hero.ewaste": "សំណល់អេឡិចត្រូនិក និងផ្សេងៗ។",
    "hero.callNow": "ទូរស័ព្ទមក: 069 460 064",
    "hero.viewMaterials": "មើលសម្ភារៈ",

    // Slideshow
    "slide.heading1": "អ្វីដែលយើង",
    "slide.heading2": "ទិញ",
    "slide.sub": "រុករកប្រភេទសម្ភារៈសំណល់ដែលយើងទិញរាល់ថ្ងៃ",
    "slide.copper": "ទង់ដែង",
    "slide.copperDesc": "ខ្សែភ្លើង បំពង់ ទង់ដែងក្រហម — យើងបង់តម្លៃខ្ពស់សម្រាប់សំណល់ទង់ដែងទាំងអស់",
    "slide.aluminum": "អាលុយមីញ៉ូម",
    "slide.aluminumDesc": "កំប៉ុង ស៊ុមបង្អួច គ្រឿងម៉ាស៊ីន — ដែកស្រាលដែលយើងទិញជាច្រើន",
    "slide.metal": "ដែក និងថែប",
    "slide.metalDesc": "ដែកគោល ធ្នឹម សន្លឹក គ្រឿងម៉ាស៊ីនចាស់ — ដែកគ្រប់ប្រភេទ",
    "slide.plastic": "ផ្លាស្ទិក",
    "slide.plasticDesc": "ផ្លាស្ទិកឧស្សាហកម្ម ដបទឹក ធុង — តម្រៀបឬមិនតម្រៀប",
    "slide.cans": "កំប៉ុងភេសជ្ជៈ",
    "slide.cansDesc": "កំប៉ុងអាលុយមីញ៉ូម និងដែកស — ប្រមូលក្នុងបរិមាណណាមួយ",
    "slide.ewaste": "សំណល់អេឡិចត្រូនិក",
    "slide.ewasteDesc": "កុំព្យូទ័រចាស់ ទូរស័ព្ទ បន្ទះសៀគ្វី — ធានាកែច្នៃឡើងវិញដោយទទួលខុសត្រូវ",

    // Copper Highlight
    "copper.tag": "សម្ភារៈដែលត្រូវការបំផុត",
    "copper.badge": "តម្លៃខ្ពស់បំផុត",
    "copper.heading1": "យើងបង់តម្លៃខ្ពស់សម្រាប់",
    "copper.heading2": "សំណល់ទង់ដែង",
    "copper.desc": "ទង់ដែងគឺជាសំណល់ដែកដែលមានតម្លៃខ្ពស់បំផុតមួយ។ មិនថាអ្នកមានខ្សែភ្លើង បំពង់ទឹក ទង់ដែងក្រហម ឬគ្រឿងបន្លាស់ឧស្សាហកម្ម — យើងផ្តល់តម្លៃខ្ពស់បំផុតនៅភ្នំពេញ ជាមួយការបង់ប្រាក់សុទ្ធភ្លាមៗ។",
    "copper.type1": "ខ្សែភ្លើង និងខ្សែកាប",
    "copper.type2": "បំពង់ទឹក និងគ្រឿងភ្ជាប់",
    "copper.type3": "ទង់ដែងក្រហម និងទង់ដែងភ្លឺ",
    "copper.type4": "គ្រឿងបន្លាស់ទង់ដែង និងម៉ូទ័រ",
    "copper.stat1": "តម្លៃ",
    "copper.stat1Val": "ខ្ពស់បំផុត",
    "copper.stat2": "ជញ្ជីង",
    "copper.stat2Val": "១០០%",
    "copper.stat3": "យកសំណល់",
    "copper.stat3Val": "ឥតគិតថ្លៃ",
    "copper.callNow": "លក់ទង់ដែងឥឡូវ",

    // Materials
    "mat.heading1": "សំណល់ដែលយើងទិញនៅ",
    "mat.heading2": "ភ្នំពេញ",
    "mat.subtext": "យើងទិញសំណល់គ្រប់ប្រភេទពីផ្ទះ ពាណិជ្ជកម្ម និងឧស្សាហកម្ម",
    "mat.iron": "ដែក និងថែប",
    "mat.ironDesc": "ដែកគ្រប់ប្រភេទ ដែកគោល សំណល់ដែក",
    "mat.copper": "ទង់ដែង",
    "mat.copperDesc": "ខ្សែភ្លើង បំពង់ ទង់ដែងក្រហម",
    "mat.aluminum": "អាលុយមីញ៉ូម",
    "mat.aluminumDesc": "កំប៉ុង ស៊ុមបង្អួច គ្រឿងបន្លាស់",
    "mat.ewaste": "សំណល់អេឡិចត្រូនិក",
    "mat.ewasteDesc": "ទូរទស្សន៍ចាស់ ទូទឹកកក កុំព្យូទ័រ",
    "mat.batteries": "ថ្មអាគុយ",
    "mat.batteriesDesc": "ថ្មឡាន ថ្មគ្រប់ប្រភេទ",
    "mat.brass": "លង្ហិន និងសំរិទ្ធ",
    "mat.brassDesc": "ក្បាលរ៉ូប៊ីណេ បំពង់ វត្ថុតុបតែង",
    "mat.phones": "ទូរស័ព្ទចាស់",
    "mat.phonesDesc": "ស្មាតហ្វូន និងគ្រឿងបន្លាស់",
    "mat.machinery": "គ្រឿងម៉ាស៊ីនចាស់",
    "mat.machineryDesc": "ម៉ាស៊ីនឧស្សាហកម្ម ម៉ូទ័រ",
    "mat.vehicles": "គ្រឿងបន្លាស់យានយន្ត",
    "mat.vehiclesDesc": "គ្រឿងបន្លាស់ឡាន និងម៉ូតូ",
    "mat.more": "និងផ្សេងៗទៀត",
    "mat.moreDesc": "ផ្លាស្ទិក កាតុង។ល។",
    "feat.prices": "តម្លៃខ្ពស់បំផុត",
    "feat.pricesDesc": "តម្លៃទីផ្សារល្អបំផុត",
    "feat.scales": "ជញ្ជីងត្រឹមត្រូវ",
    "feat.scalesDesc": "ជញ្ជីងស្មោះត្រង់ដែលបានកែតម្រូវ",
    "feat.pickup": "យកដោយឥតគិតថ្លៃ",
    "feat.pickupDesc": "គ្រប់កន្លែងក្នុងភ្នំពេញ",
    "feat.payment": "បង់ប្រាក់ភ្លាមៗ",
    "feat.paymentDesc": "សាច់ប្រាក់នៅកន្លែង",

    // Reviews
    "reviews.heading1": "អតិថិជន",
    "reviews.heading2": "និយាយអ្វី",
    "reviews.sub": "មតិស្មោះត្រង់ពីអ្នកដែលយើងបានបម្រើ",
    "reviews.r1": "សេវាកម្មរហ័ស និងតម្លៃសមរម្យសម្រាប់សំណល់របស់ខ្ញុំ។ សូមណែនាំ។",
    "reviews.r2": "បទពិសោធន៍ល្អ គេបង់ប្រាក់ទាន់ពេលវេលា និងប្រព្រឹត្តចំពោះអតិថិជនបានល្អ។",
    "reviews.r3": "វិជ្ជាជីវៈខ្ពស់ក្នុងការទិញសំណល់។ ស្មោះត្រង់ និងរហ័ស។",
    "reviews.postedOn": "បង្ហោះនៅលើ Google",

    // FAQ
    "faq.heading1": "សំណួរដែល",
    "faq.heading2": "សួរញឹកញាប់",
    "faq.q1": "តើអ្នកទិញសំណល់ប្រភេទអ្វីខ្លះ?",
    "faq.a1": "យើងទិញសំណល់គ្រប់ប្រភេទ រួមទាំង ដែក ថែប ទង់ដែង អាលុយមីញ៉ូម លង្ហិន សំណល់អេឡិចត្រូនិក (កុំព្យូទ័រ ទូរទស្សន៍ ទូទឹកកក) យានយន្តចាស់ គ្រឿងម៉ាស៊ីន ថ្មអាគុយ ផ្លាស្ទិក និងកាតុង។ ប្រសិនបើមិនច្បាស់ សូមទូរស័ព្ទមកយើង!",
    "faq.q2": "តើអ្នកបម្រើតំបន់ណាខ្លះក្នុងភ្នំពេញ?",
    "faq.a2": "យើងផ្តល់សេវាយកសំណល់ដោយឥតគិតថ្លៃក្នុងខណ្ឌទាំង ១៤ នៃភ្នំពេញ។ មិនថាអ្នកនៅដូនពេញ ទួលគោក មានជ័យ ឬខណ្ឌណាក៏ដោយ ក្រុមរបស់យើងអាចមកដល់ទីតាំងរបស់អ្នក។",
    "faq.q3": "តើធ្វើដូចម្តេចដើម្បីទទួលបានតម្លៃល្អបំផុត?",
    "faq.a3": "ដើម្បីទទួលបានតម្លៃល្អបំផុត វាជួយក្នុងការបែងចែកសម្ភារៈ (ឧ. រក្សាអាលុយមីញ៉ូមដាច់ពីថែប)។ តម្លៃសំណល់ប្រែប្រួលតាមទីផ្សារ ប៉ុន្តែយើងតែងតែផ្តល់តម្លៃប្រកួតប្រជែងបំផុត។ សម្រាប់បរិមាណច្រើន សូមទូរស័ព្ទមកយើងផ្ទាល់។",

    // About
    "about.heading1": "អំពី",
    "about.heading2": "អាជីវកម្មរបស់យើង",
    "about.p1": "ទិញសំណល់ក្នុងតម្លៃខ្ពស់ គឺជាអ្នកចែកចាយសំណល់ដែលមានអាជ្ញាប័ណ្ណ និងគួរឱ្យទុកចិត្តនៅភ្នំពេញ ប្រទេសកម្ពុជា។ ចាប់ពីឆ្នាំ ២០២៥ យើងបានប្តេជ្ញាផ្តល់សេវាកម្មកែច្នៃឡើងវិញដែលគួរឱ្យទុកចិត្តដល់សហគមន៍។",
    "about.p2": "យើងទិញសំណល់គ្រប់ប្រភេទពីផ្ទះ អាជីវកម្ម និងទីតាំងឧស្សាហកម្មក្នុងតម្លៃប្រកួតប្រជែង ដោយធានាភាពយុត្តិធម៌ជាមួយជញ្ជីងដែលបានកែតម្រូវ។ បេសកកម្មរបស់យើងគឺលើកកម្ពស់ការកែច្នៃឡើងវិញដោយទទួលខុសត្រូវ ខណៈពេលដែលផ្តល់សេវាកម្មរហ័ស និងរួសរាយរាក់ទាក់ដល់អតិថិជនរបស់យើងនៅគ្រប់ខណ្ឌនៃភ្នំពេញ។",
    "about.p3": "សម្រាប់សម្រង់តម្លៃឥតគិតថ្លៃ ឬកក់ការយកសំណល់ សូមទាក់ទងយើងតាម:",

    // Map
    "map.heading1": "ស្វែងរក",
    "map.heading2": "យើង",
    "map.sub": "មកទស្សនាយើង ឬស្នើសុំយកសំណល់ដោយឥតគិតថ្លៃនៅគ្រប់កន្លែងក្នុងភ្នំពេញ",

    // CTA
    "cta.heading1": "ត្រៀមខ្លួន",
    "cta.heading2": "លក់?",
    "cta.sub": "ទទួលបានតម្លៃល្អបំផុតសម្រាប់សំណល់របស់អ្នក។ ទាក់ទងយើងថ្ងៃនេះសម្រាប់សម្រង់តម្លៃឥតគិតថ្លៃ និងការយកសំណល់រហ័សនៅភ្នំពេញ។",
    "cta.phone": "ទូរស័ព្ទមកយើង",
    "cta.phoneVal": "+855 69 460 064",
    "cta.telegram": "តេលេក្រាម",
    "cta.telegramVal": "069 460 064",
    "cta.facebook": "ហ្វេសប៊ុក",
    "cta.facebookVal": "ទិញសំណល់គ្រប់ប្រភេទ",
    "cta.location": "ទីតាំង",
    "cta.locationVal": "ភ្នំពេញ កម្ពុជា",
    "cta.hours": "ម៉ោងធ្វើការ",
    "cta.hoursVal": "ច័ន្ទ–សៅរ៍ ៧ព្រឹក–៦ល្ងាច",

    // Footer
    "footer.title1": "ទិញសំណល់",
    "footer.title2": "គ្រប់ប្រភេទ",
    "footer.desc": "អ្នកចែកចាយសំណល់ដែលគួរឱ្យទុកចិត្តនៅភ្នំពេញ កម្ពុជា — ទង់ដែង អាលុយមីញ៉ូម ដែក សំណល់អេឡិចត្រូនិក និងផ្សេងៗ។",
    "footer.copy": "ទិញសំណល់គ្រប់ប្រភេទ។ រក្សាសិទ្ធិគ្រប់យ៉ាង។",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");
  const t = (key: string) => translations[lang][key] || key;

  useEffect(() => {
    if (lang === "km") {
      document.body.classList.add("lang-km");
    } else {
      document.body.classList.remove("lang-km");
    }
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
