import RecentBlogPosts from './components/RecentBlogPosts'

const AllPostsPage = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="w-full border-b border-t border-primary py-8 text-center text-[60px] font-bold sm:text-[150px] md:text-[220px] dark:border-primary-dark">
        THE BLOG
      </h1>
      <RecentBlogPosts />
    </div>
  )
}

export default AllPostsPage
