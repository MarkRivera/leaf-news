import { Category } from "../hooks/useCategory";
import { Country } from "../hooks/useCountry";
import CategorySelect from "./CategorySelect";
import NewsList from "./NewsList";
import { Box, Typography } from "@mui/material";

type CategoryFeedProps = {
  country: Country;
  category: Category;
  setCategory: (category: Category) => void;
}

const CategoryFeed = ({ country, category, setCategory }: CategoryFeedProps) => {
  return (
    <>
      <Box sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}>
        <Typography variant="h6">Please Select a Category</Typography>
        <CategorySelect category={category} setCategory={setCategory} />
      </Box>
      <NewsList country={country} category={category} />
    </>
  )
}

export default CategoryFeed