"use client"
import React, { useState, useRef, useEffect } from "react"
import SandParticles from "@/components/SandParticles"
import { ResultsTable } from "@/components/ResultsTable"
import { resultsData } from "@/lib/data"
import { ArrowDownUp, CheckCircle, ChevronDown, Clock, Filter, Search, X } from "lucide-react"
import { Button } from "@/components/ui/Button"
// import { performSearch } from "@/utils/searchUtils"

export default function Results() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<string | null>(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [sortOrder, setSortOrder] = useState<{
    field: "teamName" | "teamLeader" | "status";
    direction: "asc" | "desc";
  }>({ field: "status", direction: "asc" });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  // Get unique statuses from data
  const statuses = Array.from(new Set(resultsData.map((team) => team.status)))

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Filter results based on search term and status filter
  const filteredResults = resultsData.filter((team) => {
    const matchesSearch =
      team.teamName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      team.teamLeader.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === null || team.status.toLowerCase() === statusFilter.toLowerCase()

    return matchesSearch && matchesStatus;
  });

  // Sort results based on current sort order
  const sortedResults = [...filteredResults].sort((a, b) => {
    const fieldA = a[sortOrder.field].toLowerCase()
    const fieldB = b[sortOrder.field].toLowerCase()

    // Custom sort order for status: Selected > Accepted > Waitlisted > Withdrawn
    if (sortOrder.field === "status") {
      const statusOrder = { selected: 1, accepted: 2, waitlisted: 3, withdrawn: 4 };
      const orderA = statusOrder[fieldA as keyof typeof statusOrder] || 5;
      const orderB = statusOrder[fieldB as keyof typeof statusOrder] || 5;

      return sortOrder.direction === "asc" ? orderA - orderB : orderB - orderA
    }

    // Standard string comparison for other fields
    if (fieldA < fieldB) return sortOrder.direction === "asc" ? -1 : 1;
    if (fieldA > fieldB) return sortOrder.direction === "asc" ? 1 : -1;
    return 0;
  });

  // Pagination logic
  const totalPages = Math.ceil(sortedResults.length / itemsPerPage);
  const paginatedResults = sortedResults.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Remove the automatic scrolling to top
  };

  // Toggle sort order for a field
  const toggleSort = (field: "teamName" | "teamLeader" | "status") => {
    setSortOrder({
      field,
      direction: sortOrder.field === field && sortOrder.direction === "asc" ? "desc" : "asc",
    });
    setCurrentPage(1); // Reset to first page when sorting changes
  }

  // Function to generate page buttons with ellipsis for responsive pagination
  const renderPaginationButtons = () => {
    // For small number of pages, show all buttons
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <PaginationButton 
          key={page} 
          page={page} 
          currentPage={currentPage} 
          onClick={() => handlePageChange(page)} 
        />
      ));
    }

    // For many pages, show a responsive subset with ellipsis
    const buttons = [];
    
    // Always show first page
    buttons.push(
      <PaginationButton 
        key={1} 
        page={1} 
        currentPage={currentPage} 
        onClick={() => handlePageChange(1)} 
      />
    );

    // Calculate range of pages to show around current page
    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);
    
    // Add ellipsis if needed before middle pages
    if (startPage > 2) {
      buttons.push(
        <span key="ellipsis-1" className="px-2 text-orange-300">...</span>
      );
    }

    // Add middle pages
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <PaginationButton 
          key={i} 
          page={i} 
          currentPage={currentPage} 
          onClick={() => handlePageChange(i)} 
        />
      );
    }
    
    // Add ellipsis if needed after middle pages
    if (endPage < totalPages - 1) {
      buttons.push(
        <span key="ellipsis-2" className="px-2 text-orange-300">...</span>
      );
    }

    // Always show last page
    if (totalPages > 1) {
      buttons.push(
        <PaginationButton 
          key={totalPages} 
          page={totalPages} 
          currentPage={currentPage} 
          onClick={() => handlePageChange(totalPages)} 
        />
      );
    }

    return buttons;
  };

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, statusFilter]);

  return (
    <div className="min-h-[100vh] bg-gradient-to-b from-orange-950 via-orange-800 to-orange-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto pt-32 px-4">
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          Round 1 Results
        </h1>

        {/* Download Links Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8 bg-orange-900/40 border border-orange-500/20 rounded-lg p-4 shadow-lg backdrop-blur-sm">
          <div className="text-center sm:text-left flex-1">
            {/* <h2 className="text-lg font-semibold text-white mb-2">Important Documents</h2> */}
            <p className="text-orange-200 text-sm">Please download the following resources for Round 2</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mt-3 sm:mt-0">
            <a 
              href="/Rules_and_Guidelines.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-md transition-colors shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="12" y1="18" x2="12" y2="12"></line>
                <line x1="9" y1="15" x2="15" y2="15"></line>
              </svg>
              Rules Document
            </a>
            <a 
              href="/Round_2_ppt_template.pptx" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-md transition-colors shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                <polyline points="13 2 13 9 20 9"></polyline>
                <line x1="8" y1="16" x2="16" y2="16"></line>
                <line x1="8" y1="13" x2="14" y2="13"></line>
              </svg>
              PPT Template
            </a>
          </div>
        </div>

        {/* Search and Filter Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          {/* Search Bar with Status Filter */}
          <div className="relative w-full md:max-w-md">
            <div className="flex">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-orange-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search by team name or team leader..."
                  className="w-full pl-10 pr-4 py-2 bg-orange-900/40 border border-orange-500/20 rounded-l-lg text-orange-100 placeholder-orange-300/70 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Status Filter Dropdown Button */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`flex items-center justify-center px-3 py-2 bg-orange-900/60 border border-orange-500/20 rounded-r-lg text-orange-100 hover:bg-orange-800/60 transition-colors ${
                    statusFilter ? "ring-2 ring-orange-500/50" : ""
                  }`}
                >
                  <Filter className="h-5 w-5 mr-1" />
                  <span className="hidden sm:inline">Status</span>
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>

                {/* Status Filter Dropdown */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-1 w-48 bg-orange-900/90 border border-orange-500/20 rounded-lg shadow-lg z-10 backdrop-blur-sm">
                    <div className="p-2">
                      <button
                        onClick={() => {
                          setStatusFilter(null)
                          setIsDropdownOpen(false)
                        }}
                        className="w-full text-left px-3 py-2 text-orange-100 hover:bg-orange-800/60 rounded-md flex items-center justify-between"
                      >
                        <span>All</span>
                        {statusFilter === null && <Check className="h-4 w-4" />}
                      </button>

                      {statuses.map((status) => (
                        <button
                          key={status}
                          onClick={() => {
                            setStatusFilter(status)
                            setIsDropdownOpen(false)
                          }}
                          className="w-full text-left px-3 py-2 text-orange-100 hover:bg-orange-800/60 rounded-md flex items-center justify-between"
                        >
                          <div className="flex items-center">
                            {getStatusIcon(status)}
                            <span className={`ml-2 ${getStatusClass(status)}`}>{status}</span>
                          </div>
                          {statusFilter === status && <Check className="h-4 w-4" />}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Clear Filter Button (only shown when filter is active) */}
              {statusFilter && (
                <button
                  onClick={() => setStatusFilter(null)}
                  className="ml-2 flex items-center justify-center px-2 py-2 bg-orange-900/60 border border-orange-500/20 rounded-lg text-orange-100 hover:bg-orange-800/60 transition-colors"
                  title="Clear filter"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>

            {/* Active Filter Indicator */}
            {statusFilter && (
              <div className="mt-2 flex items-center">
                <span className="text-sm text-orange-300">Filtered by: </span>
                <span
                  className={`ml-2 text-sm px-2 py-0.5 rounded-full bg-orange-900/60 border border-orange-500/20 flex items-center ${getStatusClass(
                    statusFilter,
                  )}`}
                >
                  {getStatusIcon(statusFilter)}
                  <span className="ml-1">{statusFilter}</span>
                </span>
              </div>
            )}
          </div>

          {/* Sort Buttons */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-end">
            <Button
              variant="outline"
              size="sm"
              onClick={() => toggleSort("teamName")}
              className={`bg-orange-900/40 border-orange-500/20 text-orange-100 hover:bg-orange-800/60 ${
                sortOrder.field === "teamName" ? "ring-2 ring-orange-500/50" : ""
              }`}
            >
              <ArrowDownUp className="h-4 w-4 mr-1" />
              Team Name
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => toggleSort("teamLeader")}
              className={`bg-orange-900/40 border-orange-500/20 text-orange-100 hover:bg-orange-800/60 ${
                sortOrder.field === "teamLeader" ? "ring-2 ring-orange-500/50" : ""
              }`}
            >
              <ArrowDownUp className="h-4 w-4 mr-1" />
              Team Leader
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => toggleSort("status")}
              className={`bg-orange-900/40 border-orange-500/20 text-orange-100 hover:bg-orange-800/60 ${
                sortOrder.field === "status" ? "ring-2 ring-orange-500/50" : ""
              }`}
            >
              <ArrowDownUp className="h-4 w-4 mr-1" />
              Status
            </Button>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-4 text-orange-300 text-sm">
          Showing {paginatedResults.length} of {filteredResults.length} teams
        </div>

        {/* Results Table */}
        <div className="mb-16">
          <ResultsTable
            results={paginatedResults}
            sortOrder={sortOrder}
            onSort={toggleSort}
          />
        </div>

        {/* Pagination Controls - Responsive */}
        {totalPages > 1 && (
          <div className="flex flex-wrap justify-center items-center gap-2 mb-12 -mt-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="bg-orange-900/40 border-orange-500/20 text-orange-100 hover:bg-orange-800/60 disabled:opacity-50"
            >
              Previous
            </Button>
            
            {/* Responsive page number buttons */}
            <div className="hidden sm:flex items-center">
              {renderPaginationButtons()}
            </div>
            
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="bg-orange-900/40 border-orange-500/20 text-orange-100 hover:bg-orange-800/60 disabled:opacity-50"
            >
              Next
            </Button>
            {/* Mobile pagination indicator */}
            <div className="sm:hidden flex items-center">
              <span className="text-orange-200">
                Page {currentPage} of {totalPages}
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="fixed inset-0 pointer-events-none z-50">
        <SandParticles />
      </div>
    </div>
  )
}

// Pagination Button Component
function PaginationButton({ page, currentPage, onClick }: { page: number, currentPage: number, onClick: () => void }) {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={onClick}
      className={currentPage === page 
        ? "bg-orange-600 hover:bg-orange-700 text-white border-orange-500"
        : "bg-orange-900/40 border-orange-500/20 text-orange-100 hover:bg-orange-800/60"
      }
    >
      {page}
    </Button>
  );
}

// Helper components
function Check(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function getStatusIcon(status: string) {
  switch (status.toLowerCase()) {
    case 'selected':
      return <CheckCircle className="h-4 w-4 text-green-400" />;
    case 'accepted':
      return <CheckCircle className="h-4 w-4 text-blue-400" />;
    case "waitlisted":
      return <Clock className="h-4 w-4 text-amber-400" />
    case "withdrawn":
      return <X className="h-4 w-4 text-red-400" />
    default:
      return null
  }
}

function getStatusClass(status: string) {
  switch (status.toLowerCase()) {
    case 'selected':
      return "text-green-400";
    case 'accepted':
      return "text-blue-400";
    case "waitlisted":
      return "text-amber-400"
    case "withdrawn":
      return "text-red-400"
    default:
      return "text-orange-200"
  }
}

