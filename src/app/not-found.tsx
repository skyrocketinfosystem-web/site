import { Button, Arrow } from '@/components/ui';

export default function NotFound() {
  return (
    <div className="wash flex min-h-[70vh] items-center justify-center px-5 pt-24">
      <div className="text-center">
        <p className="font-display text-7xl font-bold text-brand sm:text-8xl">404</p>
        <h1 className="mt-5 text-3xl font-bold sm:text-4xl">We could not find that page</h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-muted">
          The page has either moved or never existed. The links below should get you back on track.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/" size="lg">
            Back to home <Arrow />
          </Button>
          <Button href="/contact/" variant="secondary" size="lg">
            Contact us
          </Button>
        </div>
      </div>
    </div>
  );
}
