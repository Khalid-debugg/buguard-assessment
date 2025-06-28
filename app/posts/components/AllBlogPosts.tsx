'use client'

import PostSkeleton from '@/components/ui/Skeleton'
import { useGetAllPosts } from '@/hooks/useGetAllPosts'
import WarningModal from '@/components/ui/WarningModal'
import { useState, useEffect } from 'react'
import Pagination from '@/components/shared/Pagination'

const AllBlogPosts = () => {
  const { isError, isPending } = useGetAllPosts()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(3)

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
        title="This is a warning message"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    )
  }
  return (
    <div className="flex w-full flex-col gap-8 px-4 py-8 sm:px-0">
      <p className="text-xl font-semibold md:text-2xl">All blog posts</p>
      <Pagination
        totalData={100}
        itemsPerPage={6}
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  )
}

export default AllBlogPosts
