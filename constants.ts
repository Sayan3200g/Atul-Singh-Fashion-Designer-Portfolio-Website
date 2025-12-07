import { PortfolioItem, Service, Testimonial } from './types';

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    title: "Golden Hour Gown",
    category: "Couture",
    imageUrl: "https://picsum.photos/800/1200?random=1",
    description: "Hand-embroidered silk chiffon with 24k gold thread details."
  },
  {
    id: 2,
    title: "Royal Velvet Suit",
    category: "Ready-to-Wear",
    imageUrl: "https://picsum.photos/800/1200?random=2",
    description: "Deep midnight blue velvet tailored to perfection."
  },
  {
    id: 3,
    title: "Ethereal Bridal",
    category: "Bridal",
    imageUrl: "https://picsum.photos/800/1200?random=3",
    description: "Layers of French tulle with crystal embellishments."
  },
  {
    id: 4,
    title: "Urban Avant-Garde",
    category: "Ready-to-Wear",
    imageUrl: "https://picsum.photos/800/1200?random=4",
    description: "Structured architectural silhouettes for the modern era."
  },
  {
    id: 5,
    title: "Heritage Lehenga",
    category: "Bridal",
    imageUrl: "https://picsum.photos/800/1200?random=5",
    description: "Traditional craftsmanship meets contemporary cuts."
  },
  {
    id: 6,
    title: "Obsidian Accessory Set",
    category: "Accessories",
    imageUrl: "https://picsum.photos/800/1200?random=6",
    description: "Handcrafted leather belts and bags with silver hardware."
  }
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Custom Fashion Design",
    description: "Bespoke garments tailored exclusively to your measurements and style preferences. We start with a sketch and end with a masterpiece.",
    priceRange: "Starting from $2,000",
    iconName: "PenTool"
  },
  {
    id: 2,
    title: "Bridal & Trousseau",
    description: "Complete styling for the bride and groom, including pre-wedding events. Personalized embroidery and heritage fabrics.",
    priceRange: "Starting from $5,000",
    iconName: "Heart"
  },
  {
    id: 3,
    title: "Runway & Event Styling",
    description: "Professional styling services for fashion shows, red carpet events, and photo shoots. Curated looks that make a statement.",
    priceRange: "Consultation required",
    iconName: "Camera"
  },
  {
    id: 4,
    title: "Wardrobe Consultation",
    description: "A complete overhaul of your personal style. We analyze your lifestyle and build a functional, high-fashion wardrobe.",
    priceRange: "$150/hour",
    iconName: "User"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Elena Richardson",
    role: "Vogue Editor",
    content: "Atul's designs are not just clothes; they are wearable art. The attention to detail is unparalleled in the industry."
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Celebrity Bride",
    content: "He made my dream wedding dress a reality. I felt like a queen. The fabric, the fit, everything was perfect."
  },
  {
    id: 3,
    name: "Marcus Thorne",
    role: "Event Director",
    content: "Professional, visionary, and incredibly talented. Working with Atul on our last runway show was a highlight of the season."
  }
];

export const ACHIEVEMENTS = [
  { year: '2023', title: 'Designer of the Year', org: 'Fashion Week Milan' },
  { year: '2021', title: 'Best Sustainable Collection', org: 'EcoLuxe Awards' },
  { year: '2019', title: 'Launched Flagship Store', org: 'New York City' },
  { year: '2015', title: 'Graduated with Honors', org: 'Parsons School of Design' },
];