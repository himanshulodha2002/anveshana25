/**
 * A utility function that handles search with filtering, sorting, and pagination
 * @param {Array} data - The original dataset
 * @param {Object} options - Search options
 * @param {string} options.searchTerm - The search term
 * @param {string} options.sortBy - Field to sort by
 * @param {boolean} options.sortDesc - Sort in descending order if true
 * @param {number} options.page - Current page number (1-based)
 * @param {number} options.itemsPerPage - Number of items per page
 * @returns {Object} - Object containing filtered, sorted, and paginated results
 */
export function performSearch(data, options) {
  const { 
    searchTerm = '', 
    sortBy = 'id', 
    sortDesc = false, 
    page = 1, 
    itemsPerPage = 10 
  } = options;
  
  // Step 1: Filter the results
  const filteredResults = searchTerm 
    ? data.filter(item => 
        Object.values(item).some(val => 
          String(val).toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    : [...data];
  
  // Step 2: Sort the filtered results
  const sortedResults = [...filteredResults].sort((a, b) => {
    if (a[sortBy] < b[sortBy]) return sortDesc ? 1 : -1;
    if (a[sortBy] > b[sortBy]) return sortDesc ? -1 : 1;
    return 0;
  });
  
  // Step 3: Paginate the sorted results
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedResults = sortedResults.slice(startIndex, endIndex);
  
  return {
    filteredResults,
    sortedResults,
    paginatedResults,
    totalItems: filteredResults.length,
    totalPages: Math.ceil(filteredResults.length / itemsPerPage)
  };
}
