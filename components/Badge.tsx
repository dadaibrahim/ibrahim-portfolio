import { ReactNode } from "react";

export default function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block text-xs rounded-full px-2.5 py-1 border border-neutral-200 dark:border-neutral-800">
      {children}
    </span>
  );
}
