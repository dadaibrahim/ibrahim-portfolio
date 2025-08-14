import Section from "@/components/Section";
import { site } from "@/lib/data";

export const metadata = {
  title: "Contact — Ibrahim.dev"
};

/**
 * Uses formsubmit.co to send messages to email without server code.
 * After you deploy, consider replacing with a custom /api/contact using your SMTP creds.
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
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New message from Ibrahim.dev" />
            <input type="hidden" name="_next" value="https://example.com/contact?sent=1" />
            <label className="block">
              <span className="text-sm">Your Name</span>
              <input required name="name" className="mt-1 w-full rounded-xl border px-3 py-2 border-neutral-200 dark:border-neutral-800 bg-transparent" />
            </label>
            <label className="block">
              <span className="text-sm">Email</span>
              <input required type="email" name="email" className="mt-1 w-full rounded-xl border px-3 py-2 border-neutral-200 dark:border-neutral-800 bg-transparent" />
            </label>
            <label className="block">
              <span className="text-sm">Message</span>
              <textarea required name="message" rows={6} className="mt-1 w-full rounded-xl border px-3 py-2 border-neutral-200 dark:border-neutral-800 bg-transparent" />
            </label>
            <button className="inline-flex items-center justify-center rounded-xl px-4 py-2 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900">
              Send Message
            </button>
          </form>

          <div className="card p-6 space-y-3">
            <p><strong>Email:</strong> {site.email}</p>
            <p><strong>Phone:</strong> {site.phone}</p>
            <p><strong>Location:</strong> {site.location}</p>
            <div className="opacity-80 text-sm">
              <p>Prefer email? Click the button below:</p>
              <a href={`mailto:${site.email}`} className="inline-block mt-2 rounded-xl border px-4 py-2 border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900">Compose Email</a>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
