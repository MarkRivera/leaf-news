import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Paper, Typography, CardMedia } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Link } from 'react-router-dom';
import { Article } from '../hooks/useNews';

const Stories = () => {
  const location = useLocation();
  const article: Article = location.state;
  const navigate = useNavigate();

  useEffect(() => {
    // If article is undefined, redirect to 404 page
    if (!article) {
      navigate("/404", { replace: true })
    }
  }, [article, navigate])

  if (!article) {
    return null
  }

  return (
    <Paper elevation={4}
      sx={{
        p: "0 1rem",
        maxWidth: "800px",
        margin: "auto",
        wordWrap: "break-word",
      }}>
      <Typography
        variant='h6'
        component="h6"
        sx={{ wordBreak: "break-word", pt: "1rem", mb: "1rem" }}>
        {article.title}
      </Typography>

      <Typography
        variant='body2'
        sx={{ mb: "1rem" }}>
        {(article.author || "Unknown") + ", " + new Date(article.publishedAt).toLocaleDateString()}
      </Typography>

      <CardMedia
        src={article.urlToImage || "https://picsum.photos/1600/900"}
        alt={article.title}
        component="img"
        sx={{ mb: "0.5rem" }}
      />
      <Typography
        variant='body2'
        component="strong"
        sx={{ mb: "1rem", display: "inline-block" }}
      >
        Source:
      </Typography>
      {" "}
      <Link to={article.url}>
        {article.source.name}
      </Link>

      <Typography variant='body2' sx={{ pb: "1rem" }}>{article.content}</Typography>

      <Link to="/" style={{ display: "flex", alignItems: "center", paddingBottom: "1rem" }}>
        <ChevronLeftIcon sx={{ mr: "0.5rem" }} />
        <Typography variant='body2' component="span">Back to List</Typography>
      </Link>
    </Paper>
  )
}

export default Stories