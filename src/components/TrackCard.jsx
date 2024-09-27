import React from 'react'

const TrackCard = () => {
  return (
    <div className='flex flex-wrap justify-center items-center gap-3 p-3  max-w-52 max-h-64 ml-3 mt-3'>
        <img src="./music.jpg" alt="image card" className='w-36 h-40 rounded-xl'/>
        <h3 className='font-semibold'>Comfort's Music</h3>
    </div>
  )
}

export default TrackCard