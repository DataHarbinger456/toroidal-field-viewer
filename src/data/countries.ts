/** Static country centroid and major city data — no API calls. */

export interface Country {
  name: string;
  iso3: string;
  isoNumeric: string;
  centroidLon: number;
  centroidLat: number;
}

export interface City {
  name: string;
  country: string;
  lon: number;
  lat: number;
  population: number;
}

export interface SearchMatch {
  type: "country" | "city";
  name: string;
  score: number;
}

/**
 * All countries with approximate geographic centroids.
 * Coordinates are [longitude, latitude] in decimal degrees.
 */
export const COUNTRIES: Country[] = [
  { name: "Afghanistan", iso3: "AFG", isoNumeric: "004", centroidLon: 67.71, centroidLat: 33.94 },
  { name: "Albania", iso3: "ALB", isoNumeric: "008", centroidLon: 20.17, centroidLat: 41.15 },
  { name: "Algeria", iso3: "DZA", isoNumeric: "012", centroidLon: 1.66, centroidLat: 28.03 },
  { name: "Andorra", iso3: "AND", isoNumeric: "020", centroidLon: 1.52, centroidLat: 42.55 },
  { name: "Angola", iso3: "AGO", isoNumeric: "024", centroidLon: 17.87, centroidLat: -11.20 },
  { name: "Antigua and Barbuda", iso3: "ATG", isoNumeric: "028", centroidLon: -61.80, centroidLat: 17.06 },
  { name: "Argentina", iso3: "ARG", isoNumeric: "032", centroidLon: -63.62, centroidLat: -38.42 },
  { name: "Armenia", iso3: "ARM", isoNumeric: "051", centroidLon: 45.04, centroidLat: 40.07 },
  { name: "Australia", iso3: "AUS", isoNumeric: "036", centroidLon: 133.78, centroidLat: -25.27 },
  { name: "Austria", iso3: "AUT", isoNumeric: "040", centroidLon: 14.55, centroidLat: 47.52 },
  { name: "Azerbaijan", iso3: "AZE", isoNumeric: "031", centroidLon: 47.58, centroidLat: 40.14 },
  { name: "Bahamas", iso3: "BHS", isoNumeric: "044", centroidLon: -77.40, centroidLat: 25.03 },
  { name: "Bahrain", iso3: "BHR", isoNumeric: "048", centroidLon: 50.56, centroidLat: 26.07 },
  { name: "Bangladesh", iso3: "BGD", isoNumeric: "050", centroidLon: 90.36, centroidLat: 23.68 },
  { name: "Barbados", iso3: "BRB", isoNumeric: "052", centroidLon: -59.54, centroidLat: 13.19 },
  { name: "Belarus", iso3: "BLR", isoNumeric: "112", centroidLon: 27.95, centroidLat: 53.71 },
  { name: "Belgium", iso3: "BEL", isoNumeric: "056", centroidLon: 4.47, centroidLat: 50.50 },
  { name: "Belize", iso3: "BLZ", isoNumeric: "084", centroidLon: -88.50, centroidLat: 17.19 },
  { name: "Benin", iso3: "BEN", isoNumeric: "204", centroidLon: 2.32, centroidLat: 9.31 },
  { name: "Bhutan", iso3: "BTN", isoNumeric: "064", centroidLon: 90.43, centroidLat: 27.51 },
  { name: "Bolivia", iso3: "BOL", isoNumeric: "068", centroidLon: -63.59, centroidLat: -16.29 },
  { name: "Bosnia and Herzegovina", iso3: "BIH", isoNumeric: "070", centroidLon: 17.68, centroidLat: 43.92 },
  { name: "Botswana", iso3: "BWA", isoNumeric: "072", centroidLon: 24.68, centroidLat: -22.33 },
  { name: "Brazil", iso3: "BRA", isoNumeric: "076", centroidLon: -51.93, centroidLat: -14.24 },
  { name: "Brunei", iso3: "BRN", isoNumeric: "096", centroidLon: 114.73, centroidLat: 4.54 },
  { name: "Bulgaria", iso3: "BGR", isoNumeric: "100", centroidLon: 25.49, centroidLat: 42.73 },
  { name: "Burkina Faso", iso3: "BFA", isoNumeric: "854", centroidLon: -1.56, centroidLat: 12.24 },
  { name: "Burundi", iso3: "BDI", isoNumeric: "108", centroidLon: 29.92, centroidLat: -3.37 },
  { name: "Cabo Verde", iso3: "CPV", isoNumeric: "132", centroidLon: -24.01, centroidLat: 16.00 },
  { name: "Cambodia", iso3: "KHM", isoNumeric: "116", centroidLon: 104.99, centroidLat: 12.57 },
  { name: "Cameroon", iso3: "CMR", isoNumeric: "120", centroidLon: 12.35, centroidLat: 7.37 },
  { name: "Canada", iso3: "CAN", isoNumeric: "124", centroidLon: -106.35, centroidLat: 56.13 },
  { name: "Central African Republic", iso3: "CAF", isoNumeric: "140", centroidLon: 20.94, centroidLat: 6.61 },
  { name: "Chad", iso3: "TCD", isoNumeric: "148", centroidLon: 18.73, centroidLat: 15.45 },
  { name: "Chile", iso3: "CHL", isoNumeric: "152", centroidLon: -71.09, centroidLat: -35.68 },
  { name: "China", iso3: "CHN", isoNumeric: "156", centroidLon: 104.20, centroidLat: 35.86 },
  { name: "Colombia", iso3: "COL", isoNumeric: "170", centroidLon: -74.30, centroidLat: 4.57 },
  { name: "Comoros", iso3: "COM", isoNumeric: "174", centroidLon: 43.87, centroidLat: -11.88 },
  { name: "Congo", iso3: "COG", isoNumeric: "178", centroidLon: 15.83, centroidLat: -0.23 },
  { name: "Costa Rica", iso3: "CRI", isoNumeric: "188", centroidLon: -83.75, centroidLat: 9.75 },
  { name: "Croatia", iso3: "HRV", isoNumeric: "191", centroidLon: 15.42, centroidLat: 45.10 },
  { name: "Cuba", iso3: "CUB", isoNumeric: "192", centroidLon: -77.78, centroidLat: 21.52 },
  { name: "Cyprus", iso3: "CYP", isoNumeric: "196", centroidLon: 33.43, centroidLat: 35.13 },
  { name: "Czech Republic", iso3: "CZE", isoNumeric: "203", centroidLon: 15.47, centroidLat: 49.82 },
  { name: "Côte d'Ivoire", iso3: "CIV", isoNumeric: "384", centroidLon: -5.55, centroidLat: 7.54 },
  { name: "Dem. Rep. Congo", iso3: "COD", isoNumeric: "180", centroidLon: 21.76, centroidLat: -4.04 },
  { name: "Denmark", iso3: "DNK", isoNumeric: "208", centroidLon: 9.50, centroidLat: 56.26 },
  { name: "Djibouti", iso3: "DJI", isoNumeric: "262", centroidLon: 42.59, centroidLat: 11.83 },
  { name: "Dominica", iso3: "DMA", isoNumeric: "212", centroidLon: -61.37, centroidLat: 15.41 },
  { name: "Dominican Republic", iso3: "DOM", isoNumeric: "214", centroidLon: -70.16, centroidLat: 18.74 },
  { name: "Ecuador", iso3: "ECU", isoNumeric: "218", centroidLon: -78.18, centroidLat: -1.83 },
  { name: "Egypt", iso3: "EGY", isoNumeric: "818", centroidLon: 30.80, centroidLat: 26.82 },
  { name: "El Salvador", iso3: "SLV", isoNumeric: "222", centroidLon: -88.90, centroidLat: 13.79 },
  { name: "Equatorial Guinea", iso3: "GNQ", isoNumeric: "226", centroidLon: 10.27, centroidLat: 1.65 },
  { name: "Eritrea", iso3: "ERI", isoNumeric: "232", centroidLon: 39.78, centroidLat: 15.18 },
  { name: "Estonia", iso3: "EST", isoNumeric: "233", centroidLon: 25.01, centroidLat: 58.60 },
  { name: "Eswatini", iso3: "SWZ", isoNumeric: "748", centroidLon: 31.47, centroidLat: -26.52 },
  { name: "Ethiopia", iso3: "ETH", isoNumeric: "231", centroidLon: 40.49, centroidLat: 9.15 },
  { name: "Fiji", iso3: "FJI", isoNumeric: "242", centroidLon: 178.07, centroidLat: -17.71 },
  { name: "Finland", iso3: "FIN", isoNumeric: "246", centroidLon: 25.75, centroidLat: 61.92 },
  { name: "France", iso3: "FRA", isoNumeric: "250", centroidLon: 2.21, centroidLat: 46.23 },
  { name: "Gabon", iso3: "GAB", isoNumeric: "266", centroidLon: 11.61, centroidLat: -0.80 },
  { name: "Gambia", iso3: "GMB", isoNumeric: "270", centroidLon: -15.31, centroidLat: 13.44 },
  { name: "Georgia", iso3: "GEO", isoNumeric: "268", centroidLon: 43.36, centroidLat: 42.32 },
  { name: "Germany", iso3: "DEU", isoNumeric: "276", centroidLon: 10.45, centroidLat: 51.17 },
  { name: "Ghana", iso3: "GHA", isoNumeric: "288", centroidLon: -1.02, centroidLat: 7.95 },
  { name: "Greece", iso3: "GRC", isoNumeric: "300", centroidLon: 21.82, centroidLat: 39.07 },
  { name: "Grenada", iso3: "GRD", isoNumeric: "308", centroidLon: -61.68, centroidLat: 12.12 },
  { name: "Guatemala", iso3: "GTM", isoNumeric: "320", centroidLon: -90.23, centroidLat: 15.78 },
  { name: "Guinea", iso3: "GIN", isoNumeric: "324", centroidLon: -9.95, centroidLat: 9.95 },
  { name: "Guinea-Bissau", iso3: "GNB", isoNumeric: "624", centroidLon: -15.18, centroidLat: 11.80 },
  { name: "Guyana", iso3: "GUY", isoNumeric: "328", centroidLon: -58.93, centroidLat: 4.86 },
  { name: "Haiti", iso3: "HTI", isoNumeric: "332", centroidLon: -72.29, centroidLat: 18.97 },
  { name: "Honduras", iso3: "HND", isoNumeric: "340", centroidLon: -86.24, centroidLat: 15.20 },
  { name: "Hungary", iso3: "HUN", isoNumeric: "348", centroidLon: 19.50, centroidLat: 47.16 },
  { name: "Iceland", iso3: "ISL", isoNumeric: "352", centroidLon: -18.61, centroidLat: 64.96 },
  { name: "India", iso3: "IND", isoNumeric: "356", centroidLon: 78.96, centroidLat: 20.59 },
  { name: "Indonesia", iso3: "IDN", isoNumeric: "360", centroidLon: 113.92, centroidLat: -0.79 },
  { name: "Iran", iso3: "IRN", isoNumeric: "364", centroidLon: 53.69, centroidLat: 32.43 },
  { name: "Iraq", iso3: "IRQ", isoNumeric: "368", centroidLon: 43.68, centroidLat: 33.22 },
  { name: "Ireland", iso3: "IRL", isoNumeric: "372", centroidLon: -8.24, centroidLat: 53.41 },
  { name: "Israel", iso3: "ISR", isoNumeric: "376", centroidLon: 34.85, centroidLat: 31.05 },
  { name: "Italy", iso3: "ITA", isoNumeric: "380", centroidLon: 12.57, centroidLat: 41.87 },
  { name: "Jamaica", iso3: "JAM", isoNumeric: "388", centroidLon: -77.30, centroidLat: 18.11 },
  { name: "Japan", iso3: "JPN", isoNumeric: "392", centroidLon: 138.25, centroidLat: 36.20 },
  { name: "Jordan", iso3: "JOR", isoNumeric: "400", centroidLon: 36.24, centroidLat: 30.59 },
  { name: "Kazakhstan", iso3: "KAZ", isoNumeric: "398", centroidLon: 66.92, centroidLat: 48.02 },
  { name: "Kenya", iso3: "KEN", isoNumeric: "404", centroidLon: 37.91, centroidLat: -0.02 },
  { name: "Kiribati", iso3: "KIR", isoNumeric: "296", centroidLon: -168.73, centroidLat: 1.87 },
  { name: "Kuwait", iso3: "KWT", isoNumeric: "414", centroidLon: 47.48, centroidLat: 29.31 },
  { name: "Kyrgyzstan", iso3: "KGZ", isoNumeric: "417", centroidLon: 74.77, centroidLat: 41.20 },
  { name: "Laos", iso3: "LAO", isoNumeric: "418", centroidLon: 102.50, centroidLat: 19.86 },
  { name: "Latvia", iso3: "LVA", isoNumeric: "428", centroidLon: 24.60, centroidLat: 56.88 },
  { name: "Lebanon", iso3: "LBN", isoNumeric: "422", centroidLon: 35.86, centroidLat: 33.87 },
  { name: "Lesotho", iso3: "LSO", isoNumeric: "426", centroidLon: 28.23, centroidLat: -29.61 },
  { name: "Liberia", iso3: "LBR", isoNumeric: "430", centroidLon: -9.43, centroidLat: 6.43 },
  { name: "Libya", iso3: "LBY", isoNumeric: "434", centroidLon: 17.23, centroidLat: 26.34 },
  { name: "Liechtenstein", iso3: "LIE", isoNumeric: "438", centroidLon: 9.56, centroidLat: 47.17 },
  { name: "Lithuania", iso3: "LTU", isoNumeric: "440", centroidLon: 23.88, centroidLat: 55.17 },
  { name: "Luxembourg", iso3: "LUX", isoNumeric: "442", centroidLon: 6.13, centroidLat: 49.82 },
  { name: "Madagascar", iso3: "MDG", isoNumeric: "450", centroidLon: 46.87, centroidLat: -18.77 },
  { name: "Malawi", iso3: "MWI", isoNumeric: "454", centroidLon: 34.30, centroidLat: -13.25 },
  { name: "Malaysia", iso3: "MYS", isoNumeric: "458", centroidLon: 101.98, centroidLat: 4.21 },
  { name: "Maldives", iso3: "MDV", isoNumeric: "462", centroidLon: 73.22, centroidLat: 3.20 },
  { name: "Mali", iso3: "MLI", isoNumeric: "466", centroidLon: -3.99, centroidLat: 17.57 },
  { name: "Malta", iso3: "MLT", isoNumeric: "470", centroidLon: 14.38, centroidLat: 35.94 },
  { name: "Marshall Islands", iso3: "MHL", isoNumeric: "584", centroidLon: 171.18, centroidLat: 7.13 },
  { name: "Mauritania", iso3: "MRT", isoNumeric: "478", centroidLon: -10.94, centroidLat: 21.01 },
  { name: "Mauritius", iso3: "MUS", isoNumeric: "480", centroidLon: 57.55, centroidLat: -20.35 },
  { name: "Mexico", iso3: "MEX", isoNumeric: "484", centroidLon: -102.55, centroidLat: 23.63 },
  { name: "Micronesia", iso3: "FSM", isoNumeric: "583", centroidLon: 150.55, centroidLat: 7.43 },
  { name: "Moldova", iso3: "MDA", isoNumeric: "498", centroidLon: 28.37, centroidLat: 47.41 },
  { name: "Monaco", iso3: "MCO", isoNumeric: "492", centroidLon: 7.41, centroidLat: 43.73 },
  { name: "Mongolia", iso3: "MNG", isoNumeric: "496", centroidLon: 103.85, centroidLat: 46.86 },
  { name: "Montenegro", iso3: "MNE", isoNumeric: "499", centroidLon: 19.37, centroidLat: 42.71 },
  { name: "Morocco", iso3: "MAR", isoNumeric: "504", centroidLon: -7.09, centroidLat: 31.79 },
  { name: "Mozambique", iso3: "MOZ", isoNumeric: "508", centroidLon: 35.53, centroidLat: -18.67 },
  { name: "Myanmar", iso3: "MMR", isoNumeric: "104", centroidLon: 95.96, centroidLat: 21.91 },
  { name: "Namibia", iso3: "NAM", isoNumeric: "516", centroidLon: 18.49, centroidLat: -22.96 },
  { name: "Nauru", iso3: "NRU", isoNumeric: "520", centroidLon: 166.93, centroidLat: -0.52 },
  { name: "Nepal", iso3: "NPL", isoNumeric: "524", centroidLon: 84.12, centroidLat: 28.39 },
  { name: "Netherlands", iso3: "NLD", isoNumeric: "528", centroidLon: 5.29, centroidLat: 52.13 },
  { name: "New Zealand", iso3: "NZL", isoNumeric: "554", centroidLon: 174.89, centroidLat: -40.90 },
  { name: "Nicaragua", iso3: "NIC", isoNumeric: "558", centroidLon: -85.21, centroidLat: 12.87 },
  { name: "Niger", iso3: "NER", isoNumeric: "562", centroidLon: 8.08, centroidLat: 17.61 },
  { name: "Nigeria", iso3: "NGA", isoNumeric: "566", centroidLon: 8.68, centroidLat: 9.08 },
  { name: "North Korea", iso3: "PRK", isoNumeric: "408", centroidLon: 127.51, centroidLat: 40.34 },
  { name: "North Macedonia", iso3: "MKD", isoNumeric: "807", centroidLon: 21.75, centroidLat: 41.51 },
  { name: "Norway", iso3: "NOR", isoNumeric: "578", centroidLon: 8.47, centroidLat: 60.47 },
  { name: "Oman", iso3: "OMN", isoNumeric: "512", centroidLon: 55.98, centroidLat: 21.47 },
  { name: "Pakistan", iso3: "PAK", isoNumeric: "586", centroidLon: 69.35, centroidLat: 30.38 },
  { name: "Palau", iso3: "PLW", isoNumeric: "585", centroidLon: 134.58, centroidLat: 7.51 },
  { name: "Palestine", iso3: "PSE", isoNumeric: "275", centroidLon: 35.23, centroidLat: 31.95 },
  { name: "Panama", iso3: "PAN", isoNumeric: "591", centroidLon: -80.78, centroidLat: 8.54 },
  { name: "Papua New Guinea", iso3: "PNG", isoNumeric: "598", centroidLon: 143.96, centroidLat: -6.31 },
  { name: "Paraguay", iso3: "PRY", isoNumeric: "600", centroidLon: -58.44, centroidLat: -23.44 },
  { name: "Peru", iso3: "PER", isoNumeric: "604", centroidLon: -75.02, centroidLat: -9.19 },
  { name: "Philippines", iso3: "PHL", isoNumeric: "608", centroidLon: 121.77, centroidLat: 12.88 },
  { name: "Poland", iso3: "POL", isoNumeric: "616", centroidLon: 19.15, centroidLat: 51.92 },
  { name: "Portugal", iso3: "PRT", isoNumeric: "620", centroidLon: -8.22, centroidLat: 39.40 },
  { name: "Qatar", iso3: "QAT", isoNumeric: "634", centroidLon: 51.18, centroidLat: 25.35 },
  { name: "Romania", iso3: "ROU", isoNumeric: "642", centroidLon: 24.97, centroidLat: 45.94 },
  { name: "Russia", iso3: "RUS", isoNumeric: "643", centroidLon: 105.32, centroidLat: 61.52 },
  { name: "Rwanda", iso3: "RWA", isoNumeric: "646", centroidLon: 29.87, centroidLat: -1.94 },
  { name: "Saint Kitts and Nevis", iso3: "KNA", isoNumeric: "659", centroidLon: -62.77, centroidLat: 17.36 },
  { name: "Saint Lucia", iso3: "LCA", isoNumeric: "662", centroidLon: -60.98, centroidLat: 13.91 },
  { name: "Saint Vincent and the Grenadines", iso3: "VCT", isoNumeric: "670", centroidLon: -61.20, centroidLat: 12.98 },
  { name: "Samoa", iso3: "WSM", isoNumeric: "882", centroidLon: -172.10, centroidLat: -13.76 },
  { name: "San Marino", iso3: "SMR", isoNumeric: "674", centroidLon: 12.46, centroidLat: 43.94 },
  { name: "São Tomé and Príncipe", iso3: "STP", isoNumeric: "678", centroidLon: 6.61, centroidLat: 0.19 },
  { name: "Saudi Arabia", iso3: "SAU", isoNumeric: "682", centroidLon: 45.08, centroidLat: 23.89 },
  { name: "Senegal", iso3: "SEN", isoNumeric: "686", centroidLon: -14.45, centroidLat: 14.50 },
  { name: "Serbia", iso3: "SRB", isoNumeric: "688", centroidLon: 21.01, centroidLat: 44.02 },
  { name: "Seychelles", iso3: "SYC", isoNumeric: "690", centroidLon: 55.49, centroidLat: -4.68 },
  { name: "Sierra Leone", iso3: "SLE", isoNumeric: "694", centroidLon: -11.78, centroidLat: 8.46 },
  { name: "Singapore", iso3: "SGP", isoNumeric: "702", centroidLon: 103.82, centroidLat: 1.35 },
  { name: "Slovakia", iso3: "SVK", isoNumeric: "703", centroidLon: 19.70, centroidLat: 48.67 },
  { name: "Slovenia", iso3: "SVN", isoNumeric: "705", centroidLon: 14.99, centroidLat: 46.15 },
  { name: "Solomon Islands", iso3: "SLB", isoNumeric: "090", centroidLon: 160.16, centroidLat: -9.64 },
  { name: "Somalia", iso3: "SOM", isoNumeric: "706", centroidLon: 46.20, centroidLat: 5.15 },
  { name: "South Africa", iso3: "ZAF", isoNumeric: "710", centroidLon: 22.94, centroidLat: -30.56 },
  { name: "South Korea", iso3: "KOR", isoNumeric: "410", centroidLon: 127.77, centroidLat: 35.91 },
  { name: "South Sudan", iso3: "SSD", isoNumeric: "728", centroidLon: 31.31, centroidLat: 6.88 },
  { name: "Spain", iso3: "ESP", isoNumeric: "724", centroidLon: -3.75, centroidLat: 40.46 },
  { name: "Sri Lanka", iso3: "LKA", isoNumeric: "144", centroidLon: 80.77, centroidLat: 7.87 },
  { name: "Sudan", iso3: "SDN", isoNumeric: "729", centroidLon: 30.22, centroidLat: 12.86 },
  { name: "Suriname", iso3: "SUR", isoNumeric: "740", centroidLon: -56.03, centroidLat: 3.92 },
  { name: "Sweden", iso3: "SWE", isoNumeric: "752", centroidLon: 18.64, centroidLat: 60.13 },
  { name: "Switzerland", iso3: "CHE", isoNumeric: "756", centroidLon: 8.23, centroidLat: 46.82 },
  { name: "Syria", iso3: "SYR", isoNumeric: "760", centroidLon: 38.99, centroidLat: 34.80 },
  { name: "Taiwan", iso3: "TWN", isoNumeric: "158", centroidLon: 120.96, centroidLat: 23.70 },
  { name: "Tajikistan", iso3: "TJK", isoNumeric: "762", centroidLon: 71.28, centroidLat: 38.86 },
  { name: "Tanzania", iso3: "TZA", isoNumeric: "834", centroidLon: 34.89, centroidLat: -6.37 },
  { name: "Thailand", iso3: "THA", isoNumeric: "764", centroidLon: 100.99, centroidLat: 15.87 },
  { name: "Timor-Leste", iso3: "TLS", isoNumeric: "626", centroidLon: 125.73, centroidLat: -8.87 },
  { name: "Togo", iso3: "TGO", isoNumeric: "768", centroidLon: 0.82, centroidLat: 8.62 },
  { name: "Tonga", iso3: "TON", isoNumeric: "776", centroidLon: -175.20, centroidLat: -21.18 },
  { name: "Trinidad and Tobago", iso3: "TTO", isoNumeric: "780", centroidLon: -61.22, centroidLat: 10.69 },
  { name: "Tunisia", iso3: "TUN", isoNumeric: "788", centroidLon: 9.54, centroidLat: 33.89 },
  { name: "Turkey", iso3: "TUR", isoNumeric: "792", centroidLon: 35.24, centroidLat: 38.96 },
  { name: "Turkmenistan", iso3: "TKM", isoNumeric: "795", centroidLon: 59.56, centroidLat: 38.97 },
  { name: "Tuvalu", iso3: "TUV", isoNumeric: "798", centroidLon: 179.21, centroidLat: -7.11 },
  { name: "Uganda", iso3: "UGA", isoNumeric: "800", centroidLon: 32.29, centroidLat: 1.37 },
  { name: "Ukraine", iso3: "UKR", isoNumeric: "804", centroidLon: 31.17, centroidLat: 48.38 },
  { name: "United Arab Emirates", iso3: "ARE", isoNumeric: "784", centroidLon: 53.85, centroidLat: 23.42 },
  { name: "United Kingdom", iso3: "GBR", isoNumeric: "826", centroidLon: -3.44, centroidLat: 55.38 },
  { name: "United States", iso3: "USA", isoNumeric: "840", centroidLon: -95.71, centroidLat: 37.09 },
  { name: "Uruguay", iso3: "URY", isoNumeric: "858", centroidLon: -55.77, centroidLat: -32.52 },
  { name: "Uzbekistan", iso3: "UZB", isoNumeric: "860", centroidLon: 64.59, centroidLat: 41.38 },
  { name: "Vanuatu", iso3: "VUT", isoNumeric: "548", centroidLon: 166.96, centroidLat: -15.38 },
  { name: "Vatican City", iso3: "VAT", isoNumeric: "336", centroidLon: 12.45, centroidLat: 41.90 },
  { name: "Venezuela", iso3: "VEN", isoNumeric: "862", centroidLon: -66.59, centroidLat: 6.42 },
  { name: "Vietnam", iso3: "VNM", isoNumeric: "704", centroidLon: 108.28, centroidLat: 14.06 },
  { name: "Yemen", iso3: "YEM", isoNumeric: "887", centroidLon: 48.52, centroidLat: 15.55 },
  { name: "Zambia", iso3: "ZMB", isoNumeric: "894", centroidLon: 27.85, centroidLat: -13.13 },
  { name: "Zimbabwe", iso3: "ZWE", isoNumeric: "716", centroidLon: 29.15, centroidLat: -19.02 },
];

