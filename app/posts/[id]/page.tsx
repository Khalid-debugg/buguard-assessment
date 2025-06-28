'use client'
import { useParams } from 'next/navigation'
import { useGetPostById } from '@/hooks/useGetPostById'
import PostSkeleton from '@/components/ui/Skeleton'
import WarningModal from '@/components/ui/WarningModal'
import { useEffect, useState } from 'react'

const Post = () => {
  const { id } = useParams()
  const { data, isError, isPending } = useGetPostById(id)
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
  if (!data) return <div>No post found</div>

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  )
}

export default Post
