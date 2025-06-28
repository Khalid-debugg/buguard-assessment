import Image from "next/image"
import { Arrow } from "../ui/Icons"
import Badge from "../ui/Badge"
import { FetchedPost } from "@/types"
import Link from "next/link"
const HorizontalBlogPost = ({post,imageUrl}: {post: FetchedPost, imageUrl: string}) => {
  return (
    <div className="mt-8 flex w-full flex-col gap-6 md:flex-row md:gap-8">
    <div className="relative aspect-[592/246] w-full min-w-36 flex-1 md:w-1/2 overflow-hidden">
      <Image
        src={imageUrl}
        alt="landing page"
        fill
        className="object-cover object-top hover:scale-105 transition-all duration-300 ease-in-out"
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
       {post.body}
      </p>
      <div className="flex flex-wrap gap-2">
        <Badge color="purple" title="Design" />
        <Badge color="red" title="Interface" />
      </div>
    </div>
  </div>  )
}

export default HorizontalBlogPost