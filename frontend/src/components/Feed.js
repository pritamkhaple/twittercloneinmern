import React from 'react'
import CreatePost from './CreatePost'
import Tweet from './Tweet'
import { useSelector } from 'react-redux'

function Feed() {
  const {tweets} = useSelector(store=>store.tweet)
  return (
    <div className='w-[50%] border border-gray-200'>
        <div>
            <CreatePost></CreatePost>
            {
              tweets?.map((tweet)=>{
                return <Tweet key={tweet?._id} tweet={tweet}/>
              })
            }
            
        </div>
    </div>
  )
}

export default Feed
