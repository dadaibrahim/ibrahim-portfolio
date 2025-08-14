import { Github, Linkedin, Phone, Mail } from "lucide-react";
import { site } from "@/lib/data";

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900">
        <Mail size={16} /> Email
      </a>
      <a href={`tel:${site.phone.replace(" ", "")}`} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900">
        <Phone size={16} /> Call
      </a>
      <a href={site.social.github} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900">
        <Github size={16} /> GitHub
      </a>
      <a href={site.social.linkedin} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900">
        <Linkedin size={16} /> LinkedIn
      </a>
    </div>
  );
}
