
import Image from "next/image"
import { Arrow } from "../ui/Icons"
import Badge from "../ui/Badge"
import { FetchedPost } from "@/types"
import Link from "next/link"
const VerticalBlogPost = ({post, imageUrl}: {post: FetchedPost, imageUrl: string}) => {
  return (
    <div className="flex flex-1 flex-col gap-4 md:gap-6">
          <div className="relative aspect-[16/6] w-full md:aspect-[592/228] overflow-hidden">
            <Image
              src={imageUrl}
              alt="multiple chairs"
              fill
              className="object-cover hover:scale-105 transition-all duration-300 ease-in-out"
            />
          </div>
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
           {post?.body}
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge color="purple" title="Design" />
            <Badge color="blue" title="Research" />
            <Badge color="red" title="Presentation" />
          </div>
        </div>  )
}

export default VerticalBlogPost