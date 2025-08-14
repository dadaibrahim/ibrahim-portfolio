import Link from "next/link";
import { site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 mt-16">
      <div className="container-nice py-10 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="opacity-80">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <div className="flex items-center gap-4 opacity-90">
          <Link href={site.social.github} className="hover:underline">GitHub</Link>
          <Link href={site.social.linkedin} className="hover:underline">LinkedIn</Link>
          <Link href={site.social.whatsapp} className="hover:underline">WhatsApp</Link>
        </div>
      </div>
    </footer>
  );
}
