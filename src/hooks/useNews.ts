import axios from "axios";
import { useEffect, useState } from "react";
import { Country } from "./useCountry";

export type Article = {
  source: {
    id?: string | null;
    name: string;
  }

  author?: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage?: string | null;
  publishedAt: string;
  content?: string | null;
}

export type NewsAPIResponse = {
  status: string;
  totalResults: number;
  articles: Article[];
}


function buildHeadlinesUrl(country: Country, category?: string | null) {
  const myUrl = new URL('https://newsapi.org/v2/top-headlines');
  myUrl.searchParams.append('country', country.code);

  if (category) {
    myUrl.searchParams.append('category', category);
  }

  myUrl.searchParams.append('apiKey', import.meta.env.VITE_NEWS_API_KEY);

  return myUrl.href;
}

function buildSearchUrl(searchTerms: string[]) {
  const myUrl = new URL('https://newsapi.org/v2/everything');
  myUrl.searchParams.append('q', searchTerms.join(' AND '));
  myUrl.searchParams.append('apiKey', import.meta.env.VITE_NEWS_API_KEY);

  return myUrl.href;
}

export function useNews(country: Country, category?: string | null, searchTerms?: string[]) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [articles, setArticles] = useState<Article[]>([]);

  const url = searchTerms && searchTerms.length > 0 ?
    buildSearchUrl(searchTerms) :
    buildHeadlinesUrl(country, category);

  useEffect(() => {
    axios.get(url)
      .then((res) => {
        setArticles(res.data.articles)
        setIsLoading(false)
      })
      .catch(() => {
        setIsLoading(false)
        setError(true)
      })
  }, [url])


  return { articles, isLoading, error }
}