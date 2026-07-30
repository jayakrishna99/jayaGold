// Single source of truth for business details.
export const CONFIG = {
  phone: "+919108959886",
  phoneDisplay: "+91 91089 59886",
  whatsapp: "919108959886", // wa.me format, no "+"
  email: "care@jayagoldbuyers.com",
  address: "Opposite Joy Alukkas, 4th Block, Jayanagar, Bengaluru, Karnataka 560011",
  hours: "Monday – Saturday: 11 AM – 7:00 PM · Friday: Closed (Update if applicable.)",
  cities: ["Bangalore", "Chennai", "Kochi", "Hyderabad", "Vijayawada"],
};

export function waLink(msg: string): string {
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;
}

// Base indicative rates (per gram, INR)
export const BASE_RATES = { g24: 7150, g22: 6555, g18: 5362, silver: 92 };
