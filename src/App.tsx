import './App.css'
import.meta.env.VITE_NEWS_API_KEY

import { CssBaseline, createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { themeOptions } from './theme';

import {
  Route,
  Routes,
} from "react-router-dom"

import Layout from './components/Layout';
import Stories from './components/Story';
import NotFound from './components/404';

import { useCountry } from './hooks/useCountry';
import { useSearch } from './hooks/useSearch';
import { useCategory } from './hooks/useCategory';
import TopNews from './components/TopNews';
import CategoryFeed from './components/CategoryNews';
import SearchFeed from './components/SearchFeed';

const theme = createTheme(themeOptions);

function App() {
  const { country, setCountry } = useCountry();
  const { searchTerms, addSearchTerm, removeSearchTerm } = useSearch();
  const { category, setCategory } = useCategory();

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <Routes>
          <Route path="/" element={<Layout country={country} setCountry={setCountry} />} >

            <Route
              index
              element={
                <TopNews country={country} />
              }
            />

            <Route path="/categories" element={
              <CategoryFeed country={country} category={category} setCategory={setCategory} />
            } />

            <Route path="/search" element={
              <SearchFeed country={country} searchTerms={searchTerms} addSearchTerm={addSearchTerm} removeSearchTerm={removeSearchTerm} />
            } />

            <Route path="/story/:title" element={<Stories />} />
            <Route path="/404" element={<NotFound />} />
          </Route>

        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
