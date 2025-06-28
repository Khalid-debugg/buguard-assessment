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
export interface UseGetPostsResult {
  data: Post[] | null
  isError: boolean
  isPending: boolean
}
export interface UseGetPostByIdResult {
  data: FetchedPost | null
  isError: boolean
  isPending: boolean
}
export interface ThemeContextType {
  theme: 'light' | 'dark'
  toggleTheme: () => void
  mounted: boolean
}
export interface WarningModalProps {
  title: string
  isOpen: boolean
  onClose: () => void
}
export interface PaginationProps {
  totalData: number
  itemsPerPage: number
  currentPage: number
  onPageChange: (page: number) => void
}
