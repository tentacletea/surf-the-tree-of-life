import React from 'react'
import { useState } from 'react'

const Species = ( { species } ) => {
    const [show, setShow] = useState(false);

    const showDetails = () => {
        setShow(true)
    }

  return (
        show ?  
        <div>
            <li onClick={showDetails}>Name: {species.name} Id: {species._id} Extinct: {species.extinct} Parent: {species.parent}</li>
        </div>
        : 
        <li onClick={showDetails}>Name: {species.name}</li>
  )
}

export default Species
