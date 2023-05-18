import { AppBar, Box } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { CountryProps } from "../hooks/useCountry";
import DropDown from "./Dropdown";

const Layout = ({ country, setCountry }: CountryProps) => {
  return (
    <>
      <AppBar>
        <Box sx={{
          height: '3rem',
          p: '0 1rem',
          mb: '1rem',
          display: 'flex',
          position: "relative",
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: "1900px",
          width: "100%",
          m: "0 auto",
        }}>
          <Box>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit', marginRight: "1rem" }}>
              Top
            </Link>
            <Link to="/categories" style={{ textDecoration: 'none', color: 'inherit', marginRight: "1rem" }}>
              Categories
            </Link>
            <Link to="/search" style={{ textDecoration: 'none', color: 'inherit', marginRight: "1rem" }}>
              Search
            </Link>
          </Box>

          <DropDown country={country} setCountry={setCountry} />
        </Box>
      </AppBar>
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "1900px",
        m: "5rem auto",
        p: "0 1rem",
      }}>
        <Outlet />
      </Box>
    </>
  )
}

export default Layout