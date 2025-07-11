import Image from 'next/image'
import { Arrow } from '../ui/Icons'
import Badge from '../ui/Badge'
import { Post } from '@/types'
import Link from 'next/link'

const BlogPostCard = ({ post }: { post: Post }) => {
  return (
    <div className="overflow- flex h-[476px] w-[384px] flex-col gap-4">
      <div className="relative aspect-[384/240] w-full overflow-hidden">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="object-cover object-top hover:scale-105 transition-all duration-300 ease-in-out"
        />
      </div>

      <p className="text-sm font-semibold text-title md:text-base">
        {post.authorName + ' • ' + post.date}
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
      <p className="text-sm text-secondary sm:line-clamp-2 md:text-base dark:text-secondary-dark">
        {post.body}
      </p>

      <div className="mt-auto flex flex-wrap gap-2">
        {post.badges.map((badge, idx) => (
          <Badge color={badge.color} title={badge.title} key={idx} />
        ))}
      </div>
    </div>
  )
}
export default BlogPostCard
