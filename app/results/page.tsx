"use client"
import React, { useState, useRef, useEffect } from "react"
import SandParticles from "@/components/SandParticles"
import { ResultsTable } from "@/components/ResultsTable"
import { resultsData } from "@/lib/data"
import { ArrowDownUp, CheckCircle, ChevronDown, Clock, Filter, Search, X } from "lucide-react"
import { Button } from "@/components/ui/Button"

export default function Results() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<string | null>(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [sortOrder, setSortOrder] = useState<{
    field: "teamName" | "teamLeader" | "status";
    direction: "asc" | "desc";
  }>({ field: "teamName", direction: "asc" });

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

  // console.log("Filtered Results:", filteredResults);

  // Sort results based on current sort order
  const sortedResults = [...filteredResults].sort((a, b) => {
    const fieldA = a[sortOrder.field].toLowerCase()
    const fieldB = b[sortOrder.field].toLowerCase()

    // Custom sort order for status: Selected > Waitlisted > Withdrawn
    if (sortOrder.field === "status") {
      const statusOrder = { "selected for round 2": 1, waitlisted: 2, withdrawn: 3 };
      const orderA = statusOrder[fieldA as keyof typeof statusOrder] || 4;
      const orderB = statusOrder[fieldB as keyof typeof statusOrder] || 4;

      return sortOrder.direction === "asc" ? orderA - orderB : orderB - orderA
    }

    // Standard string comparison for other fields
    if (fieldA < fieldB) return sortOrder.direction === "asc" ? -1 : 1;
    if (fieldA > fieldB) return sortOrder.direction === "asc" ? 1 : -1;
    return 0;
  });

  // console.log("Sorted Results:", sortedResults);

  // Pagination logic
  const totalPages = Math.ceil(sortedResults.length / itemsPerPage);
  const paginatedResults = sortedResults.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // console.log("Paginated Results:", paginatedResults);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Toggle sort order for a field
  const toggleSort = (field: "teamName" | "teamLeader" | "status") => {
    setSortOrder({
      field,
      direction: sortOrder.field === field && sortOrder.direction === "asc" ? "desc" : "asc",
    })
  }

  return (
    <div className="min-h-[100vh] bg-gradient-to-b from-orange-950 via-orange-800 to-orange-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto pt-32 px-4">
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          Round 1 Results
        </h1>

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

        {/* Pagination Controls */}
        <div className="flex justify-center items-center gap-2 mb-4 -mt-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="bg-orange-900/40 border-orange-500/20 text-orange-100 hover:bg-orange-800/60 disabled:opacity-50"
          >
            Previous
          </Button>
          {Array.from({ length: totalPages }, (_, index) => (
            <Button
              key={index + 1}
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? "bg-orange-600 hover:bg-orange-700 text-white"
                : "bg-orange-900/40 border-orange-500/20 text-orange-100 hover:bg-orange-800/60"}
            >
              {index + 1}
            </Button>
          ))}
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="bg-orange-900/40 border-orange-500/20 text-orange-100 hover:bg-orange-800/60 disabled:opacity-50"
          >
            Next
          </Button>
        </div>
      </div>

      <div className="fixed inset-0 pointer-events-none z-50">
        <SandParticles />
      </div>
    </div>
  )
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
    case 'selected for round 2':
      return <CheckCircle className="h-4 w-4 text-green-400" />;
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
    case 'selected for round 2':
      return "text-green-400";
    case "waitlisted":
      return "text-amber-400"
    case "withdrawn":
      return "text-red-400"
    default:
      return "text-orange-200"
  }
}

