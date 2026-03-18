export interface Airport {
  code: string;
  name: string;
  city: string;
  lat: number;
  lon: number;
}

/** Major world airports with coordinates */
export const AIRPORTS: Airport[] = [
  // North America
  { code: "LAX", name: "Los Angeles Intl", city: "Los Angeles", lat: 33.9425, lon: -118.408 },
  { code: "JFK", name: "John F Kennedy Intl", city: "New York", lat: 40.6399, lon: -73.7787 },
  { code: "ORD", name: "O'Hare Intl", city: "Chicago", lat: 41.9742, lon: -87.9073 },
  { code: "ATL", name: "Hartsfield-Jackson", city: "Atlanta", lat: 33.6407, lon: -84.4277 },
  { code: "DFW", name: "Dallas/Fort Worth", city: "Dallas", lat: 32.8998, lon: -97.0403 },
  { code: "SFO", name: "San Francisco Intl", city: "San Francisco", lat: 37.6213, lon: -122.379 },
  { code: "MIA", name: "Miami Intl", city: "Miami", lat: 25.7959, lon: -80.287 },
  { code: "SEA", name: "Seattle-Tacoma", city: "Seattle", lat: 47.4502, lon: -122.309 },
  { code: "DEN", name: "Denver Intl", city: "Denver", lat: 39.8561, lon: -104.674 },
  { code: "YYZ", name: "Toronto Pearson", city: "Toronto", lat: 43.6777, lon: -79.6248 },
  { code: "MEX", name: "Mexico City Intl", city: "Mexico City", lat: 19.4363, lon: -99.0721 },
  { code: "GRU", name: "Guarulhos Intl", city: "Sao Paulo", lat: -23.4356, lon: -46.4731 },
  { code: "EZE", name: "Ezeiza Intl", city: "Buenos Aires", lat: -34.8222, lon: -58.5358 },
  { code: "BOG", name: "El Dorado Intl", city: "Bogota", lat: 4.7016, lon: -74.1469 },
  { code: "LIM", name: "Jorge Chavez Intl", city: "Lima", lat: -12.0219, lon: -77.1143 },
  { code: "YVR", name: "Vancouver Intl", city: "Vancouver", lat: 49.1967, lon: -123.1815 },
  { code: "ANC", name: "Ted Stevens Intl", city: "Anchorage", lat: 61.1744, lon: -149.9964 },
  { code: "HNL", name: "Daniel K. Inouye", city: "Honolulu", lat: 21.3187, lon: -157.9224 },

  // Europe
  { code: "LHR", name: "Heathrow", city: "London", lat: 51.47, lon: -0.4543 },
  { code: "CDG", name: "Charles de Gaulle", city: "Paris", lat: 49.0097, lon: 2.5479 },
  { code: "FRA", name: "Frankfurt", city: "Frankfurt", lat: 50.0379, lon: 8.5622 },
  { code: "AMS", name: "Schiphol", city: "Amsterdam", lat: 52.3105, lon: 4.7683 },
  { code: "MAD", name: "Barajas", city: "Madrid", lat: 40.4719, lon: -3.5626 },
  { code: "FCO", name: "Fiumicino", city: "Rome", lat: 41.8003, lon: 12.2389 },
  { code: "IST", name: "Istanbul Airport", city: "Istanbul", lat: 41.2608, lon: 28.7419 },
  { code: "SVO", name: "Sheremetyevo", city: "Moscow", lat: 55.9726, lon: 37.4146 },
  { code: "ARN", name: "Arlanda", city: "Stockholm", lat: 59.6519, lon: 17.9186 },
  { code: "LIS", name: "Lisbon Portela", city: "Lisbon", lat: 38.7742, lon: -9.1342 },
  { code: "ATH", name: "Eleftherios Venizelos", city: "Athens", lat: 37.9364, lon: 23.9445 },

  // Middle East
  { code: "DXB", name: "Dubai Intl", city: "Dubai", lat: 25.2528, lon: 55.3644 },
  { code: "DOH", name: "Hamad Intl", city: "Doha", lat: 25.2731, lon: 51.6081 },
  { code: "JED", name: "King Abdulaziz", city: "Jeddah", lat: 21.6796, lon: 39.1565 },
  { code: "TLV", name: "Ben Gurion", city: "Tel Aviv", lat: 32.0114, lon: 34.8867 },
  { code: "CAI", name: "Cairo Intl", city: "Cairo", lat: 30.1219, lon: 31.4056 },

  // Asia
  { code: "HND", name: "Haneda", city: "Tokyo", lat: 35.5494, lon: 139.78 },
  { code: "NRT", name: "Narita Intl", city: "Tokyo", lat: 35.7647, lon: 140.386 },
  { code: "PEK", name: "Beijing Capital", city: "Beijing", lat: 40.0799, lon: 116.603 },
  { code: "PVG", name: "Pudong Intl", city: "Shanghai", lat: 31.1443, lon: 121.805 },
  { code: "HKG", name: "Hong Kong Intl", city: "Hong Kong", lat: 22.3089, lon: 113.915 },
  { code: "ICN", name: "Incheon Intl", city: "Seoul", lat: 37.4691, lon: 126.451 },
  { code: "SIN", name: "Changi", city: "Singapore", lat: 1.3502, lon: 103.994 },
  { code: "BKK", name: "Suvarnabhumi", city: "Bangkok", lat: 13.6811, lon: 100.747 },
  { code: "DEL", name: "Indira Gandhi", city: "Delhi", lat: 28.5665, lon: 77.1031 },
  { code: "BOM", name: "Chhatrapati Shivaji", city: "Mumbai", lat: 19.0896, lon: 72.8656 },
  { code: "KUL", name: "Kuala Lumpur Intl", city: "Kuala Lumpur", lat: 2.7456, lon: 101.71 },
  { code: "CGK", name: "Soekarno-Hatta", city: "Jakarta", lat: -6.1256, lon: 106.656 },
  { code: "MNL", name: "Ninoy Aquino", city: "Manila", lat: 14.5086, lon: 121.02 },

  // Africa
  { code: "JNB", name: "O.R. Tambo", city: "Johannesburg", lat: -26.1392, lon: 28.246 },
  { code: "CPT", name: "Cape Town Intl", city: "Cape Town", lat: -33.9649, lon: 18.6017 },
  { code: "NBO", name: "Jomo Kenyatta", city: "Nairobi", lat: -1.3192, lon: 36.9278 },
  { code: "LOS", name: "Murtala Muhammed", city: "Lagos", lat: 6.5774, lon: 3.3213 },
  { code: "ADD", name: "Bole Intl", city: "Addis Ababa", lat: 8.9779, lon: 38.7993 },
  { code: "CMN", name: "Mohammed V", city: "Casablanca", lat: 33.3675, lon: -7.5898 },

  // Oceania
  { code: "SYD", name: "Kingsford Smith", city: "Sydney", lat: -33.9461, lon: 151.177 },
  { code: "MEL", name: "Tullamarine", city: "Melbourne", lat: -37.6733, lon: 144.843 },
  { code: "AKL", name: "Auckland Intl", city: "Auckland", lat: -37.0082, lon: 174.792 },
  { code: "NAN", name: "Nadi Intl", city: "Fiji", lat: -17.7554, lon: 177.443 },
];

/** Search airports by code, city, or name */
export function searchAirports(query: string): Airport[] {
  const q = query.toLowerCase().trim();
  if (q.length === 0) return [];
  return AIRPORTS.filter(
    (a) =>
      a.code.toLowerCase().includes(q) ||
      a.city.toLowerCase().includes(q) ||
      a.name.toLowerCase().includes(q),
  ).slice(0, 8);
}
