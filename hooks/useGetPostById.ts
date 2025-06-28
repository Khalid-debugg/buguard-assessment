import { FetchedPost, UseGetPostByIdResult } from '@/types'
import { ParamValue } from 'next/dist/server/request/params'
import { useEffect, useState } from 'react'

const API_URL = 'https://jsonplaceholder.typicode.com/posts'

export function useGetPostById(id: ParamValue): UseGetPostByIdResult {
  const [data, setData] = useState<FetchedPost | null>(null)
  const [isError, setIsError] = useState(false)
  const [isPending, setIsPending] = useState(true)

  useEffect(() => {
    if (!id) {
      setIsPending(false)
      return
    }

    setIsPending(true)
    setIsError(false)

    fetch(`${API_URL}/${id}`)
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
  }, [id])

  return { data, isError, isPending }
}
