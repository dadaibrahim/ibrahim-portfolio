import Section from "@/components/Section";
import { publications, site } from "@/lib/data";

export const metadata = {
  title: "About — Ibrahim.dev"
};

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <Section title="About Me">
        <div className="card p-6 space-y-4">
          <p>
            I’m an entry-level Software Configuration Engineer focused on build hygiene, versioning strategy,
            and reliable releases. I enjoy designing clean workflows that help teams move faster without
            breaking things.
          </p>
          <p>
            My toolbelt includes Python, Next.js, and Git—plus an obsession with readable commits and
            automated checks. I’m currently based in {site.location} and open to opportunities in Bengaluru.
          </p>
        </div>
      </Section>

      <Section title="Publications">
        <div className="grid gap-4">
          {publications.map((p) => (
            <div className="card p-5" key={p.title}>
              <h3 className="text-lg">{p.title}</h3>
              <p className="opacity-80">{p.venue}</p>
              <p className="opacity-90 mt-2">{p.summary}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
