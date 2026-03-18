export interface Airport {
  code: string;
  name: string;
  city: string;
  lat: number;
  lon: number;
}

/** Major world airports with coordinates */
export const AIRPORTS: Airport[] = [
  // ── USA ──
  { code: "ATL", name: "Hartsfield-Jackson", city: "Atlanta", lat: 33.6407, lon: -84.4277 },
  { code: "ANC", name: "Ted Stevens Intl", city: "Anchorage", lat: 61.1744, lon: -149.9964 },
  { code: "AUS", name: "Austin-Bergstrom", city: "Austin", lat: 30.1975, lon: -97.6664 },
  { code: "BNA", name: "Nashville Intl", city: "Nashville", lat: 36.1246, lon: -86.6782 },
  { code: "BOS", name: "Logan Intl", city: "Boston", lat: 42.3656, lon: -71.0096 },
  { code: "BWI", name: "Baltimore/Washington", city: "Baltimore", lat: 39.1754, lon: -76.6684 },
  { code: "CLT", name: "Charlotte Douglas", city: "Charlotte", lat: 35.2141, lon: -80.9431 },
  { code: "DCA", name: "Reagan National", city: "Washington DC", lat: 38.8512, lon: -77.0402 },
  { code: "DEN", name: "Denver Intl", city: "Denver", lat: 39.8561, lon: -104.674 },
  { code: "DFW", name: "Dallas/Fort Worth", city: "Dallas", lat: 32.8998, lon: -97.0403 },
  { code: "DTW", name: "Detroit Metro", city: "Detroit", lat: 42.2124, lon: -83.3534 },
  { code: "EWR", name: "Newark Liberty", city: "Newark", lat: 40.6895, lon: -74.1745 },
  { code: "FLL", name: "Fort Lauderdale", city: "Fort Lauderdale", lat: 26.0726, lon: -80.1527 },
  { code: "HNL", name: "Daniel K. Inouye", city: "Honolulu", lat: 21.3187, lon: -157.9224 },
  { code: "IAD", name: "Dulles Intl", city: "Washington DC", lat: 38.9445, lon: -77.4558 },
  { code: "IAH", name: "George Bush Intl", city: "Houston", lat: 29.9844, lon: -95.3414 },
  { code: "JFK", name: "John F Kennedy", city: "New York", lat: 40.6399, lon: -73.7787 },
  { code: "LAS", name: "Harry Reid Intl", city: "Las Vegas", lat: 36.08, lon: -115.152 },
  { code: "LAX", name: "Los Angeles Intl", city: "Los Angeles", lat: 33.9425, lon: -118.408 },
  { code: "LGA", name: "LaGuardia", city: "New York", lat: 40.7772, lon: -73.8726 },
  { code: "MCO", name: "Orlando Intl", city: "Orlando", lat: 28.4294, lon: -81.309 },
  { code: "MIA", name: "Miami Intl", city: "Miami", lat: 25.7959, lon: -80.287 },
  { code: "MSP", name: "Minneapolis-St Paul", city: "Minneapolis", lat: 44.882, lon: -93.2218 },
  { code: "MSY", name: "Louis Armstrong", city: "New Orleans", lat: 29.9934, lon: -90.258 },
  { code: "OAK", name: "Oakland Intl", city: "Oakland", lat: 37.7213, lon: -122.221 },
  { code: "ORD", name: "O'Hare Intl", city: "Chicago", lat: 41.9742, lon: -87.9073 },
  { code: "PDX", name: "Portland Intl", city: "Portland", lat: 45.5898, lon: -122.597 },
  { code: "PHL", name: "Philadelphia Intl", city: "Philadelphia", lat: 39.8721, lon: -75.2411 },
  { code: "PHX", name: "Sky Harbor", city: "Phoenix", lat: 33.4373, lon: -112.008 },
  { code: "PIT", name: "Pittsburgh Intl", city: "Pittsburgh", lat: 40.4915, lon: -80.2329 },
  { code: "RDU", name: "Raleigh-Durham", city: "Raleigh", lat: 35.8776, lon: -78.7875 },
  { code: "SAN", name: "San Diego Intl", city: "San Diego", lat: 32.7336, lon: -117.19 },
  { code: "SAT", name: "San Antonio Intl", city: "San Antonio", lat: 29.5337, lon: -98.4698 },
  { code: "SEA", name: "Seattle-Tacoma", city: "Seattle", lat: 47.4502, lon: -122.309 },
  { code: "SFO", name: "San Francisco Intl", city: "San Francisco", lat: 37.6213, lon: -122.379 },
  { code: "SJC", name: "San Jose Intl", city: "San Jose", lat: 37.3626, lon: -121.929 },
  { code: "SLC", name: "Salt Lake City", city: "Salt Lake City", lat: 40.7884, lon: -111.978 },
  { code: "STL", name: "St Louis Lambert", city: "St Louis", lat: 38.7487, lon: -90.37 },
  { code: "TPA", name: "Tampa Intl", city: "Tampa", lat: 27.9755, lon: -82.5332 },
  { code: "JAX", name: "Jacksonville Intl", city: "Jacksonville", lat: 30.4941, lon: -81.6879 },
  { code: "RSW", name: "Southwest Florida", city: "Fort Myers", lat: 26.5362, lon: -81.7552 },
  { code: "SRQ", name: "Sarasota-Bradenton", city: "Sarasota", lat: 27.3954, lon: -82.5544 },
  { code: "PIE", name: "St Pete-Clearwater", city: "St Petersburg", lat: 27.9102, lon: -82.6874 },

  // ── Canada ──
  { code: "YYZ", name: "Toronto Pearson", city: "Toronto", lat: 43.6777, lon: -79.6248 },
  { code: "YVR", name: "Vancouver Intl", city: "Vancouver", lat: 49.1967, lon: -123.1815 },
  { code: "YUL", name: "Montreal Trudeau", city: "Montreal", lat: 45.4706, lon: -73.7408 },
  { code: "YYC", name: "Calgary Intl", city: "Calgary", lat: 51.1215, lon: -114.0134 },

  // ── Mexico / Central / South America ──
  { code: "MEX", name: "Mexico City Intl", city: "Mexico City", lat: 19.4363, lon: -99.0721 },
  { code: "CUN", name: "Cancun Intl", city: "Cancun", lat: 21.0365, lon: -86.877 },
  { code: "GDL", name: "Guadalajara Intl", city: "Guadalajara", lat: 20.5218, lon: -103.311 },
  { code: "PTY", name: "Tocumen Intl", city: "Panama City", lat: 9.0714, lon: -79.3835 },
  { code: "SJO", name: "Juan Santamaria", city: "San Jose", lat: 9.9939, lon: -84.2088 },
  { code: "BOG", name: "El Dorado Intl", city: "Bogota", lat: 4.7016, lon: -74.1469 },
  { code: "LIM", name: "Jorge Chavez Intl", city: "Lima", lat: -12.0219, lon: -77.1143 },
  { code: "SCL", name: "Arturo Merino", city: "Santiago", lat: -33.393, lon: -70.7858 },
  { code: "GRU", name: "Guarulhos Intl", city: "Sao Paulo", lat: -23.4356, lon: -46.4731 },
  { code: "GIG", name: "Galeao Intl", city: "Rio de Janeiro", lat: -22.8099, lon: -43.2506 },
  { code: "EZE", name: "Ezeiza Intl", city: "Buenos Aires", lat: -34.8222, lon: -58.5358 },

  // ── Europe ──
  { code: "LHR", name: "Heathrow", city: "London", lat: 51.47, lon: -0.4543 },
  { code: "LGW", name: "Gatwick", city: "London", lat: 51.1481, lon: -0.1903 },
  { code: "CDG", name: "Charles de Gaulle", city: "Paris", lat: 49.0097, lon: 2.5479 },
  { code: "FRA", name: "Frankfurt", city: "Frankfurt", lat: 50.0379, lon: 8.5622 },
  { code: "MUC", name: "Munich", city: "Munich", lat: 48.3538, lon: 11.7861 },
  { code: "AMS", name: "Schiphol", city: "Amsterdam", lat: 52.3105, lon: 4.7683 },
  { code: "MAD", name: "Barajas", city: "Madrid", lat: 40.4719, lon: -3.5626 },
  { code: "BCN", name: "El Prat", city: "Barcelona", lat: 41.2971, lon: 2.0785 },
  { code: "FCO", name: "Fiumicino", city: "Rome", lat: 41.8003, lon: 12.2389 },
  { code: "MXP", name: "Malpensa", city: "Milan", lat: 45.6306, lon: 8.7281 },
  { code: "IST", name: "Istanbul Airport", city: "Istanbul", lat: 41.2608, lon: 28.7419 },
  { code: "SVO", name: "Sheremetyevo", city: "Moscow", lat: 55.9726, lon: 37.4146 },
  { code: "LED", name: "Pulkovo", city: "St Petersburg", lat: 59.8003, lon: 30.2625 },
  { code: "ARN", name: "Arlanda", city: "Stockholm", lat: 59.6519, lon: 17.9186 },
  { code: "OSL", name: "Gardermoen", city: "Oslo", lat: 60.1939, lon: 11.1004 },
  { code: "CPH", name: "Kastrup", city: "Copenhagen", lat: 55.618, lon: 12.656 },
  { code: "HEL", name: "Helsinki-Vantaa", city: "Helsinki", lat: 60.3172, lon: 24.9633 },
  { code: "LIS", name: "Lisbon Portela", city: "Lisbon", lat: 38.7742, lon: -9.1342 },
  { code: "ATH", name: "Eleftherios Venizelos", city: "Athens", lat: 37.9364, lon: 23.9445 },
  { code: "ZRH", name: "Zurich", city: "Zurich", lat: 47.4647, lon: 8.5492 },
  { code: "VIE", name: "Vienna Intl", city: "Vienna", lat: 48.1103, lon: 16.5697 },
  { code: "DUB", name: "Dublin", city: "Dublin", lat: 53.4213, lon: -6.2701 },
  { code: "WAW", name: "Chopin", city: "Warsaw", lat: 52.1657, lon: 20.9671 },
  { code: "PRG", name: "Vaclav Havel", city: "Prague", lat: 50.1008, lon: 14.26 },
  { code: "BUD", name: "Budapest Liszt", city: "Budapest", lat: 47.4369, lon: 19.2556 },

  // ── Middle East ──
  { code: "DXB", name: "Dubai Intl", city: "Dubai", lat: 25.2528, lon: 55.3644 },
  { code: "AUH", name: "Abu Dhabi Intl", city: "Abu Dhabi", lat: 24.433, lon: 54.6511 },
  { code: "DOH", name: "Hamad Intl", city: "Doha", lat: 25.2731, lon: 51.6081 },
  { code: "RUH", name: "King Khalid", city: "Riyadh", lat: 24.9576, lon: 46.6988 },
  { code: "JED", name: "King Abdulaziz", city: "Jeddah", lat: 21.6796, lon: 39.1565 },
  { code: "TLV", name: "Ben Gurion", city: "Tel Aviv", lat: 32.0114, lon: 34.8867 },
  { code: "CAI", name: "Cairo Intl", city: "Cairo", lat: 30.1219, lon: 31.4056 },
  { code: "AMM", name: "Queen Alia", city: "Amman", lat: 31.7226, lon: 35.9932 },

  // ── China ──
  { code: "PEK", name: "Beijing Capital", city: "Beijing", lat: 40.0799, lon: 116.603 },
  { code: "PKX", name: "Beijing Daxing", city: "Beijing", lat: 39.5098, lon: 116.411 },
  { code: "PVG", name: "Pudong Intl", city: "Shanghai", lat: 31.1443, lon: 121.805 },
  { code: "SHA", name: "Hongqiao Intl", city: "Shanghai", lat: 31.1979, lon: 121.336 },
  { code: "CAN", name: "Baiyun Intl", city: "Guangzhou", lat: 23.3924, lon: 113.299 },
  { code: "SZX", name: "Bao'an Intl", city: "Shenzhen", lat: 22.6393, lon: 113.811 },
  { code: "CTU", name: "Shuangliu Intl", city: "Chengdu", lat: 30.5785, lon: 103.947 },
  { code: "CKG", name: "Jiangbei Intl", city: "Chongqing", lat: 29.7192, lon: 106.642 },
  { code: "HGH", name: "Xiaoshan Intl", city: "Hangzhou", lat: 30.2295, lon: 120.434 },
  { code: "WUH", name: "Tianhe Intl", city: "Wuhan", lat: 30.7838, lon: 114.208 },
  { code: "XIY", name: "Xianyang Intl", city: "Xi'an", lat: 34.4471, lon: 108.752 },
  { code: "KMG", name: "Changshui Intl", city: "Kunming", lat: 24.9924, lon: 102.743 },
  { code: "NKG", name: "Lukou Intl", city: "Nanjing", lat: 31.742, lon: 118.862 },

  // ── Rest of Asia ──
  { code: "HND", name: "Haneda", city: "Tokyo", lat: 35.5494, lon: 139.78 },
  { code: "NRT", name: "Narita Intl", city: "Tokyo", lat: 35.7647, lon: 140.386 },
  { code: "KIX", name: "Kansai Intl", city: "Osaka", lat: 34.4347, lon: 135.244 },
  { code: "HKG", name: "Hong Kong Intl", city: "Hong Kong", lat: 22.3089, lon: 113.915 },
  { code: "ICN", name: "Incheon Intl", city: "Seoul", lat: 37.4691, lon: 126.451 },
  { code: "TPE", name: "Taoyuan Intl", city: "Taipei", lat: 25.0777, lon: 121.233 },
  { code: "SIN", name: "Changi", city: "Singapore", lat: 1.3502, lon: 103.994 },
  { code: "BKK", name: "Suvarnabhumi", city: "Bangkok", lat: 13.6811, lon: 100.747 },
  { code: "DEL", name: "Indira Gandhi", city: "Delhi", lat: 28.5665, lon: 77.1031 },
  { code: "BOM", name: "Chhatrapati Shivaji", city: "Mumbai", lat: 19.0896, lon: 72.8656 },
  { code: "BLR", name: "Kempegowda Intl", city: "Bangalore", lat: 13.1979, lon: 77.7063 },
  { code: "MAA", name: "Chennai Intl", city: "Chennai", lat: 12.99, lon: 80.1693 },
  { code: "KUL", name: "Kuala Lumpur Intl", city: "Kuala Lumpur", lat: 2.7456, lon: 101.71 },
  { code: "CGK", name: "Soekarno-Hatta", city: "Jakarta", lat: -6.1256, lon: 106.656 },
  { code: "MNL", name: "Ninoy Aquino", city: "Manila", lat: 14.5086, lon: 121.02 },
  { code: "SGN", name: "Tan Son Nhat", city: "Ho Chi Minh City", lat: 10.8188, lon: 106.652 },
  { code: "HAN", name: "Noi Bai", city: "Hanoi", lat: 21.2212, lon: 105.807 },
  { code: "DAD", name: "Da Nang Intl", city: "Da Nang", lat: 16.0439, lon: 108.199 },
  { code: "CMB", name: "Bandaranaike", city: "Colombo", lat: 7.1808, lon: 79.8841 },
  { code: "KTM", name: "Tribhuvan Intl", city: "Kathmandu", lat: 27.6966, lon: 85.3591 },
  { code: "ISB", name: "Islamabad Intl", city: "Islamabad", lat: 33.5605, lon: 72.8526 },
  { code: "KHI", name: "Jinnah Intl", city: "Karachi", lat: 24.9065, lon: 67.1609 },
  { code: "RGN", name: "Yangon Intl", city: "Yangon", lat: 16.9073, lon: 96.1332 },

  // ── Africa ──
  { code: "JNB", name: "O.R. Tambo", city: "Johannesburg", lat: -26.1392, lon: 28.246 },
  { code: "CPT", name: "Cape Town Intl", city: "Cape Town", lat: -33.9649, lon: 18.6017 },
  { code: "NBO", name: "Jomo Kenyatta", city: "Nairobi", lat: -1.3192, lon: 36.9278 },
  { code: "LOS", name: "Murtala Muhammed", city: "Lagos", lat: 6.5774, lon: 3.3213 },
  { code: "ADD", name: "Bole Intl", city: "Addis Ababa", lat: 8.9779, lon: 38.7993 },
  { code: "CMN", name: "Mohammed V", city: "Casablanca", lat: 33.3675, lon: -7.5898 },
  { code: "ALG", name: "Houari Boumediene", city: "Algiers", lat: 36.691, lon: 3.2154 },
  { code: "ACC", name: "Kotoka Intl", city: "Accra", lat: 5.6052, lon: -0.1668 },
  { code: "DAR", name: "Julius Nyerere", city: "Dar es Salaam", lat: -6.8781, lon: 39.2026 },

  // ── Oceania ──
  { code: "SYD", name: "Kingsford Smith", city: "Sydney", lat: -33.9461, lon: 151.177 },
  { code: "MEL", name: "Tullamarine", city: "Melbourne", lat: -37.6733, lon: 144.843 },
  { code: "BNE", name: "Brisbane Intl", city: "Brisbane", lat: -27.3842, lon: 153.117 },
  { code: "PER", name: "Perth Intl", city: "Perth", lat: -31.9403, lon: 115.967 },
  { code: "AKL", name: "Auckland Intl", city: "Auckland", lat: -37.0082, lon: 174.792 },
  { code: "NAN", name: "Nadi Intl", city: "Fiji", lat: -17.7554, lon: 177.443 },
];

/** Search airports by code, city, or name */
export function searchAirports(query: string): Airport[] {
  const q = query.toLowerCase().trim();
  if (q.length === 0) return [];

  // Exact code match first
  const exact = AIRPORTS.filter((a) => a.code.toLowerCase() === q);
  if (exact.length > 0) return exact;

  // Then fuzzy match
  return AIRPORTS.filter(
    (a) =>
      a.code.toLowerCase().includes(q) ||
      a.city.toLowerCase().includes(q) ||
      a.name.toLowerCase().includes(q),
  ).slice(0, 10);
}
