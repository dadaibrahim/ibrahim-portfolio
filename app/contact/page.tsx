import Section from "@/components/Section";
import { site } from "@/lib/data";

export const metadata = {
  title: "Contact — Ibrahim.dev",
};

/**
 * Uses formsubmit.co to send messages to email without server code.
 * Includes honeypot field for spam protection and better accessibility.
 */
export default function ContactPage() {
  return (
    <div className="space-y-10">
      <Section title="Get in Touch">
        <div className="grid lg:grid-cols-2 gap-6">
          <form
            className="card p-6 space-y-4"
            action={`https://formsubmit.co/${site.email}`}
            method="POST"
          >
            {/* Disable captcha */}
            <input type="hidden" name="_captcha" value="false" />

            {/* Honeypot for spam bots */}
            <input type="text" name="_honey" className="hidden" />

            {/* Email subject */}
            <input
              type="hidden"
              name="_subject"
              value="New message from Ibrahim.dev"
            />

            {/* Redirect after submit */}
            <input
              type="hidden"
              name="_next"
              value="https://dadaibrahim.vercel.app/contact?sent=1"
            />

            <label htmlFor="name" className="block">
              <span className="text-sm">Your Name</span>
              <input
                id="name"
                required
                name="name"
                className="mt-1 w-full rounded-xl border px-3 py-2 border-neutral-200 dark:border-neutral-800 bg-transparent"
                placeholder="John Doe"
              />
            </label>

            <label htmlFor="email" className="block">
              <span className="text-sm">Email</span>
              <input
                id="email"
                required
                type="email"
                name="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                className="mt-1 w-full rounded-xl border px-3 py-2 border-neutral-200 dark:border-neutral-800 bg-transparent"
                placeholder="you@example.com"
              />
            </label>

            <label htmlFor="message" className="block">
              <span className="text-sm">Message</span>
              <textarea
                id="message"
                required
                name="message"
                rows={6}
                minLength={10}
                className="mt-1 w-full rounded-xl border px-3 py-2 border-neutral-200 dark:border-neutral-800 bg-transparent"
                placeholder="Write your message here..."
              />
            </label>

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-xl px-4 py-2 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900"
            >
              Send Message
            </button>
          </form>

          <div className="card p-6 space-y-3">
            <p>
              <strong>Email:</strong> {site.email}
            </p>
            <p>
              <strong>Phone:</strong> {site.phone}
            </p>
            <p>
              <strong>Location:</strong> {site.location}
            </p>
            <div className="opacity-80 text-sm">
              <p>Prefer email? Click the button below:</p>
              <a
                href={`mailto:${site.email}`}
                className="inline-block mt-2 rounded-xl border px-4 py-2 border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900"
              >
                Compose Email
              </a>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
