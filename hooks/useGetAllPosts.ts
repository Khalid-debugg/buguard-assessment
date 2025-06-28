import { Post, UseGetPostsResult } from '@/types'
import { useEffect, useState } from 'react'

const API_URL = 'https://jsonplaceholder.typicode.com/posts'

export function useGetPosts(currentPage: number = 1, itemsPerPage: number = 4): UseGetPostsResult {
  const [data, setData] = useState<Post[] | null>(null)
  const [isError, setIsError] = useState(false)
  const [isPending, setIsPending] = useState(true)

  useEffect(() => {
    setIsPending(true)
    setIsError(false)
    
    const url = `${API_URL}?_page=${currentPage}&_limit=${itemsPerPage}`
    
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok')
        return res.json()
      })
      .then((json) => {
        setData(json)
        setIsPending(false)
      })
      .catch(() => {
        setIsError(true)
        setIsPending(false)
      })
  }, [currentPage, itemsPerPage])

  return { data, isError, isPending }
}
