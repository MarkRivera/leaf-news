import { useState } from "react";

export function useSearch() {
  const [searchTerms, setSearchTerms] = useState<string[]>([])

  const addSearchTerm = (term: string) => {
    // Separate the search terms by commas
    const terms = term.split(',').map(term => term.trim().toLowerCase());

    // Remove any empty terms
    const filteredTerms = terms.filter(term => term !== '')

    // Add the terms to the search terms
    setSearchTerms(prev => [...prev, ...filteredTerms])
  }

  const removeSearchTerm = (term: string) => {
    setSearchTerms(prev => prev.filter(t => t !== term))
  }

  return {
    searchTerms,
    addSearchTerm,
    removeSearchTerm
  }
}