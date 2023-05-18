import { Country } from "../hooks/useCountry";
import NewsList from "./NewsList"

type TopNewsProps = {
  country: Country;
}

const TopNews = ({ country }: TopNewsProps) => {
  return (
    <NewsList country={country} />
  )
}

export default TopNews