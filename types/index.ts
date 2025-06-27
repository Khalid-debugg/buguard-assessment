export interface FetchedPost {
  userId: number
  id: number
  title: string
  body: string
}
export interface Post extends FetchedPost {
  authorName: string
  date: string
  imageUrl: string
  badges: Badge[]
}
export interface Badge {
  color: string
  title: string
}
