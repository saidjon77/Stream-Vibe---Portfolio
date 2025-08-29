import React from 'react'
import Slider from '../Components/Ui/Slider/Slider'


const Movies = () => {
  return (
    <div className='Movies'>
      <Slider uniqueId={1} />
      <Slider uniqueId={2}/>
      <Slider uniqueId={3}/>
      <Slider uniqueId={4}/>
    </div>
  )
}

export default Movies
