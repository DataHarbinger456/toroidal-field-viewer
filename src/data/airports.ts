export interface Airport {
  code: string;
  name: string;
  city: string;
  country: string;
  lat: number;
  lon: number;
}

export const AIRPORTS: Airport[] = [
  // ── USA ──
  { code: "ATL", name: "Hartsfield-Jackson", city: "Atlanta", country: "United States", lat: 33.6407, lon: -84.4277 },
  { code: "ANC", name: "Ted Stevens Intl", city: "Anchorage", country: "United States", lat: 61.1744, lon: -149.9964 },
  { code: "AUS", name: "Austin-Bergstrom", city: "Austin", country: "United States", lat: 30.1975, lon: -97.6664 },
  { code: "BNA", name: "Nashville Intl", city: "Nashville", country: "United States", lat: 36.1246, lon: -86.6782 },
  { code: "BOS", name: "Logan Intl", city: "Boston", country: "United States", lat: 42.3656, lon: -71.0096 },
  { code: "BWI", name: "Baltimore/Washington", city: "Baltimore", country: "United States", lat: 39.1754, lon: -76.6684 },
  { code: "CLT", name: "Charlotte Douglas", city: "Charlotte", country: "United States", lat: 35.2141, lon: -80.9431 },
  { code: "DCA", name: "Reagan National", city: "Washington DC", country: "United States", lat: 38.8512, lon: -77.0402 },
  { code: "DEN", name: "Denver Intl", city: "Denver", country: "United States", lat: 39.8561, lon: -104.674 },
  { code: "DFW", name: "Dallas/Fort Worth", city: "Dallas", country: "United States", lat: 32.8998, lon: -97.0403 },
  { code: "DTW", name: "Detroit Metro", city: "Detroit", country: "United States", lat: 42.2124, lon: -83.3534 },
  { code: "EWR", name: "Newark Liberty", city: "Newark", country: "United States", lat: 40.6895, lon: -74.1745 },
  { code: "FLL", name: "Fort Lauderdale", city: "Fort Lauderdale", country: "United States", lat: 26.0726, lon: -80.1527 },
  { code: "HNL", name: "Daniel K. Inouye", city: "Honolulu", country: "United States", lat: 21.3187, lon: -157.9224 },
  { code: "IAD", name: "Dulles Intl", city: "Washington DC", country: "United States", lat: 38.9445, lon: -77.4558 },
  { code: "IAH", name: "George Bush Intl", city: "Houston", country: "United States", lat: 29.9844, lon: -95.3414 },
  { code: "JFK", name: "John F Kennedy", city: "New York", country: "United States", lat: 40.6399, lon: -73.7787 },
  { code: "LAS", name: "Harry Reid Intl", city: "Las Vegas", country: "United States", lat: 36.08, lon: -115.152 },
  { code: "LAX", name: "Los Angeles Intl", city: "Los Angeles", country: "United States", lat: 33.9425, lon: -118.408 },
  { code: "LGA", name: "LaGuardia", city: "New York", country: "United States", lat: 40.7772, lon: -73.8726 },
  { code: "MCO", name: "Orlando Intl", city: "Orlando", country: "United States", lat: 28.4294, lon: -81.309 },
  { code: "MIA", name: "Miami Intl", city: "Miami", country: "United States", lat: 25.7959, lon: -80.287 },
  { code: "MSP", name: "Minneapolis-St Paul", city: "Minneapolis", country: "United States", lat: 44.882, lon: -93.2218 },
  { code: "MSY", name: "Louis Armstrong", city: "New Orleans", country: "United States", lat: 29.9934, lon: -90.258 },
  { code: "OAK", name: "Oakland Intl", city: "Oakland", country: "United States", lat: 37.7213, lon: -122.221 },
  { code: "ORD", name: "O'Hare Intl", city: "Chicago", country: "United States", lat: 41.9742, lon: -87.9073 },
  { code: "PDX", name: "Portland Intl", city: "Portland", country: "United States", lat: 45.5898, lon: -122.597 },
  { code: "PHL", name: "Philadelphia Intl", city: "Philadelphia", country: "United States", lat: 39.8721, lon: -75.2411 },
  { code: "PHX", name: "Sky Harbor", city: "Phoenix", country: "United States", lat: 33.4373, lon: -112.008 },
  { code: "PIT", name: "Pittsburgh Intl", city: "Pittsburgh", country: "United States", lat: 40.4915, lon: -80.2329 },
  { code: "RDU", name: "Raleigh-Durham", city: "Raleigh", country: "United States", lat: 35.8776, lon: -78.7875 },
  { code: "SAN", name: "San Diego Intl", city: "San Diego", country: "United States", lat: 32.7336, lon: -117.19 },
  { code: "SAT", name: "San Antonio Intl", city: "San Antonio", country: "United States", lat: 29.5337, lon: -98.4698 },
  { code: "SEA", name: "Seattle-Tacoma", city: "Seattle", country: "United States", lat: 47.4502, lon: -122.309 },
  { code: "SFO", name: "San Francisco Intl", city: "San Francisco", country: "United States", lat: 37.6213, lon: -122.379 },
  { code: "SJC", name: "San Jose Intl", city: "San Jose", country: "United States", lat: 37.3626, lon: -121.929 },
  { code: "SLC", name: "Salt Lake City", city: "Salt Lake City", country: "United States", lat: 40.7884, lon: -111.978 },
  { code: "STL", name: "St Louis Lambert", city: "St Louis", country: "United States", lat: 38.7487, lon: -90.37 },
  { code: "TPA", name: "Tampa Intl", city: "Tampa", country: "United States", lat: 27.9755, lon: -82.5332 },
  { code: "JAX", name: "Jacksonville Intl", city: "Jacksonville", country: "United States", lat: 30.4941, lon: -81.6879 },
  { code: "RSW", name: "Southwest Florida", city: "Fort Myers", country: "United States", lat: 26.5362, lon: -81.7552 },
  { code: "SRQ", name: "Sarasota-Bradenton", city: "Sarasota", country: "United States", lat: 27.3954, lon: -82.5544 },
  { code: "PIE", name: "St Pete-Clearwater", city: "St Petersburg", country: "United States", lat: 27.9102, lon: -82.6874 },
  { code: "FAI", name: "Fairbanks Intl", city: "Fairbanks", country: "United States", lat: 64.8151, lon: -147.8564 },

  // ── Canada ──
  { code: "YYZ", name: "Toronto Pearson", city: "Toronto", country: "Canada", lat: 43.6777, lon: -79.6248 },
  { code: "YVR", name: "Vancouver Intl", city: "Vancouver", country: "Canada", lat: 49.1967, lon: -123.1815 },
  { code: "YUL", name: "Montreal Trudeau", city: "Montreal", country: "Canada", lat: 45.4706, lon: -73.7408 },
  { code: "YYC", name: "Calgary Intl", city: "Calgary", country: "Canada", lat: 51.1215, lon: -114.0134 },
  { code: "YEG", name: "Edmonton Intl", city: "Edmonton", country: "Canada", lat: 53.3097, lon: -113.5797 },
  { code: "YOW", name: "Ottawa Macdonald", city: "Ottawa", country: "Canada", lat: 45.3225, lon: -75.6692 },
  { code: "YWG", name: "Winnipeg Richardson", city: "Winnipeg", country: "Canada", lat: 49.91, lon: -97.2399 },
  { code: "YHZ", name: "Halifax Stanfield", city: "Halifax", country: "Canada", lat: 44.8808, lon: -63.5085 },
  { code: "YQB", name: "Quebec Jean Lesage", city: "Quebec City", country: "Canada", lat: 46.7911, lon: -71.3933 },
  { code: "YXE", name: "Saskatoon Diefenbaker", city: "Saskatoon", country: "Canada", lat: 52.1708, lon: -106.6997 },
  { code: "YFB", name: "Iqaluit", city: "Iqaluit", country: "Canada", lat: 63.7564, lon: -68.5558 },
  { code: "YZF", name: "Yellowknife", city: "Yellowknife", country: "Canada", lat: 62.4628, lon: -114.4403 },
  { code: "YXY", name: "Whitehorse Intl", city: "Whitehorse", country: "Canada", lat: 60.7096, lon: -135.0674 },

  // ── Greenland ──
  { code: "SFJ", name: "Kangerlussuaq", city: "Kangerlussuaq", country: "Greenland", lat: 67.0122, lon: -50.7116 },
  { code: "GOH", name: "Nuuk", city: "Nuuk", country: "Greenland", lat: 64.1909, lon: -51.6781 },
  { code: "JAV", name: "Ilulissat", city: "Ilulissat", country: "Greenland", lat: 69.2432, lon: -51.0571 },
  { code: "THU", name: "Thule Air Base", city: "Pituffik", country: "Greenland", lat: 76.5312, lon: -68.7032 },
  { code: "KUS", name: "Kulusuk", city: "Kulusuk", country: "Greenland", lat: 65.5736, lon: -37.1236 },

  // ── Iceland ──
  { code: "KEF", name: "Keflavik Intl", city: "Reykjavik", country: "Iceland", lat: 63.985, lon: -22.6056 },

  // ── Mexico / Central / Caribbean ──
  { code: "MEX", name: "Mexico City Intl", city: "Mexico City", country: "Mexico", lat: 19.4363, lon: -99.0721 },
  { code: "CUN", name: "Cancun Intl", city: "Cancun", country: "Mexico", lat: 21.0365, lon: -86.877 },
  { code: "GDL", name: "Guadalajara Intl", city: "Guadalajara", country: "Mexico", lat: 20.5218, lon: -103.311 },
  { code: "TIJ", name: "Tijuana Intl", city: "Tijuana", country: "Mexico", lat: 32.5411, lon: -116.9703 },
  { code: "PTY", name: "Tocumen Intl", city: "Panama City", country: "Panama", lat: 9.0714, lon: -79.3835 },
  { code: "SJO", name: "Juan Santamaria", city: "San Jose", country: "Costa Rica", lat: 9.9939, lon: -84.2088 },
  { code: "HAV", name: "Jose Marti Intl", city: "Havana", country: "Cuba", lat: 22.9892, lon: -82.4091 },
  { code: "SJU", name: "Luis Munoz Marin", city: "San Juan", country: "Puerto Rico", lat: 18.4394, lon: -66.0018 },
  { code: "NAS", name: "Lynden Pindling", city: "Nassau", country: "Bahamas", lat: 25.0389, lon: -77.4662 },
  { code: "KIN", name: "Norman Manley", city: "Kingston", country: "Jamaica", lat: 17.9357, lon: -76.7875 },

  // ── South America ──
  { code: "BOG", name: "El Dorado Intl", city: "Bogota", country: "Colombia", lat: 4.7016, lon: -74.1469 },
  { code: "LIM", name: "Jorge Chavez Intl", city: "Lima", country: "Peru", lat: -12.0219, lon: -77.1143 },
  { code: "SCL", name: "Arturo Merino", city: "Santiago", country: "Chile", lat: -33.393, lon: -70.7858 },
  { code: "GRU", name: "Guarulhos Intl", city: "Sao Paulo", country: "Brazil", lat: -23.4356, lon: -46.4731 },
  { code: "GIG", name: "Galeao Intl", city: "Rio de Janeiro", country: "Brazil", lat: -22.8099, lon: -43.2506 },
  { code: "BSB", name: "Brasilia Intl", city: "Brasilia", country: "Brazil", lat: -15.8711, lon: -47.9186 },
  { code: "EZE", name: "Ezeiza Intl", city: "Buenos Aires", country: "Argentina", lat: -34.8222, lon: -58.5358 },
  { code: "CCS", name: "Simon Bolivar", city: "Caracas", country: "Venezuela", lat: 10.6012, lon: -66.9912 },
  { code: "UIO", name: "Mariscal Sucre", city: "Quito", country: "Ecuador", lat: -0.1292, lon: -78.3575 },
  { code: "MVD", name: "Carrasco Intl", city: "Montevideo", country: "Uruguay", lat: -34.8384, lon: -56.0308 },
  { code: "ASU", name: "Silvio Pettirossi", city: "Asuncion", country: "Paraguay", lat: -25.2399, lon: -57.5191 },
  { code: "VVI", name: "Viru Viru Intl", city: "Santa Cruz", country: "Bolivia", lat: -17.6448, lon: -63.1354 },
  { code: "USH", name: "Malvinas Argentinas", city: "Ushuaia", country: "Argentina", lat: -54.8433, lon: -68.2958 },

  // ── Europe ──
  { code: "LHR", name: "Heathrow", city: "London", country: "United Kingdom", lat: 51.47, lon: -0.4543 },
  { code: "LGW", name: "Gatwick", city: "London", country: "United Kingdom", lat: 51.1481, lon: -0.1903 },
  { code: "EDI", name: "Edinburgh", city: "Edinburgh", country: "United Kingdom", lat: 55.9508, lon: -3.3725 },
  { code: "CDG", name: "Charles de Gaulle", city: "Paris", country: "France", lat: 49.0097, lon: 2.5479 },
  { code: "FRA", name: "Frankfurt", city: "Frankfurt", country: "Germany", lat: 50.0379, lon: 8.5622 },
  { code: "MUC", name: "Munich", city: "Munich", country: "Germany", lat: 48.3538, lon: 11.7861 },
  { code: "TXL", name: "Berlin Brandenburg", city: "Berlin", country: "Germany", lat: 52.362, lon: 13.5094 },
  { code: "AMS", name: "Schiphol", city: "Amsterdam", country: "Netherlands", lat: 52.3105, lon: 4.7683 },
  { code: "MAD", name: "Barajas", city: "Madrid", country: "Spain", lat: 40.4719, lon: -3.5626 },
  { code: "BCN", name: "El Prat", city: "Barcelona", country: "Spain", lat: 41.2971, lon: 2.0785 },
  { code: "FCO", name: "Fiumicino", city: "Rome", country: "Italy", lat: 41.8003, lon: 12.2389 },
  { code: "MXP", name: "Malpensa", city: "Milan", country: "Italy", lat: 45.6306, lon: 8.7281 },
  { code: "IST", name: "Istanbul Airport", city: "Istanbul", country: "Turkey", lat: 41.2608, lon: 28.7419 },
  { code: "SVO", name: "Sheremetyevo", city: "Moscow", country: "Russia", lat: 55.9726, lon: 37.4146 },
  { code: "LED", name: "Pulkovo", city: "St Petersburg", country: "Russia", lat: 59.8003, lon: 30.2625 },
  { code: "ARN", name: "Arlanda", city: "Stockholm", country: "Sweden", lat: 59.6519, lon: 17.9186 },
  { code: "OSL", name: "Gardermoen", city: "Oslo", country: "Norway", lat: 60.1939, lon: 11.1004 },
  { code: "TOS", name: "Tromso Langnes", city: "Tromso", country: "Norway", lat: 69.6833, lon: 18.9189 },
  { code: "LYR", name: "Svalbard Longyear", city: "Longyearbyen", country: "Norway", lat: 78.2461, lon: 15.4656 },
  { code: "CPH", name: "Kastrup", city: "Copenhagen", country: "Denmark", lat: 55.618, lon: 12.656 },
  { code: "HEL", name: "Helsinki-Vantaa", city: "Helsinki", country: "Finland", lat: 60.3172, lon: 24.9633 },
  { code: "LIS", name: "Lisbon Portela", city: "Lisbon", country: "Portugal", lat: 38.7742, lon: -9.1342 },
  { code: "ATH", name: "Eleftherios Venizelos", city: "Athens", country: "Greece", lat: 37.9364, lon: 23.9445 },
  { code: "ZRH", name: "Zurich", city: "Zurich", country: "Switzerland", lat: 47.4647, lon: 8.5492 },
  { code: "VIE", name: "Vienna Intl", city: "Vienna", country: "Austria", lat: 48.1103, lon: 16.5697 },
  { code: "DUB", name: "Dublin", city: "Dublin", country: "Ireland", lat: 53.4213, lon: -6.2701 },
  { code: "WAW", name: "Chopin", city: "Warsaw", country: "Poland", lat: 52.1657, lon: 20.9671 },
  { code: "PRG", name: "Vaclav Havel", city: "Prague", country: "Czech Republic", lat: 50.1008, lon: 14.26 },
  { code: "BUD", name: "Budapest Liszt", city: "Budapest", country: "Hungary", lat: 47.4369, lon: 19.2556 },
  { code: "OTP", name: "Henri Coanda", city: "Bucharest", country: "Romania", lat: 44.5711, lon: 26.085 },
  { code: "KIV", name: "Chisinau Intl", city: "Chisinau", country: "Moldova", lat: 46.9277, lon: 28.9313 },

  // ── Middle East ──
  { code: "DXB", name: "Dubai Intl", city: "Dubai", country: "UAE", lat: 25.2528, lon: 55.3644 },
  { code: "AUH", name: "Abu Dhabi Intl", city: "Abu Dhabi", country: "UAE", lat: 24.433, lon: 54.6511 },
  { code: "DOH", name: "Hamad Intl", city: "Doha", country: "Qatar", lat: 25.2731, lon: 51.6081 },
  { code: "RUH", name: "King Khalid", city: "Riyadh", country: "Saudi Arabia", lat: 24.9576, lon: 46.6988 },
  { code: "JED", name: "King Abdulaziz", city: "Jeddah", country: "Saudi Arabia", lat: 21.6796, lon: 39.1565 },
  { code: "TLV", name: "Ben Gurion", city: "Tel Aviv", country: "Israel", lat: 32.0114, lon: 34.8867 },
  { code: "CAI", name: "Cairo Intl", city: "Cairo", country: "Egypt", lat: 30.1219, lon: 31.4056 },
  { code: "AMM", name: "Queen Alia", city: "Amman", country: "Jordan", lat: 31.7226, lon: 35.9932 },
  { code: "BAH", name: "Bahrain Intl", city: "Manama", country: "Bahrain", lat: 26.2708, lon: 50.6336 },
  { code: "MCT", name: "Muscat Intl", city: "Muscat", country: "Oman", lat: 23.5933, lon: 58.2844 },
  { code: "IKA", name: "Imam Khomeini", city: "Tehran", country: "Iran", lat: 35.4161, lon: 51.1522 },
  { code: "BGW", name: "Baghdad Intl", city: "Baghdad", country: "Iraq", lat: 33.2625, lon: 44.2346 },

  // ── China ──
  { code: "PEK", name: "Beijing Capital", city: "Beijing", country: "China", lat: 40.0799, lon: 116.603 },
  { code: "PKX", name: "Beijing Daxing", city: "Beijing", country: "China", lat: 39.5098, lon: 116.411 },
  { code: "PVG", name: "Pudong Intl", city: "Shanghai", country: "China", lat: 31.1443, lon: 121.805 },
  { code: "SHA", name: "Hongqiao Intl", city: "Shanghai", country: "China", lat: 31.1979, lon: 121.336 },
  { code: "CAN", name: "Baiyun Intl", city: "Guangzhou", country: "China", lat: 23.3924, lon: 113.299 },
  { code: "SZX", name: "Bao'an Intl", city: "Shenzhen", country: "China", lat: 22.6393, lon: 113.811 },
  { code: "CTU", name: "Shuangliu Intl", city: "Chengdu", country: "China", lat: 30.5785, lon: 103.947 },
  { code: "CKG", name: "Jiangbei Intl", city: "Chongqing", country: "China", lat: 29.7192, lon: 106.642 },
  { code: "HGH", name: "Xiaoshan Intl", city: "Hangzhou", country: "China", lat: 30.2295, lon: 120.434 },
  { code: "WUH", name: "Tianhe Intl", city: "Wuhan", country: "China", lat: 30.7838, lon: 114.208 },
  { code: "XIY", name: "Xianyang Intl", city: "Xi'an", country: "China", lat: 34.4471, lon: 108.752 },
  { code: "KMG", name: "Changshui Intl", city: "Kunming", country: "China", lat: 24.9924, lon: 102.743 },
  { code: "NKG", name: "Lukou Intl", city: "Nanjing", country: "China", lat: 31.742, lon: 118.862 },
  { code: "TSN", name: "Binhai Intl", city: "Tianjin", country: "China", lat: 39.1244, lon: 117.346 },
  { code: "SHE", name: "Taoxian Intl", city: "Shenyang", country: "China", lat: 41.6398, lon: 123.483 },
  { code: "DLC", name: "Zhoushuizi Intl", city: "Dalian", country: "China", lat: 38.9657, lon: 121.539 },
  { code: "HRB", name: "Taiping Intl", city: "Harbin", country: "China", lat: 45.6234, lon: 126.25 },
  { code: "URC", name: "Diwopu Intl", city: "Urumqi", country: "China", lat: 43.9071, lon: 87.4742 },
  { code: "LXA", name: "Gonggar", city: "Lhasa", country: "China", lat: 29.2978, lon: 90.912 },

  // ── Rest of Asia ──
  { code: "HND", name: "Haneda", city: "Tokyo", country: "Japan", lat: 35.5494, lon: 139.78 },
  { code: "NRT", name: "Narita Intl", city: "Tokyo", country: "Japan", lat: 35.7647, lon: 140.386 },
  { code: "KIX", name: "Kansai Intl", city: "Osaka", country: "Japan", lat: 34.4347, lon: 135.244 },
  { code: "CTS", name: "New Chitose", city: "Sapporo", country: "Japan", lat: 42.7752, lon: 141.692 },
  { code: "HKG", name: "Hong Kong Intl", city: "Hong Kong", country: "Hong Kong", lat: 22.3089, lon: 113.915 },
  { code: "ICN", name: "Incheon Intl", city: "Seoul", country: "South Korea", lat: 37.4691, lon: 126.451 },
  { code: "TPE", name: "Taoyuan Intl", city: "Taipei", country: "Taiwan", lat: 25.0777, lon: 121.233 },
  { code: "SIN", name: "Changi", city: "Singapore", country: "Singapore", lat: 1.3502, lon: 103.994 },
  { code: "BKK", name: "Suvarnabhumi", city: "Bangkok", country: "Thailand", lat: 13.6811, lon: 100.747 },
  { code: "DEL", name: "Indira Gandhi", city: "Delhi", country: "India", lat: 28.5665, lon: 77.1031 },
  { code: "BOM", name: "Chhatrapati Shivaji", city: "Mumbai", country: "India", lat: 19.0896, lon: 72.8656 },
  { code: "BLR", name: "Kempegowda Intl", city: "Bangalore", country: "India", lat: 13.1979, lon: 77.7063 },
  { code: "MAA", name: "Chennai Intl", city: "Chennai", country: "India", lat: 12.99, lon: 80.1693 },
  { code: "CCU", name: "Netaji Subhas", city: "Kolkata", country: "India", lat: 22.6547, lon: 88.4467 },
  { code: "KUL", name: "Kuala Lumpur Intl", city: "Kuala Lumpur", country: "Malaysia", lat: 2.7456, lon: 101.71 },
  { code: "CGK", name: "Soekarno-Hatta", city: "Jakarta", country: "Indonesia", lat: -6.1256, lon: 106.656 },
  { code: "DPS", name: "Ngurah Rai", city: "Bali", country: "Indonesia", lat: -8.7482, lon: 115.167 },
  { code: "MNL", name: "Ninoy Aquino", city: "Manila", country: "Philippines", lat: 14.5086, lon: 121.02 },
  { code: "SGN", name: "Tan Son Nhat", city: "Ho Chi Minh City", country: "Vietnam", lat: 10.8188, lon: 106.652 },
  { code: "HAN", name: "Noi Bai", city: "Hanoi", country: "Vietnam", lat: 21.2212, lon: 105.807 },
  { code: "CMB", name: "Bandaranaike", city: "Colombo", country: "Sri Lanka", lat: 7.1808, lon: 79.8841 },
  { code: "KTM", name: "Tribhuvan Intl", city: "Kathmandu", country: "Nepal", lat: 27.6966, lon: 85.3591 },
  { code: "ISB", name: "Islamabad Intl", city: "Islamabad", country: "Pakistan", lat: 33.5605, lon: 72.8526 },
  { code: "KHI", name: "Jinnah Intl", city: "Karachi", country: "Pakistan", lat: 24.9065, lon: 67.1609 },
  { code: "DAC", name: "Hazrat Shahjalal", city: "Dhaka", country: "Bangladesh", lat: 23.8433, lon: 90.3978 },
  { code: "RGN", name: "Yangon Intl", city: "Yangon", country: "Myanmar", lat: 16.9073, lon: 96.1332 },
  { code: "MLE", name: "Velana Intl", city: "Male", country: "Maldives", lat: 4.1918, lon: 73.5291 },
  { code: "ULN", name: "Chinggis Khaan", city: "Ulaanbaatar", country: "Mongolia", lat: 47.843, lon: 106.767 },
  { code: "TAS", name: "Islam Karimov", city: "Tashkent", country: "Uzbekistan", lat: 41.2581, lon: 69.2813 },
  { code: "ALA", name: "Almaty Intl", city: "Almaty", country: "Kazakhstan", lat: 43.3521, lon: 77.0405 },

  // ── Africa ──
  { code: "JNB", name: "O.R. Tambo", city: "Johannesburg", country: "South Africa", lat: -26.1392, lon: 28.246 },
  { code: "CPT", name: "Cape Town Intl", city: "Cape Town", country: "South Africa", lat: -33.9649, lon: 18.6017 },
  { code: "NBO", name: "Jomo Kenyatta", city: "Nairobi", country: "Kenya", lat: -1.3192, lon: 36.9278 },
  { code: "LOS", name: "Murtala Muhammed", city: "Lagos", country: "Nigeria", lat: 6.5774, lon: 3.3213 },
  { code: "ABV", name: "Nnamdi Azikiwe", city: "Abuja", country: "Nigeria", lat: 9.0065, lon: 7.2632 },
  { code: "ADD", name: "Bole Intl", city: "Addis Ababa", country: "Ethiopia", lat: 8.9779, lon: 38.7993 },
  { code: "CMN", name: "Mohammed V", city: "Casablanca", country: "Morocco", lat: 33.3675, lon: -7.5898 },
  { code: "ALG", name: "Houari Boumediene", city: "Algiers", country: "Algeria", lat: 36.691, lon: 3.2154 },
  { code: "TUN", name: "Tunis-Carthage", city: "Tunis", country: "Tunisia", lat: 36.851, lon: 10.2272 },
  { code: "ACC", name: "Kotoka Intl", city: "Accra", country: "Ghana", lat: 5.6052, lon: -0.1668 },
  { code: "DAR", name: "Julius Nyerere", city: "Dar es Salaam", country: "Tanzania", lat: -6.8781, lon: 39.2026 },
  { code: "EBB", name: "Entebbe Intl", city: "Entebbe", country: "Uganda", lat: 0.0424, lon: 32.4435 },
  { code: "DSS", name: "Blaise Diagne", city: "Dakar", country: "Senegal", lat: 14.67, lon: -17.0733 },
  { code: "TNR", name: "Ivato Intl", city: "Antananarivo", country: "Madagascar", lat: -18.7969, lon: 47.4789 },
  { code: "MRU", name: "Sir Seewoosagur", city: "Port Louis", country: "Mauritius", lat: -20.4302, lon: 57.6836 },

  // ── Oceania ──
  { code: "SYD", name: "Kingsford Smith", city: "Sydney", country: "Australia", lat: -33.9461, lon: 151.177 },
  { code: "MEL", name: "Tullamarine", city: "Melbourne", country: "Australia", lat: -37.6733, lon: 144.843 },
  { code: "BNE", name: "Brisbane Intl", city: "Brisbane", country: "Australia", lat: -27.3842, lon: 153.117 },
  { code: "PER", name: "Perth Intl", city: "Perth", country: "Australia", lat: -31.9403, lon: 115.967 },
  { code: "ADL", name: "Adelaide", city: "Adelaide", country: "Australia", lat: -34.945, lon: 138.531 },
  { code: "DRW", name: "Darwin Intl", city: "Darwin", country: "Australia", lat: -12.4147, lon: 130.877 },
  { code: "AKL", name: "Auckland Intl", city: "Auckland", country: "New Zealand", lat: -37.0082, lon: 174.792 },
  { code: "CHC", name: "Christchurch Intl", city: "Christchurch", country: "New Zealand", lat: -43.4894, lon: 172.532 },
  { code: "NAN", name: "Nadi Intl", city: "Nadi", country: "Fiji", lat: -17.7554, lon: 177.443 },
  { code: "PPT", name: "Faaa Intl", city: "Papeete", country: "French Polynesia", lat: -17.5537, lon: -149.607 },

  // ── Arctic / Remote ──
  { code: "SVJ", name: "Svolvaer Helle", city: "Svolvaer", country: "Norway", lat: 68.2433, lon: 14.6692 },
  { code: "TRD", name: "Trondheim Vaernes", city: "Trondheim", country: "Norway", lat: 63.4578, lon: 10.924 },
  { code: "RVK", name: "Ryumsjoen", city: "Rorvik", country: "Norway", lat: 64.8383, lon: 11.1461 },
];

/** Search airports by code, city, country, or name */
export function searchAirports(query: string): Airport[] {
  const q = query.toLowerCase().trim();
  if (q.length === 0) return [];

  // Exact code match first
  const exact = AIRPORTS.filter((a) => a.code.toLowerCase() === q);
  if (exact.length > 0) return exact;

  // Then match against all fields including country
  return AIRPORTS.filter(
    (a) =>
      a.code.toLowerCase().includes(q) ||
      a.city.toLowerCase().includes(q) ||
      a.country.toLowerCase().includes(q) ||
      a.name.toLowerCase().includes(q),
  ).slice(0, 12);
}
