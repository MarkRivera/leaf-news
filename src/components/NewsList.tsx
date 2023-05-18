import { Card, CardActionArea, CardMedia, CardContent, CardHeader, Box, Button, Typography } from "@mui/material";
import { Article, useNews } from "../hooks/useNews";
import { Link, useNavigate } from "react-router-dom";

import LoadingPage from "./Skeleton";
import Error from "./Error";
import { Country } from "../hooks/useCountry";

type NewsListProps = {
  country: Country;
  category?: string;
  searchTerms?: string[];
}

const NewsCard = ({ article }: { article: Article }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/story/${encodeURIComponent(article.title.replaceAll(" ", "-")).toLowerCase()}`, {
      state: article
    })
  }

  return (
    <Card sx={{
      maxWidth: 450,
      margin: "1rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    }}>
      <CardActionArea onClick={handleClick} >
        <CardHeader
          title={
            <Typography variant="h6" component="h6">
              {article.title.length > 100 ? article.title.slice(0, 100) + "..." : article.title}
            </Typography>
          }
          disableTypography
          sx={{
            maxHeight: "128px",
            minHeight: "128px",
          }}
        />
        <CardMedia src={article.urlToImage || "https://picsum.photos/1600/900"} alt={article.title} component="img" sx={{ maxHeight: "250px" }} />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {article.description || "No description given. Please click on More... to read the full article."}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Box sx={{
        display: "flex",
        justifyContent: "flex-end",
        pr: "1rem",
        mb: "1rem"
      }}>
        <Button sx={{
          display: "inline-block",
        }}>
          <Link to={`/story/${encodeURIComponent(article.title.replaceAll(" ", "-")).toLowerCase()}`} state={article}>
            More...
          </Link>
        </Button>
      </Box>
    </Card>
  )
}

const NewsList = ({ country, category, searchTerms }: NewsListProps) => {
  const { articles, isLoading, error } = useNews(country, category, searchTerms);

  if (isLoading) return <LoadingPage />
  if (error) return <Error />


  return (
    <Box sx={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
    }}>
      {
        articles.map(
          (article: Article, idx: number) => (
            <NewsCard key={`${article.title}__${idx}`} article={article} />
          )
        )
      }
    </Box>
  )
}

export default NewsList