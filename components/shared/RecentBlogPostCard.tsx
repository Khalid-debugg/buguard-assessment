import { FetchedPost } from "@/types"
import Image from "next/image"
import Badge from "../ui/Badge"
import Link from "next/link"
import { Arrow } from "../ui/Icons"
const RecentBlogPostCard = ({post, imageUrl}:{post: FetchedPost, imageUrl: string
}) => {
  return (
<div className="flex flex-col gap-4 sm:flex-row md:gap-6">
            <div className="relative aspect-[16/10] w-full min-w-36 flex-1 sm:w-1/2 md:aspect-[320/200] overflow-hidden">
              <Image
                src={imageUrl}
                alt="meeting"
                fill
                className="object-cover hover:scale-105 transition-all duration-300 ease-in-out"
              />
            </div>
            <div className="flex flex-1 flex-col gap-4 md:gap-6">
              <p className="text-sm font-semibold text-title md:text-base">
                Olivia Rhye • 1 Jan 2023
              </p>
              <Link
        href={`/posts/${post.id}`}
        className="flex items-start justify-between hover:text-title"
      >
        <p className="line-clamp-2 text-lg font-semibold md:text-2xl">
          {post.title}
        </p>
        <Arrow className="mt-2 h-3 w-3 flex-shrink-0" />
      </Link>
              <p className="text-sm text-secondary md:text-base dark:text-secondary-dark">
                Linear helps streamline software projects, sprints, tasks, and
                bug tracking. Here&apos;s how to get...
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge color="blue" title="Design" />
                <Badge color="red" title="Research" />
              </div>
            </div>
          </div>  )
}

export default RecentBlogPostCard