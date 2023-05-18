import { useState } from "react";
export type Country = {
  code: string;
  name: string;
}

export type CountryProps = {
  country: Country;
  setCountry: (country: Country) => void;
}

export const countryList = [
  { code: "us", name: "United States" },
  { code: "gb", name: "United Kingdom" },
];


export function useCountry() {
  const [country, setCountry] = useState<Country>(countryList[0]);
  return { country, setCountry };
}