import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center">
      <h1 className="w-full border-b border-t border-primary py-8 text-center text-[60px] font-bold sm:text-[150px] md:text-[220px] dark:border-primary-dark">
        404
      </h1>
      <div className="mt-8 space-y-4 text-center">
        <h2 className="text-2xl font-semibold text-primary dark:text-primary-dark">
          Page Not Found
        </h2>
        <p className="max-w-md text-lg text-primary/80 dark:text-primary-dark/80">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/posts"
          className="inline-block rounded-lg bg-primary px-6 py-3 font-medium text-background transition-colors hover:bg-primary/90 dark:bg-primary-dark dark:text-background-dark dark:hover:bg-primary-dark/90"
        >
          Back to Blog
        </Link>
      </div>
    </div>
  )
}