/**
 * Top 80 major world cities by population / global significance.
 * Coordinates in decimal degrees.
 */
export const CITIES: City[] = [
  { name: "Tokyo", country: "Japan", lon: 139.69, lat: 35.69, population: 37400000 },
  { name: "Delhi", country: "India", lon: 77.10, lat: 28.70, population: 32900000 },
  { name: "Shanghai", country: "China", lon: 121.47, lat: 31.23, population: 29200000 },
  { name: "São Paulo", country: "Brazil", lon: -46.63, lat: -23.55, population: 22400000 },
  { name: "Mexico City", country: "Mexico", lon: -99.13, lat: 19.43, population: 21800000 },
  { name: "Cairo", country: "Egypt", lon: 31.24, lat: 30.04, population: 21300000 },
  { name: "Dhaka", country: "Bangladesh", lon: 90.41, lat: 23.81, population: 22800000 },
  { name: "Mumbai", country: "India", lon: 72.88, lat: 19.08, population: 21400000 },
  { name: "Beijing", country: "China", lon: 116.41, lat: 39.90, population: 21500000 },
  { name: "Osaka", country: "Japan", lon: 135.50, lat: 34.69, population: 19100000 },
  { name: "New York", country: "United States", lon: -74.01, lat: 40.71, population: 18800000 },
  { name: "Karachi", country: "Pakistan", lon: 67.01, lat: 24.86, population: 16800000 },
  { name: "Chongqing", country: "China", lon: 106.55, lat: 29.56, population: 16300000 },
  { name: "Istanbul", country: "Turkey", lon: 28.98, lat: 41.01, population: 15600000 },
  { name: "Buenos Aires", country: "Argentina", lon: -58.38, lat: -34.60, population: 15400000 },
  { name: "Kolkata", country: "India", lon: 88.36, lat: 22.57, population: 15100000 },
  { name: "Lagos", country: "Nigeria", lon: 3.39, lat: 6.52, population: 14900000 },
  { name: "Kinshasa", country: "Dem. Rep. Congo", lon: 15.27, lat: -4.44, population: 14700000 },
  { name: "Manila", country: "Philippines", lon: 120.98, lat: 14.60, population: 14400000 },
  { name: "Guangzhou", country: "China", lon: 113.26, lat: 23.13, population: 13900000 },
  { name: "Tianjin", country: "China", lon: 117.19, lat: 39.34, population: 13600000 },
  { name: "Lahore", country: "Pakistan", lon: 74.35, lat: 31.56, population: 13500000 },
  { name: "Rio de Janeiro", country: "Brazil", lon: -43.17, lat: -22.91, population: 13500000 },
  { name: "Bangalore", country: "India", lon: 77.59, lat: 12.97, population: 13100000 },
  { name: "Shenzhen", country: "China", lon: 114.07, lat: 22.54, population: 12900000 },
  { name: "Moscow", country: "Russia", lon: 37.62, lat: 55.76, population: 12600000 },
  { name: "Chennai", country: "India", lon: 80.27, lat: 13.08, population: 11500000 },
  { name: "Bogotá", country: "Colombia", lon: -74.07, lat: 4.71, population: 11300000 },
  { name: "Paris", country: "France", lon: 2.35, lat: 48.86, population: 11100000 },
  { name: "Jakarta", country: "Indonesia", lon: 106.85, lat: -6.21, population: 10900000 },
  { name: "Lima", country: "Peru", lon: -77.04, lat: -12.05, population: 10700000 },
  { name: "Bangkok", country: "Thailand", lon: 100.50, lat: 13.76, population: 10600000 },
  { name: "Hyderabad", country: "India", lon: 78.47, lat: 17.38, population: 10300000 },
  { name: "Seoul", country: "South Korea", lon: 126.98, lat: 37.57, population: 9900000 },
  { name: "Nagoya", country: "Japan", lon: 136.91, lat: 35.18, population: 9600000 },
  { name: "London", country: "United Kingdom", lon: -0.13, lat: 51.51, population: 9500000 },
  { name: "Chengdu", country: "China", lon: 104.07, lat: 30.57, population: 9400000 },
  { name: "Nanjing", country: "China", lon: 118.78, lat: 32.06, population: 9200000 },
  { name: "Tehran", country: "Iran", lon: 51.39, lat: 35.69, population: 9100000 },
  { name: "Ho Chi Minh City", country: "Vietnam", lon: 106.63, lat: 10.82, population: 8900000 },
  { name: "Luanda", country: "Angola", lon: 13.23, lat: -8.84, population: 8800000 },
  { name: "Wuhan", country: "China", lon: 114.31, lat: 30.59, population: 8700000 },
  { name: "Ahmedabad", country: "India", lon: 72.57, lat: 23.02, population: 8400000 },
  { name: "Kuala Lumpur", country: "Malaysia", lon: 101.69, lat: 3.14, population: 8300000 },
  { name: "Xi'an", country: "China", lon: 108.94, lat: 34.26, population: 8100000 },
  { name: "Hong Kong", country: "China", lon: 114.17, lat: 22.28, population: 7500000 },
  { name: "Dongguan", country: "China", lon: 113.75, lat: 23.05, population: 7400000 },
  { name: "Hangzhou", country: "China", lon: 120.15, lat: 30.27, population: 7200000 },
  { name: "Foshan", country: "China", lon: 113.12, lat: 23.02, population: 7100000 },
  { name: "Shenyang", country: "China", lon: 123.43, lat: 41.80, population: 6900000 },
  { name: "Riyadh", country: "Saudi Arabia", lon: 46.68, lat: 24.69, population: 6800000 },
  { name: "Baghdad", country: "Iraq", lon: 44.37, lat: 33.31, population: 6700000 },
  { name: "Santiago", country: "Chile", lon: -70.67, lat: -33.45, population: 6600000 },
  { name: "Pune", country: "India", lon: 73.86, lat: 18.52, population: 6500000 },
  { name: "Madrid", country: "Spain", lon: -3.70, lat: 40.42, population: 6400000 },
  { name: "Nairobi", country: "Kenya", lon: 36.82, lat: -1.29, population: 5100000 },
  { name: "Houston", country: "United States", lon: -95.37, lat: 29.76, population: 6300000 },
  { name: "Dallas", country: "United States", lon: -96.80, lat: 32.78, population: 6100000 },
  { name: "Toronto", country: "Canada", lon: -79.38, lat: 43.65, population: 6000000 },
  { name: "Dar es Salaam", country: "Tanzania", lon: 39.27, lat: -6.79, population: 5900000 },
  { name: "Miami", country: "United States", lon: -80.19, lat: 25.76, population: 5800000 },
  { name: "Belo Horizonte", country: "Brazil", lon: -43.94, lat: -19.92, population: 5700000 },
  { name: "Singapore", country: "Singapore", lon: 103.82, lat: 1.35, population: 5600000 },
  { name: "Philadelphia", country: "United States", lon: -75.17, lat: 39.95, population: 5500000 },
  { name: "Atlanta", country: "United States", lon: -84.39, lat: 33.75, population: 5400000 },
  { name: "Fukuoka", country: "Japan", lon: 130.42, lat: 33.59, population: 5300000 },
  { name: "Khartoum", country: "Sudan", lon: 32.53, lat: 15.60, population: 5200000 },
  { name: "Barcelona", country: "Spain", lon: 2.17, lat: 41.39, population: 5100000 },
  { name: "Johannesburg", country: "South Africa", lon: 28.05, lat: -26.20, population: 5000000 },
  { name: "Saint Petersburg", country: "Russia", lon: 30.32, lat: 59.93, population: 4900000 },
  { name: "Qingdao", country: "China", lon: 120.38, lat: 36.07, population: 4800000 },
  { name: "Dalian", country: "China", lon: 121.62, lat: 38.91, population: 4700000 },
  { name: "Washington D.C.", country: "United States", lon: -77.04, lat: 38.91, population: 4600000 },
  { name: "Yangon", country: "Myanmar", lon: 96.17, lat: 16.87, population: 4500000 },
  { name: "Alexandria", country: "Egypt", lon: 29.92, lat: 31.20, population: 4400000 },
  { name: "Guadalajara", country: "Mexico", lon: -103.35, lat: 20.67, population: 4300000 },
  { name: "Ankara", country: "Turkey", lon: 32.87, lat: 39.93, population: 4200000 },
  { name: "Melbourne", country: "Australia", lon: 144.96, lat: -37.81, population: 4100000 },
  { name: "Sydney", country: "Australia", lon: 151.21, lat: -33.87, population: 4000000 },
];

