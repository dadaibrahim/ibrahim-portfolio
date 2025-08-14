import { ReactNode } from "react";

export default function Section({ title, children, id }: { title: string; children: ReactNode; id?: string }) {
  return (
    <section id={id} className="scroll-mt-24 space-y-4">
      <h2 className="text-2xl">{title}</h2>
      <div className="grid gap-4">{children}</div>
    </section>
  );
}
