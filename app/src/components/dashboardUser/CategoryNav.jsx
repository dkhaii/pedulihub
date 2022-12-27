import React from 'react'

const CategoryNav = ({ content }) => {
  return (
    <div className='py-2 px-4 text-gray-600 rounded-full bg-natural'>
        <h1>{content.title}</h1>
    </div>
  )
}

export default CategoryNav