// Single source of truth for business details.
export const CONFIG = {
  phone: "+919590704444",
  phoneDisplay: "+91 95907 04444",
  whatsapp: "919590704444", // wa.me format, no "+"
  email: "care@jayagoldbuyers.in",
  address: "MG Road, Bangalore, Karnataka",
  hours: "Mon–Sun, 10 AM – 8 PM",
  cities: ["Bangalore", "Chennai", "Kochi", "Hyderabad", "Vijayawada"],
};

export function waLink(msg: string): string {
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;
}

// Base indicative rates (per gram, INR)
export const BASE_RATES = { g24: 7150, g22: 6555, g18: 5362, silver: 92 };
