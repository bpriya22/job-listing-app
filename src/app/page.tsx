"use client";

import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import JobCard from "@/components/Jobcard";
import { jobs as JOBS } from "@/data/job";

export default function HomePage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return JOBS;
    return JOBS.filter((j) => {
      const hay = (
        j.title + " " + j.company + " " + j.location + " " + j.tags.join(" ")
      ).toLowerCase();
      return hay.includes(q);
    });
  }, [query]);

  return (
    <div className="min-h-dvh bg-white">
      <Navbar query={query} onChange={setQuery} />

      <main className="mx-auto max-w-6xl px-4 py-6">
        <div className="mb-4 text-sm text-gray-600">
          Showing <span className="font-medium">{filtered.length}</span> of {JOBS.length} jobs
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </main>
    </div>
  );
}
