"use client";

import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import JobCard from "@/components/Jobcard";
import Filters from "@/components/Filters";
import { jobs as JOBS } from "@/data/job";

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({
    location: "",
    type: "",
    minSalary: ""
  });
  const [visibleCount, setVisibleCount] = useState(6); // For pagination

  const filtered = useMemo(() => {
    return JOBS.filter((j) => {
      const haystack =
        (j.title + j.company + j.location + j.tags.join(" ")).toLowerCase();
      const matchesQuery = haystack.includes(query.toLowerCase());

      const matchesLocation =
        !filters.location || j.location.includes(filters.location);

      const matchesType = !filters.type || j.type === filters.type;

      const matchesSalary =
        !filters.minSalary ||
        parseInt(j.salary?.replace(/\D/g, "") || "0") >=
          parseInt(filters.minSalary);

      return matchesQuery && matchesLocation && matchesType && matchesSalary;
    });
  }, [query, filters]);

  const visibleJobs = filtered.slice(0, visibleCount);

  return (
    <div className="min-h-dvh bg-white">
      <Navbar query={query} onChange={setQuery} />

      <main className="mx-auto max-w-6xl px-4 py-6 space-y-6">
        <Filters
          location={filters.location}
          type={filters.type}
          minSalary={filters.minSalary}
          onChange={setFilters}
        />

        <div className="mb-4 text-sm text-gray-600">
          Showing <span className="font-medium">{visibleJobs.length}</span> of{" "}
          {filtered.length} jobs
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        {visibleCount < filtered.length && (
          <div className="flex justify-center pt-6">
            <button
              onClick={() => setVisibleCount((c) => c + 3)}
              className="rounded-lg bg-black px-4 py-2 text-sm text-white hover:bg-gray-800"
            >
              Load More
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
