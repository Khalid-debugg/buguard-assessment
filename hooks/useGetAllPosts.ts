import { Post, UseGetAllPostsResult } from '@/types'
import { useEffect, useState } from 'react'

const API_URL = 'https://jsonplaceholder.typicode.com/posts'

export function useGetAllPosts(): UseGetAllPostsResult {
  const [data, setData] = useState<Post[] | null>(null)
  const [isError, setIsError] = useState(false)
  const [isPending, setIsPending] = useState(true)

  useEffect(() => {
    setIsPending(true)
    setIsError(false)
    fetch(API_URL)
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
  }, [])

  return { data, isError, isPending }
}
