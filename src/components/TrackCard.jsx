import React from 'react'

const TrackCard = ({image, title,description}) => {
  return (
    <div className='flex flex-col gap-2 rounded-xl justify-center max-w-[220px] max-h-[370px] mt-1 text-left hover:shadow hover:cursor-pointer mb-3 p-3'>
        <img src={image} alt={title} className='w-40 h-44 mx-auto rounded-xl'/>
        <div className='flex flex-col p-3'>

        <h3 className='font-semibold'>{title}</h3>
        <p className='text-muted'>{description}</p>
        </div>
    </div>
  )
}

export default TrackCard