'use client'
import { useParams } from 'next/navigation'
import { useGetPostById } from '@/hooks/useGetPostById'
import PostSkeleton from '@/components/ui/Skeleton'
import WarningModal from '@/components/ui/WarningModal'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import DetailedBlog from './DetailedBlog'
const Post = () => {
  const { id } = useParams()
  const { data: post, isError, isPending } = useGetPostById(id)
  const [isModalOpen, setIsModalOpen] = useState(false)
  useEffect(() => {
    if (isError) {
      setIsModalOpen(true)
    }
  }, [isError])
  if (isPending) return <PostSkeleton />
  if (isError) {
    return (
      <WarningModal
        title="Error happened please try again"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    )
  }
  if (!post) return <div>No post found</div>

  return (
    <div className="flex flex-col gap-8 p-8">
      <p className="text-sm font-semibold text-title md:text-base">
        Sunday , 1 Jan 2023
      </p>
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <div className="relative aspect-[1152/426] w-full">
        <Image
          src={'/post-images/detailed-blog-post/grid-system.jpg'}
          alt="Grid system"
          fill
          className="object-cover object-top"
        />
      </div>
      <p className="text-secondary dark:text-secondary-dark">{post.body}</p>
      <DetailedBlog />
    </div>
  )
}

export default Post
