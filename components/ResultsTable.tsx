"use client";

import { ResultTeam } from "@/lib/types";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUp, CheckCircle, Clock, XCircle } from "lucide-react";
import { Card } from "./ui/Card";

interface ResultsTableProps {
  results: ResultTeam[];
  sortOrder?: {
    field: "teamName" | "teamLeader" | "status";
    direction: "asc" | "desc";
  };
  onSort?: (field: "teamName" | "teamLeader" | "status") => void;
}

export function ResultsTable({
  results,
  sortOrder,
  onSort,
}: ResultsTableProps) {
  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case "selected for round 2":
        return <CheckCircle className="h-5 w-5 text-green-400" />;
      case "waitlisted":
        return <Clock className="h-5 w-5 text-amber-400" />;
      case "withdrawn":
        return <XCircle className="h-5 w-5 text-red-400" />;
      default:
        return null;
    }
  };

  const getStatusClass = (status: string) => {
    switch (status.toLowerCase()) {
      case "selected for round 2":
        return "text-green-400";
      case "waitlisted":
        return "text-amber-400";
      case "withdrawn":
        return "text-red-400";
      default:
        return "text-orange-200";
    }
  };

  const getSortIcon = (field: "teamName" | "teamLeader" | "status") => {
    if (sortOrder && sortOrder.field === field) {
      return sortOrder.direction === "asc" ? (
        <ArrowUp className="h-4 w-4 inline ml-1" />
      ) : (
        <ArrowDown className="h-4 w-4 inline ml-1" />
      );
    }
    return null;
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-orange-900/60 text-orange-100 font-mono">
            <th
              className="px-4 py-3 text-left rounded-tl-lg cursor-pointer hover:bg-orange-800/60 transition-colors w-1/3"
              onClick={() => onSort && onSort("teamName")}
            >
              <div className="flex items-center">
                Team Name
                {getSortIcon("teamName")}
              </div>
            </th>
            <th
              className="px-4 py-3 text-left cursor-pointer hover:bg-orange-800/60 transition-colors w-1/3"
              onClick={() => onSort && onSort("teamLeader")}
            >
              <div className="flex items-center">
                Team Leader
                {getSortIcon("teamLeader")}
              </div>
            </th>
            <th
              className="px-4 py-3 text-left rounded-tr-lg cursor-pointer hover:bg-orange-800/60 transition-colors w-1/3"
              onClick={() => onSort && onSort("status")}
            >
              <div className="flex items-center">
                Status
                {getSortIcon("status")}
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {results.length > 0 ? (
            results.map((team, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`${
                  index % 2 === 0 ? "bg-orange-900/30" : "bg-orange-900/20"
                } text-orange-200 hover:bg-orange-900/40 transition-colors font-mono`}
              >
                <td className="px-4 py-3 border-t border-orange-800/30 font-semibold text-orange-100">
                  {team.teamName}
                </td>
                <td className="px-4 py-3 border-t border-orange-800/30">
                  {team.teamLeader}
                </td>
                <td className="px-4 py-3 border-t border-orange-800/30">
                  <div className="flex items-center gap-2">
                    {getStatusIcon(team.status)}
                    <span className={getStatusClass(team.status)}>
                      {team.status}
                    </span>
                  </div>
                </td>
              </motion.tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="px-4 py-8 text-center text-orange-300">
                <Card className="bg-orange-900/20 border-orange-500/20 p-6 mx-auto max-w-md">
                  <p>No results match your search criteria.</p>
                </Card>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
