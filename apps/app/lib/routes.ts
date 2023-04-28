export const routes = {
  HOME: "/",
  DATA_CATALOGUE: "/data-catalogue",
  DASHBOARD: "/dashboard",
  TRACKER_999: "/dashboard/999-tracker",
  BIRTHDAY_EXPLORER: "/dashboard/birthday-explorer",
  BLOOD_DONATION: "/dashboard/blood-donation",
  CAR_POPULARITY: "/dashboard/car-popularity",
  CIRCLE_OF_LIFE: "/dashboard/circle-of-life",
  CIVIL_SERVICE: "/dashboard/civil-service",
  CONSUMER_PRICES: "/dashboard/consumer-prices",
  COVID_19: "/dashboard/covid-19",
  COVID_VACCINATION: "/dashboard/covid-vaccination",
  CRIME: "/dashboard/crime",
  CURRENCY_IN_CIRCULATION: "/dashboard/currency-in-circulation",
  ELECTION_EXPLORER: "/dashboard/election-explorer",
  EXCHANGE_RATE: "/dashboard/exchange-rates",
  FIRE_RESCUE: "/dashboard/fire-and-rescue",
  FLOOD_WARNING: "/dashboard/flood-warning",
  GDP: "/dashboard/gdp",
  GOVERNMENT_SITE_TRACKER: "/dashboard/government-site-tracker",
  HOSPITAL_BED_UTILISATION: "/dashboard/hospital-bed-utilisation",
  IMMIGRATION: "/dashboard/immigration",
  INCOME_TAXATION: "/dashboard/income-taxation",
  INTEREST_RATES: "/dashboard/interest-rates",
  INTERNATIONAL_RESERVES: "/dashboard/international-reserves",
  INTERNET_PENETRATION: "/dashboard/internet-penetration",
  MONEY_SUPPLY: "/dashboard/money-supply",
  ORGAN_DONATION: "/dashboard/organ-donation",
  PEKA_B40: "/dashboard/peka-b40",
  PEOPLES_INCOME_INITIATIVE: "/dashboard/peoples-income-initiative",
  POVERTY: "/dashboard/poverty",
  PUBLIC_CONTRACTING: "/dashboard/public-contracting",
  PUBLIC_PENSION: "/dashboard/public-pension",
  PUBLIC_TRANSPORTATION: "/dashboard/public-transportation",
  RESERVE_MONEY: "/dashboard/reserve-money",
  RETIREMENT_READINESS: "/dashboard/retirement-readiness",
  SEKOLAHKU: "/dashboard/sekolahku",
  SOCIAL_SECURITY: "/dashboard/social-security",
  WEATHER_CLIMATE: "/dashboard/weather-and-climate",
  NAME_POPULARITY: "/dashboard/name-popularity",
} as const;

export const static_routes = Object.fromEntries(
  Object.entries(routes).filter(([key]) => ["DASHBOARD", "DATA_CATALOGUE"].includes(key))
);
