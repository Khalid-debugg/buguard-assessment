'use client'

import { WarningModalProps } from '@/types'

const WarningModal: React.FC<WarningModalProps> = ({
  title,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      <div className="relative mx-4 w-full max-w-md rounded-lg bg-white p-8 shadow-xl dark:bg-gray-800">
        <div className="mb-4 flex justify-center">
          <svg
            className="h-16 w-16 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h2 className="mb-6 text-center text-xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h2>
        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="rounded-md bg-gray-300 px-4 py-2 text-gray-800 transition-colors hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700"
            aria-label="Close warning modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default WarningModal
