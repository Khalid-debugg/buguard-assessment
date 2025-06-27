interface SkeletonProps {
  className?: string
  width?: string
  height?: string
  rounded?: string
}

const Skeleton = ({
  className = '',
  width = 'w-full',
  height = 'h-4',
  rounded = 'rounded-md',
}: SkeletonProps) => {
  return (
    <div
      className={`${width} ${height} ${rounded} animate-pulse bg-gray-200 dark:bg-gray-700 ${className}`}
    />
  )
}

export const PostSkeleton = () => {
  return (
    <div className="w-full space-y-4 rounded-lg">
      <Skeleton width="w-full" height="h-48" rounded="rounded-lg" />
      <Skeleton width="w-3/4" height="h-6" rounded="rounded-md" />
      <div className="space-y-2">
        <Skeleton width="w-full" height="h-4" />
        <Skeleton width="w-5/6" height="h-4" />
        <Skeleton width="w-4/6" height="h-4" />
      </div>
      <div className="flex gap-2">
        <Skeleton width="w-16" height="h-6" rounded="rounded-lg" />
        <Skeleton width="w-20" height="h-6" rounded="rounded-lg" />
      </div>
      <div className="flex items-center gap-4">
        <Skeleton width="w-24" height="h-4" />
        <Skeleton width="w-20" height="h-4" />
      </div>
    </div>
  )
}

export default PostSkeleton
