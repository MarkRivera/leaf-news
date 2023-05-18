import { useState } from "react";

export enum Category {
  BUSINESS = 'business',
  ENTERTAINMENT = 'entertainment',
  GENERAL = 'general',
  HEALTH = 'health',
  SCIENCE = 'science',
  SPORTS = 'sports',
  TECHNOLOGY = 'technology'
}

export function useCategory() {
  const [category, setCategory] = useState<Category>(Category.GENERAL);
  return {
    category,
    setCategory
  }
}