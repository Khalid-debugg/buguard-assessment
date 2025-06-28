'use client'

import PostSkeleton from '@/components/ui/Skeleton'
import { useGetAllPosts } from '@/hooks/useGetAllPosts'
import WarningModal from '@/components/ui/WarningModal'
import { useState, useEffect } from 'react'
import Pagination from '@/components/shared/Pagination'
import BlogPostCard from '@/components/shared/BlogPostCard'
import { Post, FetchedPost } from '@/types'

const AllBlogPosts = () => {
  const { data, isError, isPending } = useGetAllPosts()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6
  const transformPosts = (fetchedPosts: FetchedPost[]): Post[] => {
    const authors = ['Author1', 'Author2', 'Author3', 'Author4', 'Author5']
    const images = [
      '/post-images/all-blog-posts/computer-setup.jpg',
      '/post-images/all-blog-posts/gallery.jpg',
      '/post-images/all-blog-posts/mountains.jpg',
      '/post-images/all-blog-posts/presentation.jpg',
      '/post-images/all-blog-posts/singing.jpg',
      '/post-images/all-blog-posts/studying.jpg',
    ]
    const badgeOptions = [
      { color: 'blue', title: 'Technology' },
      { color: 'green', title: 'Design' },
      { color: 'purple', title: 'Development' },
      { color: 'grey', title: 'Tutorial' },
      { color: 'red', title: 'News' },
    ]

    return fetchedPosts.map((post, index) => ({
      ...post,
      authorName: authors[index % authors.length],
      date: '1 Jan 2023',
      imageUrl: images[index % images.length],
      badges: [
        badgeOptions[index % badgeOptions.length],
        badgeOptions[(index + 1) % badgeOptions.length],
      ],
    }))
  }

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

  const transformedPosts = data ? transformPosts(data) : []
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentPosts = transformedPosts.slice(startIndex, endIndex)

  return (
    <div className="flex w-full flex-col gap-8 px-4 py-8 sm:px-0">
      <p className="text-xl font-semibold md:text-2xl">All blog posts</p>
      <div className="flex flex-wrap items-start justify-center gap-6">
        {currentPosts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
      <Pagination
        totalData={transformedPosts.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  )
}

export default AllBlogPosts
