import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/60 dark:bg-neutral-950/60 border-b border-neutral-200/60 dark:border-neutral-800/60">
      <nav className="container-nice flex items-center justify-between py-3">
        <a href="/" className="font-semibold text-lg">Ibrahim.dev</a>
        <div className="flex items-center gap-3">
          <a href="/projects" className="px-3 py-1.5 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-900 transition">Projects</a>
          <a href="/about" className="px-3 py-1.5 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-900 transition">About</a>
          <a href="/contact" className="px-3 py-1.5 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-900 transition">Contact</a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
