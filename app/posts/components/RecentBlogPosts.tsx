import Badge from '@/components/ui/Badge'
import Image from 'next/image'
import { Arrow } from '@/components/ui/Icons'

const RecentBlogPosts = () => {
  return (
    <div className="flex w-full flex-col gap-8 px-4 py-8 sm:px-0">
      <p className="text-xl font-semibold md:text-2xl">Recent blog posts</p>
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="flex flex-1 flex-col gap-4 md:gap-6">
          <div className="relative aspect-[16/6] w-full md:aspect-[592/228]">
            <Image
              src="/post-images/recent-blog-posts/ux-review-presentation.jpg"
              alt="multiple chairs"
              fill
              priority
              className="object-cover"
            />
          </div>
          <p className="text-sm font-semibold text-title md:text-base">
            Olivia Rhye • 1 Jan 2023
          </p>
          <div className="flex items-center justify-between">
            <p className="text-lg font-semibold md:text-2xl">
              UX review presentations
            </p>
            <Arrow />
          </div>
          <p className="text-sm text-secondary md:text-base dark:text-secondary-dark">
            How do you create compelling presentations that wow your colleagues
            and impress your managers?
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge color="purple" title="Design" />
            <Badge color="blue" title="Research" />
            <Badge color="red" title="Presentation" />
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-8">
          <div className="flex flex-col gap-4 sm:flex-row md:gap-6">
            <div className="relative aspect-[16/10] w-full min-w-36 flex-1 sm:w-1/2 md:aspect-[320/200]">
              <Image
                src="/post-images/recent-blog-posts/migrating-to-linear.jpg"
                alt="meeting"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-1 flex-col gap-4 md:gap-6">
              <p className="text-sm font-semibold text-title md:text-base">
                Olivia Rhye • 1 Jan 2023
              </p>
              <p className="text-lg font-semibold md:text-2xl">
                Migrating to Linear 101{' '}
              </p>
              <p className="text-sm text-secondary md:text-base dark:text-secondary-dark">
                Linear helps streamline software projects, sprints, tasks, and
                bug tracking. Here&apos;s how to get...
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge color="blue" title="Design" />
                <Badge color="red" title="Research" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row md:gap-6">
            <div className="relative aspect-[16/10] w-full min-w-36 flex-1 sm:w-1/2 md:aspect-[320/200]">
              <Image
                src="/post-images/recent-blog-posts/api-stack.jpg"
                alt="computer setup"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-1 flex-col gap-4 md:gap-6">
              <p className="text-sm font-semibold text-title md:text-base">
                Olivia Rhye • 1 Jan 2023
              </p>
              <p className="text-lg font-semibold md:text-2xl">
                Building your API Stack
              </p>
              <p className="text-sm text-secondary md:text-base dark:text-secondary-dark">
                The rise of RESTful APIs has been met by a rise in tools for
                creating, testing, and manag...
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge color="green" title="Design" />
                <Badge color="red" title="Research" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 flex w-full flex-col gap-6 md:flex-row md:gap-8">
        <div className="relative aspect-[592/246] w-full min-w-36 flex-1 md:w-1/2">
          <Image
            src="/post-images/recent-blog-posts/grid-system.jpg"
            alt="landing page"
            fill
            className="object-cover object-top"
          />
        </div>
        <div className="flex flex-1 flex-col gap-4 md:gap-6">
          <p className="text-sm font-semibold text-title md:text-base">
            Olivia Rhye • 1 Jan 2023
          </p>
          <div className="flex items-center justify-between">
            <p className="text-lg font-semibold md:text-2xl">
              Grid system for better Design User Interface
            </p>
            <Arrow />
          </div>
          <p className="text-sm text-secondary md:text-base dark:text-secondary-dark">
            A grid system is a design tool used to arrange content on a webpage.
            It is a series of vertical and horizontal lines that create a matrix
            of intersecting points, which can be used to align and organize page
            elements. Grid systems are used to create a consistent look and feel
            across a website, and can help to make the layout more visually
            appealing and easier to navigate.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge color="purple" title="Design" />
            <Badge color="red" title="Interface" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default RecentBlogPosts
