import { jobs } from "@/data/job";
import { notFound } from "next/navigation";
import Link from "next/link";

type Props = { params: { id: string } };

export default function JobDetailsPage({ params }: Props) {
  const job = jobs.find((j) => j.id === params.id);

  if (!job) return notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Link href="/" className="mb-6 inline-block text-sm underline">
        ← Back to Jobs
      </Link>

      <div className="rounded-2xl border p-6">
        <h1 className="text-2xl font-semibold">{job.title}</h1>
        <p className="mt-1 text-gray-600">
          {job.company} • {job.location}
        </p>

        <p className="mt-2 text-sm font-medium">Salary: {job.salary ?? "—"}</p>
        <p className="mt-2 text-sm">Type: {job.type}</p>
        <p className="mt-2 text-xs text-gray-500">Posted at: {job.postedAt}</p>

        <div className="mt-6 space-y-3">
          <h2 className="font-medium">About the Job</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            This is a demo job description. You can extend it with actual API data.
            Showcase responsibilities, requirements, and company details here.
          </p>
        </div>

        <button className="mt-6 rounded-lg bg-black px-4 py-2 text-white hover:bg-gray-800">
          Apply Now
        </button>
      </div>
    </div>
  );
}
