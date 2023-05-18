import { FormControl, Select, MenuItem } from "@mui/material";
import { countryList, Country, CountryProps } from "../hooks/useCountry";

export default function DropDown({ country, setCountry }: CountryProps) {
  const handleClick = (selectedCountry: Country) => {
    if (country === selectedCountry) return;
    setCountry(selectedCountry)
  }

  return (
    <FormControl size="small" variant='standard'>
      <Select
        labelId="country-select-label"
        id="country"
        value={country.code}
        label="Country"
      >
        {countryList.map((country) => (
          <MenuItem
            key={country.code}
            value={country.code}
            onClick={() => handleClick(country)}
          >
            {country.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
} 