import React from 'react'
import Film from '../Components/Film/Film'
import { useParams } from 'react-router-dom'

const Movie = () => {
  const {id} = useParams();
  return (
    <div className='Movie'> 
      <Film id={id}/>
    </div>
  )
}

export default Movie
