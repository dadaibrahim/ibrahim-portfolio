import { site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 mt-16">
      <div className="container-nice py-10 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="opacity-80">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <div className="flex items-center gap-4 opacity-90">
          <a href={site.social.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
            GitHub
          </a>
          <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
            LinkedIn
          </a>
          <a href={site.social.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:underline">
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
