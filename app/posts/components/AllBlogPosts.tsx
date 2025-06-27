'use client'

import PostSkeleton from '@/components/ui/Skeleton'
import { useGetAllPosts } from '@/hooks/useGetAllPosts'

const AllBlogPosts = () => {
  const { data, isError, isPending } = useGetAllPosts()
  if (isPending) {
    return <PostSkeleton />
  }
  return (
    <div className="flex w-full flex-col gap-8 px-4 py-8 sm:px-0">
      <p className="text-xl font-semibold md:text-2xl">All blog posts</p>
    </div>
  )
}

export default AllBlogPosts
