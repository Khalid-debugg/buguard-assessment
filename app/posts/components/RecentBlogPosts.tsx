'use client'

import { useGetPosts } from '@/hooks/useGetAllPosts'
import { useEffect, useState } from 'react'
import PostSkeleton from '@/components/ui/Skeleton'
import WarningModal from '@/components/ui/WarningModal'
import VerticalBlogPost from '@/components/shared/VerticalBlogPost'
import HorizontalBlogPost from '@/components/shared/HorizontalBlogPost'
import RecentBlogPostCard from '@/components/shared/RecentBlogPostCard'

const images = [
  '/post-images/recent-blog-posts/ux-review-presentation.jpg',
  '/post-images/recent-blog-posts/migrating-to-linear.jpg',
  '/post-images/recent-blog-posts/api-stack.jpg',
  '/post-images/recent-blog-posts/grid-system.jpg',
]

const RecentBlogPosts = () => {
  const {data, isPending, isError} = useGetPosts(1, 4);
  const [isModalOpen, setIsModalOpen] = useState(false)
  useEffect(() => {
    if (isError) {
      setIsModalOpen(true)
    }
  }, [isError])
  if (isPending) {
    return <PostSkeleton />
  }
  if (isError) {
    return (
      <WarningModal
        title="Error happened please try again"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    )
  }
  return (
    <div className="flex w-full flex-col gap-8 px-4 py-8 sm:px-0">
      <p className="text-xl font-semibold md:text-2xl">Recent blog posts</p>
      <div className="flex flex-col gap-8 md:flex-row">
        {data && <VerticalBlogPost post={data[0]} imageUrl={images[0]}/>}
        <div className="flex flex-1 flex-col gap-8">
          {data && data.slice(1,3).map((post, idx) => <RecentBlogPostCard post={post} imageUrl={images[idx + 1]} key={post.id}/>)}
        </div>
      </div>
      {data && <HorizontalBlogPost post={data[3]} imageUrl={images[3]}/>}

    </div>
  )
}

export default RecentBlogPosts
