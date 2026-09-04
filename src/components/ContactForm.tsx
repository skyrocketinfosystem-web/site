'use client';

import { useState } from 'react';
import { site } from '@/content/site';
import { services } from '@/content/services';
import { Arrow } from './ui';

// Web3Forms takes a POST and emails the result. No backend, which is what a
// static export needs. Set NEXT_PUBLIC_WEB3FORMS_KEY to switch the form on.
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? '';
const ENDPOINT = 'https://api.web3forms.com/submit';

const budgets = [
  'Under US$25k',
  'US$25k – US$75k',
  'US$75k – US$150k',
  'US$150k – US$500k',
  'Over US$500k',
  'Not sure yet',
];

type State = { status: 'idle' | 'sending' | 'sent' | 'error'; message?: string };

export function ContactForm() {
  const [state, setState] = useState<State>({ status: 'idle' });

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setState({ status: 'sending' });

    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      const result = await response.json();
      if (!response.ok || result.success === false) {
        throw new Error(result.message || 'Submission failed.');
      }
      form.reset();
      setState({ status: 'sent' });
    } catch (error) {
      setState({
        status: 'error',
        message: error instanceof Error ? error.message : 'Something went wrong. Please email us directly.',
      });
    }
  }

  if (state.status === 'sent') {
    return (
      <div className="rounded-xl border border-line bg-white p-10 text-center card-shadow">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-tint text-brand">
          <svg viewBox="0 0 20 20" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 10.5 8 14.5 16 6" />
          </svg>
        </div>
        <h3 className="mt-5 text-xl font-bold">Message received</h3>
        <p className="mt-3 text-muted">
          Thanks for getting in touch. We read every enquiry ourselves and reply within one working day.
        </p>
        <button
          type="button"
          onClick={() => setState({ status: 'idle' })}
          className="mt-6 text-sm font-semibold text-brand hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-xl border border-line bg-white p-6 card-shadow sm:p-8">
      <input type="hidden" name="access_key" value={ACCESS_KEY} />
      <input type="hidden" name="subject" value="New enquiry — Skyrocket InfoSystem website" />
      <input type="hidden" name="from_name" value="Skyrocket InfoSystem website" />
      {/* Honeypot: bots fill this, humans never see it. */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      {!ACCESS_KEY ? (
        <p className="mb-7 rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          <strong className="font-semibold">Setup required:</strong> add{' '}
          <code className="rounded bg-amber-100 px-1">NEXT_PUBLIC_WEB3FORMS_KEY</code> to your environment to enable
          sending. Until then, email{' '}
          <a href={`mailto:${site.email}`} className="underline">
            {site.email}
          </a>
          .
        </p>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" required autoComplete="name" />
        <Field label="Work email" name="email" type="email" required autoComplete="email" />
        <Field label="Company" name="company" autoComplete="organization" />
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" optional />

        <Select label="What do you need?" name="service" options={services.map((s) => s.title).concat('Something else')} />
        <Select label="Indicative budget" name="budget" options={budgets} />
      </div>

      <div className="mt-5">
        <Label htmlFor="message">Tell us about the project</Label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="What are you building, what problem does it solve, and when do you need it live?"
          className="w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-body transition placeholder:text-slate-400 focus:border-brand focus:ring-2 focus:ring-brand/15 focus:outline-none"
        />
      </div>

      {state.status === 'error' ? (
        <p role="alert" className="mt-5 rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-800">
          {state.message} You can also email us at{' '}
          <a href={`mailto:${site.email}`} className="underline">
            {site.email}
          </a>
          .
        </p>
      ) : null}

      <button
        type="submit"
        disabled={state.status === 'sending'}
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-6 py-3.5 font-semibold text-white card-shadow transition hover:bg-brand-deep disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {state.status === 'sending' ? 'Sending…' : 'Send enquiry'} <Arrow />
      </button>

      <p className="mt-4 text-xs text-muted">
        We use your details only to reply to this enquiry. See our{' '}
        <a href="/privacy/" className="underline hover:text-brand">
          privacy policy
        </a>
        .
      </p>
    </form>
  );
}

function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-head">
      {children}
    </label>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required,
  optional,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  optional?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <Label htmlFor={name}>
        {label}
        {optional ? <span className="ml-1 text-muted">(optional)</span> : null}
      </Label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-body transition placeholder:text-slate-400 focus:border-brand focus:ring-2 focus:ring-brand/15 focus:outline-none"
      />
    </div>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <select
        id={name}
        name={name}
        defaultValue=""
        className="w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-body transition focus:border-brand focus:ring-2 focus:ring-brand/15 focus:outline-none"
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
