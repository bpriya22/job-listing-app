"use client";

type FiltersProps = {
  location: string;
  type: string;
  minSalary: string;
  onChange: (filters: { location: string; type: string; minSalary: string }) => void;
};

export default function Filters({ location, type, minSalary, onChange }: FiltersProps) {
  return (
    <div className="flex flex-wrap gap-4 rounded-xl border bg-gray-50 p-4 ">
      {/* Location */}
      <select
        value={location}
        onChange={(e) => onChange({ location: e.target.value, type, minSalary })}
        className="rounded-lg border px-3 py-2 text-sm "
      >
        <option value="">All Locations</option>
        <option value="Bengaluru">Bengaluru</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Chennai">Chennai</option>
        <option value="Pune">Pune</option>
        <option value="Remote">Remote</option>
      </select>

      {/* Job Type */}
      <select
        value={type}
        onChange={(e) => onChange({ location, type: e.target.value, minSalary })}
        className="rounded-lg border px-3 py-2 text-sm"
      >
        <option value="">All Types</option>
        <option value="Full-time">Full-time</option>
        <option value="Remote">Remote</option>
        <option value="Internship">Internship</option>
      </select>

      {/* Min Salary */}
      <select
        value={minSalary}
        onChange={(e) => onChange({ location, type, minSalary: e.target.value })}
        className="rounded-lg border px-3 py-2 text-sm"
      >
        <option value="">Any Salary</option>
        <option value="600000">₹6 LPA+</option>
        <option value="800000">₹8 LPA+</option>
        <option value="1000000">₹10 LPA+</option>
      </select>
    </div>
  );
}
