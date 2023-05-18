import { Country } from "../hooks/useCountry";
import { Box, Chip, FormControl, InputLabel, OutlinedInput, InputAdornment, FormHelperText } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import NewsList from "./NewsList";

type SearchFeedProps = {
  searchTerms: string[];
  addSearchTerm: (searchTerm: string) => void;
  removeSearchTerm: (searchTerm: string) => void;
  country: Country;
}

const TermDisplay = ({ searchTerms, removeSearchTerm }: { searchTerms: string[], removeSearchTerm: (searchTerm: string) => void }) => {
  const handleDelete = (term: string) => {
    removeSearchTerm(term)
  }
  return (
    <Box sx={{ mb: "1rem" }}>
      {searchTerms.map((term, idx) => (
        <Chip key={idx} label={term} variant="outlined" onDelete={() => handleDelete(term)} />
      ))}
    </Box>
  )
};

const TermInput = ({ addSearchTerm }: { addSearchTerm: (searchTerm: string) => void }) => {
  return (
    <FormControl sx={{
      width: "100%",
      mb: "1rem"
    }}>
      <InputLabel htmlFor="search-term">Search</InputLabel>
      <OutlinedInput
        id="search-term"
        label="Search"
        endAdornment={
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        }
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addSearchTerm(e.currentTarget.value)
            e.currentTarget.value = ""
          }
        }}
      />
      <FormHelperText>Seperate terms with commas</FormHelperText>
    </FormControl>
  )
}

const SearchFeed = ({
  searchTerms,
  addSearchTerm,
  removeSearchTerm,
  country
}: SearchFeedProps) => {


  return (
    <>
      <TermInput addSearchTerm={addSearchTerm} />
      <TermDisplay searchTerms={searchTerms} removeSearchTerm={removeSearchTerm} />
      <NewsList country={country} searchTerms={searchTerms} />
    </>
  )
}

export default SearchFeed