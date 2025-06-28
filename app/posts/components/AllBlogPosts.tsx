'use client'

import PostSkeleton from '@/components/ui/Skeleton'
import { useGetPosts } from '@/hooks/useGetAllPosts'
import WarningModal from '@/components/ui/WarningModal'
import { useState, useEffect } from 'react'
import Pagination from '@/components/shared/Pagination'
import BlogPostCard from '@/components/shared/BlogPostCard'
import { Post, FetchedPost } from '@/types'

const AllBlogPosts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6
  const { data, isError, isPending } = useGetPosts(currentPage, itemsPerPage)

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

    const getRandomElement = (array: string[]) => {
      return array[Math.floor(Math.random() * array.length)]
    }

    const getRandomBadges = (maxCount: number = 3) => {
      const shuffled = [...badgeOptions].sort(() => 0.5 - Math.random())
      const count = Math.floor(Math.random() * maxCount) + 1
      return shuffled.slice(0, count)
    }

    return fetchedPosts.map((post) => ({
      ...post,
      authorName: getRandomElement(authors),
      date: '1 Jan 2023',
      imageUrl: getRandomElement(images),
      badges: getRandomBadges(3),
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

  const transformedPosts = data ? transformPosts(data as FetchedPost[]) : []

  return (
    <div className="flex w-full flex-col gap-8 px-4 py-8 sm:px-0">
      <p className="text-xl font-semibold md:text-2xl">All blog posts</p>
      <div className="flex flex-wrap items-start justify-center gap-6">
        {transformedPosts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
      <Pagination
        totalData={100} 
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  )
}

export default AllBlogPosts
