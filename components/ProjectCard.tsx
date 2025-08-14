import Link from "next/link";
import Badge from "./Badge";
import type { Project } from "@/lib/data";
import { ExternalLink } from "lucide-react";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="card p-5">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg">{project.name}</h3>
        {project.repo || project.link ? (
          <div className="flex gap-2">
            {project.repo && (
              <Link href={project.repo} className="text-sm inline-flex items-center gap-1 hover:underline">
                Repo <ExternalLink size={14} />
              </Link>
            )}
            {project.link && (
              <Link href={project.link} className="text-sm inline-flex items-center gap-1 hover:underline">
                Live <ExternalLink size={14} />
              </Link>
            )}
          </div>
        ) : null}
      </div>
      <p className="mt-2 opacity-90">{project.description}</p>
      {project.highlights?.length ? (
        <ul className="list-disc pl-6 mt-3 space-y-1 opacity-90">
          {project.highlights.map((h, i) => <li key={i}>{h}</li>)}
        </ul>
      ) : null}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((s) => <Badge key={s}>{s}</Badge>)}
      </div>
    </div>
  );
}
