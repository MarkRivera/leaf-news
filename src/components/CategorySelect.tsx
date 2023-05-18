import { Select, SelectChangeEvent, MenuItem } from "@mui/material"
import { Category } from "../hooks/useCategory"

type CategorySelectProps = {
  category: Category;
  setCategory: (category: Category) => void;
}

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const CategorySelect = ({ category, setCategory }: CategorySelectProps) => {
  const handleChange = (event: SelectChangeEvent<Category | null>) => {
    event.preventDefault();
    setCategory(event.target.value as Category);
  }
  return (
    <Select sx={{
      width: "100%",
      alignSelf: "center",
    }}
      value={category}
      defaultValue={Category.GENERAL}
      onChange={handleChange}
    >
      {Object.values(Category).map((category) => (
        <MenuItem key={category} value={category}>{capitalizeFirstLetter(category)}</MenuItem>
      ))}
    </Select>
  )
}

export default CategorySelect