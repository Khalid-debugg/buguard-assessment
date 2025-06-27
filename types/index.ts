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
export interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}
export interface BurgerMenuProps {
  toggleMenu: () => void
}
export interface UseGetAllPostsResult {
  data: Post[] | null
  isError: boolean
  isPending: boolean
}
export interface ThemeContextType {
  theme: 'light' | 'dark'
  toggleTheme: () => void
  mounted: boolean
}
