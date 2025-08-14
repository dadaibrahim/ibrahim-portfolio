import { site, skills, education } from "@/lib/data";
import SocialLinks from "@/components/SocialLinks";
import Section from "@/components/Section";
import Badge from "@/components/Badge";

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="card p-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl">{site.name}</h1>
            <p className="mt-1 text-lg opacity-90">{site.title}</p>
            <p className="mt-2 opacity-80">{site.location}</p>
            <p className="mt-4 max-w-3xl opacity-90">{site.summary}</p>
          </div>
          <SocialLinks />
        </div>
      </section>

      <Section title="Skills">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="card p-5"><h3 className="font-medium mb-2">Languages</h3><div className="flex flex-wrap gap-2">{skills.languages.map(s => <Badge key={s}>{s}</Badge>)}</div></div>
          <div className="card p-5"><h3 className="font-medium mb-2">Version Control</h3><div className="flex flex-wrap gap-2">{skills.versionControl.map(s => <Badge key={s}>{s}</Badge>)}</div></div>
          <div className="card p-5"><h3 className="font-medium mb-2">Tools</h3><div className="flex flex-wrap gap-2">{skills.tools.map(s => <Badge key={s}>{s}</Badge>)}</div></div>
          <div className="card p-5"><h3 className="font-medium mb-2">SCM</h3><div className="flex flex-wrap gap-2">{skills.scm.map(s => <Badge key={s}>{s}</Badge>)}</div></div>
          <div className="card p-5"><h3 className="font-medium mb-2">Web</h3><div className="flex flex-wrap gap-2">{skills.web.map(s => <Badge key={s}>{s}</Badge>)}</div></div>
          <div className="card p-5"><h3 className="font-medium mb-2">Soft Skills</h3><div className="flex flex-wrap gap-2">{skills.soft.map(s => <Badge key={s}>{s}</Badge>)}</div></div>
        </div>
      </Section>

      <Section title="Education">
        <div className="grid gap-4 sm:grid-cols-2">
          {education.map((e) => (
            <div key={e.degree} className="card p-5">
              <h3 className="text-lg">{e.degree}</h3>
              <p className="opacity-90">{e.school} • {e.location}</p>
              <p className="opacity-70 mt-1">{e.year} • {e.meta}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
