import { Job } from "@/types/job";
import Tag from "./Tag";

export default function JobCard({ job }: { job: Job }) {
  return (
    <article className="rounded-2xl border p-4 hover:shadow-sm transition">
      <div className="flex items-start gap-3">
        {/* Logo */}
        <div className="size-12 shrink-0 rounded-xl bg-gray-100 overflow-hidden flex items-center justify-center">
          {job.logoUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={job.logoUrl} alt={job.company} className="h-10 w-10 object-cover" />
          ) : (
            <span className="text-sm text-gray-500">{job.company[0]}</span>
          )}
        </div>

        {/* Main */}
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-semibold leading-tight">
            {job.title}
          </h3>
          <p className="text-sm text-gray-600">
            {job.company} • {job.location}
          </p>

          <div className="mt-2 flex flex-wrap gap-2">
            <Tag label={job.type} />
            {job.tags.map((t) => (
              <Tag key={t} label={t} />
            ))}
          </div>

          <div className="mt-3 flex items-center justify-between">
            <span className="text-sm font-medium">{job.salary ?? "—"}</span>
            <a
              href={`/#`} // replace with details page later
              className="text-sm underline underline-offset-4"
            >
              View details
            </a>
          </div>

          <p className="mt-2 text-xs text-gray-500">Posted on {job.postedAt}</p>
        </div>
      </div>
    </article>
  );
}
