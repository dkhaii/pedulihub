import React from 'react'
import NewsCard from "../news/NewsCard";

const NewsList = () => {
  return (
    <div className='py-10 flex flex-wrap gap-10 justify-center'>
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
    </div>
  )
}

export default NewsList