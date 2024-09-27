import React from 'react'
import TrackCard from '../components/TrackCard'
import TrackListing from '../components/TrackListing'

const Home = () => {
  return (
    <section className='h-[90vh] overflow-scroll'>
    <TrackListing/>
     </section>
  )
}

export default Home