'use client'
import { useParams } from 'next/navigation'

const Post = () => {
  const { id } = useParams()

  return <div>{id}</div>
}

export default Post
