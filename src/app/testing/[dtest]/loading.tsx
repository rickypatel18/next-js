import React from 'react'

const loading = () => {
  return (
    <div>
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      <p className="ml-4 text-lg text-red-700">Loading...</p>
    </div>
  )
}

export default loading
