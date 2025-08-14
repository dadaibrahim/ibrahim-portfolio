import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";

export const metadata = {
  title: "Projects — Ibrahim.dev"
};

export default function ProjectsPage() {
  return (
    <div className="space-y-10">
      <Section title="Selected Projects">
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((p) => <ProjectCard key={p.name} project={p} />)}
        </div>
      </Section>
    </div>
  );
}
