import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/60 dark:bg-neutral-950/60 border-b border-neutral-200/60 dark:border-neutral-800/60">
      <nav className="container-nice flex items-center justify-between py-3">
        <Link href="/" className="font-semibold text-lg">Ibrahim.dev</Link>
        <div className="flex items-center gap-3">
          <Link href="/projects" className="px-3 py-1.5 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-900 transition">Projects</Link>
          <Link href="/about" className="px-3 py-1.5 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-900 transition">About</Link>
          <Link href="/contact" className="px-3 py-1.5 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-900 transition">Contact</Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