/**
 * Fuzzy-match a query string against both COUNTRIES and CITIES.
 * Returns matches sorted by relevance (lower score = better match).
 * Score is based on substring position and length difference.
 */
export function findByName(query: string): SearchMatch[] {
  if (!query || query.length === 0) return [];

  const q = query.toLowerCase().trim();
  if (q.length === 0) return [];

  const results: SearchMatch[] = [];

  for (const country of COUNTRIES) {
    const score = fuzzyScore(q, country.name.toLowerCase());
    if (score >= 0) {
      results.push({ type: "country", name: country.name, score });
    }
  }

  for (const city of CITIES) {
    const score = fuzzyScore(q, city.name.toLowerCase());
    if (score >= 0) {
      results.push({ type: "city", name: city.name, score });
    }
  }

  results.sort((a, b) => a.score - b.score);
  return results;
}

/**
 * Simple fuzzy scoring: returns a non-negative score if the query is a
 * subsequence of the target. Lower score = better match.
 * Returns -1 if no match.
 *
 * Exact prefix match scores lowest (best), then substring match,
 * then subsequence match scored by gap distance.
 */
function fuzzyScore(query: string, target: string): number {
  // Exact prefix — best score
  if (target.startsWith(query)) {
    return target.length - query.length;
  }

  // Substring match — good score
  const subIdx = target.indexOf(query);
  if (subIdx >= 0) {
    return 100 + subIdx + (target.length - query.length);
  }

  // Subsequence match — scored by total gap
  let qi = 0;
  let gap = 0;
  for (let ti = 0; ti < target.length && qi < query.length; ti++) {
    if (target[ti] === query[qi]) {
      qi++;
    } else if (qi > 0) {
      gap++;
    }
  }

  if (qi === query.length) {
    return 200 + gap + (target.length - query.length);
  }

  return -1; // no match
}
